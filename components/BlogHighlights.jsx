'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiBookOpen, FiCode, FiTrendingUp, FiDatabase, FiArrowRight, FiX, FiCalendar, FiClock, FiTag, FiShare2, FiArrowUp, FiCopy, FiExternalLink } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
// import { useState, useEffect, useRef } from 'react'
// import { SiMongodb, SiNextdotjs, SiJavascript, SiStripe, SiTypescript } from 'react-icons/si'

// export default function BlogHighlights() {
//   const [selectedArticle, setSelectedArticle] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [showScrollTop, setShowScrollTop] = useState(false)
//   const [copiedCode, setCopiedCode] = useState(null)
//   const modalRef = useRef(null)

//   const detailedArticles = [
//     {
//       id: 1,
//       title: "Optimizing MongoDB Aggregations: From 12s to 0.8s",
//       excerpt: "How we transformed a slow e-commerce analytics dashboard with strategic MongoDB optimizations",
//       icon: <FiDatabase className="text-blue-400" />,
//       date: "May 15, 2023",
//       readTime: "15 min read",
//       tags: ["MongoDB", "Performance", "Database", "Aggregation", "Optimization"],
//       featured: true,
//       author: "Yonas Fsaha",
//       authorRole: "Full-Stack Developer",
      
//       content: {
//         introduction: "In a high-traffic e-commerce platform processing 50,000+ daily transactions, our analytics dashboard was struggling with 12-second load times for customer purchase reports. After thorough profiling and optimization, we achieved sub-second response times while handling 10x more data. This case study details the step-by-step process we followed.",
        
//         sections: [
//           {
//             title: "Identifying Performance Bottlenecks",
//             content: "**Initial Performance Metrics:**\n• Average query time: 12.4 seconds\n• Memory usage per query: 1.2GB\n• Throughput: 8 queries/second\n• Error rate: 3.2%\n\n**Root Causes Identified:**\n1. Unindexed fields in $match stages\n2. Multiple unnecessary $lookup operations\n3. Large documents being passed through pipeline\n4. No query result caching\n5. Inefficient $group operations",
//             codeExample: `// PROBLEMATIC: Original slow aggregation
// db.orders.aggregate([
//   { $match: { 
//     date: { $gte: startDate },
//     status: { $in: ["completed", "shipped"] }
//   }},
//   { $lookup: { 
//     from: "customers", 
//     localField: "customerId", 
//     foreignField: "_id", 
//     as: "customer" 
//   }},
//   { $unwind: "$customer" },
//   { $lookup: { 
//     from: "products", 
//     localField: "productId", 
//     foreignField: "_id", 
//     as: "product" 
//   }},
//   { $unwind: "$product" },
//   { $lookup: { 
//     from: "categories", 
//     localField: "product.categoryId", 
//     foreignField: "_id", 
//     as: "category" 
//   }},
//   { $unwind: "$category" },
//   { $group: { 
//     _id: {
//       customerId: "$customer._id",
//       month: { $month: "$date" },
//       category: "$category.name"
//     },
//     totalSpent: { $sum: "$amount" },
//     averageOrder: { $avg: "$amount" },
//     orderCount: { $sum: 1 }
//   }},
//   { $sort: { totalSpent: -1 } },
//   { $limit: 100 }
// ])`
//           },
//           {
//             title: "Optimization Strategies Implemented",
//             content: "**Strategy 1: Index Optimization**\nCreated compound indexes on frequently queried fields:\n- { date: 1, status: 1, customerId: 1 }\n- { customerId: 1, date: -1 }\n- { productId: 1, categoryId: 1 }\n\n**Strategy 2: Pipeline Simplification**\n• Reduced from 15 to 8 stages\n• Combined multiple $lookups into single stage\n• Moved $match to beginning of pipeline\n• Used $facet for parallel operations\n\n**Strategy 3: Memory Management**\n• Added $limit early in pipeline\n• Used $project to reduce document size\n• Implemented $out for temporary collections",
//             codeExample: `// OPTIMIZED: Fast aggregation with all improvements
// db.orders.aggregate([
//   // Stage 1: Early filtering with indexed fields
//   { $match: { 
//     date: { 
//       $gte: startDate,
//       $lte: endDate 
//     },
//     status: "completed",
//     customerId: { $exists: true }
//   }},
  
//   // Stage 2: Project only needed fields
//   { $project: {
//     customerId: 1,
//     amount: 1,
//     productId: 1,
//     date: 1,
//     _id: 0
//   }},
  
//   // Stage 3: Single optimized lookup
//   { $lookup: {
//     from: "customers",
//     let: { cid: "$customerId" },
//     pipeline: [
//       { $match: { 
//         $expr: { $eq: ["$_id", "$$cid"] },
//         status: "active"
//       }},
//       { $project: { 
//         name: 1,
//         email: 1,
//         membershipLevel: 1 
//       }}
//     ],
//     as: "customer"
//   }},
  
//   // Stage 4: Filter and group efficiently
//   { $match: { "customer.0": { $exists: true } }},
//   { $unwind: "$customer" },
  
//   // Stage 5: Final aggregation
//   { $group: {
//     _id: {
//       customerId: "$customer._id",
//       yearMonth: { 
//         $dateToString: { 
//           format: "%Y-%m", 
//           date: "$date" 
//         }
//       }
//     },
//     totalSpent: { $sum: "$amount" },
//     orderCount: { $sum: 1 },
//     customerName: { $first: "$customer.name" }
//   }},
  
//   // Stage 6: Sort and limit
//   { $sort: { totalSpent: -1 } },
//   { $limit: 50 }
// ])`
//           },
//           {
//             title: "Caching Strategy Implementation",
//             content: "**Redis Caching Layer:**\n• Cache frequent query results for 5 minutes\n• Invalidate cache on data updates\n• Implement stale-while-revalidate pattern\n• Use Bloom filters for cache key management\n\n**Cache Implementation:**\n1. Generate unique cache key from query parameters\n2. Check Redis cache first\n3. If cache miss, run aggregation and store result\n4. Set appropriate TTL based on data volatility\n5. Implement cache warming for peak hours",
//             codeExample: `// Redis caching implementation for aggregations
// const getCachedAggregation = async (queryParams) => {
//   const cacheKey = \`aggregation:\${JSON.stringify(queryParams)}\`
  
//   // Try to get from cache first
//   const cached = await redis.get(cacheKey)
//   if (cached) {
//     return JSON.parse(cached)
//   }
  
//   // Cache miss - run aggregation
//   const result = await runAggregation(queryParams)
  
//   // Determine TTL based on data characteristics
//   const ttl = queryParams.includeToday ? 300 : 3600 // 5 min or 1 hour
  
//   // Store in cache
//   await redis.setex(cacheKey, ttl, JSON.stringify(result))
  
//   return result
// }

// // Cache warming for peak hours
// const warmCaches = async () => {
//   const commonQueries = [
//     { type: 'daily_sales', date: 'today' },
//     { type: 'top_customers', limit: 50 },
//     { type: 'product_performance', days: 7 }
//   ]
  
//   for (const query of commonQueries) {
//     await getCachedAggregation(query)
//   }
// }`
//           }
//         ],
        
//         conclusion: "Through systematic optimization, we achieved:\n• **Query time**: 12.4s → 0.8s (94% improvement)\n• **Memory usage**: 1.2GB → 120MB (90% reduction)\n• **Throughput**: 8 → 120 queries/second\n• **Error rate**: 3.2% → 0.1%\n\n**Key Lessons:** Always profile before optimizing, create appropriate indexes, reduce pipeline complexity, and implement caching strategically.",
        
//         keyTakeaways: [
//           "Compound indexes on frequently filtered fields are essential",
//           "Reduce $lookup operations by denormalizing critical data",
//           "Implement caching at multiple levels (Redis, CDN, database)",
//           "Monitor aggregation memory usage with $limit and $project",
//           "Use $facet for parallel processing of independent operations"
//         ]
//       }
//     },
//     {
//       id: 2,
//       title: "Building Enterprise Microservices with Next.js 14",
//       excerpt: "A comprehensive guide to scalable architecture with Next.js API routes and Docker",
//       icon: <FaReact className="text-blue-400" />,
//       date: "March 22, 2023",
//       readTime: "20 min read",
//       tags: ["Next.js", "Microservices", "Docker", "Kubernetes", "Architecture"],
//       featured: true,
//       author: "Yonas Fsaha",
//       authorRole: "Solutions Architect",
      
//       content: {
//         introduction: "Modern enterprise applications demand architectures that can scale horizontally while maintaining development velocity. After implementing microservices for multiple Fortune 500 companies, I've distilled the most effective patterns using Next.js 14 as an API gateway. This guide covers everything from local development to production deployment.",
        
//         sections: [
//           {
//             title: "Architecture Design Patterns",
//             content: "**Hybrid Microservices Architecture:**\n• **API Gateway**: Next.js 14 App Router API routes\n• **Core Services**: User, Product, Order, Payment (Node.js + Express)\n• **Background Workers**: Bull/Agenda for async tasks\n• **Event Bus**: Redis Pub/Sub for service communication\n• **Service Mesh**: Istio for production deployments\n\n**Directory Structure:**\n```\napps/\n├── gateway/          # Next.js 14 API Gateway\n├── user-service/     # User management\n├── product-service/  # Product catalog\n├── order-service/    # Order processing\n└── payment-service/  # Payment handling\n```",
//             codeExample: `// Next.js 14 API Gateway - Dynamic routing
// // apps/gateway/app/api/[...service]/route.ts
// import { NextRequest, NextResponse } from 'next/server'

// const SERVICES = {
//   users: process.env.USER_SERVICE_URL,
//   products: process.env.PRODUCT_SERVICE_URL,
//   orders: process.env.ORDER_SERVICE_URL,
//   payments: process.env.PAYMENT_SERVICE_URL
// }

// export async function POST(
//   request: NextRequest,
//   { params }: { params: { service: string[] } }
// ) {
//   const servicePath = params.service.join('/')
//   const serviceName = params.service[0] as keyof typeof SERVICES
  
//   if (!SERVICES[serviceName]) {
//     return NextResponse.json(
//       { error: 'Service not found' },
//       { status: 404 }
//     )
//   }
  
//   // Authentication & authorization
//   const session = await getServerSession(request)
//   if (!session) {
//     return NextResponse.json(
//       { error: 'Unauthorized' },
//       { status: 401 }
//     )
//   }
  
//   // Forward request to appropriate service
//   const serviceUrl = \`\${SERVICES[serviceName]}/\${servicePath}\`
//   const response = await fetch(serviceUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-User-Id': session.user.id,
//       'X-Service-Request': 'true'
//     },
//     body: JSON.stringify(await request.json())
//   })
  
//   return NextResponse.json(await response.json())
// }`
//           },
//           {
//             title: "Service Communication & Resilience",
//             content: "**Communication Patterns:**\n1. **Synchronous**: REST/GraphQL for immediate responses\n2. **Asynchronous**: Message queues (RabbitMQ/Kafka)\n3. **Event-Driven**: WebSockets for real-time updates\n4. **CQRS**: Separate read/write models for complex domains\n\n**Resilience Patterns:**\n• **Circuit Breaker**: Prevent cascade failures\n• **Retry Logic**: Exponential backoff with jitter\n• **Bulkhead**: Isolate service failures\n• **Timeout Management**: Configurable timeouts per service",
//             codeExample: `// Service client with resilience patterns
// class ServiceClient {
//   private circuitBreaker: CircuitBreaker
//   private retryConfig: RetryConfig
  
//   constructor(private serviceUrl: string) {
//     this.circuitBreaker = new CircuitBreaker({
//       timeout: 5000,
//       errorThresholdPercentage: 50,
//       resetTimeout: 30000
//     })
    
//     this.retryConfig = {
//       retries: 3,
//       factor: 2,
//       minTimeout: 1000,
//       maxTimeout: 10000
//     }
//   }
  
//   async request(endpoint: string, data: any) {
//     return this.circuitBreaker.fire(async () => {
//       return retry(async (bail) => {
//         try {
//           const response = await fetch(\`\${this.serviceUrl}/\${endpoint}\`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data),
//             signal: AbortSignal.timeout(3000)
//           })
          
//           if (!response.ok) {
//             if (response.status >= 500) {
//               throw new Error(\`Service error: \${response.status}\`)
//             }
//             bail(new Error(\`Client error: \${response.status}\`))
//           }
          
//           return await response.json()
//         } catch (error) {
//           if (error.name === 'AbortError') {
//             throw new Error('Request timeout')
//           }
//           throw error
//         }
//       }, this.retryConfig)
//     })
//   }
// }

// // Usage
// const userService = new ServiceClient(process.env.USER_SERVICE_URL)
// const user = await userService.request('users/create', userData)`
//           },
//           {
//             title: "Docker & Kubernetes Deployment",
//             content: "**Docker Multi-Stage Builds:**\n• Build stage: Install dependencies and build\n• Runtime stage: Minimal image with only necessary files\n• Layer caching for faster builds\n\n**Kubernetes Configuration:**\n• Horizontal Pod Autoscaler (HPA)\n• Resource limits and requests\n• Liveness and readiness probes\n• ConfigMaps and Secrets\n• Service mesh with Istio\n\n**Monitoring Stack:**\n• Prometheus for metrics\n• Grafana for dashboards\n• Loki for logs\n• Jaeger for distributed tracing",
//             codeExample: `# Dockerfile for Node.js microservice
// FROM node:18-alpine AS builder
// WORKDIR /app
// COPY package*.json ./
// RUN npm ci --only=production
// COPY . .
// RUN npm run build

// FROM node:18-alpine AS runner
// WORKDIR /app
// RUN addgroup -g 1001 -S nodejs
// RUN adduser -S nodejs -u 1001
// USER nodejs

// COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
// COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
// COPY --from=builder --chown=nodejs:nodejs /app/package.json ./package.json

// EXPOSE 3000
// CMD ["node", "dist/server.js"]

// # Kubernetes Deployment
// apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: user-service
//   labels:
//     app: user-service
// spec:
//   replicas: 3
//   selector:
//     matchLabels:
//       app: user-service
//   template:
//     metadata:
//       labels:
//         app: user-service
//     spec:
//       containers:
//       - name: user-service
//         image: user-service:latest
//         ports:
//         - containerPort: 3000
//         resources:
//           requests:
//             memory: "256Mi"
//             cpu: "250m"
//           limits:
//             memory: "512Mi"
//             cpu: "500m"
//         livenessProbe:
//           httpGet:
//             path: /health
//             port: 3000
//           initialDelaySeconds: 30
//           periodSeconds: 10
//         readinessProbe:
//           httpGet:
//             path: /ready
//             port: 3000
//           initialDelaySeconds: 5
//           periodSeconds: 5`
//           }
//         ],
        
//         conclusion: "Building microservices with Next.js provides the perfect balance between developer experience and production readiness. Key success factors include proper service boundaries, comprehensive monitoring, automated deployments, and a focus on developer tooling. Start with a monolith, extract services as needed, and always prioritize observability.",
        
//         keyTakeaways: [
//           "Use Next.js API routes as lightweight API gateways with built-in optimizations",
//           "Implement service discovery and circuit breakers from day one",
//           "Use Docker multi-stage builds for optimal image sizes",
//           "Implement comprehensive monitoring before scaling to production",
//           "Design services around business capabilities, not technical layers"
//         ]
//       }
//     },
//     {
//       id: 3,
//       title: "Advanced JWT Authentication Patterns in MERN",
//       excerpt: "Production-ready security patterns for modern web applications",
//       icon: <FiTrendingUp className="text-blue-400" />,
//       date: "January 10, 2023",
//       readTime: "18 min read",
//       tags: ["Security", "Node.js", "JWT", "Authentication", "MERN"],
//       featured: true,
//       author: "Yonas Fsaha",
//       authorRole: "Security Specialist",
      
//       content: {
//         introduction: "Authentication security is non-negotiable in today's threat landscape. After securing authentication for applications serving millions of users, I've compiled advanced JWT patterns that go beyond basic tutorials. This guide covers everything from token generation to advanced threat mitigation strategies.",
        
//         sections: [
//           {
//             title: "Advanced Token Architecture",
//             content: "**Multi-Token Strategy:**\n• **Access Token**: Short-lived (15-30 min), stored in memory\n• **Refresh Token**: Long-lived (7-30 days), HTTP-only cookie\n• **ID Token**: User information for client-side\n• **Device Token**: Unique per device for session management\n\n**Security Enhancements:**\n• Asymmetric encryption (RS256/ES256)\n• Token binding to device fingerprints\n• Proof-of-possession tokens\n• OAuth 2.1 compliance",
//             codeExample: `// Advanced token generation with multiple claims
// const generateTokens = async (userId, deviceInfo) => {
//   const deviceFingerprint = createDeviceFingerprint(deviceInfo)
  
//   // Access Token (short-lived)
//   const accessToken = jwt.sign(
//     {
//       sub: userId,
//       aud: 'api',
//       iss: 'your-app',
//       iat: Math.floor(Date.now() / 1000),
//       exp: Math.floor(Date.now() / 1000) + (15 * 60), // 15 minutes
//       jti: uuidv4(),
//       scope: 'read write',
//       device: deviceFingerprint
//     },
//     process.env.JWT_PRIVATE_KEY,
//     { algorithm: 'RS256' }
//   )
  
//   // Refresh Token (long-lived, server-side only)
//   const refreshToken = jwt.sign(
//     {
//       sub: userId,
//       jti: uuidv4(),
//       device: deviceFingerprint,
//       type: 'refresh'
//     },
//     process.env.JWT_REFRESH_SECRET,
//     { expiresIn: '30d', algorithm: 'HS256' }
//   )
  
//   // Store refresh token with enhanced metadata
//   await RefreshToken.create({
//     userId,
//     token: refreshToken,
//     jti: refreshToken.jti,
//     deviceFingerprint,
//     userAgent: deviceInfo.userAgent,
//     ipAddress: deviceInfo.ip,
//     lastUsed: new Date(),
//     expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//     isRevoked: false
//   })
  
//   return { accessToken, refreshToken }
// }

// // Device fingerprint creation
// const createDeviceFingerprint = (deviceInfo) => {
//   const data = \`\${deviceInfo.userAgent}|\${deviceInfo.ip}|$\{deviceInfo.acceptLanguage}\`
//   return crypto.createHash('sha256').update(data).digest('hex')
// }`
//           },
//           {
//             title: "Advanced Security Middleware",
//             content: "**Defense in Depth Layers:**\n1. **Rate Limiting**: Per IP, per user, per endpoint\n2. **Token Validation**: Multiple validation checks\n3. **Device Binding**: Tokens bound to specific devices\n4. **Anomaly Detection**: Machine learning for suspicious patterns\n5. **Session Management**: Comprehensive session tracking\n\n**Middleware Chain:**\n• Rate Limiter → IP Geolocation → Token Validator → Device Check → Anomaly Detection → Request Handler",
//             codeExample: `// Comprehensive authentication middleware
// const authenticate = async (req, res, next) => {
//   try {
//     // 1. Extract token
//     const authHeader = req.headers.authorization
//     if (!authHeader?.startsWith('Bearer ')) {
//       return res.status(401).json({ error: 'No token provided' })
//     }
//     const token = authHeader.split(' ')[1]
    
//     // 2. Check blacklist
//     const isBlacklisted = await TokenBlacklist.exists({ 
//       tokenHash: hashToken(token),
//       expiresAt: { $gt: new Date() }
//     })
//     if (isBlacklisted) {
//       await logSuspiciousActivity(req, 'blacklisted_token')
//       return res.status(401).json({ error: 'Token revoked' })
//     }
    
//     // 3. Verify token signature and claims
//     const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY, {
//       algorithms: ['RS256'],
//       issuer: 'your-app',
//       audience: 'api'
//     })
    
//     // 4. Validate device binding
//     const deviceFingerprint = createDeviceFingerprint({
//       userAgent: req.headers['user-agent'],
//       ip: req.ip,
//       acceptLanguage: req.headers['accept-language']
//     })
    
//     if (decoded.device !== deviceFingerprint) {
//       await logSuspiciousActivity(req, 'device_mismatch')
//       return res.status(401).json({ error: 'Device mismatch' })
//     }
    
//     // 5. Get fresh user data
//     const user = await User.findById(decoded.sub)
//       .select('+loginAttempts +lastLogin +isActive +mfaEnabled')
//       .lean()
    
//     if (!user || !user.isActive) {
//       return res.status(401).json({ error: 'User not found or inactive' })
//     }
    
//     // 6. Check for suspicious activity
//     if (user.loginAttempts > 5) {
//       await lockAccount(user._id)
//       return res.status(423).json({ error: 'Account locked' })
//     }
    
//     // 7. Attach user and token info to request
//     req.user = user
//     req.token = decoded
    
//     // 8. Update last activity
//     await User.findByIdAndUpdate(user._id, {
//       lastActive: new Date(),
//       $inc: { loginCount: 1 }
//     })
    
//     next()
//   } catch (error) {
//     if (error.name === 'TokenExpiredError') {
//       return res.status(401).json({ 
//         error: 'Token expired',
//         code: 'TOKEN_EXPIRED'
//       })
//     }
//     if (error.name === 'JsonWebTokenError') {
//       await logSuspiciousActivity(req, 'invalid_token')
//       return res.status(401).json({ error: 'Invalid token' })
//     }
    
//     console.error('Auth error:', error)
//     return res.status(500).json({ error: 'Authentication failed' })
//   }
// }`
//           },
//           {
//             title: "Production Security Headers & Monitoring",
//             content: "**Essential Security Headers:**\n```\nContent-Security-Policy: default-src 'self'\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff\nReferrer-Policy: strict-origin-when-cross-origin\nPermissions-Policy: geolocation=(), microphone=()\n```\n\n**Security Monitoring:**\n• Real-time threat detection\n• Automated anomaly alerts\n• Session analytics\n• Failed login tracking\n• IP reputation checking",
//             codeExample: `// Complete security middleware setup
// const helmet = require('helmet')
// const rateLimit = require('express-rate-limit')

// // Security headers
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["'self'"],
//       styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
//       scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//       fontSrc: ["'self'", "https://fonts.gstatic.com"],
//       imgSrc: ["'self'", "data:", "https:"],
//       connectSrc: ["'self'", "https://api.example.com"],
//       frameSrc: ["'none'"],
//       objectSrc: ["'none'"]
//     }
//   },
//   crossOriginEmbedderPolicy: false,
//   crossOriginOpenerPolicy: { policy: "same-origin" },
//   crossOriginResourcePolicy: { policy: "same-origin" },
//   dnsPrefetchControl: { allow: false },
//   frameguard: { action: 'deny' },
//   hidePoweredBy: true,
//   hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
//   ieNoOpen: true,
//   noSniff: true,
//   originAgentCluster: true,
//   permittedCrossDomainPolicies: { permittedPolicies: 'none' },
//   referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
//   xssFilter: true
// }))

// // Rate limiting per endpoint
// const authLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5, // 5 requests per window
//   message: 'Too many login attempts, please try again later',
//   standardHeaders: true,
//   legacyHeaders: false,
//   skipSuccessfulRequests: true
// })

// app.use('/api/auth/login', authLimiter)
// app.use('/api/auth/register', authLimiter)

// // CORS configuration
// app.use(cors({
//   origin: process.env.ALLOWED_ORIGINS.split(','),
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   exposedHeaders: ['X-RateLimit-Limit', 'X-RateLimit-Remaining']
// }))`
//           }
//         ],
        
//         conclusion: "JWT authentication requires a multi-layered security approach. By implementing device binding, comprehensive monitoring, proper token management, and defense in depth, you can significantly reduce security risks. Remember: security is not a feature but a fundamental requirement that evolves with your application.",
        
//         keyTakeaways: [
//           "Implement device binding to prevent token theft and reuse",
//           "Use asymmetric encryption (RS256) for access tokens",
//           "Implement comprehensive rate limiting per endpoint",
//           "Monitor and log all authentication attempts",
//           "Regularly rotate secrets and update security policies"
//         ]
//       }
//     }
//   ]

//   const openArticle = (article) => {
//     setSelectedArticle(article)
//     setIsModalOpen(true)
//     document.body.style.overflow = 'hidden'
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//     setShowScrollTop(false)
//     setTimeout(() => {
//       setSelectedArticle(null)
//     }, 300)
//     document.body.style.overflow = 'auto'
//   }

//   const handleScroll = () => {
//     if (modalRef.current) {
//       const { scrollTop } = modalRef.current
//       setShowScrollTop(scrollTop > 300)
//     }
//   }

//   const scrollToTop = () => {
//     if (modalRef.current) {
//       modalRef.current.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//   }

//   const copyCode = async (code, index) => {
//     try {
//       await navigator.clipboard.writeText(code)
//       setCopiedCode(index)
//       setTimeout(() => setCopiedCode(null), 2000)
//     } catch (err) {
//       console.error('Failed to copy:', err)
//     }
//   }

//   const shareOnX = (article) => {
//     const text = encodeURIComponent(`Check out this article: ${article.title} by @YonasFsaha`)
//     const url = encodeURIComponent(window.location.href)
//     window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
//   }

//   const shareOnLinkedIn = (article) => {
//     const url = encodeURIComponent(window.location.href)
//     const title = encodeURIComponent(article.title)
//     const summary = encodeURIComponent(article.excerpt)
//     window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank')
//   }

//   const shareArticle = (article) => {
//     if (navigator.share) {
//       navigator.share({
//         title: article.title,
//         text: article.excerpt,
//         url: window.location.href,
//       }).catch(console.error)
//     } else {
//       // Fallback: Copy link to clipboard
//       navigator.clipboard.writeText(window.location.href)
//         .then(() => alert('Link copied to clipboard!'))
//         .catch(console.error)
//     }
//   }

//   // Handle ESC key to close modal
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape' && isModalOpen) {
//         closeModal()
//       }
//     }
//     window.addEventListener('keydown', handleEsc)
//     return () => window.removeEventListener('keydown', handleEsc)
//   }, [isModalOpen])

//   return (
//     <>
//       <section id="blog" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
//         {/* Enhanced Background */}
//         <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-sky-400/10" />
//           <motion.div
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           />
//           <motion.div
//             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl"
//             animate={{ scale: [1.1, 1, 1.1] }}
//             transition={{ duration: 8, repeat: Infinity, delay: 2 }}
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           {/* Enhanced Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16 md:mb-24"
//           >
//             <div className="inline-flex items-center gap-4 mb-8">
//               <div className="relative">
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-sky-400/20 border border-blue-400/30 flex items-center justify-center">
//                   <FiBookOpen className="text-blue-400 text-2xl" />
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center">
//                   <span className="text-emerald-400 text-xs font-bold">3</span>
//                 </div>
//               </div>
//               <div className="text-left">
//                 <div className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-1">Technical Deep Dives</div>
//                 <div className="text-xs text-[#94a3b8]">Latest insights & case studies</div>
//               </div>
//             </div>
            
//             <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
//               <span className="text-white">In-Depth </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500">Technical Articles</span>
//             </h2>
            
//             <p className="text-xl md:text-2xl text-[#9ca3af] max-w-3xl mx-auto font-mono leading-relaxed">
//               Comprehensive guides and case studies from real production systems
//             </p>
//           </motion.div>

//           {/* Enhanced Articles Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//             {detailedArticles.map((article, index) => (
//               <motion.div
//                 key={article.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.15, duration: 0.7 }}
//                 whileHover={{ y: -12 }}
//                 className="group cursor-pointer"
//                 onClick={() => openArticle(article)}
//               >
//                 <div className="h-full bg-gradient-to-b from-sky-400/5 via-blue-400/5 to-transparent rounded-3xl border-2 border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-400/20">
//                   {/* Featured badge with glow */}
//                   {article.featured && (
//                     <div className="absolute top-6 left-6 z-10">
//                       <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-blue-400/20 to-sky-400/20 text-blue-400 border border-blue-400/30 backdrop-blur-sm">
//                         <span className="flex items-center gap-2">
//                           <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
//                           Featured Article
//                         </span>
//                       </span>
//                     </div>
//                   )}
                  
//                   {/* Reading time badge */}
//                   <div className="absolute top-6 right-6">
//                     <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-[#cbd5e1] border border-white/10">
//                       {article.readTime}
//                     </span>
//                   </div>

//                   <div className="p-8 md:p-10">
//                     {/* Icon */}
//                     <div className="mb-8">
//                       <motion.div
//                         whileHover={{ rotate: 15, scale: 1.1 }}
//                         className="p-4 rounded-2xl bg-gradient-to-br from-blue-400/10 to-sky-400/10 border border-blue-400/20 inline-block group-hover:border-blue-400/40 transition-colors"
//                       >
//                         {article.icon}
//                       </motion.div>
//                     </div>
                    
//                     {/* Date */}
//                     <div className="flex items-center gap-2 text-sm text-[#94a3b8] mb-4">
//                       <FiCalendar size={14} />
//                       <span>{article.date}</span>
//                     </div>
                    
//                     {/* Title */}
//                     <h3 className="text-2xl md:text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-sky-400 transition-all duration-300 leading-tight">
//                       {article.title}
//                     </h3>
                    
//                     {/* Excerpt */}
//                     <p className="text-[#94a3b8] mb-8 line-clamp-3 text-lg leading-relaxed">
//                       {article.excerpt}
//                     </p>
                    
//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-8">
//                       {article.tags.map((tag, i) => (
//                         <span 
//                           key={i} 
//                           className="px-4 py-2 text-sm font-medium rounded-full bg-white/5 text-[#cbd5e1] border border-white/10 group-hover:border-blue-400/40 group-hover:text-blue-400 transition-all duration-300"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
                    
//                     {/* Author */}
//                     <div className="flex items-center gap-3 pt-6 border-t border-white/10">
//                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/20 to-sky-400/20 border border-blue-400/30 flex items-center justify-center">
//                         <span className="text-blue-400 font-bold">YF</span>
//                       </div>
//                       <div>
//                         <div className="font-medium text-white">{article.author}</div>
//                         <div className="text-sm text-[#94a3b8]">{article.authorRole}</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Read button */}
//                   <div className="px-8 py-6 border-t-2 border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-blue-400/10 transition-all">
//                     <div className="flex items-center justify-between">
//                       <button className="flex items-center gap-3 text-blue-400 font-semibold text-lg group-hover:text-white transition-colors duration-300">
//                         <span>Read Full Case Study</span>
//                         <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
//                       </button>
//                       <div className="text-sm text-[#94a3b8]">
//                         Click to explore
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Enhanced CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mt-20 text-center"
//           >
//             <div className="inline-flex flex-col items-center gap-6">
//               <p className="text-xl text-[#9ca3b8] font-mono">
//                 More articles coming weekly. Subscribe for updates.
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative px-10 py-5 bg-gradient-to-r from-blue-400/10 to-sky-400/10 border-2 border-blue-400/20 rounded-2xl font-medium text-white overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center gap-4 text-lg">
//                   <FiBookOpen className="text-blue-400" size={24} />
//                   Browse All Articles
//                   <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
//                 </span>
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20"
//                   initial={{ x: '-100%' }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.4 }}
//                 />
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Article Modal */}
//       <AnimatePresence>
//         {isModalOpen && selectedArticle && (
//           <div className="fixed inset-0 z-50">
//             {/* Enhanced Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//               className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/20 to-black/90 backdrop-blur-xl"
//             />
            
//             {/* Fixed Action Buttons */}
//             <div className="fixed right-6 top-6 z-50 flex flex-col gap-3">
//               {/* Close Button */}
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 onClick={closeModal}
//                 className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:rotate-90 group"
//                 whileHover={{ y: -2 }}
//               >
//                 <FiX size={28} className="group-hover:rotate-90 transition-transform" />
//               </motion.button>

//               {/* Share Button */}
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 onClick={() => shareArticle(selectedArticle)}
//                 className="w-14 h-14 rounded-2xl bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/20 backdrop-blur-xl flex items-center justify-center text-blue-400 transition-all duration-300 hover:scale-110 group"
//                 whileHover={{ y: -2 }}
//               >
//                 <FiShare2 size={24} />
//               </motion.button>

//               {/* X (Twitter) Share */}
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 onClick={() => shareOnX(selectedArticle)}
//                 className="w-14 h-14 rounded-2xl bg-black/30 hover:bg-black/40 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
//                 whileHover={{ y: -2 }}
//               >
//                 <FaXTwitter size={22} />
//               </motion.button>

//               {/* LinkedIn Share */}
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 onClick={() => shareOnLinkedIn(selectedArticle)}
//                 className="w-14 h-14 rounded-2xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 backdrop-blur-xl flex items-center justify-center text-blue-400 transition-all duration-300 hover:scale-110 group"
//                 whileHover={{ y: -2 }}
//               >
//                 <FaLinkedin size={24} />
//               </motion.button>
//             </div>

//             {/* Scroll to Top Button */}
//             {showScrollTop && (
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 onClick={scrollToTop}
//                 className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400/20 to-sky-400/20 hover:from-blue-400/30 hover:to-sky-400/30 border border-blue-400/30 backdrop-blur-xl flex items-center justify-center text-blue-400 transition-all duration-300 hover:scale-110"
//                 whileHover={{ y: -5 }}
//               >
//                 <FiArrowUp size={22} />
//               </motion.button>
//             )}

//             {/* Modal Content */}
//             <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, y: 20 }}
//                 transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                 className="relative w-full max-w-5xl h-[95vh] bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0a0f1d] rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl"
//               >
//                 {/* Scrollable Content */}
//                 <div 
//                   ref={modalRef}
//                   onScroll={handleScroll}
//                   className="h-full overflow-y-auto scroll-smooth"
//                 >
//                   {/* Enhanced Article Header */}
//                   <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/95 to-transparent pb-6 backdrop-blur-sm">
//                     <div className="p-10">
//                       <div className="flex items-center justify-between mb-8">
//                         <div className="flex items-center gap-4">
//                           <motion.div
//                             whileHover={{ rotate: 15, scale: 1.1 }}
//                             className="p-3 rounded-2xl bg-gradient-to-br from-blue-400/10 to-sky-400/10 border border-blue-400/20"
//                           >
//                             {selectedArticle.icon}
//                           </motion.div>
//                           <div>
//                             <div className="text-sm text-blue-400 font-mono uppercase tracking-wider">
//                               {selectedArticle.authorRole}
//                             </div>
//                             <div className="text-xs text-[#94a3b8] flex items-center gap-2">
//                               <FiCalendar size={12} />
//                               {selectedArticle.date}
//                               <span className="mx-2">•</span>
//                               <FiClock size={12} />
//                               {selectedArticle.readTime}
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="hidden md:flex items-center gap-3">
//                           <span className="px-4 py-2 text-sm rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
//                             Detailed Case Study
//                           </span>
//                         </div>
//                       </div>
                      
//                       <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//                         {selectedArticle.title}
//                       </h1>
                      
//                       <p className="text-xl text-[#cbd5e1] mb-8 leading-relaxed max-w-4xl">
//                         {selectedArticle.excerpt}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-3">
//                         {selectedArticle.tags.map((tag, i) => (
//                           <span 
//                             key={i} 
//                             className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-400/10 to-sky-400/10 text-blue-400 border border-blue-400/20 hover:border-blue-400/40 transition-colors"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Enhanced Article Body */}
//                   <div className="p-10 pt-0">
//                     <div className="max-w-4xl mx-auto">
//                       {/* Introduction */}
//                       <div className="mb-16">
//                         <div className="flex items-center gap-4 mb-8">
//                           <div className="w-3 h-12 bg-gradient-to-b from-blue-400 to-sky-400 rounded-full" />
//                           <h2 className="text-3xl font-bold text-white">Introduction</h2>
//                         </div>
//                         <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-400/5 via-transparent to-sky-400/5 border-2 border-blue-400/10">
//                           <p className="text-[#cbd5e1] leading-relaxed text-xl">
//                             {selectedArticle.content.introduction}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Sections */}
//                       {selectedArticle.content.sections.map((section, index) => (
//                         <div key={index} className="mb-16">
//                           <div className="flex items-center gap-4 mb-8">
//                             <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/10 to-sky-400/10 border-2 border-blue-400/20 flex items-center justify-center">
//                               <span className="text-blue-400 font-bold text-xl">{index + 1}</span>
//                             </div>
//                             <h3 className="text-2xl font-bold text-white">{section.title}</h3>
//                           </div>
                          
//                           {/* Content with formatting */}
//                           <div className="mb-10 space-y-6">
//                             {section.content.split('\n').map((line, i) => {
//                               if (line.startsWith('**')) {
//                                 return (
//                                   <p key={i} className="text-[#cbd5e1] leading-relaxed text-lg font-semibold">
//                                     {line.replace(/\*\*/g, '')}
//                                   </p>
//                                 )
//                               } else if (line.startsWith('•')) {
//                                 return (
//                                   <div key={i} className="flex items-start gap-4">
//                                     <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0" />
//                                     <span className="text-[#cbd5e1] text-lg">{line.substring(1).trim()}</span>
//                                   </div>
//                                 )
//                               } else {
//                                 return (
//                                   <p key={i} className="text-[#cbd5e1] leading-relaxed text-lg">
//                                     {line}
//                                   </p>
//                                 )
//                               }
//                             })}
//                           </div>

//                           {/* Code Block */}
//                           {section.codeExample && (
//                             <div className="relative mb-10 group">
//                               <div className="absolute -top-5 right-4 flex items-center gap-3">
//                                 <motion.button
//                                   onClick={() => copyCode(section.codeExample, index)}
//                                   whileHover={{ scale: 1.1 }}
//                                   whileTap={{ scale: 0.9 }}
//                                   className="px-4 py-2 text-sm rounded-xl bg-[#1e293b] text-white border border-white/10 hover:border-blue-400/40 flex items-center gap-2 transition-colors"
//                                 >
//                                   <FiCopy size={14} />
//                                   {copiedCode === index ? 'Copied!' : 'Copy Code'}
//                                 </motion.button>
//                                 <button className="px-4 py-2 text-sm rounded-xl bg-[#1e293b] text-white border border-white/10 hover:border-blue-400/40 flex items-center gap-2 transition-colors">
//                                   <FiExternalLink size={14} />
//                                   Run
//                                 </button>
//                               </div>
//                               <pre className="bg-[#1e293b] rounded-2xl p-8 overflow-x-auto text-sm md:text-base text-[#cbd5e1] border-2 border-white/10 group-hover:border-blue-400/30 transition-colors">
//                                 <code>{section.codeExample}</code>
//                               </pre>
//                               <div className="absolute bottom-4 left-4 text-xs text-[#94a3b8] font-mono">
//                                 {section.codeExample.includes('//') ? 'JavaScript' : 'Code Example'}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))}

//                       {/* Conclusion */}
//                       <div className="mb-16">
//                         <div className="flex items-center gap-4 mb-8">
//                           <div className="w-3 h-12 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full" />
//                           <h2 className="text-3xl font-bold text-white">Conclusion</h2>
//                         </div>
//                         <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-400/5 via-transparent to-green-400/5 border-2 border-emerald-400/10">
//                           <div className="space-y-6">
//                             {selectedArticle.content.conclusion.split('\n').map((line, i) => (
//                               <p key={i} className="text-[#cbd5e1] leading-relaxed text-xl">
//                                 {line}
//                               </p>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Key Takeaways */}
//                       <div className="mb-16">
//                         <div className="flex items-center gap-4 mb-8">
//                           <FiTag className="text-blue-400 text-2xl" />
//                           <h2 className="text-3xl font-bold text-white">Key Takeaways</h2>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           {selectedArticle.content.keyTakeaways.map((takeaway, index) => (
//                             <motion.div
//                               key={index}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: index * 0.1 }}
//                               className="p-6 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 border border-white/10 hover:border-blue-400/30 transition-colors"
//                             >
//                               <div className="flex items-start gap-4">
//                                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/20 to-sky-400/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
//                                   <span className="text-blue-400 text-sm font-bold">{index + 1}</span>
//                                 </div>
//                                 <span className="text-[#cbd5e1] text-lg">{takeaway}</span>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Enhanced Author Bio */}
//                       <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-400/5 via-sky-400/5 to-transparent border-2 border-white/10">
//                         <div className="flex flex-col md:flex-row items-center gap-8">
//                           <div className="relative">
//                             <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-400 to-sky-400 flex items-center justify-center">
//                               <span className="text-white font-bold text-3xl">YF</span>
//                             </div>
//                             <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 border-4 border-[#0f172a] flex items-center justify-center">
//                               <FiCode size={16} className="text-white" />
//                             </div>
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="text-2xl font-bold text-white mb-2">Yonas Fsaha</h4>
//                             <p className="text-lg text-[#94a3b8] mb-4">Full-Stack Developer & Solutions Architect</p>
//                             <p className="text-[#cbd5e1] leading-relaxed mb-6">
//                               With over 4 years of experience building scalable applications, I specialize in turning complex technical challenges into elegant, maintainable solutions. I'm passionate about sharing practical knowledge that helps developers build better software.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => window.open('https://x.com/YonasFsaha', '_blank')}
//                                 className="flex items-center gap-3 px-5 py-3 rounded-xl bg-black/30 hover:bg-black/40 text-white border border-white/10 transition-colors"
//                               >
//                                 <FaXTwitter size={18} />
//                                 Follow on X
//                               </motion.button>
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => window.open('https://linkedin.com/in/yonas-fsaha', '_blank')}
//                                 className="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-600/30 transition-colors"
//                               >
//                                 <FaLinkedin size={18} />
//                                 Connect on LinkedIn
//                               </motion.button>
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => window.open('mailto:contact@yonasfsaha.com', '_blank')}
//                                 className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
//                               >
//                                 <FiExternalLink size={18} />
//                                 Contact for Consultation
//                               </motion.button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }






















'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBookOpen, FiCode, FiTrendingUp, FiDatabase, FiArrowRight, FiX, FiCalendar, FiClock, FiTag, FiShare2, FiArrowUp, FiCopy } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { SiMongodb, SiNextdotjs, SiJavascript } from 'react-icons/si'

export default function BlogHighlights() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [copiedCode, setCopiedCode] = useState(null)
  const modalRef = useRef(null)

  const detailedArticles = [
    {
      id: 1,
      title: "Optimizing MongoDB Aggregations for Production",
      excerpt: "How I reduced query times by 300% in a production e-commerce application",
      icon: <FiDatabase className="text-blue-400" />,
      date: "May 15, 2023",
      readTime: "8 min read",
      tags: ["MongoDB", "Performance", "Database", "Optimization"],
      featured: true,
      author: "Yonas Fsaha",
      authorRole: "Full-Stack Developer",
      
      content: {
        introduction: "In a recent e-commerce project handling over 50,000 daily transactions, we faced significant performance bottlenecks with complex aggregation queries. The platform's analytics dashboard was taking 12+ seconds to load customer purchase reports. Through systematic optimization, we reduced this to under 4 seconds.",
        
        sections: [
          {
            title: "The Challenge",
            content: "The application needed to aggregate purchase data across multiple collections: orders, customers, products, and reviews. The initial pipeline had 15 stages with multiple $lookup operations, causing memory overflows and slow response times.",
            codeExample: `// Initial problematic aggregation
db.orders.aggregate([
  { $match: { date: { $gte: startDate } } },
  { $lookup: { 
    from: "customers", 
    localField: "customerId", 
    foreignField: "_id", 
    as: "customer" 
  }},
  { $unwind: "$customer" },
  { $lookup: { 
    from: "products", 
    localField: "productId", 
    foreignField: "_id", 
    as: "product" 
  }},
  { $unwind: "$product" },
  { $group: { 
    _id: "$customer._id", 
    totalSpent: { $sum: "$amount" } 
  }}
])`
          },
          {
            title: "Optimization Strategies",
            content: "**1. Index Optimization**: Created compound indexes on frequently queried fields\n**2. Pipeline Reduction**: Combined stages and removed unnecessary $lookups\n**3. Early Filtering**: Applied $match as early as possible\n**4. Memory Management**: Used $limit and $skip strategically\n**5. Caching Layer**: Implemented Redis for repeated queries",
            codeExample: `// Optimized aggregation
db.orders.aggregate([
  { $match: { 
    date: { $gte: startDate },
    status: "completed" 
  }},
  { $lookup: {
    from: "customers",
    let: { customerId: "$customerId" },
    pipeline: [
      { $match: { 
        $expr: { $eq: ["$_id", "$$customerId"] } 
      }},
      { $project: { name: 1, email: 1 } }
    ],
    as: "customer"
  }},
  { $group: {
    _id: "$customerId",
    totalSpent: { $sum: "$amount" },
    orderCount: { $sum: 1 }
  }}
])`
          }
        ],
        
        conclusion: "MongoDB aggregations are powerful but require careful optimization for production workloads. The key lessons: always profile your queries, create appropriate indexes, minimize pipeline stages, and consider caching strategies for frequently accessed data.",
        
        keyTakeaways: [
          "Compound indexes dramatically improve aggregation performance",
          "Reduce $lookup operations by denormalizing where appropriate",
          "Implement query caching for repetitive aggregations",
          "Monitor aggregation memory usage with $limit stages"
        ]
      }
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Next.js and Node.js",
      excerpt: "Architecture patterns for enterprise-grade fullstack applications",
      icon: <FaReact className="text-blue-400" />,
      date: "March 22, 2023",
      readTime: "12 min read",
      tags: ["Next.js", "Microservices", "Architecture", "Scalability"],
      featured: true,
      author: "Yonas Fsaha",
      authorRole: "Solutions Architect",
      
      content: {
        introduction: "Modern web applications require architectures that can scale horizontally while maintaining development velocity. In this deep dive, I'll share patterns we've successfully implemented across multiple enterprise projects using Next.js API routes as an API gateway to microservices.",
        
        sections: [
          {
            title: "Architecture Overview",
            content: "Our architecture consists of:\n• **Next.js Frontend**: Server-side rendered with App Router\n• **API Gateway**: Next.js API routes handling authentication and routing\n• **Microservices**: Independent Node.js services for Users, Products, Orders, Payments\n• **Message Queue**: RabbitMQ for async communication\n• **Service Discovery**: Consul for dynamic service registration",
            codeExample: `// Next.js API Gateway - /api/orders/route.js
export async function POST(request) {
  // Authentication middleware
  const session = await getServerSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  // Route to appropriate microservice
  const serviceUrl = await serviceDiscovery.getService('order-service')
  const response = await fetch(\`\${serviceUrl}/api/orders\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(await request.json())
  })
  
  return NextResponse.json(await response.json())
}`
          }
        ],
        
        conclusion: "Microservices with Next.js provide excellent separation of concerns while maintaining developer experience. The key is to start simple, implement proper observability, and scale services independently based on traffic patterns.",
        
        keyTakeaways: [
          "Use Next.js API routes as lightweight API gateways",
          "Implement circuit breakers for service resilience",
          "Centralize logging and monitoring from day one",
          "Design services around business capabilities"
        ]
      }
    },
    {
      id: 3,
      title: "Secure JWT Authentication Implementation in MERN Stack",
      excerpt: "Best practices for production-ready authentication systems",
      icon: <FiTrendingUp className="text-blue-400" />,
      date: "January 10, 2023",
      readTime: "10 min read",
      tags: ["Security", "Node.js", "Authentication", "JWT"],
      featured: true,
      author: "Yonas Fsaha",
      authorRole: "Security Specialist",
      
      content: {
        introduction: "Authentication is the cornerstone of web application security. After auditing multiple MERN stack applications, I've compiled the most critical security measures for JWT-based authentication. This guide covers everything from token generation to refresh strategies.",
        
        sections: [
          {
            title: "Token Structure & Security",
            content: "**Access Token**: Short-lived (15-30 minutes), stored in memory\n**Refresh Token**: Long-lived (7-30 days), stored in HTTP-only cookie\n**Implementation Notes**:\n• Use asymmetric encryption (RS256)\n• Include minimal claims in JWT payload\n• Implement token blacklisting for logout",
            codeExample: `// Secure JWT generation
const generateTokens = async (userId) => {
  const accessToken = jwt.sign(
    { 
      userId,
      role: 'user',
      iat: Math.floor(Date.now() / 1000)
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: '15m', algorithm: 'RS256' }
  )
  
  const refreshToken = jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d', algorithm: 'RS256' }
  )
  
  // Store refresh token in database with device info
  await RefreshToken.create({
    userId,
    token: refreshToken,
    userAgent: req.headers['user-agent'],
    ipAddress: req.ip,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  })
  
  return { accessToken, refreshToken }
}`
          }
        ],
        
        conclusion: "JWT authentication when implemented correctly provides robust security for MERN applications. The key is defense in depth: proper token handling, security headers, rate limiting, and continuous monitoring of authentication patterns.",
        
        keyTakeaways: [
          "Always use HTTP-only cookies for refresh tokens",
          "Implement token blacklisting for immediate revocation",
          "Use asymmetric encryption for JWT signatures",
          "Monitor authentication logs for suspicious patterns"
        ]
      }
    }
  ]

  const openArticle = (article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setShowScrollTop(false)
    setTimeout(() => {
      setSelectedArticle(null)
    }, 300)
    document.body.style.overflow = 'auto'
  }

  const handleScroll = () => {
    if (modalRef.current) {
      const { scrollTop } = modalRef.current
      setShowScrollTop(scrollTop > 300)
    }
  }

  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const copyCode = async (code, index) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(index)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const shareArticle = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // You could add a toast notification here
    }
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isModalOpen])

  return (
    <>
      <section id="blog" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-sky-400/10" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
                <FiBookOpen className="text-blue-400 text-xl" />
              </div>
              <span className="text-blue-400 font-mono text-sm uppercase tracking-wider">Technical Insights</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Blog & </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Articles</span>
            </h2>
            
            <p className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto font-mono">
              Practical insights from real-world projects and technical challenges
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {detailedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openArticle(article)}
              >
                <div className="h-full bg-gradient-to-b from-sky-400/5 via-blue-400/5 to-transparent rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-400/10">
                  {/* Card content */}
                  <div className="p-6 md:p-8">
                    {/* Icon and meta */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/10 to-sky-400/10 border border-blue-400/20 group-hover:scale-110 transition-transform duration-300">
                        {article.icon}
                      </div>
                      {article.featured && (
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-400/20 to-sky-400/20 text-blue-400 border border-blue-400/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    {/* Date & read time */}
                    <div className="flex items-center gap-4 text-sm text-[#94a3b8] mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiClock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-sky-400 transition-all duration-300">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-[#94a3b8] mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-[#cbd5e1] border border-white/10 group-hover:border-blue-400/40 group-hover:text-blue-400 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Read button */}
                  <div className="px-6 py-4 border-t border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-white transition-colors duration-300">
                        Read Article
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <div className="text-xs text-[#94a3b8]">
                        Click to read
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-400/10 to-sky-400/10 border border-blue-400/20 rounded-xl font-medium text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FiBookOpen className="text-blue-400" />
                View All Articles
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-400/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {isModalOpen && selectedArticle && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Fixed Close Button (Always Visible) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeModal}
              className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              whileHover={{ rotate: 90 }}
            >
              <FiX size={24} />
            </motion.button>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center text-blue-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <FiArrowUp size={20} />
              </motion.button>
            )}

            {/* Modal Content */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl h-[90vh] bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              >
                {/* Scrollable Content */}
                <div 
                  ref={modalRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto scroll-smooth"
                >
                  {/* Article Header */}
                  <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/95 to-transparent pb-4">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                            {selectedArticle.icon}
                          </div>
                          <div>
                            <div className="text-sm text-blue-400 font-mono">{selectedArticle.authorRole}</div>
                            <div className="text-xs text-[#94a3b8]">Posted on {selectedArticle.date}</div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => shareArticle(selectedArticle)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                        >
                          <FiShare2 />
                          Share
                        </button>
                      </div>
                      
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {selectedArticle.title}
                      </h1>
                      
                      <p className="text-lg text-[#cbd5e1] mb-6">
                        {selectedArticle.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {selectedArticle.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="p-8 pt-0">
                    <div className="max-w-3xl mx-auto">
                      {/* Introduction */}
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-sky-400 rounded-full" />
                          <h2 className="text-2xl font-bold text-white">Introduction</h2>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-400/5 to-transparent border border-blue-400/10">
                          <p className="text-[#cbd5e1] leading-relaxed text-lg">
                            {selectedArticle.content.introduction}
                          </p>
                        </div>
                      </div>

                      {/* Sections */}
                      {selectedArticle.content.sections.map((section, index) => (
                        <div key={index} className="mb-12">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400/10 to-sky-400/10 border border-blue-400/20 flex items-center justify-center">
                              <span className="text-blue-400 font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{section.title}</h3>
                          </div>
                          
                          <div className="mb-8">
                            {section.content.split('\n').map((line, i) => {
                              if (line.startsWith('**')) {
                                return (
                                  <p key={i} className="text-[#cbd5e1] leading-relaxed mb-3 font-semibold">
                                    {line.replace(/\*\*/g, '')}
                                  </p>
                                )
                              } else if (line.startsWith('•')) {
                                return (
                                  <div key={i} className="flex items-start gap-3 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                    <span className="text-[#cbd5e1]">{line.substring(1).trim()}</span>
                                  </div>
                                )
                              } else {
                                return (
                                  <p key={i} className="text-[#cbd5e1] leading-relaxed mb-3">
                                    {line}
                                  </p>
                                )
                              }
                            })}
                          </div>

                          {section.codeExample && (
                            <div className="relative mb-8 group">
                              <div className="absolute -top-3 right-4 flex items-center gap-2">
                                <motion.button
                                  onClick={() => copyCode(section.codeExample, index)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-1.5 text-xs rounded-lg bg-[#1e293b] text-white border border-white/10 hover:border-blue-400/30 flex items-center gap-2"
                                >
                                  <FiCopy size={12} />
                                  {copiedCode === index ? 'Copied!' : 'Copy'}
                                </motion.button>
                              </div>
                              <pre className="bg-[#1e293b] rounded-xl p-6 overflow-x-auto text-sm text-[#cbd5e1] border border-white/10 group-hover:border-blue-400/30 transition-colors">
                                <code>{section.codeExample}</code>
                              </pre>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Conclusion */}
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full" />
                          <h2 className="text-2xl font-bold text-white">Conclusion</h2>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-400/5 to-transparent border border-emerald-400/10">
                          <p className="text-[#cbd5e1] leading-relaxed text-lg">
                            {selectedArticle.content.conclusion}
                          </p>
                        </div>
                      </div>

                      {/* Key Takeaways */}
                      <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                          <FiTag className="text-blue-400 text-xl" />
                          <h2 className="text-2xl font-bold text-white">Key Takeaways</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedArticle.content.keyTakeaways.map((takeaway, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-400/30 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-400/20 to-sky-400/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-400 text-xs font-bold">{index + 1}</span>
                                </div>
                                <span className="text-[#cbd5e1]">{takeaway}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Author Bio */}
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-400/5 via-sky-400/5 to-transparent border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-sky-400 flex items-center justify-center">
                              <span className="text-white font-bold text-xl">YF</span>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 border-2 border-[#0f172a] flex items-center justify-center">
                              <FiCode size={10} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">Yonas Fsaha</h4>
                            <p className="text-[#94a3b8]">Full-Stack Developer & Technical Writer</p>
                          </div>
                        </div>
                        <p className="text-[#cbd5e1]">
                          I transform complex technical challenges into elegant solutions. 
                          Passionate about sharing knowledge that helps developers build better software.
                        </p>
                        <div className="flex gap-4 mt-4">
                          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <FaTwitter />
                            Follow on Twitter
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 transition-colors">
                            <FaLinkedin />
                            Connect on LinkedIn
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}


























// 'use client'
// import { motion } from 'framer-motion'
// import { FiBookOpen, FiCode, FiTrendingUp, FiDatabase, FiArrowRight } from 'react-icons/fi'
// import { FaReact, FaNodeJs } from 'react-icons/fa'

// export default function BlogHighlights() {
//   const articles = [
//     {
//       title: "Optimizing MongoDB Aggregations",
//       excerpt: "How I reduced query times by 300% in a production app",
//       icon: <FiDatabase className="text-blue-400" />,
//       date: "May 2023",
//       readTime: "8 min read",
//       tags: ["MongoDB", "Performance"]
//     },
//     {
//       title: "Next.js + Node Microservices",
//       excerpt: "Architecting scalable fullstack applications",
//       icon: <FaReact className="text-blue-400" />,
//       date: "March 2023",
//       readTime: "12 min read",
//       tags: ["Next.js", "Microservices"]
//     },
//     {
//       title: "JWT Authentication Deep Dive",
//       excerpt: "Secure auth implementation in MERN stack",
//       icon: <FiTrendingUp className="text-blue-400" />,
//       date: "January 2023",
//       readTime: "10 min read",
//       tags: ["Security", "Node.js"]
//     }
//   ]

//   return (
//     <section id="blog" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
//       {/* Subtle background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
//         <motion.div
//           className="absolute bottom-[10%] right-[10%] text-blue-400 text-3xl md:text-5xl font-mono"
//           animate={{ opacity: [0.05, 0.08, 0.05] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 2 }}
//         >
//           {'{}'}
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.h2
//             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             <span className="text-blue-400">
//               Blog Highlights
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
//           >
//             Sharing knowledge about MERN stack development and modern web architecture
//           </motion.p>
//         </motion.div>

//         {/* Articles */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group"
//             >
//               <div className="h-full bg-sky-400/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-blue-400/30">
//                 <div className="p-4 md:p-6">
//                   <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
//                     <div className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/10">
//                       {article.icon}
//                     </div>
//                     <div>
//                       <span className="text-xs md:text-sm text-blue-400">{article.date}</span>
//                       <span className="mx-1.5 md:mx-2 text-[#9ca3af]">•</span>
//                       <span className="text-xs md:text-sm text-[#9ca3af]">{article.readTime}</span>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{article.title}</h3>
//                   <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">{article.excerpt}</p>
                  
//                   <div className="flex flex-wrap gap-1.5 md:gap-2">
//                     {article.tags.map((tag, i) => (
//                       <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="px-4 py-3 md:px-6 md:py-4 border-t border-white/10 bg-white/5">
//                   <button className="text-blue-400 font-medium flex items-center gap-2 text-sm md:text-base group-hover:text-white transition-colors duration-300">
//                     Read Article
//                     <motion.div
//                       animate={{ x: 0 }}
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiArrowRight />
//                     </motion.div>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mt-12 md:mt-16 text-center"
//         >
//           <motion.button
//             whileHover={{ 
//               y: -3,
//               scale: 1.03,
//               backgroundColor: '#60a5fa'
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono mx-auto"
//           >
//             <FiBookOpen className="mr-2" />
//             View All Articles
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }






















// 'use client'
// import { motion } from 'framer-motion'
// import { FiBookOpen, FiCode, FiTrendingUp, FiDatabase } from 'react-icons/fi'
// import { FaReact, FaNodeJs } from 'react-icons/fa'

// export default function BlogHighlights() {
//   const articles = [
//     {
//       title: "Optimizing MongoDB Aggregations",
//       excerpt: "How I reduced query times by 300% in a production app",
//       icon: <FiDatabase className="text-green-400" />,
//       date: "May 2023",
//       readTime: "8 min read",
//       tags: ["MongoDB", "Performance"]
//     },
//     {
//       title: "Next.js + Node Microservices",
//       excerpt: "Architecting scalable fullstack applications",
//       icon: <FaReact className="text-blue-400" />,
//       date: "March 2023",
//       readTime: "12 min read",
//       tags: ["Next.js", "Microservices"]
//     },
//     {
//       title: "JWT Authentication Deep Dive",
//       excerpt: "Secure auth implementation in MERN stack",
//       icon: <FiTrendingUp className="text-purple-400" />,
//       date: "January 2023",
//       readTime: "10 min read",
//       tags: ["Security", "Node.js"]
//     }
//   ]

//   return (
//     <section id="blog" className="relative py-28 bg-gray-50 dark:bg-[#05070a] text-gray-900 dark:text-gray-100 overflow-hidden border-t border-gray-200 dark:border-[#1e293b]">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div
//           className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 blur-[120px]"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.8, 1, 0.8]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             delay: 2
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             className="inline-flex items-center px-5 py-2.5 rounded-full bg-black/10 dark:bg-black/30 border border-blue-500/40 shadow-lg backdrop-blur-sm mb-6"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//             <span className="text-sm font-medium text-gray-600 dark:text-[#9ca3af] tracking-wider">TECHNICAL WRITING</span>
//           </motion.div>
          
//           <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//               Blog Highlights
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-600 dark:text-[#94a3b8] max-w-3xl mx-auto">
//             Sharing knowledge about MERN stack development and modern web architecture
//           </p>
//         </motion.div>

//         {/* Articles */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="h-full bg-white dark:bg-[#0f172a] rounded-xl border border-gray-200 dark:border-[#1e293b] overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="p-3 rounded-lg bg-gray-100 dark:bg-[#1e293b]">
//                       {article.icon}
//                     </div>
//                     <div>
//                       <span className="text-sm text-gray-500 dark:text-[#9ca3af]">{article.date}</span>
//                       <span className="mx-2 text-gray-400">•</span>
//                       <span className="text-sm text-gray-500 dark:text-[#9ca3af]">{article.readTime}</span>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
//                   <p className="text-gray-600 dark:text-[#94a3b8] mb-6">{article.excerpt}</p>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {article.tags.map((tag, i) => (
//                       <span key={i} className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-[#1e293b] text-gray-700 dark:text-[#9ca3af]">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="px-6 py-4 border-t border-gray-200 dark:border-[#1e293b] bg-gray-50 dark:bg-[#0a101f]">
//                   <button className="text-blue-500 dark:text-blue-400 font-medium flex items-center gap-2 group-hover:underline">
//                     Read Article
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <a
//             href="#"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
//           >
//             <FiBookOpen className="mr-2" />
//             View All Articles
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }