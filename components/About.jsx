// 'use client'
// import { motion } from 'framer-motion'
// import { FiGlobe, FiCode, FiTrendingUp, FiLayers, FiDatabase, FiCpu, FiServer, FiCloud, FiPackage, FiShoppingCart, FiCreditCard, FiGitBranch, FiMessageSquare } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaFigma, FaHtml5, FaCss3Alt, FaBootstrap, FaWordpress, FaGithub } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiJavascript, SiStrapi, SiWoo, SiVercel, SiNetlify, SiExpress, SiStripe, SiCpanel, SiMysql } from 'react-icons/si'
// import { GrDeploy } from 'react-icons/gr'

// export default function About() {
//   const skills = {
//     frontend: [
//       { name: 'Next.js 14', icon: <SiNextdotjs className="text-white" />, color: 'bg-gray-800' },
//       { name: 'React', icon: <FaReact className="text-blue-400" />, color: 'bg-[#087ea4]/10' },
//       { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, color: 'bg-[#F7DF1E]/10' },
//       { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, color: 'bg-[#3178c6]/10' },
//       { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, color: 'bg-[#E34F26]/10' },
//       { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, color: 'bg-[#1572B6]/10' },
//       { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, color: 'bg-[#06b6d4]/10' },
//       { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" />, color: 'bg-[#7952B3]/10' }
//     ],
//     backend: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, color: 'bg-[#339933]/10' },
//       { name: 'Express.js', icon: <SiExpress className="text-gray-300" />, color: 'bg-gray-700' },
//       { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'bg-[#47A248]/10' },
//       { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, color: 'bg-[#336791]/10' },
//       { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, color: 'bg-[#4479A1]/10' },
//       { name: 'REST APIs', icon: <FiMessageSquare className="text-green-400" />, color: 'bg-green-900/10' },
//       { name: 'Strapi CMS', icon: <SiStrapi className="text-[#4945FF]" />, color: 'bg-[#4945FF]/10' }
//     ],
//     tools: [
//       { name: 'Git/GitHub', icon: <FaGithub className="text-gray-300" />, color: 'bg-gray-700' },
//       { name: 'Vercel', icon: <SiVercel className="text-white" />, color: 'bg-gray-800' },
//       { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" />, color: 'bg-[#00C7B7]/10' },
//       { name: 'VPS Deployment', icon: <GrDeploy className="text-[#0080FF]" />, color: 'bg-[#0080FF]/10' },
//       { name: 'cPanel', icon: <SiCpanel className="text-[#FF6C2C]" />, color: 'bg-[#FF6C2C]/10' },
//       { name: 'Stripe', icon: <SiStripe className="text-[#635BFF]" />, color: 'bg-[#635BFF]/10' }
//     ],
//     platforms: [
//       { name: 'WordPress', icon: <FaWordpress className="text-[#21759B]" />, color: 'bg-[#21759B]/10' },
//       { name: 'WooCommerce', icon: <SiWoo className="text-[#96588A]" />, color: 'bg-[#96588A]/10' },
//       { name: 'Google Ads', icon: <FiTrendingUp className="text-blue-500" />, color: 'bg-blue-900/10' },
//       { name: 'Meta Ads', icon: <FiCreditCard className="text-blue-400" />, color: 'bg-blue-800/10' }
//     ],
//     design: [
//       { name: 'Figma', icon: <FaFigma className="text-purple-500" />, color: 'bg-[#A259FF]/10' },
//       { name: 'UI/UX Design', icon: <FiLayers className="text-pink-400" />, color: 'bg-[#EC4899]/10' }
//     ]
//   }

//   return (
//     <section id="about" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
//       {/* Floating tech orbs - KEPT ORIGINAL */}
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
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
//         >
//           {/* Left Column - Text Content - UPDATED */}
//           <div className="space-y-8 md:space-y-12">
//             {/* Header - UPDATED */}
//             <div className="space-y-4 md:space-y-6">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//                 style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
//               >
//                 <span className="text-blue-400">
//                   About Me
//                 </span>
//               </motion.h2>
//             </div>

//             {/* Content - UPDATED */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-6 md:space-y-8"
//             >
//               <p className="text-base md:text-lg lg:text-xl text-[#9ca3af] leading-relaxed tracking-wide"
//                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
//                 I'm a passionate full-stack MERN stack developer and tech entrepreneur with over 5 years of experience building modern web applications. 
//                 I specialize in creating end-to-end solutions using Next.js, React, Node.js, and MongoDB, with expertise in TypeScript, Tailwind CSS, and 
//                 modern deployment practices. My journey from Computer Science student to founder of Vibeica Technology has equipped me with both technical 
//                 depth and business acumen to deliver scalable, high-performance applications that solve real-world problems.
//               </p>

//               {/* Feature Cards - UPDATED */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
//                 {[
//                   {
//                     icon: <FiGlobe className="text-blue-400" size={20} />,
//                     title: "Global Reach",
//                     content: "Developed solutions for clients across 15+ countries worldwide",
//                     color: "bg-sky-400/5"
//                   },
//                   {
//                     icon: <FiCode className="text-blue-400" size={20} />,
//                     title: "Full-Stack Expertise",
//                     content: "Complete MERN stack development with TypeScript and modern tooling",
//                     color: "bg-sky-400/5"
//                   },
//                   {
//                     icon: <FiServer className="text-blue-400" size={20} />,
//                     title: "Production Deployment",
//                     content: "VPS, cPanel, Vercel, Netlify deployment and server management",
//                     color: "bg-sky-400/5"
//                   },
//                   {
//                     icon: <FiPackage className="text-blue-400" size={20} />,
//                     title: "E-commerce & CMS",
//                     content: "WordPress, WooCommerce, Strapi CMS, and custom solutions",
//                     color: "bg-sky-400/5"
//                   }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     className={`p-4 md:p-5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 ${item.color}`}
//                     whileHover={{ y: -5 }}
//                     style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
//                   >
//                     <div className="flex items-start gap-3 md:gap-4">
//                       <div className="flex-shrink-0 p-2 md:p-3 rounded-lg bg-white/5 border border-white/10">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{item.title}</h3>
//                         <p className="text-[#9ca3af] text-xs md:text-sm leading-relaxed">{item.content}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Terminal - ENHANCED WITH MORE SKILLS */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative h-full mt-8 lg:mt-0"
//           >
//             {/* Terminal glow effect - KEPT ORIGINAL */}
//             <motion.div
//               className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-70 blur-xl"
//               animate={{
//                 opacity: [0.5, 0.7, 0.5]
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             />
            
//             {/* Terminal - ENHANCED */}
//             <div className="relative bg-[#0f172a] border border-[#1e293b] rounded-xl overflow-hidden shadow-2xl h-full min-h-[450px] md:min-h-[550px]">
//               {/* Terminal Header - KEPT ORIGINAL */}
//               <div className="h-10 md:h-12 bg-[#0f172a] border-b border-[#1e293b] flex items-center px-3 md:px-4">
//                 <div className="flex space-x-1.5 md:space-x-2 mr-3 md:mr-4">
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs font-mono text-[#9ca3af]">yonas@portfolio:~</div>
//               </div>
              
//               {/* Terminal Content - ENHANCED */}
//               <div className="p-4 md:p-6 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] bg-[#020617] flex items-center font-mono">
//                 <div className="w-full text-xs md:text-sm overflow-y-auto max-h-[450px] md:max-h-[500px]">
//                   <div className="text-[#9ca3af] mb-4 md:mb-6">
//                     <span className="text-green-400">$</span> cat tech-stack.json
//                   </div>
                  
//                   <div className="text-white space-y-6 md:space-y-8">
//                     {Object.entries(skills).map(([category, items], catIndex) => (
//                       <div key={catIndex}>
//                         <span className="text-blue-400">"{category}"</span>: [
//                         <div className="ml-4 md:ml-8 mt-3 md:mt-4 flex flex-wrap gap-2 md:gap-3">
//                           {items.map((tech, techIndex) => (
//                             <motion.div
//                               key={techIndex}
//                               initial={{ opacity: 0, y: 10 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.7 + (catIndex * 0.3) + (techIndex * 0.1) }}
//                               className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#1e293b] flex items-center gap-1.5 md:gap-2 ${tech.color} hover:border-blue-400/50 transition-colors duration-300`}
//                               whileHover={{ scale: 1.05 }}
//                             >
//                               <span className="text-sm md:text-lg flex-shrink-0">{tech.icon}</span>
//                               <span className="text-xs md:text-sm flex-shrink-0">"{tech.name}"</span>
//                             </motion.div>
//                           ))}
//                         </div>
//                         ]{catIndex < Object.keys(skills).length - 1 ? ',' : ''}
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="text-[#9ca3af] mt-8 md:mt-12 pb-4">
//                     <div className="mb-2">
//                       <span className="text-green-400">$</span> npm run --skills
//                     </div>
//                     <div className="text-xs text-blue-400">
//                       ↳ Total: {Object.values(skills).flat().length} technologies mastered
//                     </div>
//                     <div className="mt-6">
//                       <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

























'use client'
import { motion } from 'framer-motion'
import { FiGlobe, FiCode, FiTrendingUp, FiLayers, FiDatabase, FiCpu, FiServer, FiCloud, FiPackage, FiMonitor } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaFigma, FaBootstrap, FaWordpress, FaGithub, FaStripe, FaAws } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiJavascript, SiStrapi, SiWoo, SiNetlify, SiVercel, SiGoogleads, SiMeta, SiCpanel, SiExpress, SiRedux, SiGraphql, SiDocker, SiJest } from 'react-icons/si'

export default function About() {
  const skills = {
    frontend: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, color: 'bg-gray-800' },
      { name: 'React', icon: <FaReact className="text-blue-400" />, color: 'bg-[#087ea4]/10' },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, color: 'bg-[#3178c6]/10' },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, color: 'bg-[#F7DF1E]/10' },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" />, color: 'bg-[#06b6d4]/10' },
      // { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" />, color: 'bg-[#7952B3]/10' },
      // { name: 'Redux', icon: <SiRedux className="text-purple-400" />, color: 'bg-[#764ABC]/10' }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, color: 'bg-[#339933]/10' },
      { name: 'Express', icon: <SiExpress className="text-gray-300" />, color: 'bg-gray-700' },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'bg-[#47A248]/10' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, color: 'bg-[#336791]/10' },
      { name: 'REST APIs', icon: <FiServer className="text-blue-300" />, color: 'bg-[#4285F4]/10' },
      // { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" />, color: 'bg-[#E535AB]/10' },
      { name: 'Strapi CMS', icon: <SiStrapi className="text-blue-500" />, color: 'bg-[#4945FF]/10' }
    ],
    tools: [
      { name: 'Git/GitHub', icon: <FaGithub className="text-white" />, color: 'bg-gray-800' },
      { name: 'Docker', icon: <SiDocker className="text-blue-400" />, color: 'bg-[#2496ED]/10' },
      // { name: 'Jest', icon: <SiJest className="text-red-400" />, color: 'bg-[#C21325]/10' },
      { name: 'cPanel', icon: <SiCpanel className="text-orange-500" />, color: 'bg-[#FF6C2C]/10' },
      { name: 'VPS Deployment', icon: <FiCloud className="text-green-300" />, color: 'bg-[#3ECF8E]/10' },
      { name: 'API Integration', icon: <FiPackage className="text-green-400" />, color: 'bg-[#10B981]/10' }
    ],
    platforms: [
      { name: 'Vercel', icon: <SiVercel className="text-white" />, color: 'bg-black' },
      { name: 'Netlify', icon: <SiNetlify className="text-teal-400" />, color: 'bg-[#00C7B7]/10' },
      { name: 'AWS', icon: <FaAws className="text-orange-400" />, color: 'bg-[#FF9900]/10' },
      { name: 'WordPress', icon: <FaWordpress className="text-blue-300" />, color: 'bg-[#21759B]/10' },
      { name: 'WooCommerce', icon: <SiWoo className="text-purple-500" />, color: 'bg-[#96588A]/10' }
    ],
    integrations: [
      { name: 'Stripe', icon: <FaStripe className="text-purple-400" />, color: 'bg-[#635BFF]/10' },
      { name: 'Google Ads', icon: <SiGoogleads className="text-blue-500" />, color: 'bg-[#4285F4]/10' },
      { name: 'Meta Ads', icon: <SiMeta className="text-blue-600" />, color: 'bg-[#0066E3]/10' },
    ],
    // design: [
    //   { name: 'Figma', icon: <FaFigma className="text-purple-500" />, color: 'bg-[#A259FF]/10' },
    //   { name: 'UI/UX', icon: <FiLayers className="text-pink-400" />, color: 'bg-[#EC4899]/10' },
    //   { name: 'Responsive', icon: <FiMonitor className="text-blue-300" />, color: 'bg-[#3B82F6]/10' }
    // ]
  }

  return (
    <section id="about" className="relative py-16 md:py-32 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
      {/* Floating tech orbs - KEPT ORIGINAL */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start"
        >
          {/* Left Column - Text Content - UPDATED */}
          <div className="space-y-8 md:space-y-12">
            {/* Header - UPDATED */}
            <div className="space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-blue-400">
                  About Me
                </span>
              </motion.h2>
            </div>

            {/* Content - UPDATED */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 md:space-y-10"
            >
              <div className="space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-[#9ca3af] leading-relaxed tracking-wide font-mono">
                  I'm a passionate full-stack MERN developer with 4+ years of experience building scalable web applications. I specialize in creating seamless digital experiences that combine cutting-edge technology with business objectives.
                </p>
                
                <p className="text-base md:text-sm lg:text-lg text-[#9ca3af] leading-relaxed tracking-wide font-mono">
                  My expertise spans across the entire development lifecycle - from concept and design to deployment and optimization. I've delivered solutions for diverse industries including e-commerce, SaaS platforms, and enterprise applications, always focusing on performance, scalability, and user experience.
                </p>
              </div>

              {/* Feature Cards - UPDATED */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  // {
                  //   icon: <FiGlobe className="text-blue-400" size={20} />,
                  //   title: "Global Experience",
                  //   content: "Worked with 50+ clients across 15+ countries",
                  //   color: "bg-sky-400/5"
                  // },
                  {
                    icon: <FiCode className="text-blue-400" size={20} />,
                    title: "Full-Stack Development",
                    content: "End-to-end MERN stack application development",
                    color: "bg-sky-400/5"
                  },
                  {
                    icon: <FiTrendingUp className="text-blue-400" size={20} />,
                    title: "Performance Optimization",
                    content: "95+ Lighthouse scores for optimal UX",
                    color: "bg-sky-400/5"
                  },
                  {
                    icon: <FiDatabase className="text-blue-400" size={20} />,
                    title: "Database Architecture",
                    content: "Scalable MongoDB & PostgreSQL solutions",
                    color: "bg-sky-400/5"
                  },
                  {
                    icon: <FiCpu className="text-blue-400" size={20} />,
                    title: "API Development",
                    content: "REST & GraphQL APIs with secure authentication",
                    color: "bg-sky-400/5"
                  },
                  {
                    icon: <FiCloud className="text-blue-400" size={20} />,
                    title: "DevOps & Deployment",
                    content: "CI/CD, VPS, Docker & cloud deployment",
                    color: "bg-sky-400/5"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`p-4 md:p-5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 ${item.color}`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="flex-shrink-0 p-2 md:p-3 rounded-lg bg-white/5 border border-white/10">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{item.title}</h3>
                        <p className="text-[#9ca3af] text-xs md:text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Terminal - ENHANCED WITH MORE SKILLS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full mt-8 lg:mt-0"
          >
            {/* Terminal glow effect - KEPT ORIGINAL */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-70 blur-xl"
              animate={{
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
            
            {/* Terminal - ENHANCED HEIGHT */}
            <div className="relative bg-[#0f172a] border border-[#1e293b] rounded-xl overflow-hidden shadow-2xl h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
              {/* Terminal Header - KEPT ORIGINAL */}
              <div className="h-10 md:h-12 bg-[#0f172a] border-b border-[#1e293b] flex items-center px-3 md:px-4">
                <div className="flex space-x-1.5 md:space-x-2 mr-3 md:mr-4">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-[#9ca3af]">yonas@portfolio:~</div>
              </div>
              
              {/* Terminal Content - ENHANCED WITH SCROLL */}
              <div className="p-4 md:p-6 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] bg-[#020617] flex items-start font-mono overflow-y-auto">
                <div className="w-full text-xs md:text-sm">
                  <div className="text-[#9ca3af] mb-4 md:mb-6">
                    <span className="text-green-400">$</span> cat skills.json
                  </div>
                  
                  <div className="text-white space-y-6 md:space-y-8">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                      <div key={catIndex}>
                        <span className="text-blue-400">"{category}"</span>: [
                        <div className="ml-4 md:ml-8 mt-2 md:mt-3 flex flex-wrap gap-2 md:gap-3">
                          {items.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 + (catIndex * 0.2) + (techIndex * 0.05) }}
                              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#1e293b] flex items-center gap-1.5 md:gap-2 ${tech.color}`}
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-sm md:text-lg">{tech.icon}</span>
                              <span className="text-xs md:text-sm whitespace-nowrap">"{tech.name}"</span>
                            </motion.div>
                          ))}
                        </div>
                        ]{catIndex < Object.keys(skills).length - 1 ? ',' : ''}
                      </div>
                    ))}
                  </div>

                  <div className="text-[#9ca3af] mt-2 md:mt-4 pb-4">
                    <div className="mb-2">
                      <span className="text-green-400">$</span> npm run --skills
                    </div>
                    <div className="text-xs text-blue-400">
                      ↳ Total: {Object.values(skills).flat().length} technologies mastered
                    </div>
                    {/* <div className="mt-6">
                      <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
                    </div> */}
                  </div>
                  
                  <div className="text-[#9ca3af] ">
                    <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
                  </div>
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
// import { FiGlobe, FiCode, FiTrendingUp, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'

// export default function About() {
//   const skills = {
//     frontend: [
//       { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, color: 'bg-gray-800' },
//       { name: 'React', icon: <FaReact className="text-blue-400" />, color: 'bg-[#087ea4]/10' },
//       { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, color: 'bg-[#3178c6]/10' },
//       { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" />, color: 'bg-[#06b6d4]/10' }
//     ],
//     backend: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, color: 'bg-[#339933]/10' },
//       { name: 'Express', icon: <FiCode className="text-gray-300" />, color: 'bg-gray-700' },
//       { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'bg-[#47A248]/10' },
//       { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, color: 'bg-[#336791]/10' }
//     ],
//     design: [
//       { name: 'Figma', icon: <FaFigma className="text-purple-500" />, color: 'bg-[#A259FF]/10' },
//       { name: 'UI/UX', icon: <FiLayers className="text-pink-400" />, color: 'bg-[#EC4899]/10' }
//     ]
//   }

//   return (
//     <section id="about" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
//       {/* Floating tech orbs - KEPT ORIGINAL */}
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
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
//         >
//           {/* Left Column - Text Content - UPDATED */}
//           <div className="space-y-8 md:space-y-12">
//             {/* Header - UPDATED */}
//             <div className="space-y-4 md:space-y-6">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//               >
//                 <span className="text-blue-400">
//                   About Me
//                 </span>
//               </motion.h2>
//             </div>

//             {/* Content - UPDATED */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-6 md:space-y-8"
//             >
//               <p className="text-base md:text-lg lg:text-xl text-[#9ca3af] leading-relaxed tracking-wide font-mono">
//                 I'm a full-stack developer with expertise in modern web technologies. I combine technical skills with strategic thinking to build applications that deliver exceptional user experiences and measurable business results.
//               </p>

//               {/* Feature Cards - UPDATED */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
//                 {[
//                   {
//                     icon: <FiGlobe className="text-blue-400" size={20} />,
//                     title: "Global Experience",
//                     content: "Worked with clients across 15+ countries",
//                     color: "bg-sky-400/5"
//                   },
//                   {
//                     icon: <FiCode className="text-blue-400" size={20} />,
//                     title: "Full-Stack Development",
//                     content: "End-to-end web application development",
//                     color: "bg-sky-400/5"
//                   },
//                   {
//                     icon: <FiTrendingUp className="text-blue-400" size={20} />,
//                     title: "Performance Optimization",
//                     content: "Speed-focused solutions for better UX",
//                     color: "bg-sky-400/5"
//                   },
//                   {
//                     icon: <FiDatabase className="text-blue-400" size={20} />,
//                     title: "Database Architecture",
//                     content: "Scalable and efficient data solutions",
//                     color: "bg-sky-400/5"
//                   }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     className={`p-4 md:p-5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 ${item.color}`}
//                     whileHover={{ y: -5 }}
//                   >
//                     <div className="flex items-start gap-3 md:gap-4">
//                       <div className="flex-shrink-0 p-2 md:p-3 rounded-lg bg-white/5 border border-white/10">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{item.title}</h3>
//                         <p className="text-[#9ca3af] text-xs md:text-sm leading-relaxed">{item.content}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Terminal - PERFECT AS IS, NO CHANGES */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative h-full mt-8 lg:mt-0"
//           >
//             {/* Terminal glow effect - KEPT ORIGINAL */}
//             <motion.div
//               className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-70 blur-xl"
//               animate={{
//                 opacity: [0.5, 0.7, 0.5]
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             />
            
//             {/* Terminal - KEPT ORIGINAL */}
//             <div className="relative bg-[#0f172a] border border-[#1e293b] rounded-xl overflow-hidden shadow-2xl h-full min-h-[400px] md:min-h-[500px]">
//               {/* Terminal Header - KEPT ORIGINAL */}
//               <div className="h-10 md:h-12 bg-[#0f172a] border-b border-[#1e293b] flex items-center px-3 md:px-4">
//                 <div className="flex space-x-1.5 md:space-x-2 mr-3 md:mr-4">
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs font-mono text-[#9ca3af]">yonas@portfolio:~</div>
//               </div>
              
//               {/* Terminal Content - KEPT ORIGINAL */}
//               <div className="p-4 md:p-6 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] bg-[#020617] flex items-center font-mono">
//                 <div className="w-full text-xs md:text-sm">
//                   <div className="text-[#9ca3af] mb-4 md:mb-6">
//                     <span className="text-green-400">$</span> cat skills.json
//                   </div>
                  
//                   <div className="text-white space-y-4 md:space-y-8">
//                     {Object.entries(skills).map(([category, items], catIndex) => (
//                       <div key={catIndex}>
//                         <span className="text-blue-400">"{category}"</span>: [
//                         <div className="ml-4 md:ml-8 mt-2 md:mt-3 flex flex-wrap gap-2 md:gap-3">
//                           {items.map((tech, techIndex) => (
//                             <motion.div
//                               key={techIndex}
//                               initial={{ opacity: 0, y: 10 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.7 + (catIndex * 0.3) + (techIndex * 0.1) }}
//                               className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#1e293b] flex items-center gap-1.5 md:gap-2 ${tech.color}`}
//                               whileHover={{ scale: 1.05 }}
//                             >
//                               <span className="text-sm md:text-lg">{tech.icon}</span>
//                               <span className="text-xs md:text-sm">"{tech.name}"</span>
//                             </motion.div>
//                           ))}
//                         </div>
//                         ]{catIndex < Object.keys(skills).length - 1 ? ',' : ''}
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="text-[#9ca3af] mt-6 md:mt-10">
//                     <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGlobe, FiCode, FiTrendingUp, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'

// export default function About() {
//   const skills = {
//     frontend: [
//       { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, color: 'bg-white/5' },
//       { name: 'React', icon: <FaReact className="text-blue-400" />, color: 'bg-white/5' },
//       { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, color: 'bg-white/5' },
//       { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-400" />, color: 'bg-white/5' }
//     ],
//     backend: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-blue-400" />, color: 'bg-white/5' },
//       { name: 'Express', icon: <FiCode className="text-blue-400" />, color: 'bg-white/5' },
//       { name: 'MongoDB', icon: <SiMongodb className="text-blue-400" />, color: 'bg-white/5' },
//       { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, color: 'bg-white/5' }
//     ],
//     design: [
//       { name: 'Figma', icon: <FaFigma className="text-blue-400" />, color: 'bg-white/5' },
//       { name: 'UI/UX', icon: <FiLayers className="text-blue-400" />, color: 'bg-white/5' }
//     ]
//   }

//   return (
//     <section id="about" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
//         >
//           {/* Left Column - Text Content */}
//           <div className="space-y-8 md:space-y-12">
//             {/* Header */}
//             <div className="space-y-4 md:space-y-6">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//               >
//                 <span className="text-blue-400">
//                   About Me
//                 </span>
//               </motion.h2>
              
//               {/* Developer tag line */}
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400 animate-pulse"></div>
//                 <span className="text-[#9ca3af] text-sm md:text-base font-mono tracking-wider">DEVELOPER_PROFILE</span>
//               </div>
//             </div>

//             {/* Content */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-6 md:space-y-8"
//             >
//               <p className="text-base md:text-lg lg:text-xl text-[#9ca3af] leading-relaxed tracking-wide font-mono">
//                 I'm a full-stack developer with expertise in modern web technologies. I combine technical skills with strategic thinking to build applications that deliver exceptional user experiences and measurable business results.
//               </p>

//               {/* Feature Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
//                 {[
//                   {
//                     icon: <FiGlobe className="text-blue-400" size={20} />,
//                     title: "Global Experience",
//                     content: "Worked with clients across 15+ countries",
//                     color: "bg-white/5"
//                   },
//                   {
//                     icon: <FiCode className="text-blue-400" size={20} />,
//                     title: "Full-Stack Development",
//                     content: "End-to-end web application development",
//                     color: "bg-white/5"
//                   },
//                   {
//                     icon: <FiTrendingUp className="text-blue-400" size={20} />,
//                     title: "Performance Optimization",
//                     content: "Speed-focused solutions for better UX",
//                     color: "bg-white/5"
//                   },
//                   {
//                     icon: <FiDatabase className="text-blue-400" size={20} />,
//                     title: "Database Architecture",
//                     content: "Scalable and efficient data solutions",
//                     color: "bg-white/5"
//                   }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     className={`p-4 md:p-5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 ${item.color}`}
//                     whileHover={{ y: -5 }}
//                   >
//                     <div className="flex items-start gap-3 md:gap-4">
//                       <div className="flex-shrink-0 p-2 md:p-3 rounded-lg bg-white/5 border border-white/10">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{item.title}</h3>
//                         <p className="text-[#9ca3af] text-xs md:text-sm leading-relaxed">{item.content}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Terminal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative h-full mt-8 lg:mt-0"
//           >
//             {/* Terminal */}
//             <div className="relative bg-[#020617] border border-white/10 rounded-xl overflow-hidden shadow-lg h-full min-h-[400px] md:min-h-[500px]">
//               {/* Terminal Header */}
//               <div className="h-10 md:h-12 bg-[#020617] border-b border-white/10 flex items-center px-3 md:px-4">
//                 <div className="flex space-x-1.5 md:space-x-2 mr-3 md:mr-4">
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs font-mono text-[#9ca3af]">yonas@portfolio:~</div>
//               </div>
              
//               {/* Terminal Content */}
//               <div className="p-4 md:p-6 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] bg-[#0a0e14] flex items-center font-mono">
//                 <div className="w-full text-xs md:text-sm">
//                   <div className="text-[#9ca3af] mb-4 md:mb-6">
//                     <span className="text-green-400">$</span> cat skills.json
//                   </div>
                  
//                   <div className="text-white space-y-4 md:space-y-6">
//                     {Object.entries(skills).map(([category, items], catIndex) => (
//                       <div key={catIndex}>
//                         <span className="text-blue-400">"{category}"</span>: [
//                         <div className="ml-4 md:ml-6 mt-2 md:mt-3 flex flex-wrap gap-2 md:gap-3">
//                           {items.map((tech, techIndex) => (
//                             <motion.div
//                               key={techIndex}
//                               initial={{ opacity: 0, y: 10 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.7 + (catIndex * 0.3) + (techIndex * 0.1) }}
//                               className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/10 flex items-center gap-1.5 md:gap-2 ${tech.color}`}
//                               whileHover={{ scale: 1.05 }}
//                             >
//                               <span className="text-sm md:text-lg">{tech.icon}</span>
//                               <span className="text-xs md:text-sm">"{tech.name}"</span>
//                             </motion.div>
//                           ))}
//                         </div>
//                         ]{catIndex < Object.keys(skills).length - 1 ? ',' : ''}
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="text-[#9ca3af] mt-6 md:mt-10">
//                     <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Tech stats below terminal on mobile */}
//             <div className="grid grid-cols-2 gap-4 mt-6 md:hidden">
//               <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
//                 <div className="text-lg font-bold text-blue-400">5+</div>
//                 <div className="text-xs text-[#9ca3af] font-mono mt-1">Years Exp</div>
//               </div>
//               <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
//                 <div className="text-lg font-bold text-blue-400">50+</div>
//                 <div className="text-xs text-[#9ca3af] font-mono mt-1">Projects</div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
        
//         {/* Additional skills section for mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="mt-12 md:mt-16 lg:hidden"
//         >
//           <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-6 text-center">Core Technologies</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {Object.values(skills).flat().map((tech, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.1 * index }}
//                 className={`p-3 rounded-xl border border-white/10 flex flex-col items-center justify-center gap-2 ${tech.color}`}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <span className="text-xl">{tech.icon}</span>
//                 <span className="text-xs md:text-sm text-white font-mono">{tech.name}</span>
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
// import { FiGlobe, FiCode, FiTrendingUp, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'

// export default function About() {
//   const skills = {
//     frontend: [
//       { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, color: 'bg-gray-800' },
//       { name: 'React', icon: <FaReact className="text-blue-400" />, color: 'bg-[#087ea4]/10' },
//       { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, color: 'bg-[#3178c6]/10' },
//       { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" />, color: 'bg-[#06b6d4]/10' }
//     ],
//     backend: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, color: 'bg-[#339933]/10' },
//       { name: 'Express', icon: <FiCode className="text-gray-300" />, color: 'bg-gray-700' },
//       { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'bg-[#47A248]/10' },
//       { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" />, color: 'bg-[#336791]/10' }
//     ],
//     design: [
//       { name: 'Figma', icon: <FaFigma className="text-purple-500" />, color: 'bg-[#A259FF]/10' },
//       { name: 'UI/UX', icon: <FiLayers className="text-pink-400" />, color: 'bg-[#EC4899]/10' }
//     ]
//   }

//   return (
//     <section id="about" className="relative py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] text-white overflow-hidden border-t border-[#1e293b]">
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
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//         >
//           {/* Left Column - Text Content */}
//           <div className="space-y-12">
//             {/* Header */}
//             <div className="space-y-8">
            

//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-5xl md:text-6xl font-bold leading-tight"
//               >
//                 <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                   About Me
//                 </span>
//               </motion.h2>
//             </div>

//             {/* Content */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-8"
//             >
//               <p className="text-xl text-[#94a3b8] leading-relaxed tracking-wide">
//                 I'm a full-stack developer with expertise in modern web technologies and digital marketing. I combine technical skills with strategic thinking to build applications that deliver exceptional user experiences and measurable business results.
//               </p>

//               {/* Feature Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {[
//                   {
//                     icon: <FiGlobe className="text-blue-400" size={24} />,
//                     title: "Global Experience",
//                     content: "Worked with clients across 15+ countries",
//                     color: "bg-blue-500/10"
//                   },
//                   {
//                     icon: <FiCode className="text-indigo-400" size={24} />,
//                     title: "Full-Stack Development",
//                     content: "End-to-end web application development",
//                     color: "bg-indigo-500/10"
//                   },
//                   {
//                     icon: <FiTrendingUp className="text-purple-400" size={24} />,
//                     title: "Performance Optimization",
//                     content: "Speed-focused solutions for better UX",
//                     color: "bg-purple-500/10"
//                   },
//                   {
//                     icon: <FiDatabase className="text-blue-300" size={24} />,
//                     title: "Database Architecture",
//                     content: "Scalable and efficient data solutions",
//                     color: "bg-blue-400/10"
//                   }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     className={`p-5 rounded-xl border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300 ${item.color}`}
//                     whileHover={{ y: -5 }}
//                   >
//                     <div className="flex items-start gap-4">
//                       <div className="flex-shrink-0 p-3 rounded-lg bg-black/30 border border-[#1e293b]">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
//                         <p className="text-[#94a3b8] text-sm leading-relaxed">{item.content}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Terminal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative h-full"
//           >
//             {/* Terminal glow effect */}
//             <motion.div
//               className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl opacity-70 blur-xl"
//               animate={{
//                 opacity: [0.5, 0.7, 0.5]
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             />
            
//             {/* Terminal */}
//             <div className="relative bg-[#0f172a] border border-[#1e293b] rounded-xl overflow-hidden shadow-2xl h-full min-h-[500px]">
//               {/* Terminal Header */}
//               <div className="h-12 bg-[#0f172a] border-b border-[#1e293b] flex items-center px-4">
//                 <div className="flex space-x-2 mr-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs font-mono text-[#9ca3af]">yonas@portfolio:~</div>
//               </div>
              
//               {/* Terminal Content */}
//               <div className="p-6 h-[calc(100%-3rem)] bg-[#020617] flex items-center font-mono">
//                 <div className="w-full text-sm">
//                   <div className="text-[#9ca3af] mb-6">
//                     <span className="text-green-400">$</span> cat skills.json
//                   </div>
                  
//                   <div className="text-white space-y-8">
//                     {Object.entries(skills).map(([category, items], catIndex) => (
//                       <div key={catIndex}>
//                         <span className="text-blue-400">"{category}"</span>: [
//                         <div className="ml-8 mt-3 flex flex-wrap gap-3">
//                           {items.map((tech, techIndex) => (
//                             <motion.div
//                               key={techIndex}
//                               initial={{ opacity: 0, y: 10 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.7 + (catIndex * 0.3) + (techIndex * 0.1) }}
//                               className={`px-4 py-2 rounded-lg border border-[#1e293b] flex items-center gap-2 ${tech.color}`}
//                               whileHover={{ scale: 1.05 }}
//                             >
//                               <span className="text-lg">{tech.icon}</span>
//                               <span className="text-xs">"{tech.name}"</span>
//                             </motion.div>
//                           ))}
//                         </div>
//                         ]{catIndex < Object.keys(skills).length - 1 ? ',' : ''}
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="text-[#9ca3af] mt-10">
//                     <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


















// 'use client'
// import { motion } from 'framer-motion'
// import { FiGlobe, FiCode, FiTrendingUp, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi'

// export default function About() {
//   return (
//     <section id="about" className="relative py-24 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
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
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//         >
//           {/* Left Column - Text Content */}
//           <div className="space-y-10">
//             {/* Header */}
//             <div className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#161b22] border border-[#3b82f6]/40 shadow-sm"
//               >
//                 <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//                 <span className="text-sm font-medium text-[#9ca3af] tracking-wider">PROFESSIONAL PROFILE</span>
//               </motion.div>

//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-5xl md:text-6xl font-bold leading-tight"
//               >
//                 <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                   About Me
//                 </span>
//               </motion.h2>
//             </div>

//             {/* Content */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-8"
//             >
//               <p className="text-xl text-[#94a3b8] leading-relaxed tracking-wide">
//                 Full-stack developer and digital marketer with 4+ years of experience creating high-performance web applications and growth-focused strategies.
//               </p>

//               {/* Feature Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {[
//                   {
//                     icon: <FiGlobe className="text-[#3b82f6]" size={22} />,
//                     title: "Global Experience",
//                     content: "Working with international clients across multiple timezones"
//                   },
//                   {
//                     icon: <FiCode className="text-[#8b5cf6]" size={22} />,
//                     title: "Full-Stack Expertise",
//                     content: "From database to UI with modern frameworks"
//                   },
//                   {
//                     icon: <FiTrendingUp className="text-[#0ea5e9]" size={22} />,
//                     title: "Growth Focused",
//                     content: "Data-driven marketing strategies"
//                   },
//                   {
//                     icon: <FiDatabase className="text-[#3b82f6]" size={22} />,
//                     title: "Database Specialist",
//                     content: "Optimized queries and data structures"
//                   }
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                     className="p-5 bg-[#161b22] rounded-xl border border-[#30363d] hover:border-[#3b82f6]/50 transition-colors duration-300"
//                   >
//                     <div className="flex items-start">
//                       <div className="flex-shrink-0 p-3 mr-4 bg-[#0d1117] rounded-lg border border-[#30363d]">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
//                         <p className="text-[#94a3b8] text-sm leading-relaxed">{item.content}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column - Terminal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative h-full"
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6]/15 to-[#3b82f6]/15 rounded-2xl opacity-70 blur-xl"></div>
//             <div className="relative bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl h-full min-h-[500px]">
//               {/* Terminal Header */}
//               <div className="h-12 bg-[#161b22] border-b border-[#30363d] flex items-center px-4">
//                 <div className="flex space-x-2 mr-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs font-mono text-[#9ca3af]">yonas_terminal</div>
//               </div>
              
//               {/* Terminal Content */}
//               <div className="p-6 h-[calc(100%-3rem)] bg-[#0d1117] flex items-center font-mono">
//                 <div className="w-full text-sm">
//                   <div className="text-[#9ca3af] mb-6">
//                     <span className="text-green-400">$</span> cat skills.json
//                   </div>
                  
//                   <div className="text-white space-y-6">
//                     <div>
//                       <span className="text-[#3b82f6]">"frontend"</span>: [
//                       <div className="ml-8 mt-2 flex flex-wrap gap-2">
//                         {['Next.js', 'React', 'Tailwind CSS', 'TypeScript'].map((tech, i) => (
//                           <span key={i} className="px-3 py-1.5 text-xs rounded bg-[#161b22] border border-[#30363d] text-[#9ca3af]">
//                             "{tech}"
//                           </span>
//                         ))}
//                       </div>
//                       ],
//                     </div>
                    
//                     <div>
//                       <span className="text-[#3b82f6]">"backend"</span>: [
//                       <div className="ml-8 mt-2 flex flex-wrap gap-2">
//                         {['Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((tech, i) => (
//                           <span key={i} className="px-3 py-1.5 text-xs rounded bg-[#161b22] border border-[#30363d] text-[#9ca3af]">
//                             "{tech}"
//                           </span>
//                         ))}
//                       </div>
//                       ],
//                     </div>
                    
//                     <div>
//                       <span className="text-[#3b82f6]">"marketing"</span>: [
//                       <div className="ml-8 mt-2 flex flex-wrap gap-2">
//                         {['SEO', 'Google Ads', 'Content Strategy', 'Analytics'].map((tech, i) => (
//                           <span key={i} className="px-3 py-1.5 text-xs rounded bg-[#161b22] border border-[#30363d] text-[#9ca3af]">
//                             "{tech}"
//                           </span>
//                         ))}
//                       </div>
//                       ]
//                     </div>
//                   </div>
                  
//                   <div className="text-[#9ca3af] mt-8">
//                     <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }














// 'use client'
// import { motion } from 'framer-motion'
// import { FiGlobe, FiCode, FiTrendingUp, FiLayers } from 'react-icons/fi'

// export default function About() {
//   return (
//     <section id="about" className="py-28 bg-[#0d1117] text-white border-t border-[#30363d]">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//         >
//           {/* Content */}
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-4 py-2 rounded-full bg-[#161b22] border border-[#3b82f6]/30"
//             >
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">MY BACKGROUND</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold"
//             >
//               <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                 About Me
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg text-[#94a3b8] max-w-2xl leading-relaxed"
//             >
//               I'm a full-stack developer and digital marketer with 4+ years of experience creating high-performance web applications and growth-focused digital strategies.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="space-y-6"
//             >
//               {[
//                 {
//                   icon: <FiGlobe className="text-[#3b82f6]" size={20} />,
//                   title: "Global Experience",
//                   content: "Based in Ethiopia, collaborating with clients worldwide to deliver exceptional digital solutions."
//                 },
//                 {
//                   icon: <FiCode className="text-[#8b5cf6]" size={20} />,
//                   title: "Technical Expertise",
//                   content: "Specializing in modern web technologies with a focus on performance and scalability."
//                 },
//                 {
//                   icon: <FiTrendingUp className="text-[#0ea5e9]" size={20} />,
//                   title: "Growth Focused",
//                   content: "Combining development skills with marketing knowledge to drive measurable business results."
//                 },
//                 {
//                   icon: <FiLayers className="text-[#3b82f6]" size={20} />,
//                   title: "Full-Stack Approach",
//                   content: "Comfortable working across the entire stack from database to frontend to deployment."
//                 }
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-[#161b22] rounded-lg border border-[#30363d]">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
//                     <p className="text-[#94a3b8]">{item.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Visual element */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-2xl opacity-70 blur-xl"></div>
//             <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl">
//               <div className="h-10 bg-[#161b22] border-b border-[#30363d] flex items-center px-4">
//                 <div className="flex space-x-2 mr-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 </div>
//                 <div className="text-xs font-mono text-[#9ca3af]">about_me.json</div>
//               </div>
//               <div className="p-6 h-[500px] flex items-center justify-center bg-[#0d1117]">
//                 <div className="text-left w-full font-mono text-sm">
//                   <div className="text-[#9ca3af] mb-4">
//                     <span className="text-green-400">$</span> cat about_me.json
//                   </div>
//                   <div className="text-white space-y-2 ml-4">
//                     <div><span className="text-[#3b82f6]">"role"</span>: <span className="text-[#f472b6]">"Full-Stack Developer"</span>,</div>
//                     <div><span className="text-[#3b82f6]">"experience"</span>: <span className="text-[#f59e0b]">4</span>,</div>
//                     <div><span className="text-[#3b82f6]">"location"</span>: <span className="text-[#f472b6]">"Ethiopia"</span>,</div>
//                     <div><span className="text-[#3b82f6]">"skills"</span>: [</div>
//                     <div className="ml-8"><span className="text-[#f472b6]">"Next.js"</span>,</div>
//                     <div className="ml-8"><span className="text-[#f472b6]">"React"</span>,</div>
//                     <div className="ml-8"><span className="text-[#f472b6]">"Node.js"</span>,</div>
//                     <div className="ml-8"><span className="text-[#f472b6]">"Digital Marketing"</span>],</div>
//                     <div><span className="text-[#3b82f6]">"available"</span>: <span className="text-[#10b981]">true</span></div>
//                   </div>
//                   <div className="text-[#9ca3af] mt-6">
//                     <span className="text-green-400">$</span> <span className="animate-pulse">_</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


























// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//         >
//           <div className="order-2 md:order-1">
//             <h2 className="text-3xl font-bold mb-6">About Me</h2>
//             <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
//               I'm a passionate full-stack developer and digital marketer with over 4 years of hands-on experience building web applications and digital solutions that drive business growth.
//             </p>
//             <div className="space-y-4">
//               {[
//                 "Based in Ethiopia, working with clients worldwide to deliver high-quality digital solutions.",
//                 "Combining technical expertise with digital marketing knowledge to create solutions that perform.",
//                 "Focused on clean code, performance optimization, and delivering exceptional user experiences."
//               ].map((text, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <div className="h-5 w-5 bg-purple-500 rounded-full flex items-center justify-center">
//                       <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </div>
//                   <p className="ml-3 text-gray-600 dark:text-gray-300">{text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="order-1 md:order-2 relative">
//             <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
//             <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl h-80 w-full">
//               <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
//                 <div className="text-center p-6">
//                   <div className="text-5xl mb-4">🌍</div>
//                   <h3 className="text-xl font-bold mb-2">Global Developer</h3>
//                   <p className="text-gray-500 dark:text-gray-400">Working across timezones to deliver exceptional results</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }