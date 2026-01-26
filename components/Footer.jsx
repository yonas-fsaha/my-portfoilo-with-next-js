'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { useState } from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Newsletter state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!email.trim()) {
      setSubscriptionStatus('error')
      setSubscriptionMessage('Please enter your email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionStatus('error')
      setSubscriptionMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubscriptionStatus(null)
    setSubscriptionMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSubscriptionStatus('success')
        setSubscriptionMessage(data.message || 'Successfully subscribed! Check your email for confirmation.')
        setEmail('') // Clear input on success
      } else {
        setSubscriptionStatus('error')
        setSubscriptionMessage(data.message || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter submission error:', error)
      setSubscriptionStatus('error')
      setSubscriptionMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative bg-[#020617] border-t border-[#1e293b] py-12 md:py-16">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        <motion.div
          className="absolute bottom-0 left-[20%] md:left-1/4 text-blue-400 text-3xl md:text-5xl font-mono"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile: 1 column, Desktop: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand section - Full width on mobile, 1 column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-1"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white flex items-center gap-2">
              <span className="text-blue-400">
                Yonas Fsaha
              </span>
            </h3>
            <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">
              Full-stack developer and digital marketer crafting high-performance web solutions that drive business growth.
            </p>
            
            {/* Tech stack icons */}
            <div className="flex gap-2 md:gap-3">
              {[
                { icon: <FaReact className="text-blue-400" />, label: "React" },
                { icon: <SiNextdotjs className="text-blue-400" />, label: "Next.js" },
                { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
                { icon: <SiTailwindcss className="text-blue-400" />, label: "Tailwind" }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="p-1.5 md:p-2 bg-white/5 rounded-lg border border-white/10 text-base md:text-lg"
                  aria-label={tech.label}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Mobile: Navigation and Connect side by side */}
          <div className="grid grid-cols-2 gap-6 md:hidden">
            {/* Navigation - Left column on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-base font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About', id: 'about' },
                  { name: 'Services', id: 'services' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <motion.button 
                      whileHover={{ x: 5, color: '#60a5fa' }}
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm text-[#94a3b8] hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Connect - Right column on mobile (vertical) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-base font-semibold mb-4 text-white">Connect</h4>
              <div className="flex flex-col gap-3">
                {[
                  { 
                    icon: <FiGithub />, 
                    url: "https://github.com/yonas-fsaha",
                    text: "GitHub",
                    color: "hover:text-white"
                  },
                  { 
                    icon: <FiLinkedin />, 
                    url: "https://www.linkedin.com/in/yonas-fsaha",
                    text: "LinkedIn",
                    color: "hover:text-blue-400"
                  },
                  { 
                    icon: <FaXTwitter />, 
                    url: "https://x.com/YonasFsaha",
                    text: "X",
                    color: "hover:text-blue-400"
                  },
                  { 
                    icon: <FiMail />, 
                    url: "mailto:yonasfsaha404@gmail.com",
                    text: "Email",
                    color: "hover:text-blue-400"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ x: 3, color: '#60a5fa' }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm text-[#94a3b8] ${social.color} transition-colors flex items-center gap-2`}
                  >
                    <span className="text-base">{social.icon}</span>
                    {social.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Desktop Navigation (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <motion.button 
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-[#94a3b8] hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Desktop Connect (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
            <div className="flex gap-3">
              {[
                { 
                  icon: <FiGithub />, 
                  url: "https://github.com/yonas-fsaha",
                  color: "hover:text-white"
                },
                { 
                  icon: <FiLinkedin />, 
                  url: "https://www.linkedin.com/in/yonas-fsaha",
                  color: "hover:text-blue-400"
                },
                { 
                  icon: <FaXTwitter />, 
                  url: "https://x.com/YonasFsaha",
                  color: "hover:text-blue-400"
                },
                { 
                  icon: <FiMail />, 
                  url: "mailto:yonasfsaha404@gmail.com",
                  color: "hover:text-blue-400"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-lg border border-white/10 text-[#94a3b8] ${social.color} transition-all`}
                  aria-label={social.url.includes('mailto') ? 'Email' : social.url.split('.')[1]}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter - Full width on mobile, 1 column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-1"
          >
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Stay Updated</h4>
            <p className="text-xs md:text-sm text-[#94a3b8] mb-3 md:mb-4">
              Subscribe to my newsletter for tech insights and updates.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-1.5 md:gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 placeholder:text-[#64748b]"
                  required
                  disabled={isSubmitting}
                />
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#60a5fa'
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-2 md:px-4 md:py-2.5 bg-blue-400 text-[#020617] rounded-lg text-xs md:text-sm font-medium font-mono disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? 'Joining...' : 'Join'}
                </motion.button>
              </div>
              
              {/* Status Messages */}
              {subscriptionStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs md:text-sm p-2.5 rounded ${
                    subscriptionStatus === 'success' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {subscriptionMessage}
                </motion.div>
              )}
              
              {/* Success Confirmation */}
              {subscriptionStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-[#94a3b8] mt-1 px-1"
                >
                  Check your email for confirmation! 📧
                </motion.p>
              )}
              
              {/* Privacy Note */}
              <p className="text-xs text-[#64748b] pt-1 px-1">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
        
        {/* Copyright and back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4"
        >
          <div className="text-xs md:text-sm text-[#64748b] text-center md:text-left">
            <p>© {new Date().getFullYear()} Yonas Fsaha. All rights reserved.</p>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              y: -3, 
              backgroundColor: 'rgba(96, 165, 250, 0.1)',
              borderColor: 'rgb(96 165 250 / 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg border border-white/10 text-xs md:text-sm text-[#94a3b8] hover:text-white transition-all font-mono"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <FiArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
// import { FaXTwitter } from 'react-icons/fa6'
// import { FaReact } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   return (
//     <footer className="relative bg-[#020617] border-t border-[#1e293b] py-12 md:py-16">
//       {/* Subtle background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
//         <motion.div
//           className="absolute bottom-0 left-[20%] md:left-1/4 text-blue-400 text-3xl md:text-5xl font-mono"
//           animate={{ opacity: [0.05, 0.1, 0.05] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         >
//           {'</>'}
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Mobile: 1 column, Desktop: 4 columns */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
//           {/* Brand section - Full width on mobile, 1 column on desktop */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="col-span-1 md:col-span-1"
//           >
//             <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white flex items-center gap-2">
//               <span className="text-blue-400">
//                 Yonas Fsaha
//               </span>
//             </h3>
//             <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">
//               Full-stack developer and digital marketer crafting high-performance web solutions that drive business growth.
//             </p>
            
//             {/* Tech stack icons */}
//             <div className="flex gap-2 md:gap-3">
//               {[
//                 { icon: <FaReact className="text-blue-400" />, label: "React" },
//                 { icon: <SiNextdotjs className="text-blue-400" />, label: "Next.js" },
//                 { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
//                 { icon: <SiTailwindcss className="text-blue-400" />, label: "Tailwind" }
//               ].map((tech, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -3 }}
//                   className="p-1.5 md:p-2 bg-white/5 rounded-lg border border-white/10 text-base md:text-lg"
//                   aria-label={tech.label}
//                 >
//                   {tech.icon}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Mobile: Navigation and Connect side by side */}
//           <div className="grid grid-cols-2 gap-6 md:hidden">
//             {/* Navigation - Left column on mobile */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h4 className="text-base font-semibold mb-4 text-white">Navigation</h4>
//               <ul className="space-y-3">
//                 {[
//                   { name: 'Home', id: 'home' },
//                   { name: 'About', id: 'about' },
//                   { name: 'Services', id: 'services' },
//                   { name: 'Projects', id: 'projects' },
//                   { name: 'Contact', id: 'contact' }
//                 ].map((item) => (
//                   <li key={item.id}>
//                     <motion.button 
//                       whileHover={{ x: 5, color: '#60a5fa' }}
//                       onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
//                       className="text-sm text-[#94a3b8] hover:text-blue-400 transition-colors flex items-center gap-2"
//                     >
//                       <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                       {item.name}
//                     </motion.button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
            
//             {/* Connect - Right column on mobile (vertical) */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <h4 className="text-base font-semibold mb-4 text-white">Connect</h4>
//               <div className="flex flex-col gap-3">
//                 {[
//                   { 
//                     icon: <FiGithub />, 
//                     url: "https://github.com/yonas-fsaha",
//                     text: "GitHub",
//                     color: "hover:text-white"
//                   },
//                   { 
//                     icon: <FiLinkedin />, 
//                     url: "https://www.linkedin.com/in/yonas-fsaha",
//                     text: "LinkedIn",
//                     color: "hover:text-blue-400"
//                   },
//                   { 
//                     icon: <FaXTwitter />, 
//                     url: "https://x.com/YonasFsaha",
//                     text: "X",
//                     color: "hover:text-blue-400"
//                   },
//                   { 
//                     icon: <FiMail />, 
//                     url: "mailto:yonasfsaha404@gmail.com",
//                     text: "Email",
//                     color: "hover:text-blue-400"
//                   }
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     whileHover={{ x: 3, color: '#60a5fa' }}
//                     whileTap={{ scale: 0.95 }}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`text-sm text-[#94a3b8] ${social.color} transition-colors flex items-center gap-2`}
//                   >
//                     <span className="text-base">{social.icon}</span>
//                     {social.text}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
          
//           {/* Desktop Navigation (hidden on mobile) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="hidden md:block"
//           >
//             <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
//             <ul className="space-y-4">
//               {[
//                 { name: 'Home', id: 'home' },
//                 { name: 'About', id: 'about' },
//                 { name: 'Services', id: 'services' },
//                 { name: 'Projects', id: 'projects' },
//                 { name: 'Contact', id: 'contact' }
//               ].map((item) => (
//                 <li key={item.id}>
//                   <motion.button 
//                     whileHover={{ x: 5, color: '#60a5fa' }}
//                     onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
//                     className="text-sm text-[#94a3b8] hover:text-blue-400 transition-colors flex items-center gap-2"
//                   >
//                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item.name}
//                   </motion.button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          
//           {/* Desktop Connect (hidden on mobile) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="hidden md:block"
//           >
//             <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
//             <div className="flex gap-3">
//               {[
//                 { 
//                   icon: <FiGithub />, 
//                   url: "https://github.com/yonas-fsaha",
//                   color: "hover:text-white"
//                 },
//                 { 
//                   icon: <FiLinkedin />, 
//                   url: "https://www.linkedin.com/in/yonas-fsaha",
//                   color: "hover:text-blue-400"
//                 },
//                 { 
//                   icon: <FaXTwitter />, 
//                   url: "https://x.com/YonasFsaha",
//                   color: "hover:text-blue-400"
//                 },
//                 { 
//                   icon: <FiMail />, 
//                   url: "mailto:yonasfsaha404@gmail.com",
//                   color: "hover:text-blue-400"
//                 }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 bg-white/5 rounded-lg border border-white/10 text-[#94a3b8] ${social.color} transition-all`}
//                   aria-label={social.url.includes('mailto') ? 'Email' : social.url.split('.')[1]}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Newsletter - Full width on mobile, 1 column on desktop */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="col-span-1 md:col-span-1"
//           >
//             <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Stay Updated</h4>
//             <p className="text-xs md:text-sm text-[#94a3b8] mb-3 md:mb-4">
//               Subscribe to my newsletter for tech insights and updates.
//             </p>
//             <form className="flex gap-1.5 md:gap-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-1 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50"
//                 required
//               />
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: '#60a5fa'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="px-3 py-2 md:px-4 md:py-2.5 bg-blue-400 text-[#020617] rounded-lg text-xs md:text-sm font-medium font-mono"
//               >
//                 Join
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
        
//         {/* Copyright and back to top */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4"
//         >
//           <div className="text-xs md:text-sm text-[#64748b] text-center md:text-left">
//             <p>© {new Date().getFullYear()} Yonas Fsaha. All rights reserved.</p>
//           </div>
          
//           <motion.button
//             onClick={scrollToTop}
//             whileHover={{ 
//               y: -3, 
//               backgroundColor: 'rgba(96, 165, 250, 0.1)',
//               borderColor: 'rgb(96 165 250 / 0.3)'
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg border border-white/10 text-xs md:text-sm text-[#94a3b8] hover:text-white transition-all font-mono"
//             aria-label="Back to top"
//           >
//             <span>Back to Top</span>
//             <FiArrowUp />
//           </motion.button>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }























// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'
// import { FaReact, FaNodeJs } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   return (
//     <footer className="relative bg-[#020617] border-t border-[#1e293b] py-12 md:py-16">
//       {/* Subtle background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
//         <motion.div
//           className="absolute bottom-0 left-[20%] md:left-1/4 text-blue-400 text-3xl md:text-5xl font-mono"
//           animate={{ opacity: [0.05, 0.1, 0.05] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         >
//           {'</>'}
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
//           {/* Brand section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white flex items-center gap-2">
//               <span className="text-blue-400">
//                 Yonas Fsaha
//               </span>
//             </h3>
//             <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">
//               Full-stack developer and digital marketer crafting high-performance web solutions that drive business growth.
//             </p>
            
//             {/* Tech stack icons */}
//             <div className="flex gap-2 md:gap-3">
//               {[
//                 { icon: <FaReact className="text-blue-400" />, label: "React" },
//                 { icon: <SiNextdotjs className="text-blue-400" />, label: "Next.js" },
//                 { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
//                 { icon: <SiTailwindcss className="text-blue-400" />, label: "Tailwind" }
//               ].map((tech, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -3 }}
//                   className="p-1.5 md:p-2 bg-white/5 rounded-lg border border-white/10 text-base md:text-lg"
//                   aria-label={tech.label}
//                 >
//                   {tech.icon}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Quick links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Navigation</h4>
//             <ul className="space-y-2 md:space-y-4">
//               {[
//                 { name: 'Home', id: 'home' },
//                 { name: 'About', id: 'about' },
//                 { name: 'Services', id: 'services' },
//                 { name: 'Projects', id: 'projects' },
//                 { name: 'Contact', id: 'contact' }
//               ].map((item) => (
//                 <li key={item.id}>
//                   <motion.button 
//                     whileHover={{ x: 5, color: '#60a5fa' }}
//                     onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
//                     className="text-xs md:text-sm text-[#94a3b8] hover:text-blue-400 transition-colors flex items-center gap-1.5 md:gap-2"
//                   >
//                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item.name}
//                   </motion.button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          
//           {/* Connect */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Connect</h4>
//             <div className="flex flex-wrap gap-2 md:gap-3">
//               {[
//                 { 
//                   icon: <FiGithub />, 
//                   url: "https://github.com/yourusername",
//                   color: "hover:text-white"
//                 },
//                 { 
//                   icon: <FiLinkedin />, 
//                   url: "https://linkedin.com/in/yourprofile",
//                   color: "hover:text-blue-400"
//                 },
//                 { 
//                   icon: <FiTwitter />, 
//                   url: "https://twitter.com/yourhandle",
//                   color: "hover:text-blue-400"
//                 },
//                 { 
//                   icon: <FiMail />, 
//                   url: "mailto:yonasfsaha404@gmail.com",
//                   color: "hover:text-blue-400"
//                 }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 text-[#94a3b8] ${social.color} transition-all`}
//                   aria-label={social.url.includes('mailto') ? 'Email' : social.url.split('.')[1]}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Stay Updated</h4>
//             <p className="text-xs md:text-sm text-[#94a3b8] mb-3 md:mb-4">
//               Subscribe to my newsletter for tech insights and updates.
//             </p>
//             <form className="flex gap-1.5 md:gap-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-1 px-3 py-2 md:px-4 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50"
//                 required
//               />
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: '#60a5fa'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="px-3 py-2 md:px-4 md:py-2.5 bg-blue-400 text-[#020617] rounded-lg text-xs md:text-sm font-medium font-mono"
//               >
//                 Join
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
        
//         {/* Copyright and back to top */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4"
//         >
//           <div className="text-xs md:text-sm text-[#64748b] text-center md:text-left">
//             <p>© {new Date().getFullYear()} Yonas Fsaha. All rights reserved.</p>
//           </div>
          
//           <motion.button
//             onClick={scrollToTop}
//             whileHover={{ 
//               y: -3, 
//               backgroundColor: 'rgba(96, 165, 250, 0.1)',
//               borderColor: 'rgb(96 165 250 / 0.3)'
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg border border-white/10 text-xs md:text-sm text-[#94a3b8] hover:text-white transition-all font-mono"
//             aria-label="Back to top"
//           >
//             <span>Back to Top</span>
//             <FiArrowUp />
//           </motion.button>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }



















// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'
// import { FaReact, FaNodeJs } from 'react-icons/fa'
// import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   return (
//     <footer className="relative bg-gradient-to-b from-[#05070a] to-[#0f172a] border-t border-[#1e293b] py-16">
//       {/* Floating tech orb */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div
//           className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10 blur-[80px]"
//           animate={{
//             scale: [1, 1.05, 1],
//             opacity: [0.8, 1, 0.8]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             repeatType: 'reverse'
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Brand section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
//               <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//                 Yonas Fsaha
//               </span>
//             </h3>
//             <p className="text-[#94a3b8] mb-6">
//               Full-stack developer and digital marketer crafting high-performance web solutions that drive business growth.
//             </p>
            
//             {/* Tech stack icons */}
//             <div className="flex gap-3">
//               {[
//                 { icon: <FaReact className="text-blue-400" />, label: "React" },
//                 { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
//                 { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
//                 { icon: <SiTailwindcss className="text-cyan-400" />, label: "Tailwind" }
//               ].map((tech, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -3 }}
//                   className="p-2 bg-black/30 rounded-lg border border-[#1e293b] text-lg"
//                   aria-label={tech.label}
//                 >
//                   {tech.icon}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Quick links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
//             <ul className="space-y-4">
//               {[
//                 { name: 'Home', id: 'home' },
//                 { name: 'About', id: 'about' },
//                 { name: 'Services', id: 'services' },
//                 { name: 'Projects', id: 'projects' },
//                 { name: 'Contact', id: 'contact' }
//               ].map((item) => (
//                 <li key={item.id}>
//                   <motion.button 
//                     whileHover={{ x: 5, color: '#3b82f6' }}
//                     onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
//                     className="text-[#94a3b8] hover:text-blue-400 text-sm flex items-center gap-2 transition-colors"
//                   >
//                     <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item.name}
//                   </motion.button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          
//           {/* Connect */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
//             <div className="flex flex-wrap gap-3">
//               {[
//                 { 
//                   icon: <FiGithub />, 
//                   url: "https://github.com/yourusername",
//                   color: "hover:text-white"
//                 },
//                 { 
//                   icon: <FiLinkedin />, 
//                   url: "https://linkedin.com/in/yourprofile",
//                   color: "hover:text-blue-400"
//                 },
//                 { 
//                   icon: <FiTwitter />, 
//                   url: "https://twitter.com/yourhandle",
//                   color: "hover:text-sky-400"
//                 },
//                 { 
//                   icon: <FiMail />, 
//                   url: "mailto:yonasfsaha404@gmail.com",
//                   color: "hover:text-red-400"
//                 }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   whileHover={{ y: -3, scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-3 bg-black/30 rounded-lg border border-[#1e293b] text-[#94a3b8] ${social.color} transition-all`}
//                   aria-label={social.url.includes('mailto') ? 'Email' : social.url.split('.')[1]}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
//             <p className="text-[#94a3b8] text-sm mb-4">
//               Subscribe to my newsletter for tech insights and updates.
//             </p>
//             <form className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-1 px-4 py-2.5 rounded-lg border border-[#1e293b] bg-[#020617] text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium"
//               >
//                 Join
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
        
//         {/* Copyright and back to top */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center gap-4"
//         >
//           <div className="text-[#64748b] text-sm text-center md:text-left">
//             <p>© {new Date().getFullYear()} Yonas Fsaha. All rights reserved.</p>
//           </div>
          
//           <motion.button
//             onClick={scrollToTop}
//             whileHover={{ y: -3, backgroundColor: '#1e293b' }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] rounded-lg border border-[#1e293b] text-[#94a3b8] hover:text-white transition-all"
//             aria-label="Back to top"
//           >
//             <span>Back to Top</span>
//             <FiArrowUp />
//           </motion.button>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }




















// 'use client'
// import { motion } from 'framer-motion'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   return (
//     <footer className="relative bg-[#0d1117] border-t border-[#30363d] py-16">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#3b82f6]/10 blur-[80px]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* Brand section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <h3 className="text-xl font-bold mb-4 text-white">Yonas Fsaha</h3>
//             <p className="text-[#94a3b8]">
//               Full-Stack Developer & Digital Marketer creating high-performance web solutions.
//             </p>
//           </motion.div>
          
//           {/* Quick links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
//             <ul className="space-y-3">
//               {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((item) => (
//                 <li key={item}>
//                   <motion.button 
//                     whileHover={{ x: 5 }}
//                     onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
//                     className="text-[#94a3b8] hover:text-[#3b82f6] capitalize text-sm flex items-center"
//                   >
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mr-2 opacity-0 group-hover:opacity-100"></span>
//                     {item}
//                   </motion.button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          
//           {/* Connect */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
//             <div className="flex flex-wrap gap-3">
//               {[
//                 { icon: <FiGithub />, url: "https://github.com/yourusername" },
//                 { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourprofile" },
//                 { icon: <FiTwitter />, url: "https://twitter.com/yourhandle" },
//                 { icon: <FiMail />, url: "mailto:yonasfsaha404@gmail.com" }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   whileHover={{ y: -3 }}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2.5 bg-[#161b22] rounded-lg border border-[#30363d] hover:border-[#3b82f6]/50 text-[#94a3b8] hover:text-white transition-all"
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Back to top */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="md:text-right"
//           >
//             <motion.button
//               onClick={scrollToTop}
//               whileHover={{ y: -3 }}
//               className="inline-flex items-center px-4 py-2 bg-[#161b22] rounded-lg border border-[#30363d] hover:border-[#3b82f6]/50 text-[#94a3b8] hover:text-white transition-all"
//             >
//               <FiArrowUp className="mr-2" />
//               Back to Top
//             </motion.button>
//           </motion.div>
//         </div>
        
//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 pt-8 border-t border-[#30363d] text-center text-[#64748b] text-sm"
//         >
//           <p>© {new Date().getFullYear()} Yonas Fsaha. All rights reserved.</p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }
















// 'use client'
// import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Yonas Fsaha</h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Full-Stack Developer & Digital Marketer creating high-performance web solutions.
//             </p>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((item) => (
//                 <li key={item}>
//                   <button 
//                     onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
//                     className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 capitalize"
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Connect</h4>
//             <div className="flex space-x-4">
//               <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
//                 <FiGithub size={20} />
//               </a>
//               <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
//                 <FiLinkedin size={20} />
//               </a>
//               <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
//                 <FiTwitter size={20} />
//               </a>
//               <a href="mailto:yonasfsaha404@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
//                 <FiMail size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
//           <p>© {new Date().getFullYear()} Yonas Fsaha. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }