'use client'
import { motion } from 'framer-motion'
import { FiBarChart2, FiSearch, FiUsers, FiSmartphone, FiTarget, FiActivity } from 'react-icons/fi'
import { FaGoogle, FaChartLine, FaMobileAlt } from 'react-icons/fa'
import { SiGooglesearchconsole, SiGoogleanalytics } from 'react-icons/si'

export default function TechMarketing() {
  const integratedServices = [
    {
      title: "SEO-Optimized Development",
      description: "Websites built with performance and search visibility from day one",
      icon: <SiGooglesearchconsole className="text-blue-400" size={20} />,
      color: "bg-sky-400/5",
      features: [
        "Technical SEO architecture",
        "Lightning-fast page speeds",
        "Semantic HTML structure"
      ]
    },
    {
      title: "Conversion-Focused UX",
      description: "Designs that guide users to take action",
      icon: <FiTarget className="text-blue-400" size={20} />,
      color: "bg-sky-400/5",
      features: [
        "High-conversion layouts",
        "Behavior-driven design",
        "A/B testing integration"
      ]
    },
    {
      title: "Analytics-Enabled Apps",
      description: "Applications with built-in performance tracking",
      icon: <SiGoogleanalytics className="text-blue-400" size={20} />,
      color: "bg-sky-400/5",
      features: [
        "User journey tracking",
        "Real-time dashboards",
        "Custom event monitoring"
      ]
    },
    {
      title: "Growth-Ready Platforms",
      description: "Scalable infrastructure with marketing automation",
      icon: <FaChartLine className="text-blue-400" size={20} />,
      color: "bg-sky-400/5",
      features: [
        "CRM integrations",
        "Email marketing pipelines",
        "Lead capture systems"
      ]
    }
  ]

  return (
    <section id="tech-marketing" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        <motion.div
          className="absolute top-[15%] left-[10%] text-blue-400 text-4xl md:text-6xl font-mono"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12 md:space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6 md:space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-blue-400">
                Built for Results
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed tracking-wide font-mono"
            >
              I develop technology with built-in marketing intelligence - creating products that don't just work well, but actively drive business growth.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {integratedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`p-4 md:p-6 lg:p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 ${service.color}`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 p-3 md:p-4 rounded-lg bg-white/5 border border-white/10">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-[#9ca3af] mb-3 md:mb-4">{service.description}</p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs md:text-sm text-[#9ca3af]">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 md:mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 bg-sky-400/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-12 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Technical Products That Market Themselves</h3>
                <p className="text-sm md:text-base text-[#9ca3af]">
                  Every line of code serves both functional and marketing purposes. From SEO-friendly architecture to 
                  conversion-optimized interfaces, your product becomes its own best marketing asset.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
                  <FiActivity className="text-blue-400 mx-auto mb-1 md:mb-2" size={20} />
                  <p className="text-xs md:text-sm text-[#9ca3af]">Performance Metrics</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
                  <FaMobileAlt className="text-blue-400 mx-auto mb-1 md:mb-2" size={20} />
                  <p className="text-xs md:text-sm text-[#9ca3af]">Mobile-First</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
                  <FiUsers className="text-blue-400 mx-auto mb-1 md:mb-2" size={20} />
                  <p className="text-xs md:text-sm text-[#9ca3af]">User-Centric</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center">
                  <FiSearch className="text-blue-400 mx-auto mb-1 md:mb-2" size={20} />
                  <p className="text-xs md:text-sm text-[#9ca3af]">Search-Optimized</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



















// 'use client'
// import { motion } from 'framer-motion'
// import { FiBarChart2, FiSearch, FiUsers, FiSmartphone, FiTarget, FiActivity } from 'react-icons/fi'
// import { FaGoogle, FaChartLine, FaMobileAlt } from 'react-icons/fa'
// import { SiGooglesearchconsole, SiGoogleanalytics } from 'react-icons/si'

// export default function TechMarketing() {
//   const integratedServices = [
//     {
//       title: "SEO-Optimized Development",
//       description: "Websites built with performance and search visibility from day one",
//       icon: <SiGooglesearchconsole className="text-blue-400" size={24} />,
//       color: "bg-blue-500/10",
//       features: [
//         "Technical SEO architecture",
//         "Lightning-fast page speeds",
//         "Semantic HTML structure"
//       ]
//     },
//     {
//       title: "Conversion-Focused UX",
//       description: "Designs that guide users to take action",
//       icon: <FiTarget className="text-purple-400" size={24} />,
//       color: "bg-purple-500/10",
//       features: [
//         "High-conversion layouts",
//         "Behavior-driven design",
//         "A/B testing integration"
//       ]
//     },
//     {
//       title: "Analytics-Enabled Apps",
//       description: "Applications with built-in performance tracking",
//       icon: <SiGoogleanalytics className="text-green-400" size={24} />,
//       color: "bg-green-500/10",
//       features: [
//         "User journey tracking",
//         "Real-time dashboards",
//         "Custom event monitoring"
//       ]
//     },
//     {
//       title: "Growth-Ready Platforms",
//       description: "Scalable infrastructure with marketing automation",
//       icon: <FaChartLine className="text-red-400" size={24} />,
//       color: "bg-red-500/10",
//       features: [
//         "CRM integrations",
//         "Email marketing pipelines",
//         "Lead capture systems"
//       ]
//     }
//   ]

//   return (
//     <section id="tech-marketing" className="relative py-28 bg-gradient-to-b from-[#0a0e17] to-[#05070a] text-white overflow-hidden border-t border-[#1e293b]">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div
//           className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10 blur-[120px]"
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
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="space-y-20"
//         >
//           {/* Header */}
//           <div className="text-center space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-5 py-2.5 rounded-full bg-black/30 border border-blue-500/40 shadow-lg backdrop-blur-sm"
//               whileHover={{ scale: 1.02 }}
//             >
//               <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">TECH-DRIVEN GROWTH</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-5xl md:text-6xl font-bold leading-tight"
//             >
//               <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//                 Built for Results
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed tracking-wide"
//             >
//               I develop technology with built-in marketing intelligence - creating products that don't just work well, but actively drive business growth.
//             </motion.p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {integratedServices.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 + index * 0.1 }}
//                 className={`p-8 rounded-xl border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300 ${service.color}`}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex items-start gap-6">
//                   <div className="flex-shrink-0 p-4 rounded-lg bg-black/30 border border-[#1e293b]">
//                     {service.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
//                     <p className="text-[#94a3b8] mb-4">{service.description}</p>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, i) => (
//                         <li key={i} className="flex items-center text-sm text-[#9ca3af]">
//                           <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Results Banner */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6 }}
//             className="mt-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-[#1e293b] rounded-xl p-8 md:p-12 backdrop-blur-sm"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//               <div className="md:col-span-2">
//                 <h3 className="text-2xl font-bold text-white mb-4">Technical Products That Market Themselves</h3>
//                 <p className="text-[#94a3b8]">
//                   Every line of code serves both functional and marketing purposes. From SEO-friendly architecture to 
//                   conversion-optimized interfaces, your product becomes its own best marketing asset.
//                 </p>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-black/20 border border-[#1e293b] rounded-lg p-4 text-center">
//                   <FiActivity className="text-blue-400 mx-auto mb-2" size={24} />
//                   <p className="text-sm text-[#9ca3af]">Performance Metrics</p>
//                 </div>
//                 <div className="bg-black/20 border border-[#1e293b] rounded-lg p-4 text-center">
//                   <FaMobileAlt className="text-cyan-400 mx-auto mb-2" size={24} />
//                   <p className="text-sm text-[#9ca3af]">Mobile-First</p>
//                 </div>
//                 <div className="bg-black/20 border border-[#1e293b] rounded-lg p-4 text-center">
//                   <FiUsers className="text-purple-400 mx-auto mb-2" size={24} />
//                   <p className="text-sm text-[#9ca3af]">User-Centric</p>
//                 </div>
//                 <div className="bg-black/20 border border-[#1e293b] rounded-lg p-4 text-center">
//                   <FiSearch className="text-green-400 mx-auto mb-2" size={24} />
//                   <p className="text-sm text-[#9ca3af]">Search-Optimized</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }