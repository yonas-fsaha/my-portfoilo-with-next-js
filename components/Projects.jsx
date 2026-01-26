'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiGlobe, FiLoader, FiDollarSign, FiDatabase, FiMessageSquare, FiShoppingBag, FiBook } from 'react-icons/fi'
import { FaWordpress, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiStrapi, SiStripe, SiTailwindcss, SiElementor, SiMongodb, SiExpress, SiSocketdotio } from 'react-icons/si'
import Image from 'next/image'

const projects = [
  {
    title: "QueenOfShebaFoods.com",
    description: "WordPress e-commerce site for Ethiopian food products with international shipping integration, multi-currency support, and WooCommerce setup.",
    tech: [
      { name: "WordPress", icon: <FaWordpress className="text-[#21759b]" /> },
      { name: "WooCommerce", icon: <FiDollarSign className="text-[#7f54b3]" /> },
      { name: "Elementor", icon: <SiElementor className="text-[#f92c8b]" /> },
      { name: "PHP", icon: <FiCode className="text-[#777BB4]" /> }
    ],
    status: "live",
    links: {
      live: "https://queenofshebafoods.com",
      github: null,
      code: null
    },
    icon: <FaWordpress className="text-[#21759b] text-xl md:text-2xl" />,
    image: "/projects/queen-of-sheba.jpg" // Replace with actual image path
  },
  {
    title: "Vibeica.com",
    description: "Technology company website built with React.js featuring service showcase, portfolio gallery, and contact forms with email integration.",
    tech: [
      { name: "React", icon: <FaReact className="text-[#087ea4]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
      { name: "Framer Motion", icon: <FiCode className="text-[#0055FF]" /> },
      { name: "EmailJS", icon: <FiMessageSquare className="text-[#FF6B35]" /> }
    ],
    status: "live",
    links: {
      live: "https://vibeica.com",
      github: null,
      code: null
    },
    icon: <FaReact className="text-[#087ea4] text-xl md:text-2xl" />,
    image: "/projects/vibeica.jpg" // Replace with actual image path
  },
  {
    title: "EthioWildlifeTours.com",
    description: "Tourism booking platform with Next.js 14, Strapi CMS backend, Stripe payments, and interactive tour scheduling system.",
    tech: [
      { name: "Next.js 14", icon: <SiNextdotjs className="text-white" /> },
      { name: "Strapi", icon: <SiStrapi className="text-[#4945ff]" /> },
      { name: "Stripe", icon: <SiStripe className="text-[#635bff]" /> },
      { name: "Mapbox", icon: <FiGlobe className="text-[#4264fb]" /> }
    ],
    status: "development",
    links: {
      live: "https://ethiowildlifetours.com",
      github: null,
      code: null
    },
    icon: <SiNextdotjs className="text-white text-xl md:text-2xl" />,
    image: "/projects/ethio-wildlife.jpg" // Replace with actual image path
  },
  {
    title: "Full-Stack Ecommerce",
    description: "Complete MERN stack ecommerce platform with admin dashboard, user authentication, payment integration, and order management.",
    tech: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "React", icon: <FaReact className="text-[#087ea4]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> }
    ],
    status: "live",
    links: {
      live: null,
      github: "https://github.com/yonas-fsaha/ecommerce-app",
      code: null
    },
    icon: <FiShoppingBag className="text-purple-400 text-xl md:text-2xl" />,
    image: "/projects/ecommerce.jpg" // Replace with actual image path
  },
  {
    title: "Real-time Chat Application",
    description: "Chat application with Socket.io, real-time messaging, user authentication, and message history using MERN stack.",
    tech: [
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
      { name: "React", icon: <FaReact className="text-[#087ea4]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }
    ],
    status: "live",
    links: {
      live: null,
      github: "https://github.com/yonas-fsaha/chat-app",
      code: null
    },
    icon: <FiMessageSquare className="text-green-400 text-xl md:text-2xl" />,
    image: "/projects/chat-app.jpg" // Replace with actual image path
  },
  {
    title: "News API Backend",
    description: "RESTful API for news aggregation with user authentication, article CRUD operations, and filtering capabilities.",
    tech: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "JWT", icon: <FiDatabase className="text-[#D63AFF]" /> }
    ],
    status: "live",
    links: {
      live: null,
      github: "https://github.com/yonas-fsaha/news-api",
      code: null
    },
    icon: <FiBook className="text-yellow-400 text-xl md:text-2xl" />,
    image: "/projects/news-api.jpg" // Replace with actual image path
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        <motion.div
          className="absolute top-[15%] left-[10%] text-blue-400 text-4xl md:text-6xl font-mono"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[10%] text-blue-400 text-3xl md:text-5xl font-mono"
          animate={{ opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        >
          {'{}'}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="text-blue-400">
                Featured Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
            >
              Real-world applications I've built with measurable business impact
            </motion.p>
          </div>
          
          {/* Projects grid - 2 columns on medium, 3 columns on large */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  borderColor: 'rgb(96 165 250 / 0.3)',
                  backgroundColor: 'rgba(96, 165, 250, 0.05)'
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-sky-400/5 transition-all duration-300"
              >
                {/* Project Image Area with overlay icons */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-blue-400/10 to-purple-400/10 overflow-hidden border-b border-white/10">
                  {/* Project Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                      {/* Placeholder for project image - Replace with actual Image component */}
                      <div className="text-4xl md:text-5xl text-blue-400/30">
                        {project.status === 'development' ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <FiLoader />
                          </motion.div>
                        ) : (
                          <div className="relative">
                            {/* {/* If you have actual images, use this: */}
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Icon - Top Left Corner */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="absolute top-3 md:top-4 left-3 md:left-4 z-10"
                  >
                    <div className="p-2 md:p-2.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                      {project.icon}
                    </div>
                  </motion.div>
                  
                  {/* Status Badge - Top Right Corner */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="absolute top-3 md:top-4 right-3 md:right-4 z-10"
                  >
                    <span className={`px-2.5 md:px-3 py-0.5 md:py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                      project.status === 'live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                    }`}>
                      {project.status === 'live' ? '🚀 Live' : '🔨 Development'}
                    </span>
                  </motion.div>
                </div>
                
                {/* Project content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#9ca3af] mb-4 md:mb-5">{project.description}</p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-6">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center px-3 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-white/5 border border-white/10 gap-2"
                      >
                        <span className="text-base md:text-lg">{tech.icon}</span>
                        <span className="text-xs md:text-sm text-white">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {project.links.live && (
                      <motion.a
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 border border-blue-400/20 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <FiExternalLink className="text-base" /> Live Demo
                      </motion.a>
                    )}
                    
                    {project.links.github && (
                      <motion.a
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <FiGithub className="text-base" /> View Code
                      </motion.a>
                    )}
                    
                    {/* If no live or github link, show private badge */}
                    {!project.links.live && !project.links.github && (
                      <motion.span
                        whileHover={{ y: -2 }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-[#9ca3af] border border-white/10 rounded-lg text-sm font-medium"
                      >
                        <FaGitAlt className="text-base" /> Private Repository
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 md:mt-16"
          >
            <motion.p
              className="text-base md:text-lg text-[#9ca3af] mb-6 max-w-3xl mx-auto font-mono"
            >
              Want to see more? Check out my GitHub for additional projects and code examples.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ 
                  y: -3,
                  scale: 1.03,
                  backgroundColor: '#60a5fa'
                }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/yonas-fsaha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono"
              >
                <FiGithub className="text-lg" /> View All Projects on GitHub
              </motion.a>
              
              <motion.a
                whileHover={{ 
                  y: -3,
                  scale: 1.03,
                  backgroundColor: 'rgba(96, 165, 250, 0.1)'
                }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-white/5 text-white border border-white/10 hover:border-blue-400/30 rounded-lg md:rounded-xl font-medium font-mono"
              >
                <FiMessageSquare className="text-lg" /> Discuss Your Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiExternalLink, FiCode, FiGlobe, FiLoader, FiDollarSign } from 'react-icons/fi'
// import { FaWordpress, FaReact, FaNodeJs } from 'react-icons/fa'
// import { SiNextdotjs, SiStrapi, SiStripe, SiTailwindcss, SiElementor } from 'react-icons/si'

// const projects = [
//   {
//     title: "QueenOfShebaFoods.com",
//     description: "WordPress e-commerce site for Ethiopian food products with international shipping integration and multi-currency support.",
//     tech: [
//       { name: "WordPress", icon: <FaWordpress className="text-[#21759b]" /> },
//       { name: "WooCommerce", icon: <FiDollarSign className="text-[#7f54b3]" /> },
//       { name: "Elementor", icon: <SiElementor className="text-[#f92c8b]" /> },
//       { name: "PayPal", icon: <FiDollarSign className="text-[#003087]" /> }
//     ],
//     status: "live",
//     links: {
//       live: "https://queenofshebafoods.com",
//       code: null
//     },
//     icon: <FaWordpress className="text-[#21759b] text-4xl md:text-5xl" />
//   },
//   {
//     title: "Vibeica.com",
//     description: "React.js application for digital marketing agency with lead generation forms and analytics dashboard.",
//     tech: [
//       { name: "React", icon: <FaReact className="text-[#087ea4]" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
//       { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
//       { name: "Formik", icon: <FiCode className="text-[#0051cd]" /> }
//     ],
//     status: "live",
//     links: {
//       live: "https://vibeica.com",
//       code: null
//     },
//     icon: <FaReact className="text-[#087ea4] text-4xl md:text-5xl" />
//   },
//   {
//     title: "EthioWildlifeTours.com",
//     description: "Next.js tourism platform with payment integration, CMS backend, and interactive map features.",
//     tech: [
//       { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//       { name: "Strapi", icon: <SiStrapi className="text-[#4945ff]" /> },
//       { name: "Stripe", icon: <SiStripe className="text-[#635bff]" /> },
//       { name: "Mapbox", icon: <FiGlobe className="text-[#4264fb]" /> }
//     ],
//     status: "development",
//     links: {
//       live: null,
//       code: null
//     },
//     icon: <SiNextdotjs className="text-white text-4xl md:text-5xl" />
//   }
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
//       {/* Subtle background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
//         <motion.div
//           className="absolute top-[15%] left-[10%] text-blue-400 text-4xl md:text-6xl font-mono"
//           animate={{ opacity: [0.05, 0.1, 0.05] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         >
//           {'</>'}
//         </motion.div>
//         <motion.div
//           className="absolute bottom-[20%] right-[10%] text-blue-400 text-3xl md:text-5xl font-mono"
//           animate={{ opacity: [0.05, 0.08, 0.05] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 2 }}
//         >
//           {'{}'}
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Section header */}
//           <div className="text-center mb-12 md:mb-16">
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             >
//               <span className="text-blue-400">
//                 Featured Projects
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
//             >
//               Real-world applications I've built with measurable business impact
//             </motion.p>
//           </div>
          
//           {/* Projects grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ 
//                   y: -8,
//                   borderColor: 'rgb(96 165 250 / 0.3)',
//                   backgroundColor: 'rgba(96, 165, 250, 0.05)'
//                 }}
//                 className="group relative overflow-hidden rounded-xl border border-white/10 bg-sky-400/5 transition-all duration-300"
//               >
//                 {/* Project header */}
//                 <div className={`h-40 md:h-48 bg-white/5 flex items-center justify-center relative border-b border-white/10`}>
//                   {project.status === 'development' ? (
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                       className="relative z-10"
//                     >
//                       <FiLoader className="text-blue-400 text-4xl md:text-5xl" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       initial={{ scale: 0.9 }}
//                       whileInView={{ scale: 1 }}
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                       className="relative z-10"
//                     >
//                       {project.icon}
//                     </motion.div>
//                   )}
//                 </div>
                
//                 {/* Status badge */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + (index * 0.1) }}
//                   className="absolute top-3 md:top-4 right-3 md:right-4"
//                 >
//                   <span className={`px-2.5 md:px-3 py-0.5 md:py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
//                     project.status === 'live' 
//                       ? 'bg-green-500/10 text-green-400 border border-green-400/20' 
//                       : 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/20'
//                   }`}>
//                     {project.status === 'live' ? '🚀 Live' : '🔨 Development'}
//                   </span>
//                 </motion.div>
                
//                 {/* Project content */}
//                 <div className="p-4 md:p-6">
//                   <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm md:text-base text-[#9ca3af] mb-4 md:mb-5">{project.description}</p>
                  
//                   {/* Tech stack */}
//                   <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
//                     {project.tech.map((tech, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 5 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
//                         whileHover={{ scale: 1.05 }}
//                         className="flex items-center px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-lg bg-white/5 border border-white/10 gap-1.5 md:gap-2"
//                       >
//                         <span className="text-base md:text-lg">{tech.icon}</span>
//                         <span className="text-xs md:text-sm text-white">{tech.name}</span>
//                       </motion.div>
//                     ))}
//                   </div>
                  
//                   {/* Project links */}
//                   <div className="flex gap-3 md:gap-4">
//                     {project.links.live && (
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.links.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-xs md:text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
//                       >
//                         <FiExternalLink className="mr-1.5 md:mr-2" /> Live Demo
//                       </motion.a>
//                     )}
//                     {project.links.code && (
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.links.code}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-xs md:text-sm font-medium text-[#9ca3af] hover:text-white transition-colors duration-300"
//                       >
//                         <FiGithub className="mr-1.5 md:mr-2" /> View Code
//                       </motion.a>
//                     )}
//                     {!project.links.live && !project.links.code && (
//                       <motion.span
//                         whileHover={{ x: 3 }}
//                         className="text-xs md:text-sm text-[#9ca3af]"
//                       >
//                         <FiCode className="inline mr-1.5 md:mr-2" /> Private
//                       </motion.span>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             className="text-center mt-12 md:mt-16"
//           >
//             <motion.p
//               className="text-base md:text-lg text-[#9ca3af] mb-4 md:mb-6 max-w-3xl mx-auto font-mono"
//             >
//               Have a project in mind? Let's discuss how I can help bring your vision to life.
//             </motion.p>
//             <motion.button
//               whileHover={{ 
//                 y: -3,
//                 scale: 1.03,
//                 backgroundColor: '#60a5fa'
//               }}
//               whileTap={{ scale: 0.97 }}
//               className="px-6 md:px-8 py-2.5 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono"
//             >
//               Get in Touch
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiExternalLink, FiCode, FiGlobe, FiLoader, FiDollarSign } from 'react-icons/fi'
// import { FaWordpress, FaReact, FaNodeJs } from 'react-icons/fa'
// import { SiNextdotjs, SiStrapi, SiStripe, SiTailwindcss, SiElementor } from 'react-icons/si'

// const projects = [
//   {
//     title: "QueenOfShebaFoods.com",
//     description: "WordPress e-commerce site for Ethiopian food products with international shipping integration and multi-currency support.",
//     tech: [
//       { name: "WordPress", icon: <FaWordpress className="text-blue-300" /> },
//       { name: "WooCommerce", icon: <FiDollarSign className="text-purple-400" /> },
//       { name: "Elementor", icon: <SiElementor className="text-orange-500" /> },
//       { name: "PayPal", icon: <FiDollarSign className="text-blue-500" /> }
//     ],
//     status: "live",
//     links: {
//       live: "https://queenofshebafoods.com",
//       code: null
//     },
//     gradient: "from-[#8b5cf6] to-[#3b82f6]",
//     icon: <FaWordpress className="text-white text-5xl" />
//   },
//   {
//     title: "Vibeica.com",
//     description: "React.js application for digital marketing agency with lead generation forms and analytics dashboard.",
//     tech: [
//       { name: "React", icon: <FaReact className="text-blue-400" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
//       { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//       { name: "Formik", icon: <FiCode className="text-blue-300" /> }
//     ],
//     status: "live",
//     links: {
//       live: "https://vibeica.com",
//       code: null
//     },
//     gradient: "from-[#0ea5e9] to-[#3b82f6]",
//     icon: <FaReact className="text-white text-5xl" />
//   },
//   {
//     title: "EthioWildlifeTours.com",
//     description: "Next.js tourism platform with payment integration, CMS backend, and interactive map features.",
//     tech: [
//       { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//       { name: "Strapi", icon: <SiStrapi className="text-blue-400" /> },
//       { name: "Stripe", icon: <SiStripe className="text-violet-500" /> },
//       { name: "Mapbox", icon: <FiGlobe className="text-blue-300" /> }
//     ],
//     status: "development",
//     links: {
//       live: null,
//       code: null
//     },
//     gradient: "from-[#8b5cf6] to-[#ec4899]",
//     icon: <SiNextdotjs className="text-white text-5xl" />
//   }
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] text-white overflow-hidden border-t border-[#1e293b]">
//       {/* Floating tech orbs */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div
//           className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10 blur-[120px]"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.8, 1, 0.8]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             repeatType: 'reverse'
//           }}
//         />
//         <motion.div
//           className="absolute bottom-[25%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-[120px]"
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
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Section header */}
//           <div className="text-center mb-20">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-5 py-2 rounded-full bg-black/30 border border-blue-500/40 mb-6 backdrop-blur-sm"
//               whileHover={{ scale: 1.02 }}
//             >
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">PORTFOLIO SHOWCASE</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                 Featured Projects
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto"
//             >
//               Real-world applications I've built with measurable business impact
//             </motion.p>
//           </div>
          
//           {/* Projects grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ 
//                   y: -10,
//                   boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
//                 }}
//                 className="group relative overflow-hidden rounded-xl border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300"
//               >
//                 {/* Project image placeholder with gradient */}
//                 <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
//                   <motion.div
//                     initial={{ scale: 0.9 }}
//                     whileInView={{ scale: 1 }}
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                     className="relative z-10"
//                   >
//                     {project.status === 'development' ? (
//                       <FiLoader className="text-white text-5xl animate-spin" />
//                     ) : (
//                       project.icon
//                     )}
//                   </motion.div>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                 </div>
                
//                 {/* Status badge */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 + (index * 0.1) }}
//                   className="absolute top-4 right-4"
//                 >
//                   <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
//                     project.status === 'live' 
//                       ? 'bg-green-900/50 text-green-400 border border-green-800' 
//                       : 'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
//                   }`}>
//                     {project.status === 'live' ? '🚀 Live' : '🔨 In Development'}
//                   </span>
//                 </motion.div>
                
//                 {/* Project content */}
//                 <div className="p-6 bg-[#0f172a]">
//                   <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-[#94a3b8] mb-5">{project.description}</p>
                  
//                   {/* Tech stack */}
//                   <div className="flex flex-wrap gap-3 mb-6">
//                     {project.tech.map((tech, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 5 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
//                         whileHover={{ scale: 1.05 }}
//                         className="flex items-center px-3 py-1.5 rounded-lg bg-black/30 border border-[#1e293b] text-[#9ca3af] gap-2"
//                       >
//                         <span className="text-lg">{tech.icon}</span>
//                         <span className="text-sm">{tech.name}</span>
//                       </motion.div>
//                     ))}
//                   </div>
                  
//                   {/* Project links */}
//                   <div className="flex gap-4">
//                     {project.links.live && (
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.links.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
//                       >
//                         <FiExternalLink className="mr-2" /> Live Demo
//                       </motion.a>
//                     )}
//                     {project.links.code && (
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.links.code}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm font-medium text-[#9ca3af] hover:text-white transition-colors duration-300"
//                       >
//                         <FiGithub className="mr-2" /> View Code
//                       </motion.a>
//                     )}
//                     {!project.links.live && !project.links.code && (
//                       <motion.span
//                         whileHover={{ x: 3 }}
//                         className="text-sm text-[#9ca3af]"
//                       >
//                         <FiCode className="inline mr-2" /> Private Repository
//                       </motion.span>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             className="text-center mt-16"
//           >
//             <motion.p
//               className="text-lg md:text-xl text-[#94a3b8] mb-6 max-w-3xl mx-auto"
//             >
//               Have a project in mind? Let's discuss how I can help bring your vision to life.
//             </motion.p>
//             <motion.button
//               whileHover={{ 
//                 y: -3,
//                 scale: 1.03,
//                 boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
//               }}
//               whileTap={{ scale: 0.97 }}
//               className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium"
//             >
//               Get in Touch
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiExternalLink, FiCode, FiGlobe, FiLoader } from 'react-icons/fi'

// const projects = [
//   {
//     title: "QueenOfShebaFoods.com",
//     description: "WordPress e-commerce site for Ethiopian food products with international shipping",
//     tech: ["WordPress", "WooCommerce", "Elementor", "PayPal"],
//     status: "live",
//     links: {
//       live: "https://queenofshebafoods.com",
//       code: null
//     },
//     gradient: "from-[#8b5cf6] to-[#3b82f6]"
//   },
//   {
//     title: "Vibeica.com",
//     description: "React.js application for digital marketing agency with lead generation forms",
//     tech: ["React", "Tailwind CSS", "Node.js", "Formik"],
//     status: "live",
//     links: {
//       live: "https://vibeica.com",
//       code: null
//     },
//     gradient: "from-[#0ea5e9] to-[#3b82f6]"
//   },
//   {
//     title: "EthioWildlifeTours.com",
//     description: "Next.js tourism platform with payment integration and CMS backend",
//     tech: ["Next.js", "Strapi", "Stripe", "Mapbox"],
//     status: "development",
//     links: {
//       live: null,
//       code: null
//     },
//     gradient: "from-[#8b5cf6] to-[#ec4899]"
//   }
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-28 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/10 blur-[120px]"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[120px]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 z-10">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Section header */}
//           <div className="text-center mb-20">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#161b22] border border-[#3b82f6]/40 mb-6"
//             >
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">PORTFOLIO</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                 Featured Projects
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-[#94a3b8] max-w-3xl mx-auto"
//             >
//               Case studies of my recent work with real-world applications
//             </motion.p>
//           </div>
          
//           {/* Projects grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 whileHover={{ y: -10 }}
//                 className="group relative overflow-hidden rounded-xl border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300"
//               >
//                 {/* Project image placeholder with gradient */}
//                 <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
//                   {project.status === 'development' ? (
//                     <FiLoader className="text-white text-4xl animate-spin" />
//                   ) : (
//                     <FiGlobe className="text-white text-4xl" />
//                   )}
//                 </div>
                
//                 {/* Status badge */}
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 text-xs font-medium rounded-full ${
//                     project.status === 'live' 
//                       ? 'bg-green-900/50 text-green-400 border border-green-800' 
//                       : 'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
//                   }`}>
//                     {project.status === 'live' ? '🚀 Live' : '🔨 In Development'}
//                   </span>
//                 </div>
                
//                 {/* Project content */}
//                 <div className="p-6 bg-[#161b22]">
//                   <h3 className="text-xl font-bold mb-2 group-hover:text-[#3b82f6] transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-[#94a3b8] mb-4">{project.description}</p>
                  
//                   {/* Tech stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, i) => (
//                       <motion.span 
//                         key={i}
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 0.05 * i }}
//                         className="px-3 py-1 text-xs rounded-full bg-[#0d1117] border border-[#30363d] text-[#9ca3af]"
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
                  
//                   {/* Project links */}
//                   <div className="flex space-x-4">
//                     {project.links.live && (
//                       <a 
//                         href={project.links.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm font-medium text-white hover:text-[#3b82f6] transition-colors duration-300"
//                       >
//                         <FiExternalLink className="mr-2" /> Live Demo
//                       </a>
//                     )}
//                     {project.links.code && (
//                       <a 
//                         href={project.links.code}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm font-medium text-[#9ca3af] hover:text-white transition-colors duration-300"
//                       >
//                         <FiGithub className="mr-2" /> View Code
//                       </a>
//                     )}
//                     {!project.links.live && !project.links.code && (
//                       <span className="text-sm text-[#9ca3af]">
//                         <FiCode className="inline mr-2" /> Private Repository
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiExternalLink } from 'react-icons/fi'

// const projects = [
//   {
//     title: "QueenOfShebaFoods.com",
//     description: "WordPress e-commerce site for Ethiopian food products",
//     tech: ["WordPress", "WooCommerce", "Elementor"],
//     status: "✅ Live",
//     links: {
//       live: "https://queenofshebafoods.com",
//       code: null
//     }
//   },
//   {
//     title: "Vibeica.com",
//     description: "React.js application for digital marketing agency",
//     tech: ["React", "Tailwind CSS", "Node.js"],
//     status: "✅ Live",
//     links: {
//       live: "https://vibeica.com",
//       code: null
//     }
//   },
//   {
//     title: "EthioWildlifeTours.com",
//     description: "Next.js tourism platform with payment integration",
//     tech: ["Next.js", "Strapi", "Stripe"],
//     status: "🔨 In Development",
//     links: {
//       live: null,
//       code: null
//     }
//   }
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Some of my recent work and case studies
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
//               >
//                 <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
//                   <div className="text-5xl">🖥️</div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-xl font-bold">{project.title}</h3>
//                     <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
//                       {project.status}
//                     </span>
//                   </div>
//                   <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {project.tech.map((tech) => (
//                       <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="mt-6 flex space-x-4">
//                     {project.links.live && (
//                       <a 
//                         href={project.links.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
//                       >
//                         <FiExternalLink className="mr-1" /> Live Demo
//                       </a>
//                     )}
//                     {project.links.code && (
//                       <a 
//                         href={project.links.code}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
//                       >
//                         <FiGithub className="mr-1" /> View Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }