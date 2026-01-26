'use client'
import { motion } from 'framer-motion'
import { FiStar, FiMessageSquare, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Yonas delivered our project ahead of schedule with exceptional quality. His attention to detail is remarkable and his communication was excellent throughout the entire process.",
    author: "Sarah Johnson",
    role: "CEO, FoodTech Startup",
    rating: 5,
    avatar: "/avatars/sarah-johnson.jpg"
  },
  {
    quote: "The website Yonas built increased our conversion rate by 40%. His marketing knowledge is as strong as his coding skills. We've seen a significant ROI from our investment in his services.",
    author: "Michael Chen",
    role: "Marketing Director, TechCorp",
    rating: 5,
    avatar: "/avatars/michael-chen.jpg"
  },
  {
    quote: "Rare to find a developer who understands both technical implementation and business objectives so well. Yonas became a true partner in our product development journey.",
    author: "Amina Diallo",
    role: "Product Manager, HealthTech",
    rating: 4,
    avatar: "/avatars/amina-diallo.jpg"
  },
  {
    quote: "Working with Yonas was a game-changer for our e-commerce platform. He implemented complex features with ease and provided valuable insights to improve our user experience.",
    author: "David Wilson",
    role: "CTO, Retail Solutions",
    rating: 5,
    avatar: "/avatars/david-wilson.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  // Get testimonials to display based on screen size
  const getDisplayTestimonials = () => {
    if (isMobile) {
      // Mobile: Show only current testimonial
      return [testimonials[currentIndex]]
    } else {
      // Desktop: Show 3 testimonials (current, next, next+1)
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
      ]
    }
  }

  return (
    <section id="testimonials" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
                Client Voices
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
            >
              Hear what industry leaders say about collaborating with me
            </motion.p>
          </div>
          
          {/* Testimonials carousel */}
          <div className="relative">
            {/* Navigation arrows - Always visible */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-blue-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-xl md:text-2xl" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-blue-400 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-xl md:text-2xl" />
            </motion.button>
            
            {/* Testimonial cards container */}
            <div className={`${isMobile ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4 md:gap-6 lg:gap-8 px-8 md:px-0`}>
              {getDisplayTestimonials().map((testimonial, displayIndex) => (
                <motion.div
                  key={displayIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * displayIndex }}
                  whileHover={{ 
                    y: -8,
                    borderColor: 'rgb(96 165 250 / 0.3)',
                    backgroundColor: 'rgba(96, 165, 250, 0.05)'
                  }}
                  className={`bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 ${isMobile ? 'w-full max-w-md' : ''} ${
                    !isMobile && displayIndex === 0 ? 'border-blue-400/30' : ''
                  }`}
                >
                  <div className="flex mb-6 md:mb-8 text-blue-400">
                    <FiMessageSquare className="text-3xl md:text-4xl opacity-80" />
                  </div>
                  
                  <p className="text-base md:text-lg lg:text-lg text-white italic mb-6 md:mb-8">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center mb-6 md:mb-8">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`text-base md:text-lg lg:text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-white/20'}`} 
                        fill={i < testimonial.rating ? "#fbbf24" : "transparent"}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 mr-4 md:mr-4 overflow-hidden border-2 border-white/20">
                      <div className="w-full h-full bg-blue-400/20 flex items-center justify-center text-white text-lg md:text-xl font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-white text-base md:text-lg">{testimonial.author}</p>
                      <p className="text-sm md:text-base text-[#9ca3af]">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial indicators - Always visible */}
          <div className="flex justify-center mt-8 md:mt-12 gap-1.5 md:gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile swipe hint */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1 }}
              className="text-center mt-6"
            >
              <p className="text-xs text-[#9ca3af] font-mono">
                ← Swipe or use arrows to navigate →
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}



















// 'use client'
// import { motion } from 'framer-motion'
// import { FiStar, FiMessageSquare, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// import { useState } from 'react'

// const testimonials = [
//   {
//     quote: "Yonas delivered our project ahead of schedule with exceptional quality. His attention to detail is remarkable and his communication was excellent throughout the entire process.",
//     author: "Sarah Johnson",
//     role: "CEO, FoodTech Startup",
//     rating: 5,
//     avatar: "/avatars/sarah-johnson.jpg"
//   },
//   {
//     quote: "The website Yonas built increased our conversion rate by 40%. His marketing knowledge is as strong as his coding skills. We've seen a significant ROI from our investment in his services.",
//     author: "Michael Chen",
//     role: "Marketing Director, TechCorp",
//     rating: 5,
//     avatar: "/avatars/michael-chen.jpg"
//   },
//   {
//     quote: "Rare to find a developer who understands both technical implementation and business objectives so well. Yonas became a true partner in our product development journey.",
//     author: "Amina Diallo",
//     role: "Product Manager, HealthTech",
//     rating: 4,
//     avatar: "/avatars/amina-diallo.jpg"
//   },
//   {
//     quote: "Working with Yonas was a game-changer for our e-commerce platform. He implemented complex features with ease and provided valuable insights to improve our user experience.",
//     author: "David Wilson",
//     role: "CTO, Retail Solutions",
//     rating: 5,
//     avatar: "/avatars/david-wilson.jpg"
//   }
// ]

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     )
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     )
//   }

//   return (
//     <section id="testimonials" className="relative py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] text-white overflow-hidden border-t border-[#1e293b]">
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
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">CLIENT TESTIMONIALS</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                 Client Voices
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl text-[#94a3b8] max-w-3xl mx-auto"
//             >
//               Hear what industry leaders say about collaborating with me
//             </motion.p>
//           </div>
          
//           {/* Testimonials carousel */}
//           <div className="relative">
//             {/* Navigation arrows */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prevTestimonial}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-black/30 border border-[#1e293b] text-white hover:text-blue-400 transition-colors"
//               aria-label="Previous testimonial"
//             >
//               <FiChevronLeft className="text-2xl" />
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={nextTestimonial}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-black/30 border border-[#1e293b] text-white hover:text-blue-400 transition-colors"
//               aria-label="Next testimonial"
//             >
//               <FiChevronRight className="text-2xl" />
//             </motion.button>
            
//             {/* Testimonial cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[currentIndex, (currentIndex + 1) % testimonials.length, (currentIndex + 2) % testimonials.length].map((index) => {
//                 const testimonial = testimonials[index]
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.1 * index }}
//                     whileHover={{ 
//                       y: -8,
//                       boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
//                     }}
//                     className={`bg-gradient-to-br ${index === currentIndex ? 'from-blue-500/10 to-indigo-500/10' : 'from-[#161b22] to-[#0f172a]'} rounded-xl p-8 border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300`}
//                   >
//                     <div className="flex mb-6 text-blue-400">
//                       <FiMessageSquare className="text-4xl opacity-80" />
//                     </div>
                    
//                     <p className="text-[#e5e7eb] text-lg italic mb-8">
//                       "{testimonial.quote}"
//                     </p>
                    
//                     <div className="flex items-center mb-6">
//                       {[...Array(5)].map((_, i) => (
//                         <FiStar 
//                           key={i} 
//                           className={`text-xl ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
//                         />
//                       ))}
//                     </div>
                    
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mr-4 overflow-hidden border-2 border-white/20">
//                         {/* Avatar image would go here */}
//                         <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
//                           {testimonial.author.charAt(0)}
//                         </div>
//                       </div>
//                       <div>
//                         <p className="font-bold text-white">{testimonial.author}</p>
//                         <p className="text-sm text-[#9ca3af]">{testimonial.role}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Testimonial indicators */}
//           <div className="flex justify-center mt-12 gap-2">
//             {testimonials.map((_, index) => (
//               <motion.button
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-400' : 'bg-[#1e293b]'}`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

















// 'use client'
// import { motion } from 'framer-motion'
// import { FiStar, FiMessageSquare } from 'react-icons/fi'

// const testimonials = [
//   {
//     quote: "Yonas delivered our project ahead of schedule with exceptional quality. His attention to detail is remarkable.",
//     author: "Sarah Johnson",
//     role: "CEO, FoodTech Startup",
//     rating: 5
//   },
//   {
//     quote: "The website Yonas built increased our conversion rate by 40%. His marketing knowledge is as strong as his coding skills.",
//     author: "Michael Chen",
//     role: "Marketing Director",
//     rating: 5
//   },
//   {
//     quote: "Rare to find a developer who understands both technical implementation and business objectives so well.",
//     author: "Amina Diallo",
//     role: "Product Manager",
//     rating: 4
//   }
// ]

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="relative py-28 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
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
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">CLIENT FEEDBACK</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                 Testimonials
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-[#94a3b8] max-w-3xl mx-auto"
//             >
//               What clients say about working with me
//             </motion.p>
//           </div>
          
//           {/* Testimonials grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 whileHover={{ y: -8 }}
//                 className="bg-[#161b22] rounded-xl p-8 border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300 group"
//               >
//                 <div className="flex mb-4 text-[#3b82f6]">
//                   <FiMessageSquare className="text-3xl opacity-70" />
//                 </div>
                
//                 <p className="text-[#e5e7eb] italic mb-6 group-hover:text-white transition-colors duration-300">
//                   {testimonial.quote}
//                 </p>
                
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <FiStar 
//                       key={i} 
//                       className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
//                     />
//                   ))}
//                 </div>
                
//                 <div>
//                   <p className="font-bold text-white">{testimonial.author}</p>
//                   <p className="text-sm text-[#9ca3af]">{testimonial.role}</p>
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

// const testimonials = [
//   {
//     quote: "Yonas delivered our project ahead of schedule with exceptional quality. His attention to detail is remarkable.",
//     author: "Sarah Johnson",
//     role: "CEO, FoodTech Startup"
//   },
//   {
//     quote: "The website Yonas built increased our conversion rate by 40%. His marketing knowledge is as strong as his coding skills.",
//     author: "Michael Chen",
//     role: "Marketing Director"
//   },
//   {
//     quote: "Rare to find a developer who understands both technical implementation and business objectives so well.",
//     author: "Amina Diallo",
//     role: "Product Manager"
//   }
// ]

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               What people say about working with me
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
//               >
//                 <div className="text-4xl mb-4 text-gray-300 dark:text-gray-600">"</div>
//                 <p className="text-gray-600 dark:text-gray-300 italic mb-6">{testimonial.quote}</p>
//                 <div>
//                   <p className="font-bold">{testimonial.author}</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }