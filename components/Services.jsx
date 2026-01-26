'use client'
import { motion } from 'framer-motion'
import { FiCode, FiGlobe, FiLayers, FiTrendingUp, FiTarget,FiFileText, FiDollarSign, FiPenTool, FiServer, FiCpu } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiStrapi, SiStripe } from 'react-icons/si'

export default function Services() {
  const services = [
    { 
      icon: <FaReact className="text-blue-400" size={20} />, 
      title: "Full-Stack Development", 
      description: "Complete MERN stack solutions with React, Node.js, and MongoDB",
      highlights: ["Custom web apps", "API development", "Database design"],
      color: "bg-sky-400/5"
    },
    { 
      icon: <SiNextdotjs className="text-blue-400" size={20} />, 
      title: "Performance Optimization", 
      description: "Lightning-fast Next.js applications with perfect Lighthouse scores",
      highlights: ["SSR/SSG optimization", "Code splitting", "Image optimization"],
      color: "bg-sky-400/5"
    },
    { 
      icon: <FaWordpress className="text-blue-400" size={20} />, 
      title: "WordPress Solutions", 
      description: "Custom WordPress & WooCommerce development",
      highlights: ["Theme customization", "Plugin development", "E-commerce setup"],
      color: "bg-sky-400/5"
    },
    { 
      icon: <SiTailwindcss className="text-blue-400" size={20} />, 
      title: "UI/UX Design", 
      description: "Beautiful interfaces with Tailwind CSS and design systems",
      highlights: ["Responsive design", "Design systems", "Prototyping"],
      color: "bg-sky-400/5"
    },
    { 
      icon: <SiStrapi className="text-blue-400" size={20} />, 
      title: "Headless CMS", 
      description: "Modern content architecture with Strapi and headless solutions",
      highlights: ["Content modeling", "API integration", "Editor experiences"],
      color: "bg-sky-400/5"
    },
    { 
      icon: <SiStripe className="text-blue-400" size={20} />, 
      title: "Payment Integration", 
      description: "Secure payment gateways for global transactions",
      highlights: ["Stripe", "Flutterwave", "PayPal", "Recurring billing"],
      color: "bg-sky-400/5"
    },
 { 
  icon: <FiFileText className="text-blue-400" size={20} />, 
  title: "Content & SEO Strategy", 
  description: "Drive organic traffic and authority through strategic content",
  highlights: ["SEO Optimization", "Content Strategy", "Keyword Research", "Analytics & Reporting"],
  color: "bg-sky-400/5"
},
    { 
      icon: <FaNodeJs className="text-blue-400" size={20} />, 
      title: "Technical Consulting", 
      description: "Architecture reviews and technical guidance",
      highlights: ["System design", "Tech stack selection", "Code reviews"],
      color: "bg-sky-400/5"
    },
{ 
  icon: <FiTarget className="text-blue-400" size={20} />, 
  title: "Paid Advertising", 
  description: "Targeted ad campaigns across major platforms for rapid growth",
  highlights: ["Meta & Google Ads", "SMM", "PPC Campaigns", "Retargeting"],
  color: "bg-sky-400/5"
}
  ]

  return (
    <section id="services" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-blue-400">
              Professional Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
          >
            Comprehensive solutions tailored to your business needs, from technical implementation to growth strategy
          </motion.p>
        </motion.div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                borderColor: 'rgb(96 165 250 / 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              className={`${service.color} rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300 h-full`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-shrink-0 p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 w-max mb-3 md:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{service.title}</h3>
                <p className="text-[#9ca3af] text-sm md:text-base mb-3 md:mb-4 flex-grow">{service.description}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {service.highlights.map((highlight, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-[#9ca3af]"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.p
            className="text-base md:text-lg text-[#9ca3af] mb-4 md:mb-6 max-w-3xl mx-auto font-mono"
          >
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </motion.p>
          <a href="/#contact" className="inline-block">
          <motion.button
            whileHover={{ 
              y: -3,
              scale: 1.03,
              backgroundColor: '#60a5fa'
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 md:px-8 py-2.5 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono"
          >
            Get in Touch
          </motion.button>
         </a>
        </motion.div>
      </div>
    </section>
  )
}






















// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiGlobe, FiLayers, FiTrendingUp, FiDollarSign, FiPenTool, FiServer, FiCpu } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa'
// import { SiNextdotjs, SiTailwindcss, SiStrapi, SiStripe } from 'react-icons/si'

// export default function Services() {
//   const services = [
//     { 
//       icon: <FaReact className="text-blue-400" size={24} />, 
//       title: "Full-Stack Development", 
//       description: "Complete MERN stack solutions with React, Node.js, and MongoDB",
//       highlights: ["Custom web apps", "API development", "Database design"],
//       color: "from-blue-500/10 to-blue-600/10"
//     },
//     { 
//       icon: <SiNextdotjs className="text-white" size={24} />, 
//       title: "Performance Optimization", 
//       description: "Lightning-fast Next.js applications with perfect Lighthouse scores",
//       highlights: ["SSR/SSG optimization", "Code splitting", "Image optimization"],
//       color: "from-gray-700/10 to-gray-800/10"
//     },
//     { 
//       icon: <FaWordpress className="text-blue-300" size={24} />, 
//       title: "WordPress Solutions", 
//       description: "Custom WordPress & WooCommerce development",
//       highlights: ["Theme customization", "Plugin development", "E-commerce setup"],
//       color: "from-blue-400/10 to-blue-500/10"
//     },
//     { 
//       icon: <SiTailwindcss className="text-cyan-400" size={24} />, 
//       title: "UI/UX Design", 
//       description: "Beautiful interfaces with Tailwind CSS and design systems",
//       highlights: ["Responsive design", "Design systems", "Prototyping"],
//       color: "from-cyan-500/10 to-cyan-600/10"
//     },
//     { 
//       icon: <SiStrapi className="text-purple-400" size={24} />, 
//       title: "Headless CMS", 
//       description: "Modern content architecture with Strapi and headless solutions",
//       highlights: ["Content modeling", "API integration", "Editor experiences"],
//       color: "from-purple-500/10 to-purple-600/10"
//     },
//     { 
//       icon: <SiStripe className="text-violet-500" size={24} />, 
//       title: "Payment Integration", 
//       description: "Secure payment gateways for global transactions",
//       highlights: ["Stripe", "Flutterwave", "PayPal", "Recurring billing"],
//       color: "from-violet-500/10 to-violet-600/10"
//     },
//     { 
//       icon: <FiTrendingUp className="text-green-400" size={24} />, 
//       title: "Digital Marketing", 
//       description: "Data-driven strategies for growth and conversions",
//       highlights: ["SEO", "Content strategy", "Conversion optimization"],
//       color: "from-green-500/10 to-green-600/10"
//     },
//     { 
//       icon: <FaNodeJs className="text-green-500" size={24} />, 
//       title: "Technical Consulting", 
//       description: "Architecture reviews and technical guidance",
//       highlights: ["System design", "Tech stack selection", "Code reviews"],
//       color: "from-green-600/10 to-green-700/10"
//     }
//   ]

//   return (
//     <section id="services" className="relative py-20 md:py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] text-white overflow-hidden border-t border-[#1e293b]">
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
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 md:mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center px-5 py-2 rounded-full bg-black/30 border border-blue-500/40 mb-6 backdrop-blur-sm"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//             <span className="text-sm font-medium text-[#9ca3af] tracking-wider">MY EXPERTISE</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//           >
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               Professional Services
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto"
//           >
//             Comprehensive solutions tailored to your business needs, from technical implementation to growth strategy
//           </motion.p>
//         </motion.div>
        
//         {/* Services grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ 
//                 y: -8,
//                 boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
//               }}
//               className={`bg-gradient-to-br ${service.color} rounded-xl p-6 border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300 h-full`}
//             >
//               <div className="flex flex-col h-full">
//                 <div className="flex-shrink-0 p-3 bg-black/30 rounded-lg border border-[#1e293b] w-max mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
//                 <p className="text-[#94a3b8] mb-4 flex-grow">{service.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {service.highlights.map((highlight, i) => (
//                     <motion.span 
//                       key={i}
//                       initial={{ opacity: 0, y: 5 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
//                       whileHover={{ scale: 1.05 }}
//                       className="px-3 py-1.5 text-xs rounded-full bg-black/30 border border-[#1e293b] text-[#9ca3af]"
//                     >
//                       {highlight}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-center mt-16 md:mt-20"
//         >
//           <motion.p
//             className="text-lg md:text-xl text-[#94a3b8] mb-6 max-w-3xl mx-auto"
//           >
//             Have a project in mind? Let's discuss how I can help bring your vision to life.
//           </motion.p>
//           <motion.button
//             whileHover={{ 
//               y: -3,
//               scale: 1.03,
//               boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
//             }}
//             whileTap={{ scale: 0.97 }}
//             className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium"
//           >
//             Get in Touch
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }























// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiGlobe, FiLayers, FiTrendingUp, FiDollarSign, FiPenTool, FiServer, FiCpu } from 'react-icons/fi'

// export default function Services() {
//   const services = [
//     { 
//       icon: <FiCode className="text-[#3b82f6]" size={24} />, 
//       title: "Full-Stack Development", 
//       description: "Complete MERN stack solutions with React, Node.js, and MongoDB",
//       highlights: ["Custom web apps", "API development", "Database design"]
//     },
//     { 
//       icon: <FiServer className="text-[#8b5cf6]" size={24} />, 
//       title: "Performance Optimization", 
//       description: "Lightning-fast Next.js applications with perfect Lighthouse scores",
//       highlights: ["SSR/SSG optimization", "Code splitting", "Image optimization"]
//     },
//     { 
//       icon: <FiGlobe className="text-[#0ea5e9]" size={24} />, 
//       title: "WordPress Solutions", 
//       description: "Custom WordPress & WooCommerce development",
//       highlights: ["Theme customization", "Plugin development", "E-commerce setup"]
//     },
//     { 
//       icon: <FiPenTool className="text-[#3b82f6]" size={24} />, 
//       title: "UI/UX Design", 
//       description: "Beautiful interfaces with Tailwind CSS and design systems",
//       highlights: ["Responsive design", "Design systems", "Prototyping"]
//     },
//     { 
//       icon: <FiLayers className="text-[#8b5cf6]" size={24} />, 
//       title: "Headless CMS", 
//       description: "Modern content architecture with Strapi and headless solutions",
//       highlights: ["Content modeling", "API integration", "Editor experiences"]
//     },
//     { 
//       icon: <FiDollarSign className="text-[#0ea5e9]" size={24} />, 
//       title: "Payment Integration", 
//       description: "Secure payment gateways for global transactions",
//       highlights: ["Stripe", "Flutterwave", "PayPal", "Recurring billing"]
//     },
//     { 
//       icon: <FiTrendingUp className="text-[#3b82f6]" size={24} />, 
//       title: "Digital Marketing", 
//       description: "Data-driven strategies for growth and conversions",
//       highlights: ["SEO", "Content strategy", "Conversion optimization"]
//     },
//     { 
//       icon: <FiCpu className="text-[#8b5cf6]" size={24} />, 
//       title: "Technical Consulting", 
//       description: "Architecture reviews and technical guidance",
//       highlights: ["System design", "Tech stack selection", "Code reviews"]
//     }
//   ]

//   // Split services into two columns
//   const leftColumnServices = services.slice(0, services.length / 2);
//   const rightColumnServices = services.slice(services.length / 2);

//   return (
//     <section id="services" className="relative py-20 md:py-28 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#3b82f6]/10 blur-[80px] md:blur-[120px]"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[80px] md:blur-[120px]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         {/* Section header */}
//         <div className="text-center mb-16 md:mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center px-4 py-2 rounded-full bg-[#161b22] border border-[#3b82f6]/40 mb-5 md:mb-6"
//           >
//             <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 mr-2 md:mr-3 animate-pulse"></span>
//             <span className="text-xs md:text-sm font-medium text-[#9ca3af] tracking-wider">MY SERVICES</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
//           >
//             <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//               What I Offer
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto"
//           >
//             Comprehensive solutions from technical implementation to growth strategy
//           </motion.p>
//         </div>
        
//         {/* Services columns - THE FIX IS HERE */}
//         <div className="flex  gap-8 lg:gap-12">
//           {/* Left column */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             {leftColumnServices.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-[#161b22] rounded-xl p-5 md:p-6 border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300"
//               >
//                 <div className="flex flex-col sm:flex-row gap-5">
//                   <div className="flex-shrink-0 p-3 bg-[#0d1117] rounded-lg border border-[#30363d] w-max">
//                     {service.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{service.title}</h3>
//                     <p className="text-[#94a3b8] mb-3 md:mb-4">{service.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {service.highlights.map((highlight, i) => (
//                         <span 
//                           key={i}
//                           className="px-2.5 py-1 text-xs rounded-full bg-[#0d1117] border border-[#30363d] text-[#9ca3af]"
//                         >
//                           {highlight}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right column */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             {rightColumnServices.map((service, index) => (
//               <motion.div
//                 key={index + leftColumnServices.length}
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-[#161b22] rounded-xl p-5 md:p-6 border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300"
//               >
//                 <div className="flex flex-col sm:flex-row gap-5">
//                   <div className="flex-shrink-0 p-3 bg-[#0d1117] rounded-lg border border-[#30363d] w-max">
//                     {service.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{service.title}</h3>
//                     <p className="text-[#94a3b8] mb-3 md:mb-4">{service.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {service.highlights.map((highlight, i) => (
//                         <span 
//                           key={i}
//                           className="px-2.5 py-1 text-xs rounded-full bg-[#0d1117] border border-[#30363d] text-[#9ca3af]"
//                         >
//                           {highlight}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
















// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiGlobe, FiLayers, FiTrendingUp, FiDollarSign, FiPenTool, FiServer, FiCpu } from 'react-icons/fi'

// export default function Services() {
//   const services = [
//     { 
//       icon: <FiCode className="text-[#3b82f6]" size={24} />, 
//       title: "Full-Stack Development", 
//       description: "Complete MERN stack solutions with React, Node.js, and MongoDB",
//       highlights: ["Custom web apps", "API development", "Database design"]
//     },
//     { 
//       icon: <FiServer className="text-[#8b5cf6]" size={24} />, 
//       title: "Performance Optimization", 
//       description: "Lightning-fast Next.js applications with perfect Lighthouse scores",
//       highlights: ["SSR/SSG optimization", "Code splitting", "Image optimization"]
//     },
//     { 
//       icon: <FiGlobe className="text-[#0ea5e9]" size={24} />, 
//       title: "WordPress Solutions", 
//       description: "Custom WordPress & WooCommerce development",
//       highlights: ["Theme customization", "Plugin development", "E-commerce setup"]
//     },
//     { 
//       icon: <FiPenTool className="text-[#3b82f6]" size={24} />, 
//       title: "UI/UX Design", 
//       description: "Beautiful interfaces with Tailwind CSS and design systems",
//       highlights: ["Responsive design", "Design systems", "Prototyping"]
//     },
//     { 
//       icon: <FiLayers className="text-[#8b5cf6]" size={24} />, 
//       title: "Headless CMS", 
//       description: "Modern content architecture with Strapi and headless solutions",
//       highlights: ["Content modeling", "API integration", "Editor experiences"]
//     },
//     { 
//       icon: <FiDollarSign className="text-[#0ea5e9]" size={24} />, 
//       title: "Payment Integration", 
//       description: "Secure payment gateways for global transactions",
//       highlights: ["Stripe", "Flutterwave", "PayPal", "Recurring billing"]
//     },
//     { 
//       icon: <FiTrendingUp className="text-[#3b82f6]" size={24} />, 
//       title: "Digital Marketing", 
//       description: "Data-driven strategies for growth and conversions",
//       highlights: ["SEO", "Content strategy", "Conversion optimization"]
//     },
//     { 
//       icon: <FiCpu className="text-[#8b5cf6]" size={24} />, 
//       title: "Technical Consulting", 
//       description: "Architecture reviews and technical guidance",
//       highlights: ["System design", "Tech stack selection", "Code reviews"]
//     }
//   ]

//   return (
//     <section id="services" className="relative py-28 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
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
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">MY SERVICES</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                 What I Offer
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-[#94a3b8] max-w-3xl mx-auto"
//             >
//               Comprehensive solutions from technical implementation to growth strategy
//             </motion.p>
//           </div>
          
//           {/* Services grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 whileHover={{ y: -8 }}
//                 className="bg-[#161b22] rounded-xl p-6 border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300 group"
//               >
//                 <div className="mb-5 p-3 bg-[#0d1117] rounded-lg border border-[#30363d] w-max group-hover:border-[#3b82f6]/50 transition-colors duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
//                 <p className="text-[#94a3b8] mb-4">{service.description}</p>
                
//                 <div className="flex flex-wrap gap-2">
//                   {service.highlights.map((highlight, i) => (
//                     <span 
//                       key={i}
//                       className="px-3 py-1 text-xs rounded-full bg-[#0d1117] border border-[#30363d] text-[#9ca3af]"
//                     >
//                       {highlight}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

















// import { motion } from 'framer-motion';
// import { FiCode, FiGlobe, FiLayers, FiTrendingUp, FiDollarSign, FiPenTool, FiServer } from 'react-icons/fi';

// const services = [
//   { icon: <FiCode size={24} />, title: "Full-Stack Web Development", description: "MERN Stack applications with React, Node.js, and MongoDB" },
//   { icon: <FiServer size={24} />, title: "Performance Optimization", description: "Next.js applications optimized for speed and SEO" },
//   { icon: <FiGlobe size={24} />, title: "WordPress Development", description: "Custom WordPress & WooCommerce solutions" },
//   { icon: <FiPenTool size={24} />, title: "UI Design", description: "Tailwind CSS & Bootstrap interfaces" },
//   { icon: <FiLayers size={24} />, title: "Headless CMS", description: "Strapi and other headless CMS integrations" },
//   { icon: <FiDollarSign size={24} />, title: "Payment Gateways", description: "Stripe, Flutterwave, PayPal integration" },
//   { icon: <FiTrendingUp size={24} />, title: "Digital Marketing", description: "SEO, funnels, content strategy, analytics" }
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Comprehensive solutions from development to deployment and marketing
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 transition={{ duration: 0.2 }}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
//               >
//                 <div className="text-purple-500 mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }