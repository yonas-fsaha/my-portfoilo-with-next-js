'use client'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiLayers, FiTool, FiLink, FiBarChart2, FiDollarSign, FiGlobe, FiLock, FiSearch, FiServer, FiCloud, FiShoppingCart, FiMessageSquare, FiGitBranch } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaWordpress, FaFigma, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiStrapi, SiStripe, SiJavascript, SiPostgresql, SiMysql, SiExpress, SiVercel, SiNetlify, SiJquery, SiCpanel, SiCpp, SiJava } from 'react-icons/si'
import { GrDeploy } from 'react-icons/gr'
import { DiJava } from 'react-icons/di'
import { TbBrandCpp } from 'react-icons/tb'

const skills = {
  "Core Languages": {
    icon: <FiCpu className="text-blue-400" size={20} />,
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      // { name: "C++", icon: <TbBrandCpp className="text-[#00599C]" /> },
      // { name: "Java", icon: <DiJava className="text-[#007396]" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Frontend & Frameworks": {
    icon: <FiCode className="text-blue-400" size={20} />,
    items: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Backend & Databases": {
    icon: <FiServer className="text-blue-400" size={20} />,
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
    ],
    color: "bg-sky-400/5"
  },
  "CMS & E-commerce": {
    icon: <FiShoppingCart className="text-blue-400" size={20} />,
    items: [
      { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
      { name: "WooCommerce", icon: <FiShoppingCart className="text-[#7F54B3]" /> },
      { name: "Strapi CMS", icon: <SiStrapi className="text-[#4945FF]" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Deployment & DevOps": {
    icon: <FiCloud className="text-blue-400" size={20} />,
    items: [
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
      { name: "VPS", icon: <GrDeploy className="text-[#0080FF]" /> },
      { name: "cPanel", icon: <SiCpanel className="text-[#FF6C2C]" /> },
      { name: "Linux Server", icon: <FiServer className="text-[#FCC624]" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Tools & Version Control": {
    icon: <FiGitBranch className="text-blue-400" size={20} />,
    items: [
      { name: "Git", icon: <FiGitBranch className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      // { name: "Git/GitHub", icon: <FaGithub className="text-gray-300" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Design & UI/UX": {
    icon: <FiLayers className="text-blue-400" size={20} />,
    items: [
      { name: "Figma", icon: <FaFigma className="text-[#A259FF]" /> },
      { name: "UI/UX Design", icon: <FiLayers className="text-pink-400" /> },
      { name: "Responsive Design", icon: <FiLayers className="text-green-400" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Integrations & APIs": {
    icon: <FiLink className="text-blue-400" size={20} />,
    items: [
      { name: "REST APIs", icon: <FiLink className="text-green-400" /> },
      { name: "API Integration", icon: <FiMessageSquare className="text-blue-400" /> },
      { name: "Stripe", icon: <SiStripe className="text-[#635BFF]" /> },
      { name: "Payment Systems", icon: <FiDollarSign className="text-green-500" /> }
    ],
    color: "bg-sky-400/5"
  },
  "Digital Marketing": {
    icon: <FiBarChart2 className="text-blue-400" size={20} />,
    items: [
      { name: "Google Ads", icon: <FiBarChart2 className="text-[#4285F4]" /> },
      { name: "Meta Ads", icon: <FiDollarSign className="text-[#1877F2]" /> },
      { name: "SEO", icon: <FiSearch className="text-blue-400" /> },
      { name: "Google Analytics", icon: <FiBarChart2 className="text-[#E37400]" /> }
    ],
    color: "bg-sky-400/5"
  }
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
              My Skills Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
          >
            Comprehensive technologies and tools I've mastered over 5+ years of development journey
          </motion.p>
        </motion.div>
        
        {/* Skills grid - Updated to lg:grid-cols-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {Object.entries(skills).map(([category, {icon, items, color}], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                borderColor: 'rgb(96 165 250 / 0.3)',
                backgroundColor: 'rgba(96, 165, 250, 0.05)'
              }}
              className={`${color} rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300`}
            >
              <div className="flex items-center mb-4 md:mb-5">
                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 mr-3 md:mr-4">
                  {icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-3">
                {items.map((skill, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg bg-white/5 border border-white/10 text-white gap-1.5 md:gap-2"
                  >
                    <span className="text-base md:text-lg">{skill.icon}</span>
                    <span className="text-xs md:text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicator - Updated with more relevant skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-16 bg-sky-400/5 rounded-xl p-4 md:p-6 border border-white/10"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <FiBarChart2 className="text-blue-400" />
            <span>Skill Proficiency Overview</span>
          </h3>
          
          <div className="space-y-3 md:space-y-5">
            {[
              { skill: "Next.js / React", level: 85 },
              { skill: "TypeScript", level: 85 },
              { skill: "Node.js / Express", level: 86 },
              { skill: "MongoDB / Databases", level: 80 },
              { skill: "Tailwind CSS / UI", level: 85 },
              { skill: "API Integration", level: 85 },
              { skill: "VPS Deployment", level: 90 },
              { skill: "Digital Marketing", level: 85 }
            ].map((item, index) => (
              <div key={index} className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-[#9ca3af]">{item.skill}</span>
                  <span className="text-white">{item.level}%</span>
                </div>
                <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: 0.1 * index }}
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Skills", value: Object.values(skills).flatMap(s => s.items).length, color: "text-blue-400" },
                { label: "Years Experience", value: "4+", color: "text-green-400" },
                { label: "Projects Built", value: "56+", color: "text-purple-400" },
                { label: "Tech Categories", value: Object.keys(skills).length, color: "text-yellow-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-[#9ca3af]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

















// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiDatabase, FiCpu, FiLayers, FiTool, FiLink, FiBarChart2, FiDollarSign, FiGlobe, FiLock, FiSearch } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaWordpress, FaFigma } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiStrapi, SiStripe } from 'react-icons/si'

// const skills = {
//   "Languages & Frameworks": {
//     icon: <FiCode className="text-blue-400" size={20} />,
//     items: [
//       { name: "JavaScript", icon: <SiTypescript className="text-yellow-400" /> },
//       { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//       { name: "React.js", icon: <FaReact className="text-[#087ea4]" /> },
//       { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//       { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
//       { name: "Express.js", icon: <FiCode className="text-gray-300" /> }
//     ],
//     color: "bg-sky-400/5"
//   },
//   "Databases & CMS": {
//     icon: <FiDatabase className="text-blue-400" size={20} />,
//     items: [
//       { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
//       { name: "Strapi CMS", icon: <SiStrapi className="text-[#4945ff]" /> },
//       { name: "WordPress", icon: <FaWordpress className="text-[#21759b]" /> },
//       { name: "WooCommerce", icon: <FiDollarSign className="text-[#7f54b3]" /> }
//     ],
//     color: "bg-sky-400/5"
//   },
//   "Styling & Design": {
//     icon: <FiLayers className="text-blue-400" size={20} />,
//     items: [
//       { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
//       { name: "Bootstrap", icon: <FiLayers className="text-[#7952b3]" /> },
//       { name: "SCSS", icon: <FiCode className="text-[#cc6699]" /> },
//       { name: "Figma", icon: <FaFigma className="text-[#a259ff]" /> }
//     ],
//     color: "bg-sky-400/5"
//   },
//   "Tools & Platforms": {
//     icon: <FiTool className="text-blue-400" size={20} />,
//     items: [
//       { name: "Git", icon: <FiCode className="text-[#f1502f]" /> },
//       { name: "GitHub", icon: <FiCode className="text-white" /> },
//       { name: "Vercel", icon: <FiGlobe className="text-white" /> },
//       { name: "Netlify", icon: <FiGlobe className="text-[#00c7b7]" /> }
//     ],
//     color: "bg-sky-400/5"
//   },
//   "Integrations": {
//     icon: <FiLink className="text-blue-400" size={20} />,
//     items: [
//       { name: "REST APIs", icon: <FiLink className="text-[#00d1b2]" /> },
//       { name: "Stripe", icon: <SiStripe className="text-[#635bff]" /> },
//       { name: "PayPal", icon: <FiDollarSign className="text-[#003087]" /> },
//       { name: "Auth0", icon: <FiLock className="text-[#eb5424]" /> }
//     ],
//     color: "bg-sky-400/5"
//   },
//   "Marketing & Analytics": {
//     icon: <FiBarChart2 className="text-blue-400" size={20} />,
//     items: [
//       { name: "Google Ads", icon: <FiBarChart2 className="text-[#4285f4]" /> },
//       { name: "SEO", icon: <FiSearch className="text-blue-400" /> },
//       { name: "Google Analytics", icon: <FiBarChart2 className="text-[#e37400]" /> },
//       { name: "Meta Ads", icon: <FiDollarSign className="text-[#1877f2]" /> }
//     ],
//     color: "bg-sky-400/5"
//   }
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//           >
//             <span className="text-blue-400">
//               My Skills Stack
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
//           >
//             Technologies and tools I've mastered to deliver exceptional digital experiences
//           </motion.p>
//         </motion.div>
        
//         {/* Skills grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {Object.entries(skills).map(([category, {icon, items, color}], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ 
//                 y: -8,
//                 borderColor: 'rgb(96 165 250 / 0.3)',
//                 backgroundColor: 'rgba(96, 165, 250, 0.05)'
//               }}
//               className={`${color} rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300`}
//             >
//               <div className="flex items-center mb-4 md:mb-5">
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 mr-3 md:mr-4">
//                   {icon}
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-white">{category}</h3>
//               </div>
              
//               <div className="flex flex-wrap gap-2 md:gap-3">
//                 {items.map((skill, i) => (
//                   <motion.div 
//                     key={i}
//                     initial={{ opacity: 0, y: 5 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
//                     whileHover={{ scale: 1.05 }}
//                     className="flex items-center px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg bg-white/5 border border-white/10 text-white gap-1.5 md:gap-2"
//                   >
//                     <span className="text-base md:text-lg">{skill.icon}</span>
//                     <span className="text-xs md:text-sm">{skill.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Skill Level Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-12 md:mt-16 bg-sky-400/5 rounded-xl p-4 md:p-6 border border-white/10"
//         >
//           <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
//             <FiBarChart2 className="text-blue-400" />
//             <span>Skill Proficiency</span>
//           </h3>
          
//           <div className="space-y-3 md:space-y-5">
//             {[
//               { skill: "React/Next.js", level: 95 },
//               { skill: "TypeScript", level: 90 },
//               { skill: "Node.js", level: 85 },
//               { skill: "UI/UX Design", level: 75 },
//               { skill: "Digital Marketing", level: 85 }
//             ].map((item, index) => (
//               <div key={index} className="space-y-1.5 md:space-y-2">
//                 <div className="flex justify-between text-xs md:text-sm">
//                   <span className="text-[#9ca3af]">{item.skill}</span>
//                   <span className="text-white">{item.level}%</span>
//                 </div>
//                 <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${item.level}%` }}
//                     transition={{ duration: 1.5, delay: 0.1 * index }}
//                     className="h-full bg-blue-400 rounded-full"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


















// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiDatabase, FiCpu, FiLayers, FiTool, FiLink, FiBarChart2, FiDollarSign, FiGlobe, FiLock, FiSearch } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaWordpress, FaFigma } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiStrapi, SiStripe } from 'react-icons/si'

// const skills = {
//   "Languages & Frameworks": {
//     icon: <FiCode className="text-blue-400" size={20} />,
//     items: [
//       { name: "JavaScript", icon: <SiTypescript className="text-blue-400" /> },
//       { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
//       { name: "React.js", icon: <FaReact className="text-blue-400" /> },
//       { name: "Next.js", icon: <SiNextdotjs className="text-blue-400" /> },
//       { name: "Node.js", icon: <FaNodeJs className="text-blue-400" /> },
//       { name: "Express.js", icon: <FiCode className="text-blue-400" /> }
//     ],
//     color: "bg-white/5"
//   },
//   "Databases & CMS": {
//     icon: <FiDatabase className="text-blue-400" size={20} />,
//     items: [
//       { name: "MongoDB", icon: <SiMongodb className="text-blue-400" /> },
//       { name: "Strapi CMS", icon: <SiStrapi className="text-blue-400" /> },
//       { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
//       { name: "WooCommerce", icon: <FiDollarSign className="text-blue-400" /> }
//     ],
//     color: "bg-white/5"
//   },
//   "Styling & Design": {
//     icon: <FiLayers className="text-blue-400" size={20} />,
//     items: [
//       { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
//       { name: "Bootstrap", icon: <FiLayers className="text-blue-400" /> },
//       { name: "SCSS", icon: <FiCode className="text-blue-400" /> },
//       { name: "Figma", icon: <FaFigma className="text-blue-400" /> }
//     ],
//     color: "bg-white/5"
//   },
//   "Tools & Platforms": {
//     icon: <FiTool className="text-blue-400" size={20} />,
//     items: [
//       { name: "Git", icon: <FiCode className="text-blue-400" /> },
//       { name: "GitHub", icon: <FiCode className="text-blue-400" /> },
//       { name: "Vercel", icon: <FiGlobe className="text-blue-400" /> },
//       { name: "Netlify", icon: <FiGlobe className="text-blue-400" /> }
//     ],
//     color: "bg-white/5"
//   },
//   "Integrations": {
//     icon: <FiLink className="text-blue-400" size={20} />,
//     items: [
//       { name: "REST APIs", icon: <FiLink className="text-blue-400" /> },
//       { name: "Stripe", icon: <SiStripe className="text-blue-400" /> },
//       { name: "PayPal", icon: <FiDollarSign className="text-blue-400" /> },
//       { name: "Auth0", icon: <FiLock className="text-blue-400" /> }
//     ],
//     color: "bg-white/5"
//   },
//   "Marketing & Analytics": {
//     icon: <FiBarChart2 className="text-blue-400" size={20} />,
//     items: [
//       { name: "Google Ads", icon: <FiBarChart2 className="text-blue-400" /> },
//       { name: "SEO", icon: <FiSearch className="text-blue-400" /> },
//       { name: "Google Analytics", icon: <FiBarChart2 className="text-blue-400" /> },
//       { name: "Meta Ads", icon: <FiDollarSign className="text-blue-400" /> }
//     ],
//     color: "bg-white/5"
//   }
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//         {/* Section header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//           >
//             <span className="text-blue-400">
//               My Skills Stack
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
//           >
//             Technologies and tools I've mastered to deliver exceptional digital experiences
//           </motion.p>
//         </motion.div>
        
//         {/* Skills grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {Object.entries(skills).map(([category, {icon, items, color}], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ 
//                 y: -8,
//                 borderColor: 'rgb(96 165 250 / 0.3)',
//                 backgroundColor: 'rgba(96, 165, 250, 0.05)'
//               }}
//               className={`${color} rounded-xl p-4 md:p-6 border border-white/10 transition-all duration-300`}
//             >
//               <div className="flex items-center mb-4 md:mb-5">
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 mr-3 md:mr-4">
//                   {icon}
//                 </div>
//                 <h3 className="text-lg md:text-xl font-semibold text-white">{category}</h3>
//               </div>
              
//               <div className="flex flex-wrap gap-2 md:gap-3">
//                 {items.map((skill, i) => (
//                   <motion.div 
//                     key={i}
//                     initial={{ opacity: 0, y: 5 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
//                     whileHover={{ scale: 1.05 }}
//                     className="flex items-center px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg bg-white/5 border border-white/10 text-[#9ca3af] gap-1.5 md:gap-2"
//                   >
//                     <span className="text-base md:text-lg">{skill.icon}</span>
//                     <span className="text-xs md:text-sm">{skill.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Skill Level Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-12 md:mt-16 bg-white/5 rounded-xl p-4 md:p-6 border border-white/10"
//         >
//           <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
//             <FiBarChart2 className="text-blue-400" />
//             <span>Skill Proficiency</span>
//           </h3>
          
//           <div className="space-y-3 md:space-y-5">
//             {[
//               { skill: "React/Next.js", level: 95 },
//               { skill: "TypeScript", level: 90 },
//               { skill: "Node.js", level: 85 },
//               { skill: "UI/UX Design", level: 80 },
//               { skill: "Digital Marketing", level: 75 }
//             ].map((item, index) => (
//               <div key={index} className="space-y-1.5 md:space-y-2">
//                 <div className="flex justify-between text-xs md:text-sm">
//                   <span className="text-[#9ca3af]">{item.skill}</span>
//                   <span className="text-white">{item.level}%</span>
//                 </div>
//                 <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${item.level}%` }}
//                     transition={{ duration: 1.5, delay: 0.1 * index }}
//                     className="h-full bg-blue-400 rounded-full"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



















// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiDatabase, FiCpu, FiLayers, FiTool, FiLink, FiBarChart2, FiDollarSign, FiGlobe, FiLock, FiSearch } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaWordpress, FaFigma } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiStrapi, SiStripe } from 'react-icons/si'

// const skills = {
//   "Languages & Frameworks": {
//     icon: <FiCode className="text-blue-400" size={20} />,
//     items: [
//       { name: "JavaScript", icon: <SiTypescript className="text-yellow-400" /> },
//       { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//       { name: "React.js", icon: <FaReact className="text-blue-400" /> },
//       { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//       { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//       { name: "Express.js", icon: <FiCode className="text-gray-300" /> }
//     ],
//     color: "bg-gradient-to-br from-blue-500/10 to-blue-600/10"
//   },
//   "Databases & CMS": {
//     icon: <FiDatabase className="text-indigo-400" size={20} />,
//     items: [
//       { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//       { name: "Strapi CMS", icon: <SiStrapi className="text-blue-400" /> },
//       { name: "WordPress", icon: <FaWordpress className="text-blue-300" /> },
//       { name: "WooCommerce", icon: <FiDollarSign className="text-purple-400" /> }
//     ],
//     color: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/10"
//   },
//   "Styling & Design": {
//     icon: <FiLayers className="text-cyan-400" size={20} />,
//     items: [
//       { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
//       { name: "Bootstrap", icon: <FiLayers className="text-purple-500" /> },
//       { name: "SCSS", icon: <FiCode className="text-pink-400" /> },
//       { name: "Figma", icon: <FaFigma className="text-purple-500" /> }
//     ],
//     color: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/10"
//   },
//   "Tools & Platforms": {
//     icon: <FiTool className="text-blue-400" size={20} />,
//     items: [
//       { name: "Git", icon: <FiCode className="text-orange-500" /> },
//       { name: "GitHub", icon: <FiCode className="text-white" /> },
//       { name: "Vercel", icon: <FiGlobe className="text-white" /> },
//       { name: "Netlify", icon: <FiGlobe className="text-green-400" /> }
//     ],
//     color: "bg-gradient-to-br from-blue-400/10 to-blue-500/10"
//   },
//   "Integrations": {
//     icon: <FiLink className="text-purple-400" size={20} />,
//     items: [
//       { name: "REST APIs", icon: <FiLink className="text-green-400" /> },
//       { name: "Stripe", icon: <SiStripe className="text-violet-500" /> },
//       { name: "PayPal", icon: <FiDollarSign className="text-blue-500" /> },
//       { name: "Auth0", icon: <FiLock className="text-orange-400" /> }
//     ],
//     color: "bg-gradient-to-br from-purple-500/10 to-purple-600/10"
//   },
//   "Marketing & Analytics": {
//     icon: <FiBarChart2 className="text-green-400" size={20} />,
//     items: [
//       { name: "Google Ads", icon: <FiBarChart2 className="text-blue-500" /> },
//       { name: "SEO", icon: <FiSearch className="text-blue-400" /> },
//       { name: "Google Analytics", icon: <FiBarChart2 className="text-orange-400" /> },
//       { name: "Meta Ads", icon: <FiDollarSign className="text-blue-400" /> }
//     ],
//     color: "bg-gradient-to-br from-green-500/10 to-green-600/10"
//   }
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="relative py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] text-white overflow-hidden border-t border-[#1e293b]">
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
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center px-5 py-2 rounded-full bg-black/30 border border-blue-500/40 mb-6 backdrop-blur-sm"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//             <span className="text-sm font-medium text-[#9ca3af] tracking-wider">TECHNICAL EXPERTISE</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//           >
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               My Skills Stack
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto"
//           >
//             Technologies and tools I've mastered to deliver exceptional digital experiences
//           </motion.p>
//         </motion.div>
        
//         {/* Skills grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Object.entries(skills).map(([category, {icon, items, color}], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ 
//                 y: -8,
//                 boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
//               }}
//               className={`${color} rounded-xl p-6 border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300`}
//             >
//               <div className="flex items-center mb-5">
//                 <div className="p-3 bg-black/30 rounded-lg border border-[#1e293b] mr-4">
//                   {icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white">{category}</h3>
//               </div>
              
//               <div className="flex flex-wrap gap-3">
//                 {items.map((skill, i) => (
//                   <motion.div 
//                     key={i}
//                     initial={{ opacity: 0, y: 5 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 + (index * 0.1) + (i * 0.05) }}
//                     whileHover={{ scale: 1.05 }}
//                     className="flex items-center px-3 py-2 rounded-lg bg-black/30 border border-[#1e293b] text-[#9ca3af] gap-2"
//                   >
//                     <span className="text-lg">{skill.icon}</span>
//                     <span className="text-sm">{skill.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Skill Level Indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 bg-black/30 rounded-xl p-6 border border-[#1e293b]"
//         >
//           <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
//             <FiBarChart2 className="text-blue-400" />
//             <span>Skill Proficiency</span>
//           </h3>
          
//           <div className="space-y-5">
//             {[
//               { skill: "React/Next.js", level: 95 },
//               { skill: "TypeScript", level: 90 },
//               { skill: "Node.js", level: 85 },
//               { skill: "UI/UX Design", level: 80 },
//               { skill: "Digital Marketing", level: 75 }
//             ].map((item, index) => (
//               <div key={index} className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-[#9ca3af]">{item.skill}</span>
//                   <span className="text-white">{item.level}%</span>
//                 </div>
//                 <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${item.level}%` }}
//                     transition={{ duration: 1.5, delay: 0.1 * index }}
//                     className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




















// 'use client'
// import { motion } from 'framer-motion'
// import { FiCode, FiDatabase, FiCpu, FiLayers, FiTool, FiLink, FiBarChart2 } from 'react-icons/fi'

// const skills = {
//   "Languages & Frameworks": {
//     icon: <FiCode className="text-[#3b82f6]" size={20} />,
//     items: ["JavaScript", "TypeScript", "HTML/CSS", "React.js", "Next.js", "Node.js", "Express.js"]
//   },
//   "Databases & CMS": {
//     icon: <FiDatabase className="text-[#8b5cf6]" size={20} />,
//     items: ["MongoDB", "Strapi CMS", "WordPress", "WooCommerce"]
//   },
//   "Styling & Design": {
//     icon: <FiLayers className="text-[#0ea5e9]" size={20} />,
//     items: ["Tailwind CSS", "Bootstrap", "SCSS", "Figma"]
//   },
//   "Tools & Platforms": {
//     icon: <FiTool className="text-[#3b82f6]" size={20} />,
//     items: ["Git", "GitHub", "Vercel", "Netlify", "cPanel"]
//   },
//   "Integrations": {
//     icon: <FiLink className="text-[#8b5cf6]" size={20} />,
//     items: ["REST APIs", "Stripe", "Flutterwave", "PayPal"]
//   },
//   "Marketing & Analytics": {
//     icon: <FiBarChart2 className="text-[#0ea5e9]" size={20} />,
//     items: ["Google Ads", "Meta Ads", "SEO", "Google Analytics"]
//   }
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="relative py-28 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
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
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">TECHNICAL SKILLS</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                 My Expertise
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-[#94a3b8] max-w-3xl mx-auto"
//             >
//               Technologies and tools I work with daily to build exceptional digital experiences
//             </motion.p>
//           </div>
          
//           {/* Skills grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Object.entries(skills).map(([category, {icon, items}], index) => (
//               <motion.div
//                 key={category}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 whileHover={{ y: -8 }}
//                 className="bg-[#161b22] rounded-xl p-6 border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300 group"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="p-2.5 bg-[#0d1117] rounded-lg border border-[#30363d] mr-4 group-hover:border-[#3b82f6]/50 transition-colors duration-300">
//                     {icon}
//                   </div>
//                   <h3 className="text-xl font-semibold text-white">{category}</h3>
//                 </div>
                
//                 <div className="flex flex-wrap gap-2">
//                   {items.map((skill, i) => (
//                     <motion.span 
//                       key={i}
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ delay: 0.05 * i }}
//                       className="px-3 py-1.5 text-sm rounded-full bg-[#0d1117] border border-[#30363d] text-[#9ca3af] hover:border-[#3b82f6]/50 hover:text-white transition-colors duration-200"
//                     >
//                       {skill}
//                     </motion.span>
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






















// 'use client'
// import { motion } from 'framer-motion'

// const skills = {
//   "Languages & Frameworks": ["JavaScript", "TypeScript", "HTML/CSS", "React.js", "Next.js", "Node.js", "Express.js"],
//   "Databases & CMS": ["MongoDB", "Strapi CMS", "WordPress", "WooCommerce"],
//   "Styling": ["Tailwind CSS", "Bootstrap", "SCSS"],
//   "Tools & Platforms": ["Git", "GitHub", "Vercel", "Netlify", "cPanel"],
//   "Integrations": ["REST APIs", "Stripe", "Flutterwave", "PayPal"],
//   "Marketing Tools": ["Google Ads", "Meta Ads", "SEO", "Google Analytics"]
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Technologies and tools I work with daily
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Object.entries(skills).map(([category, items]) => (
//               <motion.div
//                 key={category}
//                 whileHover={{ y: -5 }}
//                 className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
//               >
//                 <h3 className="text-xl font-bold mb-4">{category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {items.map((skill) => (
//                     <span 
//                       key={skill}
//                       className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
//                     >
//                       {skill}
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