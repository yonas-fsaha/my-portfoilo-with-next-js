'use client'
import { motion } from 'framer-motion'
import { FiArrowRight, FiSend, FiDownload, FiChevronDown, FiCode, FiCpu, FiDatabase, FiServer } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import Typewriter from 'typewriter-effect'
import { FaXTwitter } from 'react-icons/fa6'

export default function Hero({ scrollToSection }) {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'yonas_fsaha_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Tech stack icons for visual interest
  const techIcons = [
    { icon: <FiCode />, color: 'text-blue-400' },
    { icon: <FiCpu />, color: 'text-blue-400' },
    { icon: <FiDatabase />, color: 'text-blue-400' },
    { icon: <FiServer />, color: 'text-blue-400' },
  ]

  return (
    <section id="home" className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex items-center">
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Animated tech icons row */}
              <motion.div 
                className="flex gap-4 mb-2 md:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {techIcons.map((tech, i) => (
                  <motion.div
                    key={i}
                    className={`p-2 mb-8 md:p-3 rounded-lg bg-sky-400/5 ${tech.color}`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
                      backgroundColor: 'rgba(96, 165, 250, 0.1)'
                    }}
                    animate={{
                      y: [0, -4, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </motion.div>







              {/* Headings */}
              <div className="mt-2 md:mt-4">

     {/* Greeting */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="flex items-center gap-1 mb-2 md:mb-3"
>
  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
    Hi
  </span>
  <span className="text-2xl sm:text-3xl md:text-4xl animate-bounce mx-2">👋</span>
  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
    this is
  </span>
</motion.div>


                {/* Name in one line with space */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Yonas</span>
                  <span className="text-blue-400 ml-2 md:ml-3">Fsaha</span>
                </h1>

                {/* Typewriter with original border effect - ADDED WORDPRESS */}
                <div className="h-12 md:h-14 lg:h-16 flex items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-sky-400/5 border border-blue-400/20 w-auto">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#9ca3af] font-mono min-h-[30px] md:min-h-[40px] flex items-center">
                      <Typewriter
                        options={{
                          strings: [
                            'Full-Stack Developer',
                            'MERN Stack Specialist',
                            'Next.js Expert',
                            'WordPress Developer', 
                            'Digital Solutions Architect'
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 30,
                          delay: 60,
                          cursor: '_',
                          cursorClassName: 'text-blue-400'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description - UPDATED TO MORE ATTRACTIVE VERSION */}
              <motion.p 
                className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-[600px] font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Transforming business challenges into high-performance digital solutions. 
                I build scalable applications that drive growth and deliver exceptional ROI.
              </motion.p>

              {/* Stats - UPDATED MIDDLE STAT */}
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-6 md:pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { value: '4+', label: 'Years Experience' },
                  { value: '30+', label: 'Technologies Mastered' }, // CHANGED THIS
                  { value: '100%', label: 'Client Satisfaction' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-2 md:p-3 lg:p-4 rounded-xl bg-sky-400/5"
                    whileHover={{ 
                      y: -4,
                      backgroundColor: 'rgba(96, 165, 250, 0.1)'
                    }}
                  >
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] xs:text-xs sm:text-sm text-[#9ca3af] mt-0.5 sm:mt-1 font-mono tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right column - SVG Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-8 lg:mt-0"
          >
            {/* SVG Container - Clean design */}
            <div className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
              {/* Main SVG container */}
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="/profile3.svg" 
                  alt="Yonas Fsaha"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.log('SVG failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Call to action text */}
            <motion.p
              className="mt-6 md:mt-8 text-[#9ca3af] text-center font-mono text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              // Ready to build something amazing?
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom section with social and actions */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Social links - UPDATED WITH REAL LINKS */}
          <div className="flex gap-4 md:gap-6">
            {[
              { icon: <FaLinkedin />, color: 'hover:text-blue-400', label: 'LinkedIn', url: 'https://www.linkedin.com/in/yonas-fsaha' },
              { icon: <FaGithub />, color: 'hover:text-white', label: 'GitHub', url: 'https://github.com/yonas-fsaha' },
              { icon: <FaXTwitter />, color: 'hover:text-blue-400', label: 'Twitter', url: 'https://x.com/YonasFsaha' },
              { icon: <FaTelegram />, color: 'hover:text-red-400', label: 'YouTube', url: 'https://t.me/c404der' },
              { icon: <SiUpwork />, color: 'hover:text-green-400', label: 'Upwork', url: 'https://www.upwork.com/freelancers/~01688b011b9b06956f' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url} // CHANGED TO ACTUAL URL
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg md:text-xl text-[#9ca3af] ${social.color} transition-colors`}
                aria-label={social.label}
                whileHover={{ 
                  y: -3,
                  scale: 1.2,
                  color: 'rgb(96 165 250)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Action buttons - responsive */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full lg:w-auto">
            {[
              { 
                text: 'View Projects', 
                icon: <FiArrowRight />, 
                onClick: () => scrollToSection('projects'),
                variant: 'primary'
              },
              { 
                text: 'Get In Touch', 
                icon: <FiSend />, 
                onClick: () => scrollToSection('contact'),
                variant: 'secondary'
              },
              { 
                text: 'Download CV', 
                icon: <FiDownload />, 
                onClick: downloadResume,
                variant: 'secondary'
              }
            ].map((button, i) => (
              <motion.button
                key={i}
                whileHover={{ 
                  y: -3,
                  scale: 1.05,
                  boxShadow: button.variant === 'primary' 
                    ? '0 8px 25px -5px rgba(96, 165, 250, 0.4)' 
                    : '0 8px 25px -5px rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={button.onClick}
                className={`
                  flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium font-mono
                  text-sm md:text-base
                  ${button.variant === 'primary' 
                    ? 'bg-blue-400 text-[#020617] hover:bg-blue-300' 
                    : 'bg-sky-400/5 text-white hover:bg-white/10'}
                  transition-all duration-300
                  flex-1 lg:flex-none min-w-[140px] md:min-w-[150px]
                `}
              >
                <span className="mr-2">{button.text}</span>
                {button.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>
        

        {/* Unique Scroll Indicator - INCREASED MARGIN TOP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 mt-16 md:mt-20" // INCREASED MARGIN HERE
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center group"
            aria-label="Scroll down"
          >
            {/* Unique code bracket indicator */}
            <div className="relative">
              
              {/* Animated line connecting brackets */}
              <motion.div
                className="absolute top-1/2 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2"
                animate={{
                  scaleX: [0.2, 1, 0.2],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              
              {/* Animated chevron */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  y: [0, 3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              >
                <FiChevronDown className="text-blue-400 text-xs md:text-sm" />
              </motion.div>
            </div>
            
        
          </button>
        </motion.div>
        
      </div>
    </section>
  )
}





















// 'use client'
// import { motion } from 'framer-motion'
// import { FiArrowRight, FiSend, FiDownload, FiChevronDown, FiCode, FiCpu, FiDatabase, FiServer } from 'react-icons/fi'
// import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { SiUpwork } from 'react-icons/si'
// import Typewriter from 'typewriter-effect'

// export default function Hero({ scrollToSection }) {
//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yonas_fsaha_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   // Tech stack icons for visual interest
//   const techIcons = [
//     { icon: <FiCode />, color: 'text-blue-400' },
//     { icon: <FiCpu />, color: 'text-blue-400' },
//     { icon: <FiDatabase />, color: 'text-blue-400' },
//     { icon: <FiServer />, color: 'text-blue-400' },
//   ]

//   return (
//     <section id="home" className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex items-center">
//       {/* Content container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 md:py-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
//           {/* Left column - Text content */}
//           <div className="w-full lg:w-1/2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6 md:space-y-8"
//             >
//               {/* Animated tech icons row */}
//               <motion.div 
//                 className="flex gap-4 mb-4 md:mb-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {techIcons.map((tech, i) => (
//                   <motion.div
//                     key={i}
//                     className={`p-2 md:p-3 rounded-lg bg-sky-400/5 ${tech.color}`}
//                     whileHover={{ 
//                       scale: 1.1,
//                       boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
//                       backgroundColor: 'rgba(96, 165, 250, 0.1)'
//                     }}
//                     animate={{
//                       y: [0, -4, 0]
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       delay: i * 0.2
//                     }}
//                   >
//                     {tech.icon}
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Headings */}
//               <div className="space-y-4 md:space-y-6">
//                 {/* Name in one line with space */}
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="text-white">Yonas</span>
//                   <span className="text-blue-400 ml-2 md:ml-3">Fsaha</span>
//                 </h1>

//                 {/* Typewriter with original border effect */}
//                 <div className="h-12 md:h-14 lg:h-16 flex items-center">
//                   <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-sky-400/5 border border-blue-400/20 w-auto">
//                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
//                     <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#9ca3af] font-mono min-h-[30px] md:min-h-[40px] flex items-center">
//                       <Typewriter
//                         options={{
//                           strings: [
//                             'Full-Stack Developer',
//                             'MERN Stack Specialist',
//                             'Next.js Expert',
//                             'Digital Solutions Architect'
//                           ],
//                           autoStart: true,
//                           loop: true,
//                           deleteSpeed: 30,
//                           delay: 60,
//                           cursor: '_',
//                           cursorClassName: 'text-blue-400'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <motion.p 
//                 className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-[600px] font-mono"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 Building high-performance web applications with modern technologies. 
//                 Focused on creating scalable solutions that deliver exceptional user experiences.
//               </motion.p>

//               {/* Stats - Always in one line (3 columns) */}
//               <motion.div
//                 className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-6 md:pt-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 {[
//                   { value: '5+', label: 'Years Experience' },
//                   { value: '50+', label: 'Projects Completed' },
//                   { value: '100%', label: 'Client Satisfaction' }
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     className="text-center p-2 md:p-3 lg:p-4 rounded-xl bg-sky-400/5"
//                     whileHover={{ 
//                       y: -4,
//                       backgroundColor: 'rgba(96, 165, 250, 0.1)'
//                     }}
//                   >
//                     <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
//                       {stat.value}
//                     </div>
//                     <div className="text-[10px] xs:text-xs sm:text-sm text-[#9ca3af] mt-0.5 sm:mt-1 font-mono tracking-wider leading-tight">
//                       {stat.label}
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Right column - SVG Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-8 lg:mt-0"
//           >
//             {/* SVG Container - Clean design */}
//             <div className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
//               {/* Main SVG container */}
//               <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
//                 <img 
//                   src="/profile3.svg" 
//                   alt="Yonas Fsaha"
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     console.log('SVG failed to load');
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Call to action text */}
//             <motion.p
//               className="mt-6 md:mt-8 text-[#9ca3af] text-center font-mono text-xs md:text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               // Ready to build something amazing?
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Bottom section with social and actions */}
//         <motion.div
//           className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//         >
//           {/* Social links - responsive */}
//           <div className="flex gap-4 md:gap-6">
//             {[
//               { icon: <FaLinkedin />, color: 'hover:text-blue-400', label: 'LinkedIn' },
//               { icon: <FaGithub />, color: 'hover:text-white', label: 'GitHub' },
//               { icon: <FaTwitter />, color: 'hover:text-blue-400', label: 'Twitter' },
//               { icon: <FaYoutube />, color: 'hover:text-red-400', label: 'YouTube' },
//               { icon: <SiUpwork />, color: 'hover:text-green-400', label: 'Upwork' }
//             ].map((social, i) => (
//               <motion.a
//                 key={i}
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-lg md:text-xl text-[#9ca3af] ${social.color} transition-colors`}
//                 aria-label={social.label}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.2,
//                   color: 'rgb(96 165 250)'
//                 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Action buttons - responsive */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full lg:w-auto">
//             {[
//               { 
//                 text: 'View Projects', 
//                 icon: <FiArrowRight />, 
//                 onClick: () => scrollToSection('projects'),
//                 variant: 'primary'
//               },
//               { 
//                 text: 'Get In Touch', 
//                 icon: <FiSend />, 
//                 onClick: () => scrollToSection('contact'),
//                 variant: 'secondary'
//               },
//               { 
//                 text: 'Download CV', 
//                 icon: <FiDownload />, 
//                 onClick: downloadResume,
//                 variant: 'secondary'
//               }
//             ].map((button, i) => (
//               <motion.button
//                 key={i}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.05,
//                   boxShadow: button.variant === 'primary' 
//                     ? '0 8px 25px -5px rgba(96, 165, 250, 0.4)' 
//                     : '0 8px 25px -5px rgba(255, 255, 255, 0.1)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={button.onClick}
//                 className={`
//                   flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium font-mono
//                   text-sm md:text-base
//                   ${button.variant === 'primary' 
//                     ? 'bg-blue-400 text-[#020617] hover:bg-blue-300' 
//                     : 'bg-sky-400/5 text-white hover:bg-white/10'}
//                   transition-all duration-300
//                   flex-1 lg:flex-none min-w-[140px] md:min-w-[150px]
//                 `}
//               >
//                 <span className="mr-2">{button.text}</span>
//                 {button.icon}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Unique Scroll Indicator - Responsive with margin top */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 mt-8 md:mt-12"
//         >
//           <button 
//             onClick={() => scrollToSection('about')}
//             className="flex flex-col items-center group"
//             aria-label="Scroll down"
//           >
//             {/* Unique code bracket indicator */}
//             <div className="relative">
//               {/* Outer brackets */}
//               <div className="text-blue-400/50 text-xl md:text-2xl font-mono">
//                 {'{ }'}
//               </div>
              
//               {/* Animated line connecting brackets */}
//               <motion.div
//                 className="absolute top-1/2 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2"
//                 animate={{
//                   scaleX: [0.2, 1, 0.2],
//                   opacity: [0.3, 0.8, 0.3]
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//               />
              
//               {/* Animated chevron */}
//               <motion.div
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 animate={{
//                   y: [0, 3, 0]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop'
//                 }}
//               >
//                 <FiChevronDown className="text-blue-400 text-xs md:text-sm" />
//               </motion.div>
//             </div>
            
//             {/* Text */}
//             <motion.span
//               className="text-[10px] md:text-xs text-[#9ca3af] font-mono mt-1 md:mt-2 tracking-wider"
//               animate={{
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             >
//               SCROLL
//             </motion.span>
//           </button>
//         </motion.div>
        
//       </div>
//     </section>
//   )
// }




















// 'use client'
// import { motion } from 'framer-motion'
// import { FiArrowRight, FiSend, FiDownload, FiChevronDown } from 'react-icons/fi'
// import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { SiUpwork } from 'react-icons/si'
// import Typewriter from 'typewriter-effect'

// export default function Hero({ scrollToSection }) {
//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yonas_fsaha_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   return (
//     <section id="home" className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex items-center">
//       {/* Content container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 md:py-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
//           {/* Left column - Text content */}
//           <div className="w-full lg:w-1/2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6 md:space-y-8"
//             >
//               {/* Headings */}
//               <div className="space-y-4 md:space-y-6">
//                 {/* Developer tag */}
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400 animate-pulse"></div>
//                   <span className="text-[#9ca3af] text-xs md:text-sm font-mono tracking-wider">DEVELOPER_PORTFOLIO</span>
//                 </div>
                
//                 {/* Name in one line */}
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="text-white">Yonas</span>
//                   <span className="text-blue-400">Fsaha</span>
//                 </h1>

//                 {/* Typewriter with original border effect */}
//                 <div className="h-12 md:h-14 lg:h-16 flex items-center">
//                   <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-white/5 border border-blue-400/20 w-auto">
//                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
//                     <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#9ca3af] font-mono min-h-[30px] md:min-h-[40px] flex items-center">
//                       <Typewriter
//                         options={{
//                           strings: [
//                             'Full-Stack Developer',
//                             'MERN Stack Specialist',
//                             'Next.js Expert',
//                             'Digital Solutions Architect'
//                           ],
//                           autoStart: true,
//                           loop: true,
//                           deleteSpeed: 30,
//                           delay: 60,
//                           cursor: '_',
//                           cursorClassName: 'text-blue-400'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <motion.p 
//                 className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-[600px] font-mono"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 Building high-performance web applications with modern technologies. 
//                 Focused on creating scalable solutions that deliver exceptional user experiences.
//               </motion.p>

//               {/* Stats with responsive design */}
//               <motion.div
//                 className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 {[
//                   { value: '5+', label: 'Years Experience' },
//                   { value: '50+', label: 'Projects Completed' },
//                   { value: '100%', label: 'Client Satisfaction' }
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     className="text-center p-3 md:p-4 rounded-xl bg-white/5"
//                     whileHover={{ 
//                       y: -4,
//                       backgroundColor: 'rgba(96, 165, 250, 0.1)'
//                     }}
//                   >
//                     <div className="text-xl md:text-2xl font-bold text-white">
//                       {stat.value}
//                     </div>
//                     <div className="text-xs md:text-sm text-[#9ca3af] mt-1 font-mono tracking-wider">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Right column - SVG Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-8 lg:mt-0"
//           >
//             {/* SVG Container - Clean design */}
//             <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
//               {/* Main SVG container */}
//               <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
//                 <img 
//                   src="/profile.svg" 
//                   alt="Yonas Fsaha"
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     console.log('SVG failed to load');
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Call to action text */}
//             <motion.p
//               className="mt-6 md:mt-8 text-[#9ca3af] text-center font-mono text-xs md:text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               // Ready to build something amazing?
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Bottom section with social and actions */}
//         <motion.div
//           className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//         >
//           {/* Social links - responsive */}
//           <div className="flex gap-4 md:gap-6">
//             {[
//               { icon: <FaLinkedin />, color: 'hover:text-blue-400', label: 'LinkedIn' },
//               { icon: <FaGithub />, color: 'hover:text-white', label: 'GitHub' },
//               { icon: <FaTwitter />, color: 'hover:text-blue-400', label: 'Twitter' },
//               { icon: <FaYoutube />, color: 'hover:text-red-400', label: 'YouTube' },
//               { icon: <SiUpwork />, color: 'hover:text-green-400', label: 'Upwork' }
//             ].map((social, i) => (
//               <motion.a
//                 key={i}
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-lg md:text-xl text-[#9ca3af] ${social.color} transition-colors`}
//                 aria-label={social.label}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.2,
//                   color: 'rgb(96 165 250)'
//                 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Action buttons - responsive */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full lg:w-auto">
//             {[
//               { 
//                 text: 'View Projects', 
//                 icon: <FiArrowRight />, 
//                 onClick: () => scrollToSection('projects'),
//                 variant: 'primary'
//               },
//               { 
//                 text: 'Get In Touch', 
//                 icon: <FiSend />, 
//                 onClick: () => scrollToSection('contact'),
//                 variant: 'secondary'
//               },
//               { 
//                 text: 'Download CV', 
//                 icon: <FiDownload />, 
//                 onClick: downloadResume,
//                 variant: 'secondary'
//               }
//             ].map((button, i) => (
//               <motion.button
//                 key={i}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.05,
//                   boxShadow: button.variant === 'primary' 
//                     ? '0 8px 25px -5px rgba(96, 165, 250, 0.4)' 
//                     : '0 8px 25px -5px rgba(255, 255, 255, 0.1)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={button.onClick}
//                 className={`
//                   flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium font-mono
//                   text-sm md:text-base
//                   ${button.variant === 'primary' 
//                     ? 'bg-blue-400 text-[#020617] hover:bg-blue-300' 
//                     : 'bg-white/10 text-white hover:bg-white/20'}
//                   transition-all duration-300
//                   flex-1 lg:flex-none min-w-[140px] md:min-w-[150px]
//                 `}
//               >
//                 <span className="mr-2">{button.text}</span>
//                 {button.icon}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Unique Scroll Indicator - Responsive */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <button 
//             onClick={() => scrollToSection('about')}
//             className="flex flex-col items-center group"
//             aria-label="Scroll down"
//           >
//             {/* Unique code bracket indicator */}
//             <div className="relative">
//               {/* Outer brackets */}
//               <div className="text-blue-400/50 text-xl md:text-2xl font-mono">
//                 {'{ }'}
//               </div>
              
//               {/* Animated line connecting brackets */}
//               <motion.div
//                 className="absolute top-1/2 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2"
//                 animate={{
//                   scaleX: [0.2, 1, 0.2],
//                   opacity: [0.3, 0.8, 0.3]
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//               />
              
//               {/* Animated chevron */}
//               <motion.div
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 animate={{
//                   y: [0, 3, 0]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop'
//                 }}
//               >
//                 <FiChevronDown className="text-blue-400 text-xs md:text-sm" />
//               </motion.div>
//             </div>
            
//             {/* Text */}
//             <motion.span
//               className="text-[10px] md:text-xs text-[#9ca3af] font-mono mt-1 md:mt-2 tracking-wider"
//               animate={{
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             >
//               SCROLL
//             </motion.span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
























// 'use client'
// import { motion } from 'framer-motion'
// import { FiArrowRight, FiSend, FiDownload, FiChevronDown } from 'react-icons/fi'
// import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { SiUpwork } from 'react-icons/si'
// import Typewriter from 'typewriter-effect'

// export default function Hero({ scrollToSection }) {
//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yonas_fsaha_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   return (
//     <section id="home" className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex items-center">
//       {/* Content container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 md:py-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
//           {/* Left column - Text content */}
//           <div className="w-full lg:w-1/2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6 md:space-y-8"
//             >
//               {/* Headings */}
//               <div className="space-y-4 md:space-y-6">
//                 {/* Developer tag */}
//                 {/* <div className="flex items-center gap-3 mb-2">
//                   <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400 animate-pulse"></div>
//                   <span className="text-[#9ca3af] text-xs md:text-sm font-mono tracking-wider">DEVELOPER_PORTFOLIO</span>
//                 </div> */}
                
//                 {/* Name in one line */}
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="text-white">Yonas</span>
//                   <span className="text-blue-400">Fsaha</span>
//                 </h1>

//                 {/* Typewriter with original border effect */}
//                 <div className="h-12 md:h-14 lg:h-16 flex items-center">
//                   <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg bg-white/5 border border-blue-400/20 w-auto">
//                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
//                     <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#9ca3af] font-mono min-h-[30px] md:min-h-[40px] flex items-center">
//                       <Typewriter
//                         options={{
//                           strings: [
//                             'Full-Stack Developer',
//                             'MERN Stack Specialist',
//                             'Next.js Expert',
//                             'Digital Solutions Architect'
//                           ],
//                           autoStart: true,
//                           loop: true,
//                           deleteSpeed: 30,
//                           delay: 60,
//                           cursor: '_',
//                           cursorClassName: 'text-blue-400'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <motion.p 
//                 className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-[600px] font-mono"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 Building high-performance web applications with modern technologies. 
//                 Focused on creating scalable solutions that deliver exceptional user experiences.
//               </motion.p>

//               {/* Stats with responsive design */}
//               <motion.div
//                 className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 {[
//                   { value: '5+', label: 'Years Experience' },
//                   { value: '50+', label: 'Projects Completed' },
//                   { value: '100%', label: 'Client Satisfaction' }
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     className="text-center p-3 md:p-4 rounded-xl bg-white/5"
//                     whileHover={{ 
//                       y: -4,
//                       backgroundColor: 'rgba(96, 165, 250, 0.1)'
//                     }}
//                   >
//                     <div className="text-xl md:text-2xl font-bold text-white">
//                       {stat.value}
//                     </div>
//                     <div className="text-xs md:text-sm text-[#9ca3af] mt-1 font-mono tracking-wider">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Right column - SVG Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-8 lg:mt-0"
//           >
//             {/* SVG Container - Clean design */}
//             <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
//               {/* Main SVG container */}
//               <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
//                 <img 
//                   src="/profile.svg" 
//                   alt="Yonas Fsaha"
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     console.log('SVG failed to load');
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Call to action text */}
//             <motion.p
//               className="mt-6 md:mt-8 text-[#9ca3af] text-center font-mono text-xs md:text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               // Ready to build something amazing?
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Bottom section with social and actions */}
//         <motion.div
//           className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//         >
//           {/* Social links - responsive */}
//           <div className="flex gap-4 md:gap-6">
//             {[
//               { icon: <FaLinkedin />, color: 'hover:text-blue-400', label: 'LinkedIn' },
//               { icon: <FaGithub />, color: 'hover:text-white', label: 'GitHub' },
//               { icon: <FaTwitter />, color: 'hover:text-blue-400', label: 'Twitter' },
//               { icon: <FaYoutube />, color: 'hover:text-red-400', label: 'YouTube' },
//               { icon: <SiUpwork />, color: 'hover:text-green-400', label: 'Upwork' }
//             ].map((social, i) => (
//               <motion.a
//                 key={i}
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-lg md:text-xl text-[#9ca3af] ${social.color} transition-colors`}
//                 aria-label={social.label}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.2,
//                   color: 'rgb(96 165 250)'
//                 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Action buttons - responsive */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full lg:w-auto">
//             {[
//               { 
//                 text: 'View Projects', 
//                 icon: <FiArrowRight />, 
//                 onClick: () => scrollToSection('projects'),
//                 variant: 'primary'
//               },
//               { 
//                 text: 'Get In Touch', 
//                 icon: <FiSend />, 
//                 onClick: () => scrollToSection('contact'),
//                 variant: 'secondary'
//               },
//               { 
//                 text: 'Download CV', 
//                 icon: <FiDownload />, 
//                 onClick: downloadResume,
//                 variant: 'secondary'
//               }
//             ].map((button, i) => (
//               <motion.button
//                 key={i}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.05,
//                   boxShadow: button.variant === 'primary' 
//                     ? '0 8px 25px -5px rgba(96, 165, 250, 0.4)' 
//                     : '0 8px 25px -5px rgba(255, 255, 255, 0.1)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={button.onClick}
//                 className={`
//                   flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium font-mono
//                   text-sm md:text-base
//                   ${button.variant === 'primary' 
//                     ? 'bg-blue-400 text-[#020617] hover:bg-blue-300' 
//                     : 'bg-white/10 text-white hover:bg-white/20'}
//                   transition-all duration-300
//                   flex-1 lg:flex-none min-w-[140px] md:min-w-[150px]
//                 `}
//               >
//                 <span className="mr-2">{button.text}</span>
//                 {button.icon}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Unique Scroll Indicator - Responsive */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <button 
//             onClick={() => scrollToSection('about')}
//             className="flex flex-col items-center group"
//             aria-label="Scroll down"
//           >
//             {/* Unique code bracket indicator */}
//             <div className="relative">
//               {/* Outer brackets */}
//               <div className="text-blue-400/50 text-xl md:text-2xl font-mono">
//                 {'{ }'}
//               </div>
              
//               {/* Animated line connecting brackets */}
//               <motion.div
//                 className="absolute top-1/2 left-0 right-0 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2"
//                 animate={{
//                   scaleX: [0.2, 1, 0.2],
//                   opacity: [0.3, 0.8, 0.3]
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//               />
              
//               {/* Animated chevron */}
//               <motion.div
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 animate={{
//                   y: [0, 3, 0]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop'
//                 }}
//               >
//                 <FiChevronDown className="text-blue-400 text-xs md:text-sm" />
//               </motion.div>
//             </div>
            
//             {/* Text */}
//             <motion.span
//               className="text-[10px] md:text-xs text-[#9ca3af] font-mono mt-1 md:mt-2 tracking-wider"
//               animate={{
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             >
//               SCROLL
//             </motion.span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }






























// 'use client'
// import { motion } from 'framer-motion'
// import { FiArrowRight, FiSend, FiDownload, FiCode, FiCpu, FiDatabase, FiServer, FiChevronDown } from 'react-icons/fi'
// import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
// import { SiUpwork } from 'react-icons/si'
// import Typewriter from 'typewriter-effect'
// import Image from 'next/image'

// // Option 1: If profileimage.svg is in public folder
// // const ProfileSVG = '/profileimage.svg'

// // Option 2: If you want to import it directly (better for optimization)
// // You need to configure next.config.js for SVGs first
// // For now, let's use the public folder approach

// export default function Hero({ scrollToSection }) {
//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yonas_fsaha_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   // Tech stack icons for visual interest
//   const techIcons = [
//     { icon: <FiCode />, color: 'text-blue-400' },
//     { icon: <FiCpu />, color: 'text-blue-400' },
//     { icon: <FiDatabase />, color: 'text-blue-400' },
//     { icon: <FiServer />, color: 'text-blue-400' },
//   ]

//   return (
//     <section id="home" className="relative bg-[#020617] text-white overflow-hidden min-h-screen flex items-center">
//       {/* Subtle animated background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0 opacity-5">
//         {/* Animated code brackets - minimal */}
//         <motion.div
//           className="absolute top-1/4 left-5 text-blue-400 text-6xl font-mono"
//           animate={{ opacity: [0.05, 0.1, 0.05] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         >
//           {'</>'}
//         </motion.div>
//         <motion.div
//           className="absolute bottom-1/3 right-8 text-blue-400 text-5xl font-mono"
//           animate={{ opacity: [0.05, 0.08, 0.05] }}
//           transition={{ duration: 7, repeat: Infinity, delay: 1 }}
//         >
//           {'{}'}
//         </motion.div>
//       </div>

//       {/* Content container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
//           {/* Left column - Text content */}
//           <div className="w-full lg:w-1/2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               {/* Animated tech icons row */}
//               <motion.div 
//                 className="flex gap-4 mb-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {techIcons.map((tech, i) => (
//                   <motion.div
//                     key={i}
//                     className={`p-3 rounded-lg bg-white/5 ${tech.color}`}
//                     whileHover={{ 
//                       scale: 1.1,
//                       boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
//                       backgroundColor: 'rgba(96, 165, 250, 0.1)'
//                     }}
//                     animate={{
//                       y: [0, -4, 0]
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       delay: i * 0.2
//                     }}
//                   >
//                     {tech.icon}
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Headings */}
//               <div className="space-y-6">
                
//                 {/* Name in one line */}
//                 <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
//                   <span className=" text-white">Yonas</span><span className=" text-blue-400">Fsaha</span>
//                 </h1>

//                 {/* Typewriter with adjusted sizing */}
//                 <div className="h-14 flex items-center">
//                   <div className="inline-flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
//                     <div className="text-xl sm:text-2xl md:text-3xl text-[#9ca3af] font-mono min-h-[40px] flex items-center">
//                       <Typewriter
//                         options={{
//                           strings: [
//                             'Full-Stack Developer',
//                             'MERN Stack Specialist',
//                             'Next.js Expert',
//                             'Digital Solutions Architect'
//                           ],
//                           autoStart: true,
//                           loop: true,
//                           deleteSpeed: 30,
//                           delay: 60,
//                           cursor: '_',
//                           cursorClassName: 'text-blue-400'
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Description */}
//               <motion.p 
//                 className="text-lg text-[#9ca3af] leading-relaxed max-w-[600px] font-mono"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 Building high-performance web applications with modern technologies. 
//                 Focused on creating scalable solutions that deliver exceptional user experiences.
//               </motion.p>

//               {/* Stats with minimalist design */}
//               <motion.div
//                 className="grid grid-cols-3 gap-4 pt-8"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 {[
//                   { value: '5+', label: 'Years Exp' },
//                   { value: '50+', label: 'Projects' },
//                   { value: '100%', label: 'Satisfaction' }
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     className="text-center p-4 rounded-xl bg-white/5"
//                     whileHover={{ 
//                       y: -4,
//                       backgroundColor: 'rgba(96, 165, 250, 0.1)'
//                     }}
//                   >
//                     <div className="text-2xl font-bold text-white">
//                       {stat.value}
//                     </div>
//                     <div className="text-xs text-[#9ca3af] mt-1 font-mono tracking-wider">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Right column - SVG Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full lg:w-1/2 flex flex-col items-center justify-center"
//           >
//             {/* SVG Container with glow effects */}
//             <div className="relative w-full max-w-[500px] aspect-square">
//               {/* Glowing orb background */}
//               <motion.div
//                 className="absolute inset-0 rounded-full"
              
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//               />
              
//               {/* Main SVG container - no borders */}
//               <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center">
//                 {/* Use regular img tag for SVG in public folder */}
//                 <img 
//                   src="/profile.svg" 
//                   alt="Yonas Fsaha"
//                   className="w-full h-full object-contain"
//                   onError={(e) => {
//                     console.log('SVG failed to load, showing placeholder');
//                     e.target.style.display = 'none';
//                   }}
//                 />
                
                
//               </div>
              
            
              
             
//             </div>

//             {/* Call to action text */}
//             <motion.p
//               className="mt-8 text-[#9ca3af] text-center font-mono text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               // Ready to build something amazing?
//             </motion.p>
//           </motion.div>
//         </div>

//         {/* Bottom section with social and actions */}
//         <motion.div
//           className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//         >
//           {/* Social links - minimalist */}
//           <div className="flex gap-6">
//             {[
//               { icon: <FaLinkedin />, color: 'hover:text-blue-400', label: 'LinkedIn' },
//               { icon: <FaGithub />, color: 'hover:text-white', label: 'GitHub' },
//               { icon: <FaTwitter />, color: 'hover:text-blue-400', label: 'Twitter' },
//               { icon: <FaYoutube />, color: 'hover:text-red-400', label: 'YouTube' },
//               { icon: <SiUpwork />, color: 'hover:text-green-400', label: 'Upwork' }
//             ].map((social, i) => (
//               <motion.a
//                 key={i}
//                 href="#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-xl text-[#9ca3af] ${social.color} transition-colors`}
//                 aria-label={social.label}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.2,
//                   color: 'rgb(96 165 250)'
//                 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </div>

//           {/* Action buttons - tech style */}
//           <div className="flex flex-wrap justify-center gap-4">
//             {[
//               { 
//                 text: 'View Projects', 
//                 icon: <FiArrowRight />, 
//                 onClick: () => scrollToSection('projects'),
//                 variant: 'primary'
//               },
//               { 
//                 text: 'Get In Touch', 
//                 icon: <FiSend />, 
//                 onClick: () => scrollToSection('contact'),
//                 variant: 'secondary'
//               },
//               { 
//                 text: 'Download CV', 
//                 icon: <FiDownload />, 
//                 onClick: downloadResume,
//                 variant: 'secondary'
//               }
//             ].map((button, i) => (
//               <motion.button
//                 key={i}
//                 whileHover={{ 
//                   y: -3,
//                   scale: 1.05,
//                   boxShadow: button.variant === 'primary' 
//                     ? '0 8px 25px -5px rgba(96, 165, 250, 0.4)' 
//                     : '0 8px 25px -5px rgba(255, 255, 255, 0.1)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={button.onClick}
//                 className={`
//                   flex items-center justify-center px-6 py-3 rounded-lg font-medium font-mono
//                   ${button.variant === 'primary' 
//                     ? 'bg-blue-400 text-[#020617] hover:bg-blue-300' 
//                     : 'bg-white/10 text-white hover:bg-white/20'}
//                   transition-all duration-300
//                 `}
//               >
//                 <span className="mr-2">{button.text}</span>
//                 {button.icon}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Unique Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         >
//           <button 
//             onClick={() => scrollToSection('about')}
//             className="flex flex-col items-center group"
//             aria-label="Scroll down"
//           >
//             {/* Unique code bracket indicator */}
//             <div className="relative">
//               {/* Outer brackets */}
//               <div className="text-blue-400/50 text-2xl font-mono">
//                 {'{ }'}
//               </div>
              
//               {/* Animated line connecting brackets */}
//               <motion.div
//                 className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2"
//                 animate={{
//                   scaleX: [0.2, 1, 0.2],
//                   opacity: [0.3, 0.8, 0.3]
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   repeatType: 'reverse'
//                 }}
//               />
              
//               {/* Animated chevron */}
//               <motion.div
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 animate={{
//                   y: [0, 3, 0]
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatType: 'loop'
//                 }}
//               >
//                 <FiChevronDown className="text-blue-400 text-sm" />
//               </motion.div>
//             </div>
            
//             {/* Text */}
//             <motion.span
//               className="text-xs text-[#9ca3af] font-mono mt-2 tracking-wider"
//               animate={{
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: 'reverse'
//               }}
//             >
//               SCROLL
//             </motion.span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
















