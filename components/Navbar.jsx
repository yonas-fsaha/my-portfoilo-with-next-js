'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { FiMenu, FiX, FiDownload, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'journey' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
  { name: 'Blogs', id: 'blog' },
]

export default function PortfolioNavbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const { scrollY } = useScroll()
  const prevScrollY = useRef(0)

  // Collapsible navbar logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 50
    
    // Collapse/expand based on scroll direction
    if (latest > prevScrollY.current && latest > 100) {
      setIsCollapsed(true)
    } else if (latest < prevScrollY.current || latest <= 100) {
      setIsCollapsed(false)
    }
    
    prevScrollY.current = latest
    setScrolled(isScrolled)
  })

  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'yonas_fsaha_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Handle navigation click for mobile
  const handleNavClick = (sectionId) => {
    if (scrollToSection) {
      scrollToSection(sectionId)
    } else {
      // Fallback: scroll to section using element ID
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  const ThemeToggle = () => {
    return (
      <motion.button
        onClick={toggleDarkMode}
        className="relative p-2 rounded-full bg-white/5 border border-white/10"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? (
          <FiSun className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
        ) : (
          <FiMoon className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
        )}
      </motion.button>
    )
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          height: isCollapsed ? '60px' : '80px'
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          height: { duration: 0.3 }
        }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#020617]/95 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-white/10'
            : 'bg-[#020617]/90 backdrop-blur-md'
        }`}
        style={{ 
          paddingTop: isCollapsed ? '0' : '1rem',
          paddingBottom: isCollapsed ? '0' : '1rem'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo/Name with glow effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button 
                onClick={() => {
                  if (scrollToSection) {
                    scrollToSection('home')
                  } else {
                    const homeElement = document.getElementById('home')
                    if (homeElement) {
                      homeElement.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
                className="text-xl md:text-2xl font-bold flex items-center gap-2 group"
                aria-label="Home"
              >
                <span className="text-white font-mono">Yonas</span>
                <motion.span 
                  className="text-blue-400 font-mono"
                  animate={{ 
                    textShadow: [
                      '0 0 0px rgba(96, 165, 250, 0)',
                      '0 0 10px rgba(96, 165, 250, 0.5)',
                      '0 0 0px rgba(96, 165, 250, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  F
                </motion.span>
                {/* Animated dot */}
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-blue-400"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center space-x-6 md:space-x-8">
                <div className="flex space-x-1 md:space-x-2">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      whileHover={{ 
                        y: -3,
                        color: '#60a5fa'
                      }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => {
                        if (scrollToSection) {
                          scrollToSection(item.id)
                        } else {
                          const element = document.getElementById(item.id)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }
                      }}
                      className={`relative px-3 py-2 text-sm font-medium font-mono transition-all ${
                        activeSection === item.id
                          ? 'text-blue-400 font-semibold'
                          : 'text-[#9ca3af] hover:text-white'
                      }`}
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      {item.name}
                      {/* Active indicator line */}
                      {activeSection === item.id && (
                        <motion.span 
                          layoutId="nav-underline"
                          className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                          initial={false}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      {/* Hover effect */}
                      {hoveredItem === item.id && activeSection !== item.id && (
                        <motion.span 
                          layoutId="nav-hover"
                          className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-400/30 rounded-full"
                          initial={false}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Right side actions */}
                <div className="flex items-center space-x-3 md:space-x-4">
                  <ThemeToggle />
                  <motion.button
                    onClick={downloadResume}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-400 text-[#020617] text-sm font-medium font-mono"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#93c5fd',
                      boxShadow: '0 0 20px rgba(96, 165, 250, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Download resume"
                  >
                    <FiDownload />
                    <span>Resume</span>
                  </motion.button>
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-lg bg-white/5 border border-white/10"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {menuOpen ? (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiX className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiMenu className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  )}
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator (only when collapsed) */}
        {isCollapsed && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiChevronDown className="w-4 h-4 text-blue-400/50" />
            </motion.div>
          </motion.div>
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 w-80 h-full bg-[#020617]/95 backdrop-blur-xl shadow-2xl border-l border-white/10"
            >
              <div className="h-full flex flex-col">
                {/* Menu Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => handleNavClick('home')}
                      className="text-xl font-bold font-mono flex items-center gap-2"
                      aria-label="Home"
                    >
                      <span className="text-white">Yonas</span>
                      <span className="text-blue-400">Fsaha</span>
                    </button>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item, i) => (
                      <motion.button
                        key={item.id}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavClick(item.id)}
                        className={`text-left py-4 px-4 rounded-lg transition-all flex items-center justify-between ${
                          activeSection === item.id
                            ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20'
                            : 'text-[#9ca3af] hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                        aria-label={`Navigate to ${item.name} section`}
                      >
                        <span className="font-medium font-mono">{item.name}</span>
                        {activeSection === item.id && (
                          <motion.div 
                            layoutId="mobile-nav-indicator"
                            className="w-2 h-2 rounded-full bg-blue-400"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              boxShadow: ['0 0 0px #60a5fa', '0 0 10px #60a5fa', '0 0 0px #60a5fa']
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Footer with Resume Download */}
                <div className="p-6 border-t border-white/10 space-y-4">
                  <motion.button
                    onClick={() => {
                      downloadResume()
                      setMenuOpen(false)
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-400 text-[#020617] font-medium font-mono"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: '#93c5fd'
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Download resume"
                  >
                    <FiDownload />
                    <span>Download Resume</span>
                  </motion.button>
                  
                  <div className="text-xs text-[#9ca3af] text-center pt-4 border-t border-white/10">
                    <p>© {new Date().getFullYear()} Yonas Fsaha</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent hero content from being hidden */}
      <div 
        className={`h-20 transition-all duration-500 ${isCollapsed ? 'h-16' : 'h-20'}`}
        style={{ 
          minHeight: isMobile ? '60px' : (isCollapsed ? '60px' : '80px')
        }}
      />
    </>
  )
}























// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import { FiMenu, FiX, FiDownload, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi'

// const navItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'About', id: 'about' },
//   { name: 'Experience', id: 'experience' },
//   { name: 'Skills', id: 'skills' },
//   { name: 'Projects', id: 'projects' },
//   { name: 'Contact', id: 'contact' }
// ]

// export default function PortfolioNavbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isCollapsed, setIsCollapsed] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hoveredItem, setHoveredItem] = useState(null)
//   const [scrolled, setScrolled] = useState(false)
//   const navRef = useRef(null)
//   const { scrollY } = useScroll()
//   const prevScrollY = useRef(0)

//   // Collapsible navbar logic
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const isScrolled = latest > 50
    
//     // Collapse/expand based on scroll direction
//     if (latest > prevScrollY.current && latest > 100) {
//       setIsCollapsed(true)
//     } else if (latest < prevScrollY.current || latest <= 100) {
//       setIsCollapsed(false)
//     }
    
//     prevScrollY.current = latest
//     setScrolled(isScrolled)
//   })

//   // Check if mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       const mobile = window.innerWidth < 1024
//       setIsMobile(mobile)
//       if (!mobile) setMenuOpen(false)
//     }
    
//     checkIfMobile()
//     window.addEventListener('resize', checkIfMobile)
//     return () => window.removeEventListener('resize', checkIfMobile)
//   }, [])

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
//         setMenuOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [menuOpen])

//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yonas_fsaha_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   const ThemeToggle = () => {
//     return (
//       <motion.button
//         onClick={toggleDarkMode}
//         className="relative p-2 rounded-full bg-white/5 border border-white/10"
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//         whileHover={{ scale: 1.1, backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {darkMode ? (
//           <FiSun className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
//         ) : (
//           <FiMoon className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
//         )}
//       </motion.button>
//     )
//   }

//   return (
//     <>
//       {/* Main Navbar */}
//       <motion.nav 
//         ref={navRef}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ 
//           y: 0, 
//           opacity: 1,
//           height: isCollapsed ? '60px' : '80px'
//         }}
//         transition={{ 
//           duration: 0.6, 
//           ease: [0.16, 1, 0.3, 1],
//           height: { duration: 0.3 }
//         }}
//         className={`fixed w-full z-50 transition-all duration-500 ${
//           scrolled 
//             ? 'bg-[#020617]/95 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-white/10'
//             : 'bg-[#020617]/90 backdrop-blur-md'
//         }`}
//         style={{ 
//           paddingTop: isCollapsed ? '0' : '1rem',
//           paddingBottom: isCollapsed ? '0' : '1rem'
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Logo/Name with glow effect */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-xl md:text-2xl font-bold flex items-center gap-2 group"
//                 aria-label="Home"
//               >
//                 <span className="text-white font-mono">Yonas</span>
//                 <motion.span 
//                   className="text-blue-400 font-mono"
//                   animate={{ 
//                     textShadow: [
//                       '0 0 0px rgba(96, 165, 250, 0)',
//                       '0 0 10px rgba(96, 165, 250, 0.5)',
//                       '0 0 0px rgba(96, 165, 250, 0)'
//                     ]
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   Fsaha
//                 </motion.span>
//                 {/* Animated dot */}
//                 <motion.div
//                   className="w-1.5 h-1.5 rounded-full bg-blue-400"
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     opacity: [0.7, 1, 0.7]
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//               </button>
//             </motion.div>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <div className="flex items-center space-x-6 md:space-x-8">
//                 <div className="flex space-x-1 md:space-x-2">
//                   {navItems.map((item, i) => (
//                     <motion.button
//                       key={item.id}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + i * 0.05 }}
//                       whileHover={{ 
//                         y: -3,
//                         color: '#60a5fa'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       onMouseEnter={() => setHoveredItem(item.id)}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       onClick={() => scrollToSection(item.id)}
//                       className={`relative px-3 py-2 text-sm font-medium font-mono transition-all ${
//                         activeSection === item.id
//                           ? 'text-blue-400 font-semibold'
//                           : 'text-[#9ca3af] hover:text-white'
//                       }`}
//                       aria-label={`Navigate to ${item.name} section`}
//                     >
//                       {item.name}
//                       {/* Active indicator line */}
//                       {activeSection === item.id && (
//                         <motion.span 
//                           layoutId="nav-underline"
//                           className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
//                           initial={false}
//                           transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
//                         />
//                       )}
//                       {/* Hover effect */}
//                       {hoveredItem === item.id && activeSection !== item.id && (
//                         <motion.span 
//                           layoutId="nav-hover"
//                           className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-400/30 rounded-full"
//                           initial={false}
//                           transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>

//                 {/* Right side actions */}
//                 <div className="flex items-center space-x-3 md:space-x-4">
//                   <ThemeToggle />
//                   <motion.button
//                     onClick={downloadResume}
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-400 text-[#020617] text-sm font-medium font-mono"
//                     whileHover={{ 
//                       scale: 1.05,
//                       backgroundColor: '#93c5fd',
//                       boxShadow: '0 0 20px rgba(96, 165, 250, 0.4)'
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                     aria-label="Download resume"
//                   >
//                     <FiDownload />
//                     <span>Resume</span>
//                   </motion.button>
//                 </div>
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <div className="flex items-center space-x-3">
//                 <ThemeToggle />
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="p-2 rounded-lg bg-white/5 border border-white/10"
//                   aria-label={menuOpen ? "Close menu" : "Open menu"}
//                   whileHover={{ scale: 1.1, backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {menuOpen ? (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: 90 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiX className="w-5 h-5 text-blue-400" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiMenu className="w-5 h-5 text-blue-400" />
//                     </motion.div>
//                   )}
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Scroll indicator (only when collapsed) */}
//         {isCollapsed && !isMobile && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 5, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <FiChevronDown className="w-4 h-4 text-blue-400/50" />
//             </motion.div>
//           </motion.div>
//         )}
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
//               onClick={() => setMenuOpen(false)}
//             />
            
//             {/* Mobile Menu Panel */}
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="fixed top-0 right-0 z-50 w-80 h-full bg-[#020617]/95 backdrop-blur-xl shadow-2xl border-l border-white/10"
//             >
//               <div className="h-full flex flex-col">
//                 {/* Menu Header */}
//                 <div className="p-6 border-b border-white/10">
//                   <div className="flex justify-between items-center">
//                     <button 
//                       onClick={() => {
//                         scrollToSection('home')
//                         setMenuOpen(false)
//                       }}
//                       className="text-xl font-bold font-mono flex items-center gap-2"
//                       aria-label="Home"
//                     >
//                       <span className="text-white">Yonas</span>
//                       <span className="text-blue-400">Fsaha</span>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Menu Items */}
//                 <div className="flex-1 overflow-y-auto p-6">
//                   <div className="flex flex-col space-y-2">
//                     {navItems.map((item, i) => (
//                       <motion.button
//                         key={item.id}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.3, delay: i * 0.05 }}
//                         whileHover={{ x: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           scrollToSection(item.id)
//                           setMenuOpen(false)
//                         }}
//                         className={`text-left py-4 px-4 rounded-lg transition-all flex items-center justify-between ${
//                           activeSection === item.id
//                             ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20'
//                             : 'text-[#9ca3af] hover:text-white hover:bg-white/5 border border-transparent'
//                         }`}
//                         aria-label={`Navigate to ${item.name} section`}
//                       >
//                         <span className="font-medium font-mono">{item.name}</span>
//                         {activeSection === item.id && (
//                           <motion.div 
//                             layoutId="mobile-nav-indicator"
//                             className="w-2 h-2 rounded-full bg-blue-400"
//                             animate={{ 
//                               scale: [1, 1.5, 1],
//                               boxShadow: ['0 0 0px #60a5fa', '0 0 10px #60a5fa', '0 0 0px #60a5fa']
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           />
//                         )}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer with Resume Download */}
//                 <div className="p-6 border-t border-white/10 space-y-4">
//                   <motion.button
//                     onClick={() => {
//                       downloadResume()
//                       setMenuOpen(false)
//                     }}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-400 text-[#020617] font-medium font-mono"
//                     whileHover={{ 
//                       scale: 1.02,
//                       backgroundColor: '#93c5fd'
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     aria-label="Download resume"
//                   >
//                     <FiDownload />
//                     <span>Download Resume</span>
//                   </motion.button>
                  
//                   <div className="text-xs text-[#9ca3af] text-center pt-4 border-t border-white/10">
//                     <p>© {new Date().getFullYear()} Yonas Fsaha</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Spacer to prevent hero content from being hidden */}
//       <div 
//         className={`h-20 transition-all duration-500 ${isCollapsed ? 'h-16' : 'h-20'}`}
//         style={{ 
//           minHeight: isMobile ? '60px' : (isCollapsed ? '60px' : '80px')
//         }}
//       />
//     </>
//   )
// }




















// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from 'react-icons/fi'

// const navItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'About', id: 'about' },
//   { name: 'Experience', id: 'experience' },
//   { name: 'Skills', id: 'skills' },
//   { name: 'Projects', id: 'projects' },
//   { name: 'Contact', id: 'contact' }
// ]

// export default function PortfolioNavbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hoveredItem, setHoveredItem] = useState(null)
//   const navRef = useRef(null)
//   const { scrollY } = useScroll()

//   // Dark mode toggle component
//   const ThemeToggle = () => {
//     return (
//       <motion.button
//         onClick={toggleDarkMode}
//         className="p-2 rounded-full focus:outline-none"
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {darkMode ? (
//           <FiSun className="w-5 h-5 text-yellow-300" />
//         ) : (
//           <FiMoon className="w-5 h-5 text-gray-700" />
//         )}
//       </motion.button>
//     )
//   }

//   useEffect(() => {
//     const checkIfMobile = () => {
//       const mobile = window.innerWidth < 1024
//       setIsMobile(mobile)
//       if (!mobile) setMenuOpen(false)
//     }
    
//     checkIfMobile()
//     window.addEventListener('resize', checkIfMobile)
//     return () => window.removeEventListener('resize', checkIfMobile)
//   }, [])

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50)
//   })

//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yourname_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
//         setMenuOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [menuOpen])

//   return (
//     <>
//       {/* Main Navbar */}
//       <motion.nav 
//         ref={navRef}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         className={`fixed w-full z-40 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/95 dark:bg-[#0a0e14]/95 backdrop-blur-lg shadow-sm py-2 border-b border-gray-200/50 dark:border-gray-800/30'
//             : 'bg-white/90 dark:bg-[#0a0e14]/90 backdrop-blur-md py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             {/* Logo/Name */}
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                 aria-label="Home"
//               >
//                 YF
//               </button>
//             </motion.div>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <div className="flex items-center space-x-8">
//                 <div className="flex space-x-6">
//                   {navItems.map((item, i) => (
//                     <motion.button
//                       key={item.id}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + i * 0.05 }}
//                       whileHover={{ 
//                         y: -2,
//                         color: darkMode ? '#3b82f6' : '#2563eb'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       onMouseEnter={() => setHoveredItem(item.id)}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       onClick={() => scrollToSection(item.id)}
//                       className={`relative px-1 py-1 text-sm font-medium transition-colors ${
//                         activeSection === item.id
//                           ? 'text-blue-600 dark:text-blue-400 font-semibold'
//                           : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
//                       }`}
//                       aria-label={`Navigate to ${item.name} section`}
//                     >
//                       {item.name}
//                       {activeSection === item.id && (
//                         <motion.span 
//                           layoutId="nav-underline"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                         />
//                       )}
//                       {hoveredItem === item.id && activeSection !== item.id && (
//                         <motion.span 
//                           layoutId="nav-hover"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <ThemeToggle />
//                   <motion.button
//                     onClick={downloadResume}
//                     className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     aria-label="Download resume"
//                   >
//                     <FiDownload />
//                     <span>Resume</span>
//                   </motion.button>
//                 </div>
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <div className="flex items-center space-x-4">
//                 <ThemeToggle />
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="p-2 rounded-md focus:outline-none"
//                   aria-label={menuOpen ? "Close menu" : "Open menu"}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {menuOpen ? (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: 180 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                     </motion.div>
//                   )}
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
//               onClick={() => setMenuOpen(false)}
//             />
            
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="fixed top-0 right-0 z-40 w-80 h-full bg-white/95 dark:bg-[#0a0e14]/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/30 dark:border-gray-800/20"
//             >
//               <div className="h-full flex flex-col">
//                 {/* Menu Header */}
//                 <div className="p-6 border-b border-gray-200/30 dark:border-gray-800/20">
//                   <div className="flex justify-between items-center">
//                     <button 
//                       onClick={() => {
//                         scrollToSection('home')
//                         setMenuOpen(false)
//                       }}
//                       className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                       aria-label="Home"
//                     >
//                       YF Portfolio
//                     </button>
//                   </div>
//                 </div>

//                 {/* Menu Items */}
//                 <div className="flex-1 overflow-y-auto p-6">
//                   <div className="flex flex-col space-y-2">
//                     {navItems.map((item, i) => (
//                       <motion.button
//                         key={item.id}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.3, delay: i * 0.05 }}
//                         whileHover={{ x: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           scrollToSection(item.id)
//                           setMenuOpen(false)
//                         }}
//                         className={`text-left py-3 px-4 rounded-lg transition-all flex items-center ${
//                           activeSection === item.id
//                             ? 'bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400'
//                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                         }`}
//                         aria-label={`Navigate to ${item.name} section`}
//                       >
//                         <span className="text-lg font-medium">{item.name}</span>
//                         {activeSection === item.id && (
//                           <motion.span 
//                             layoutId="mobile-nav-indicator"
//                             className="ml-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
//                           />
//                         )}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer with Resume Download */}
//                 <div className="p-6 border-t border-gray-200/30 dark:border-gray-800/20">
//                   <motion.button
//                     onClick={() => {
//                       downloadResume()
//                       setMenuOpen(false)
//                     }}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     aria-label="Download resume"
//                   >
//                     <FiDownload />
//                     <span>Download Resume</span>
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }
















// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMenu, FiX, FiDownload } from 'react-icons/fi'
// import { FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
// import { SiTypescript, SiNextdotjs } from 'react-icons/si'
// import ThemeToggle from './ThemeToggle'



// // Nav items data moved outside component
// const navItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'About', id: 'about' },
//   { name: 'Experience', id: 'experience' },
//   { name: 'Skills', id: 'skills' },
//   { name: 'Projects', id: 'projects' },
//   { name: 'Contact', id: 'contact' }
// ]

// export default function PortfolioNavbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [cursorEffect, setCursorEffect] = useState({ x: 0, y: 0, active: false })
//   const [hoveredItem, setHoveredItem] = useState(null)
//   const navRef = useRef(null)
//   const { scrollY } = useScroll()

//   // Check if mobile on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       const mobile = window.innerWidth < 1024
//       setIsMobile(mobile)
//       if (!mobile) setMenuOpen(false)
//     }
    
//     checkIfMobile()
//     window.addEventListener('resize', checkIfMobile)
//     return () => window.removeEventListener('resize', checkIfMobile)
//   }, [])

//   // Track scroll position for navbar effects
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50)
//   })

//   // Cursor effect for menu items
//   const handleMouseMove = (e) => {
//     if (navRef.current) {
//       const rect = navRef.current.getBoundingClientRect()
//       setCursorEffect({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//         active: true
//       })
//     }
//   }

//   const handleMouseLeave = () => {
//     setCursorEffect(prev => ({ ...prev, active: false }))
//   }

//   // Download resume function
//   const downloadResume = () => {
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yourname_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
//         setMenuOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [menuOpen])

//   return (
//     <>
//       {/* Enhanced Floating Cursor Effect */}
//       <motion.div
//         className={`fixed z-50 rounded-full pointer-events-none bg-gradient-to-br from-blue-500 to-purple-600 mix-blend-difference ${
//           hoveredItem ? 'w-8 h-8' : 'w-4 h-4'
//         } transition-all duration-300 ease-out`}
//         animate={{
//           x: cursorEffect.x - (hoveredItem ? 16 : 8),
//           y: cursorEffect.y - (hoveredItem ? 16 : 8),
//           scale: cursorEffect.active ? (hoveredItem ? 1.5 : 1) : 0,
//           opacity: cursorEffect.active ? (hoveredItem ? 0.8 : 1) : 0
//         }}
//         transition={{ 
//           type: 'spring', 
//           damping: 20, 
//           stiffness: 300,
//           opacity: { duration: 0.2 }
//         }}
//       />

//       {/* Main Navbar */}
//       <motion.nav 
//         ref={navRef}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className={`fixed w-full z-40 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/95 dark:bg-[#0a0e14]/95 backdrop-blur-lg shadow-sm py-2 border-b border-gray-200/50 dark:border-gray-800/30'
//             : 'bg-white/90 dark:bg-[#0a0e14]/90 backdrop-blur-md py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             {/* Logo/Name */}
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center space-x-3"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                 aria-label="Home"
//               >
//                 YF
//               </button>
//               <div className="hidden md:flex items-center space-x-2">
//                 <FaReact className="text-blue-500" />
//                 <SiTypescript className="text-blue-600" />
//                 <SiNextdotjs className="text-black dark:text-white" />
//                 <FaNodeJs className="text-green-600" />
//                 <FaFigma className="text-purple-600" />
//               </div>
//             </motion.div>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <div className="flex items-center space-x-8">
//                 <div className="flex space-x-6">
//                   {navItems.map((item, i) => (
//                     <motion.button
//                       key={item.id}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + i * 0.05 }}
//                       whileHover={{ 
//                         y: -2,
//                         color: darkMode ? '#3b82f6' : '#2563eb'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       onMouseEnter={() => setHoveredItem(item.id)}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       onClick={() => scrollToSection(item.id)}
//                       className={`relative px-1 py-1 text-sm font-medium transition-colors ${
//                         activeSection === item.id
//                           ? 'text-blue-600 dark:text-blue-400 font-semibold'
//                           : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
//                       }`}
//                       aria-label={`Navigate to ${item.name} section`}
//                     >
//                       {item.name}
//                       {activeSection === item.id && (
//                         <motion.span 
//                           layoutId="nav-underline"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                         />
//                       )}
//                       {hoveredItem === item.id && activeSection !== item.id && (
//                         <motion.span 
//                           layoutId="nav-hover"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                   <motion.button
//                     onClick={downloadResume}
//                     className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     aria-label="Download resume"
//                   >
//                     <FiDownload />
//                     <span>Resume</span>
//                   </motion.button>
//                 </div>
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <div className="flex items-center space-x-4">
//                 <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="p-2 rounded-md focus:outline-none"
//                   aria-label={menuOpen ? "Close menu" : "Open menu"}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {menuOpen ? (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: 180 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                     </motion.div>
//                   )}
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
//               onClick={() => setMenuOpen(false)}
//             />
            
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="fixed top-0 right-0 z-40 w-80 h-full bg-white/95 dark:bg-[#0a0e14]/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/30 dark:border-gray-800/20"
//             >
//               <div className="h-full flex flex-col">
//                 {/* Menu Header */}
//                 <div className="p-6 border-b border-gray-200/30 dark:border-gray-800/20">
//                   <div className="flex justify-between items-center">
//                     <button 
//                       onClick={() => {
//                         scrollToSection('home')
//                         setMenuOpen(false)
//                       }}
//                       className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                       aria-label="Home"
//                     >
//                       YF Portfolio
//                     </button>
//                   </div>
//                 </div>

//                 {/* Menu Items */}
//                 <div className="flex-1 overflow-y-auto p-6">
//                   <div className="flex flex-col space-y-2">
//                     {navItems.map((item, i) => (
//                       <motion.button
//                         key={item.id}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.3, delay: i * 0.05 }}
//                         whileHover={{ x: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           scrollToSection(item.id)
//                           setMenuOpen(false)
//                         }}
//                         className={`text-left py-3 px-4 rounded-lg transition-all flex items-center ${
//                           activeSection === item.id
//                             ? 'bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400'
//                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                         }`}
//                         aria-label={`Navigate to ${item.name} section`}
//                       >
//                         <span className="text-lg font-medium">{item.name}</span>
//                         {activeSection === item.id && (
//                           <motion.span 
//                             layoutId="mobile-nav-indicator"
//                             className="ml-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"
//                           />
//                         )}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer with Social Links and Resume Download */}
//                 <div className="p-6 border-t border-gray-200/30 dark:border-gray-800/20">
//                   <motion.button
//                     onClick={() => {
//                       downloadResume()
//                       setMenuOpen(false)
//                     }}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-3 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     aria-label="Download resume"
//                   >
//                     <FiDownload />
//                     <span>Download Resume</span>
//                   </motion.button>
                  
//                   <div className="flex justify-center space-x-6">
//                     {socialLinks.map((link, i) => (
//                       <motion.a
//                         key={link.label}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.2 + i * 0.1 }}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2"
//                         aria-label={link.label}
//                         whileHover={{ y: -3, scale: 1.15 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <span className="text-xl">{link.icon}</span>
//                       </motion.a>
//                     ))}
//                   </div>
//                   <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
//                     © {new Date().getFullYear()} All Rights Reserved
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }























// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMenu, FiX, FiDownload } from 'react-icons/fi'
// import { FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
// import { SiTypescript, SiNextdotjs } from 'react-icons/si'
// import ThemeToggle from './ThemeToggle'

// export default function PortfolioNavbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [cursorEffect, setCursorEffect] = useState({ x: 0, y: 0, active: false })
//   const [hoveredItem, setHoveredItem] = useState(null)
//   const navRef = useRef(null)
//   const { scrollY } = useScroll()

//   // Check if mobile on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       const mobile = window.innerWidth < 1024
//       setIsMobile(mobile)
//       if (!mobile) setMenuOpen(false)
//     }
    
//     checkIfMobile()
//     window.addEventListener('resize', checkIfMobile)
//     return () => window.removeEventListener('resize', checkIfMobile)
//   }, [])

//   // Track scroll position for navbar effects
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50)
//   })

//   // Cursor effect for menu items
//   const handleMouseMove = (e) => {
//     if (navRef.current) {
//       const rect = navRef.current.getBoundingClientRect()
//       setCursorEffect({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//         active: true
//       })
//     }
//   }

//   const handleMouseLeave = () => {
//     setCursorEffect({ ...cursorEffect, active: false })
//   }

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Experience', id: 'experience' },
//     { name: 'Skills', id: 'skills' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Contact', id: 'contact' }
//   ]


//   // Download resume function
//   const downloadResume = () => {
//     // Replace with your actual resume download logic
//     const link = document.createElement('a')
//     link.href = '/resume.pdf'
//     link.download = 'yourname_resume.pdf'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   return (
//     <>
//       {/* Floating Cursor Effect - Enhanced with different states */}
//       <motion.div
//         className={`fixed z-50 rounded-full pointer-events-none bg-gradient-to-br from-blue-500 to-purple-600 mix-blend-difference ${
//           hoveredItem ? 'w-8 h-8 opacity-80' : 'w-4 h-4 opacity-100'
//         } ${cursorEffect.active ? 'opacity-100' : 'opacity-0'}`}
//         animate={{
//           x: cursorEffect.x - (hoveredItem ? 16 : 8),
//           y: cursorEffect.y - (hoveredItem ? 16 : 8),
//           scale: cursorEffect.active ? (hoveredItem ? 1.5 : 1) : 0.5
//         }}
//         transition={{ type: 'spring', damping: 20, stiffness: 300 }}
//       />

//       {/* Main Navbar - Enhanced with better transitions and styling */}
//       <motion.nav 
//         ref={navRef}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className={`fixed w-full z-40 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/95 dark:bg-[#0a0e14]/95 backdrop-blur-lg shadow-sm py-2 border-b border-gray-200/50 dark:border-gray-800/30'
//             : 'bg-white/90 dark:bg-[#0a0e14]/90 backdrop-blur-md py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             {/* Logo/Name with Tech Icons - Enhanced with more tech icons */}
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center space-x-3"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//               >
//                 YF
//               </button>
              
            
//             </motion.div>

//             {/* Desktop Navigation - Enhanced with better hover effects */}
//             {!isMobile && (
//               <div className="flex items-center space-x-8">
//                 <div className="flex space-x-6">
//                   {navItems.map((item, i) => (
//                     <motion.button
//                       key={item.id}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + i * 0.05 }}
//                       whileHover={{ 
//                         y: -2,
//                         color: darkMode ? '#3b82f6' : '#2563eb'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       onMouseEnter={() => setHoveredItem(item.id)}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       onClick={() => scrollToSection(item.id)}
//                       className={`relative px-1 py-1 text-sm font-medium transition-colors ${
//                         activeSection === item.id
//                           ? 'text-blue-600 dark:text-blue-400 font-semibold'
//                           : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
//                       }`}
//                     >
//                       {item.name}
//                       {activeSection === item.id && (
//                         <motion.span 
//                           layoutId="nav-underline"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                         />
//                       )}
//                       {hoveredItem === item.id && activeSection !== item.id && (
//                         <motion.span 
//                           layoutId="nav-hover"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>

          
//               </div>
//             )}

//             {/* Mobile Menu Button - Enhanced with better animation */}
//             {isMobile && (
//               <motion.button
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="p-2 rounded-md focus:outline-none"
//                 aria-label="Menu"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {menuOpen ? (
//                   <motion.div
//                     initial={{ rotate: 0 }}
//                     animate={{ rotate: 180 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     initial={{ rotate: 0 }}
//                     animate={{ rotate: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                   </motion.div>
//                 )}
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu - Enhanced with better animations and structure */}
//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
//               onClick={() => setMenuOpen(false)}
//             />
            
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="fixed top-0 right-0 z-40 w-80 h-full bg-white/95 dark:bg-[#0a0e14]/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/30 dark:border-gray-800/20"
//             >
//               <div className="h-full flex flex-col">
//                 {/* Menu Header */}
//                 <div className="p-6 border-b border-gray-200/30 dark:border-gray-800/20">
//                   <div className="flex justify-between items-center">
//                     <button 
//                       onClick={() => {
//                         scrollToSection('home')
//                         setMenuOpen(false)
//                       }}
//                       className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                     >
//                       YF Portfolio
//                     </button>
//                     <div className="flex items-center space-x-4">
//                       <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Menu Items - Enhanced with staggered animations */}
//                 <div className="flex-1 overflow-y-auto p-6">
//                   <div className="flex flex-col space-y-2">
//                     {navItems.map((item, i) => (
//                       <motion.button
//                         key={item.id}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.3, delay: i * 0.05 }}
//                         whileHover={{ x: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           scrollToSection(item.id)
//                           setMenuOpen(false)
//                         }}
//                         className={`text-left py-3 px-4 rounded-lg transition-all ${
//                           activeSection === item.id
//                             ? 'bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400'
//                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                         }`}
//                       >
//                         <span className="text-lg font-medium">{item.name}</span>
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer with Social Links - Added resume download */}
//                 <div className="p-6 border-t border-gray-200/30 dark:border-gray-800/20">
//                   <motion.button
//                     onClick={() => {
//                       downloadResume()
//                       setMenuOpen(false)
//                     }}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <FiDownload />
//                     <span>Download Resume</span>
//                   </motion.button>
                  
//                   <div className="flex justify-center space-x-6">
//                     {socialLinks.map((link, i) => (
//                       <motion.a
//                         key={link.label}
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ delay: 0.2 + i * 0.1 }}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
//                         aria-label={link.label}
//                         whileHover={{ y: -3, scale: 1.15 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <span className="text-xl">{link.icon}</span>
//                       </motion.a>
//                     ))}
//                   </div>
//                   <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
//                     © {new Date().getFullYear()} All Rights Reserved
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }




















// 'use client'
// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMenu, FiX } from 'react-icons/fi'
// import { FaReact, FaFigma } from 'react-icons/fa'
// import ThemeToggle from './ThemeToggle'

// export default function PortfolioNavbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [cursorEffect, setCursorEffect] = useState({ x: 0, y: 0, active: false })
//   const navRef = useRef(null)
//   const { scrollY } = useScroll()

//   // Check if mobile on mount and resize
//   useEffect(() => {
//     const checkIfMobile = () => {
//       const mobile = window.innerWidth < 1024
//       setIsMobile(mobile)
//       if (!mobile) setMenuOpen(false) // Close menu if resized to desktop
//     }
    
//     checkIfMobile()
//     window.addEventListener('resize', checkIfMobile)
//     return () => window.removeEventListener('resize', checkIfMobile)
//   }, [])

//   // Track scroll position for navbar effects
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50)
//   })

//   // Cursor effect for menu items
//   const handleMouseMove = (e) => {
//     if (navRef.current) {
//       const rect = navRef.current.getBoundingClientRect()
//       setCursorEffect({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//         active: true
//       })
//     }
//   }

//   const handleMouseLeave = () => {
//     setCursorEffect({ ...cursorEffect, active: false })
//   }

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Work', id: 'work' },
//     { name: 'Skills', id: 'skills' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Contact', id: 'contact' }
//   ]

//   const socialLinks = [
//     { icon: <FiGithub />, url: 'https://github.com', label: 'GitHub' },
//     { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
//     { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter' },
//     { icon: <FiMail />, url: 'mailto:contact@example.com', label: 'Email' }
//   ]

//   const techIcons = [
//     { icon: <FaReact className="text-blue-400" />, label: 'React' },
//     { icon: <FaFigma className="text-purple-500" />, label: 'Figma' }
//   ]

//   return (
//     <>
//       {/* Floating Cursor Effect */}
//       <motion.div
//         className={`fixed z-50 w-4 h-4 rounded-full pointer-events-none bg-blue-500 mix-blend-difference ${
//           cursorEffect.active ? 'opacity-100' : 'opacity-0'
//         }`}
//         animate={{
//           x: cursorEffect.x - 8,
//           y: cursorEffect.y - 8,
//           scale: cursorEffect.active ? 1 : 0.5
//         }}
//         transition={{ type: 'spring', damping: 20, stiffness: 300 }}
//       />

//       {/* Main Navbar */}
//       <motion.nav 
//         ref={navRef}
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className={`fixed w-full z-40 transition-all duration-500 ${
//           isScrolled 
//             ? 'bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-lg shadow-sm py-2 border-b border-gray-200/50 dark:border-gray-800/30'
//             : 'bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md py-4'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             {/* Logo/Name with Tech Icons */}
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center space-x-3"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//               >
//                 YF
//               </button>
              
//               <div className="hidden md:flex items-center space-x-2">
//                 {techIcons.map((tech, i) => (
//                   <motion.div
//                     key={tech.label}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + i * 0.1 }}
//                     className="text-lg"
//                     aria-label={tech.label}
//                   >
//                     {tech.icon}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <div className="flex items-center space-x-8">
//                 <div className="flex space-x-6">
//                   {navItems.map((item, i) => (
//                     <motion.button
//                       key={item.id}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 + i * 0.05 }}
//                       whileHover={{ 
//                         y: -2,
//                         color: darkMode ? '#3b82f6' : '#2563eb'
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => scrollToSection(item.id)}
//                       className={`relative px-1 py-1 text-sm font-medium transition-colors ${
//                         activeSection === item.id
//                           ? 'text-blue-600 dark:text-blue-400 font-semibold'
//                           : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
//                       }`}
//                     >
//                       {item.name}
//                       {activeSection === item.id && (
//                         <motion.span 
//                           layoutId="nav-underline"
//                           className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
//                           transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>

//                 {/* Social Links & Theme Toggle */}
//                 <div className="flex items-center space-x-5 pl-5 border-l border-gray-200/50 dark:border-gray-800/30">
//                   {socialLinks.map((link, i) => (
//                     <motion.a
//                       key={link.label}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.4 + i * 0.1 }}
//                       href={link.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
//                       aria-label={link.label}
//                       whileHover={{ y: -3, scale: 1.15 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       {link.icon}
//                     </motion.a>
//                   ))}
                  
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.8 }}
//                   >
//                     <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                   </motion.div>
//                 </div>
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <motion.button
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="p-2 rounded-md focus:outline-none"
//                 aria-label="Menu"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {menuOpen ? (
//                   <FiX className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                 ) : (
//                   <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
//                 )}
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobile && menuOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
//               onClick={() => setMenuOpen(false)}
//             />
            
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//               className="fixed top-0 right-0 z-40 w-80 h-full bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/30 dark:border-gray-800/20"
//             >
//               <div className="h-full flex flex-col">
//                 {/* Menu Header */}
//                 <div className="p-6 border-b border-gray-200/30 dark:border-gray-800/20">
//                   <div className="flex justify-between items-center">
//                     <button 
//                       onClick={() => {
//                         scrollToSection('home')
//                         setMenuOpen(false)
//                       }}
//                       className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                     >
//                       DevFolio
//                     </button>
//                     <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                   </div>
//                 </div>

//                 {/* Menu Items */}
//                 <div className="flex-1 overflow-y-auto p-6">
//                   <div className="flex flex-col space-y-4">
//                     {navItems.map((item) => (
//                       <motion.button
//                         key={item.id}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         whileHover={{ x: 5 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           scrollToSection(item.id)
//                           setMenuOpen(false)
//                         }}
//                         className={`text-left py-4 px-4 rounded-lg transition-all ${
//                           activeSection === item.id
//                             ? 'bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400'
//                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                         }`}
//                       >
//                         <span className="text-lg font-medium">{item.name}</span>
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer with Social Links */}
//                 <div className="p-6 border-t border-gray-200/30 dark:border-gray-800/20">
//                   <div className="flex justify-center space-x-6">
//                     {socialLinks.map((link) => (
//                       <motion.a
//                         key={link.label}
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
//                         aria-label={link.label}
//                         whileHover={{ y: -3, scale: 1.15 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <span className="text-xl">{link.icon}</span>
//                       </motion.a>
//                     ))}
//                   </div>
//                   <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
//                     © {new Date().getFullYear()} DevFolio
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }




























// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence, useAnimation } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi'
// import ThemeToggle from './ThemeToggle'

// export default function Navbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const controls = useAnimation()

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
    
//     checkIfMobile()
//     window.addEventListener('resize', checkIfMobile)
//     return () => window.removeEventListener('resize', checkIfMobile)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     if (isScrolled) {
//       controls.start({
//         height: '4rem',
//         backgroundColor: 'rgba(13, 17, 23, 0.98)',
//         transition: { duration: 0.3 }
//       })
//     } else {
//       controls.start({
//         height: '5rem',
//         backgroundColor: 'rgba(13, 17, 23, 0.92)',
//         transition: { duration: 0.3 }
//       })
//     }
//   }, [isScrolled, controls])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Skills', id: 'skills' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Contact', id: 'contact' }
//   ]

//   // Enhanced Mobile Menu Component
//   const MobileMenu = ({ isOpen, toggleMenu, navItems }) => {
//     return (
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-16 left-0 right-0 z-40 bg-[#0d1117] border-b border-[#30363d] shadow-xl md:hidden"
//           >
//             <div className="px-6 py-4">
//               <div className="flex flex-col space-y-3">
//                 {navItems.map((item) => (
//                   <motion.button
//                     key={item.id}
//                     whileHover={{ 
//                       x: 10,
//                       backgroundColor: 'rgba(59, 130, 246, 0.1)'
//                     }}
//                     whileTap={{ scale: 0.97 }}
//                     onClick={() => {
//                       scrollToSection(item.id)
//                       toggleMenu()
//                     }}
//                     className={`text-left py-3 px-4 rounded-lg transition-all relative overflow-hidden ${
//                       activeSection === item.id
//                         ? 'text-white bg-gradient-to-r from-[#3b82f6]/30 to-[#8b5cf6]/30'
//                         : 'text-[#94a3b8] hover:text-white'
//                     }`}
//                   >
//                     {item.name}
//                     {activeSection === item.id && (
//                       <motion.span 
//                         layoutId="mobile-nav-underline"
//                         className="absolute left-0 top-0 h-full w-1 bg-[#3b82f6] rounded-r-full"
//                       />
//                     )}
//                     <motion.span 
//                       className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-0 hover:opacity-10 transition-opacity"
//                     />
//                   </motion.button>
//                 ))}
//               </div>
              
//               <div className="flex justify-center space-x-8 mt-8 pt-6 border-t border-[#30363d]">
//                 <motion.a 
//                   whileHover={{ 
//                     scale: 1.2,
//                     color: '#3b82f6'
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://github.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#94a3b8] hover:text-[#3b82f6] transition-all"
//                   aria-label="GitHub"
//                 >
//                   <FiGithub size={22} />
//                 </motion.a>
//                 <motion.a 
//                   whileHover={{ 
//                     scale: 1.2,
//                     color: '#3b82f6'
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://linkedin.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#94a3b8] hover:text-[#3b82f6] transition-all"
//                   aria-label="LinkedIn"
//                 >
//                   <FiLinkedin size={22} />
//                 </motion.a>
//                 <motion.a 
//                   whileHover={{ 
//                     scale: 1.2,
//                     color: '#3b82f6'
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://twitter.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#94a3b8] hover:text-[#3b82f6] transition-all"
//                   aria-label="Twitter"
//                 >
//                   <FiTwitter size={22} />
//                 </motion.a>
//               </div>
              
//               <div className="flex justify-center mt-6">
//                 <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     )
//   }

//   return (
//     <>
//       <motion.nav 
//         initial={{ height: '5rem', backgroundColor: 'rgba(13, 17, 23, 0.92)' }}
//         animate={controls}
//         className="fixed w-full z-50 backdrop-blur-lg border-b border-[#30363d] shadow-sm"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-full">
//             {/* Logo/Initials with improved animation */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent hover:brightness-110 transition-all"
//               >
//                 YF
//               </button>
//             </motion.div>

//             {/* Desktop Navigation - Now properly visible */}
//             <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * navItems.indexOf(item) }}
//                   whileHover={{ 
//                     y: -2,
//                     color: '#ffffff',
//                     backgroundColor: 'rgba(59, 130, 246, 0.1)'
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all relative overflow-hidden ${
//                     activeSection === item.id 
//                       ? 'text-white bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20'
//                       : 'text-[#94a3b8] hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.id && (
//                     <motion.span 
//                       layoutId="nav-underline"
//                       className="absolute left-1/2 bottom-0 w-4/5 h-0.5 bg-[#3b82f6] transform -translate-x-1/2 rounded-full"
//                       transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                     />
//                   )}
//                   <motion.span 
//                     className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] opacity-0 hover:opacity-10 transition-opacity rounded-lg"
//                   />
//                 </motion.button>
//               ))}

//               {/* Social Icons with better spacing */}
//               <div className="flex items-center space-x-4 ml-4 lg:ml-8 pl-4 lg:pl-8 border-l border-[#30363d]">
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   whileHover={{ 
//                     y: -2, 
//                     color: '#3b82f6',
//                     scale: 1.15
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://github.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#94a3b8] hover:text-[#3b82f6] transition-all"
//                   aria-label="GitHub"
//                 >
//                   <FiGithub className="w-5 h-5" />
//                 </motion.a>
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   whileHover={{ 
//                     y: -2, 
//                     color: '#3b82f6',
//                     scale: 1.15
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://linkedin.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#94a3b8] hover:text-[#3b82f6] transition-all"
//                   aria-label="LinkedIn"
//                 >
//                   <FiLinkedin className="w-5 h-5" />
//                 </motion.a>
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   whileHover={{ 
//                     y: -2, 
//                     color: '#3b82f6',
//                     scale: 1.15
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   href="https://twitter.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#94a3b8] hover:text-[#3b82f6] transition-all"
//                   aria-label="Twitter"
//                 >
//                   <FiTwitter className="w-5 h-5" />
//                 </motion.a>
                
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.9 }}
//                   className="ml-2"
//                 >
//                   <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                 </motion.div>
//               </div>
//             </div>

//             {/* Mobile Menu Button - Only shows on mobile */}
//             {isMobile && (
//               <motion.button 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 onClick={toggleMenu}
//                 className="md:hidden text-[#94a3b8] hover:text-[#3b82f6] p-2 transition-all"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label="Menu"
//               >
//                 {isMenuOpen ? (
//                   <motion.div
//                     initial={{ rotate: 0 }}
//                     animate={{ rotate: 180 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <FiX size={24} className="text-[#3b82f6]" />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     initial={{ rotate: 0 }}
//                     animate={{ rotate: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <FiMenu size={24} />
//                   </motion.div>
//                 )}
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu - Only shows on mobile */}
//       {isMobile && (
//         <MobileMenu 
//           isOpen={isMenuOpen} 
//           toggleMenu={toggleMenu}
//           navItems={navItems}
//         />
//       )}
//     </>
//   )
// }












// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, useAnimation } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi'
// import ThemeToggle from './ThemeToggle'
// import MobileMenu from './MobileMenu'

// export default function Navbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const controls = useAnimation()

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     if (isScrolled) {
//       controls.start({
//         height: '4rem',
//         transition: { duration: 0.3 }
//       })
//     } else {
//       controls.start({
//         height: '5rem',
//         transition: { duration: 0.3 }
//       })
//     }
//   }, [isScrolled, controls])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Skills', id: 'skills' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Contact', id: 'contact' }
//   ]

//   return (
//     <>
//       <motion.nav 
//         initial={{ height: '5rem' }}
//         animate={controls}
//         className="fixed w-full z-50 backdrop-blur-md bg-[#0d1117]/90 border-b border-[#30363d]"
//       >
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-full">
//             {/* Logo/Initials */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent"
//               >
//                 YF
//               </button>
//             </motion.div>

//             {/* Desktop Navigation - Shows on medium screens and up */}
//             <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * navItems.indexOf(item) }}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors relative ${
//                     activeSection === item.id 
//                       ? 'text-[#3b82f6]' 
//                       : 'text-[#94a3b8] hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.id && (
//                     <motion.span 
//                       layoutId="nav-underline"
//                       className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3b82f6]"
//                       transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}

//               {/* Social Icons - Adjusts spacing based on screen size */}
//               <div className="flex items-center space-x-3 lg:space-x-4 ml-4 lg:ml-6 border-l border-[#30363d] pl-4 lg:pl-6">
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   whileHover={{ y: -2, color: '#3b82f6' }}
//                   href="https://github.com" 
//                   target="_blank"
//                   className="text-[#94a3b8]"
//                   aria-label="GitHub"
//                 >
//                   <FiGithub className="w-4 h-4 lg:w-5 lg:h-5" />
//                 </motion.a>
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   whileHover={{ y: -2, color: '#3b82f6' }}
//                   href="https://linkedin.com" 
//                   target="_blank"
//                   className="text-[#94a3b8]"
//                   aria-label="LinkedIn"
//                 >
//                   <FiLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
//                 </motion.a>
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   whileHover={{ y: -2, color: '#3b82f6' }}
//                   href="https://twitter.com" 
//                   target="_blank"
//                   className="text-[#94a3b8]"
//                   aria-label="Twitter"
//                 >
//                   <FiTwitter className="w-4 h-4 lg:w-5 lg:h-5" />
//                 </motion.a>
                
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.9 }}
//                   className="ml-2"
//                 >
//                   <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                 </motion.div>
//               </div>
//             </div>

//             {/* Tablet Navigation - Shows on small screens (sm) but hides on medium (md) */}
//             <div className="hidden sm:flex md:hidden items-center space-x-4">
//               {/* Show only key navigation items on tablet */}
//               {navItems.filter(item => ['home', 'projects', 'contact'].includes(item.id)).map((item) => (
//                 <motion.button
//                   key={item.id}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-2 py-2 text-sm font-medium ${
//                     activeSection === item.id ? 'text-[#3b82f6]' : 'text-[#94a3b8] hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
              
//               <div className="flex items-center space-x-3 ml-4 border-l border-[#30363d] pl-4">
//                 <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                 <button 
//                   onClick={toggleMenu}
//                   className="text-[#94a3b8] hover:text-[#3b82f6] p-1"
//                 >
//                   <FiMenu size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu Button - Shows on extra small screens (xs) */}
//             <motion.button 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               onClick={toggleMenu}
//               className="sm:hidden text-[#94a3b8] hover:text-[#3b82f6] p-2"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Menu"
//             >
//               {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       <MobileMenu
//         isOpen={isMenuOpen}
//         toggleMenu={toggleMenu}
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         activeSection={activeSection}
//         scrollToSection={scrollToSection}
//         navItems={navItems}
//       />
//     </>
//   )
// }





























// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi'
// import ThemeToggle from './ThemeToggle'
// import MobileMenu from './MobileMenu'

// export default function Navbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Skills', id: 'skills' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Contact', id: 'contact' }
//   ]

//   return (
//     <>
//       <nav className="fixed w-full z-50 backdrop-blur-md bg-[#0d1117]/90 border-b border-[#30363d]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo/Initials */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent"
//               >
//                 YF
//               </button>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-6">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.id}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.1 * navItems.indexOf(item) }}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-3 py-2 text-sm font-medium transition-colors relative ${
//                     activeSection === item.id 
//                       ? 'text-[#3b82f6]' 
//                       : 'text-[#94a3b8] hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.id && (
//                     <motion.span 
//                       layoutId="nav-underline"
//                       className="absolute left-0 bottom-0 w-full h-0.5 bg-[#3b82f6]"
//                       transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}

//               {/* Social Icons */}
//               <div className="flex items-center space-x-4 ml-6 border-l border-[#30363d] pl-6">
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                   whileHover={{ y: -2, color: '#3b82f6' }}
//                   href="https://github.com" 
//                   target="_blank"
//                   className="text-[#94a3b8]"
//                 >
//                   <FiGithub size={18} />
//                 </motion.a>
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   whileHover={{ y: -2, color: '#3b82f6' }}
//                   href="https://linkedin.com" 
//                   target="_blank"
//                   className="text-[#94a3b8]"
//                 >
//                   <FiLinkedin size={18} />
//                 </motion.a>
//                 <motion.a 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   whileHover={{ y: -2, color: '#3b82f6' }}
//                   href="https://twitter.com" 
//                   target="_blank"
//                   className="text-[#94a3b8]"
//                 >
//                   <FiTwitter size={18} />
//                 </motion.a>
                
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.9 }}
//                 >
//                   <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//                 </motion.div>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               onClick={toggleMenu}
//               className="md:hidden text-[#94a3b8] hover:text-[#3b82f6] p-2"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </nav>

//       <MobileMenu
//         isOpen={isMenuOpen}
//         toggleMenu={toggleMenu}
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         activeSection={activeSection}
//         scrollToSection={scrollToSection}
//         navItems={navItems}
//       />
//     </>
//   )
// }

















// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMenu } from 'react-icons/fi'
// import ThemeToggle from './ThemeToggle'
// import MobileMenu from './MobileMenu'

// export default function Navbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <>
//       <nav className="fixed w-full z-40 backdrop-blur-md bg-gray-900/90 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo/Initials */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center"
//             >
//               <button 
//                 onClick={() => scrollToSection('home')}
//                 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//               >
//                 YF
//               </button>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {[
//                 { name: 'Home', id: 'home' },
//                 { name: 'About', id: 'about' },
//                 { name: 'Work', id: 'work' },
//                 { name: 'Skills', id: 'skills' },
//                 { name: 'Contact', id: 'contact' }
//               ].map((item) => (
//                 <motion.button
//                   key={item.id}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-1 py-2 text-sm font-medium transition-colors ${
//                     activeSection === item.id 
//                       ? 'text-cyan-400' 
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}

//               {/* Social Icons */}
//               <div className="flex items-center space-x-4 ml-6 border-l border-gray-800 pl-6">
//                 <motion.a 
//                   whileHover={{ y: -2 }}
//                   href="https://github.com" 
//                   target="_blank"
//                   className="text-gray-400 hover:text-white"
//                 >
//                   <FiGithub size={18} />
//                 </motion.a>
//                 <motion.a 
//                   whileHover={{ y: -2 }}
//                   href="https://linkedin.com" 
//                   target="_blank"
//                   className="text-gray-400 hover:text-white"
//                 >
//                   <FiLinkedin size={18} />
//                 </motion.a>
//                 <motion.a 
//                   whileHover={{ y: -2 }}
//                   href="https://twitter.com" 
//                   target="_blank"
//                   className="text-gray-400 hover:text-white"
//                 >
//                   <FiTwitter size={18} />
//                 </motion.a>
                
//                 <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={toggleMenu}
//               className="md:hidden text-gray-400 hover:text-white p-2"
//             >
//               <FiMenu size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       <MobileMenu
//         isOpen={isMenuOpen}
//         toggleMenu={toggleMenu}
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         activeSection={activeSection}
//         scrollToSection={scrollToSection}
//       />
//     </>
//   )
// }






























// 'use client'
// import { motion } from 'framer-motion'
// import ThemeToggle from './ThemeToggle'

// export default function Navbar({ darkMode, toggleDarkMode, activeSection, scrollToSection }) {
//   return (
//     <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
//               onClick={() => scrollToSection('home')}
//             >
//               YF.
//             </motion.button>
//           </div>
//           <div className="hidden md:flex items-center space-x-8">
//             {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className={`capitalize px-1 py-2 text-sm font-medium transition-colors ${activeSection === item ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
//               >
//                 {item}
//               </button>
//             ))}
//             <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }