'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBriefcase, FiCode, FiLayers, FiChevronDown, FiDatabase, FiCpu, FiBookOpen, FiVideo, FiGitBranch, FiServer, FiTrendingUp, FiMessageSquare, FiShoppingCart } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaWordpress, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaLinux } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiJquery, SiMysql, SiPostgresql, SiVercel, SiNetlify, SiCodewars, SiStrapi, SiStripe, SiCpanel, SiGithub } from 'react-icons/si'
import { TbBrandNodejs, TbBrandCpp } from 'react-icons/tb'
import { DiJava } from 'react-icons/di'
import { GrDeploy } from 'react-icons/gr'
import { useState } from 'react'

// Define FiStack component BEFORE it's used in the milestones array
const FiStack = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M11.4 24c-1.2 0-2.4-.4-3.3-1.2L1.2 15.9C.4 15 .1 13.8.1 12.6s.3-2.4 1.1-3.3L8.1 1.2C9 .4 10.2.1 11.4.1s2.4.3 3.3 1.1l7.2 7.2c.8.8 1.1 2 1.1 3.3s-.3 2.4-1.1 3.3l-7.2 7.2c-.8.8-2 1.2-3.3 1.2zm0-21.8c-.8 0-1.6.3-2.2.9L1.9 10.2c-.6.6-.9 1.4-.9 2.2s.3 1.6.9 2.2l7.2 7.2c.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9l7.2-7.2c.6-.6.9-1.4.9-2.2s-.3-1.6-.9-2.2L13.6 2.1c-.6-.6-1.4-.9-2.2-.9z"/>
    <path d="M11.4 18.8c-.6 0-1.2-.2-1.7-.7L3.5 11.9c-.9-.9-.9-2.5 0-3.4L9.7 2.3c.5-.5 1.1-.7 1.7-.7s1.2.2 1.7.7l6.2 6.2c.9.9.9 2.5 0 3.4l-6.2 6.2c-.5.5-1.1.7-1.7.7zm0-13c-.2 0-.5.1-.6.2L4.6 11.2c-.3.3-.3.9 0 1.2l6.2 6.2c.1.1.4.2.6.2s.5-.1.6-.2l6.2-6.2c.3-.3.3-.9 0-1.2L12 6c-.1-.1-.4-.2-.6-.2z"/>
    <path d="M11.4 15.6c-.4 0-.8-.2-1.1-.5L5.1 9.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l5.1 5.1 5.1-5.1c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-5.1 5.1c-.3.3-.7.5-1.1.5z"/>
  </svg>
)

export default function JourneyTimeline() {
  const [expandedItem, setExpandedItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const milestones = [
    {
      year: "2019",
      title: "The Beginning: University & C++/Java",
      icon: <FiBookOpen className="text-blue-400" />,
      role: "Computer Science Student",
      company: "Electrical & Computer Engineering",
      description: "Started programming journey with formal education in C++ and Java during 3rd year university",
      highlights: [
        "First exposure to programming concepts",
        "Learned algorithms and data structures basics",
        "Completed university programming assignments",
        "Built foundational programming mindset"
      ],
      skills: [
        { name: "C++", icon: <TbBrandCpp className="text-[#00599C]" />, level: 70 },
        { name: "Java", icon: <DiJava className="text-[#007396]" />, level: 65 },
        { name: "Logic Building", icon: <FiCpu className="text-purple-400" />, level: 75 }
      ],
      projects: 5,
      certifications: ["University Programming Courses"]
    },
    {
      year: "2020",
      title: "Self-Taught Web Development",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      role: "Self-Learner",
      company: "YouTube, W3Schools, FrontendMentor",
      description: "Dedicated myself to learning web development through online resources and practical projects",
      highlights: [
        "Mastered HTML5 & CSS3 fundamentals",
        "Learned Bootstrap & TailwindCSS",
        "Started JavaScript basics",
        "Built projects from FrontendMentor.com",
        "Practiced with CodeWars challenges",
        "Learned Git & GitHub for version control"
      ],
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 60 },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, level: 80 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 70 }
      ],
      projects: 15,
      certifications: ["Frontend Development Fundamentals"]
    },
    {
      year: "2021",
      title: "JavaScript & React Deep Dive",
      icon: <FaReact className="text-[#61DAFB]" />,
      role: "JavaScript Developer",
      company: "Self-Study & Project Building",
      description: "Focused on mastering JavaScript and React framework while building more complex applications",
      highlights: [
        "Deepened JavaScript knowledge (ES6+)",
        "Learned React.js fundamentals",
        "Mastered API integration & async operations",
        "Built interactive web applications",
        "Learned state management patterns"
      ],
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 85 },
        { name: "API Integration", icon: <FiCode className="text-green-400" />, level: 75 },
        { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" />, level: 65 }
      ],
      projects: 12,
      certifications: ["Modern JavaScript", "React Fundamentals"]
    },
    {
      year: "2022",
      title: "Frontend Developer & Teaching",
      icon: <FiVideo className="text-yellow-400" />,
      role: "Frontend Developer & Teacher",
      company: "Freelance & Mentoring",
      description: "Became professional frontend developer while teaching others and exploring WordPress",
      highlights: [
        "Started teaching web development",
        "Worked on freelance frontend projects",
        "Began WordPress development",
        "Improved debugging & problem-solving skills",
        "Learned performance optimization"
      ],
      skills: [
        { name: "React Advanced", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
        { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" />, level: 84 },
        { name: "Git/GitHub", icon: <FiGitBranch className="text-orange-400" />, level: 85 },
        { name: "Responsive Design", icon: <FiLayers className="text-pink-400" />, level: 90 }
      ],
      projects: 10,
      certifications: ["Advanced React Patterns", "WordPress Development"]
    },
    {
      year: "2023",
      title: "Full-Stack & Deployment Mastery",
      icon: <FiServer className="text-green-400" />,
      role: "Full-Stack Developer",
      company: "Real Projects & Advanced Learning",
      description: "Mastered full-stack development and learned advanced deployment, VPS management, and digital marketing",
      highlights: [
        "Mastered Node.js & Express.js for backend",
        "Learned MongoDB, PostgreSQL, MySQL databases",
        "Mastered VPS deployment & management",
        "Learned cPanel administration",
        "Built custom email solutions",
        "Learned digital marketing strategies",
        "Deployed projects to Vercel & Netlify",
        "Built RESTful APIs & authentication systems"
      ],
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 88 },
        { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
        { name: "VPS Deployment", icon: <GrDeploy className="text-[#0080FF]" />, level: 90 },
        { name: "cPanel", icon: <SiCpanel className="text-[#FF6C2C]" />, level: 82 },
        { name: "Linux", icon: <FaLinux className="text-[#FCC624]" />, level: 70 }
      ],
      projects: 9,
      certifications: ["Full-Stack Development", "Server Administration", "Digital Marketing"]
    },
    {
      year: "2024",
      title: "Advanced Projects & Entrepreneurship",
      icon: <FiTrendingUp className="text-purple-400" />,
      role: "Full-Stack Developer & Entrepreneur",
      company: "Vibeica Technology & Client Projects",
      description: "Built complex real-world applications, started my own tech company, and worked on high-value client projects",
      highlights: [
        "Founded Vibeica Technology (vibeica.com)",
        "Built real-time chat applications",
        "Developed full-stack ecommerce platforms",
        "Built news API with Node.js",
        "Created WordPress ecommerce (queenofshebafoods.com)",
        "Developed EthioWildlifeTours (ethiowildlifetours.com)",
        "Mastered TypeScript & Next.js 14",
        "Worked with Strapi CMS & Stripe payments",
        "Deployed multiple production applications"
      ],
      skills: [
        { name: "Next.js 14", icon: <SiNextdotjs className="text-white" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
        { name: "Strapi CMS", icon: <SiStrapi className="text-[#4945FF]" />, level: 80 },
        { name: "Stripe", icon: <SiStripe className="text-[#635BFF]" />, level: 75 },
        { name: "MERN Stack", icon: <FiStack className="text-purple-400" />, level: 87 },
        { name: "Real-time Apps", icon: <FiMessageSquare className="text-green-400" />, level: 85 }
      ],
      projects: 7,
      certifications: ["TypeScript Mastery", "Next.js Advanced", "Entrepreneurship"]
    }
  ]

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  return (
    <section id="journey" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
          {'{ }'}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            <span className="text-blue-400">
              My Development Journey
            </span>
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
          >
            From university student to full-stack developer and tech entrepreneur
          </motion.p>
        </motion.div>

        {/* Responsive Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-pink-400/20 transform -translate-x-1/2"></div>
          
          {/* Milestones */}
          <div className="space-y-8 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Year Marker */}
                <div className={`flex items-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-6 md:pr-6' : 'md:ml-6 md:pl-6'}`}>
                  <motion.div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${hoveredItem === index ? 'border-blue-400 scale-110' : 'border-white/10'} transition-all duration-300`}
                    animate={{
                      backgroundColor: hoveredItem === index ? 
                        'rgba(96, 165, 250, 0.1)' : 
                        'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-blue-400"
                      animate={{
                        scale: hoveredItem === index ? 1.2 : 1,
                        opacity: hoveredItem === index ? 1 : 0.7
                      }}
                    />
                  </motion.div>
                  <span className={`ml-4 md:ml-3 md:relative md:whitespace-nowrap text-sm font-medium text-blue-400 ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-2'}`}>
                    {milestone.year}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  className={`flex-1 w-full ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} md:max-w-[32rem]`}
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${hoveredItem === index ? 'border-blue-400/30 shadow-lg' : 'border-white/10 shadow-md'} bg-sky-400/5 backdrop-blur-sm`}>
                    {/* Card Header */}
                    <div 
                      className="p-4 md:p-5 cursor-pointer flex items-start gap-3"
                      onClick={() => toggleExpand(index)}
                    >
                      <div className={`p-2 md:p-3 rounded-lg ${hoveredItem === index ? 'bg-blue-400/10 border-blue-400/30' : 'bg-white/5 border-white/10'} border transition-colors duration-300`}>
                        {milestone.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-white">{milestone.title}</h3>
                            <p className="text-xs md:text-sm text-blue-400 mt-1">
                              {milestone.role} • {milestone.company}
                            </p>
                          </div>
                          <motion.div
                            animate={{ rotate: expandedItem === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[#9ca3af]"
                          >
                            <FiChevronDown />
                          </motion.div>
                        </div>
                        <p className="text-sm md:text-base text-[#9ca3af] mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedItem === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 md:px-5 md:pb-5 border-t border-white/10">
                            {/* Highlights */}
                            <div className="mb-4 md:mb-5">
                              <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                              <ul className="space-y-1.5 md:space-y-2">
                                {milestone.highlights.map((highlight, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 md:mt-2 mr-2 rounded-full bg-blue-400"></span>
                                    <span className="text-sm md:text-base text-white">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Skills */}
                            <div className="mb-4 md:mb-5">
                              <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">SKILLS DEVELOPED</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {milestone.skills.map((skill, i) => (
                                  <div key={i} className="flex items-center">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-white/5 flex items-center justify-center mr-3">
                                      {skill.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between text-xs text-[#9ca3af] mb-1">
                                        <span>{skill.name}</span>
                                        <span>{skill.level}%</span>
                                      </div>
                                      <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2">
                                        <div 
                                          className="bg-blue-400 h-1.5 md:h-2 rounded-full" 
                                          style={{ width: `${skill.level}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
                              <div className="bg-white/5 rounded-lg p-3 md:p-4">
                                <div className="text-xl md:text-2xl font-bold text-blue-400">
                                  {milestone.projects}+
                                </div>
                                <div className="text-xs md:text-sm text-[#9ca3af]">
                                  Projects Built
                                </div>
                              </div>
                              <div className="bg-white/5 rounded-lg p-3 md:p-4">
                                <div className="text-xl md:text-2xl font-bold text-blue-400">
                                  {milestone.certifications.length}
                                </div>
                                <div className="text-xs md:text-sm text-[#9ca3af]">
                                  Skills Mastered
                                </div>
                              </div>
                            </div>

                            {/* Certifications */}
                            <div>
                              <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">ACHIEVEMENTS</h4>
                              <div className="flex flex-wrap gap-2">
                                {milestone.certifications.map((cert, i) => (
                                  <span 
                                    key={i} 
                                    className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
                                  >
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 bg-gradient-to-r from-blue-400/10 via-purple-400/5 to-pink-400/10 rounded-2xl p-6 md:p-8 border border-white/10"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Journey Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-[#9ca3af] font-mono">Years of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">56+</div>
                <div className="text-[#9ca3af] font-mono">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">30+</div>
                <div className="text-[#9ca3af] font-mono">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">1</div>
                <div className="text-[#9ca3af] font-mono">Tech Company Founded</div>
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm md:text-base font-mono max-w-3xl mx-auto">
              From university programming to founding my own technology company, this journey reflects 
              continuous growth, dedication to learning, and passion for creating impactful digital solutions 
              that solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ 
                y: -3,
                scale: 1.03,
                backgroundColor: '#60a5fa'
              }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/yonas-fsaha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono"
            >
              <FaGithub className="mr-2 text-lg" />
              View My GitHub
            </motion.a>
            <motion.button
              whileHover={{ 
                y: -3,
                scale: 1.03,
                backgroundColor: 'rgba(96, 165, 250, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '#projects'}
              className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-white/5 text-white border border-white/10 hover:border-blue-400/30 rounded-lg md:rounded-xl font-medium font-mono"
            >
              <FiBriefcase className="mr-2" />
              Explore All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



















// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiBriefcase, FiBook, FiAward, FiCode, FiLayers, FiChevronDown, FiDatabase, FiCpu, FiBookOpen, FiTool, FiVideo, FiGitBranch, FiGlobe, FiMail, FiShoppingCart, FiMessageSquare, FiServer, FiTrendingUp } from 'react-icons/fi'
// import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaDigitalOcean, FaLinux } from 'react-icons/fa'
// import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiJquery, SiMysql, SiPostgresql, SiVercel, SiNetlify, SiCodewars, SiStrapi, SiStripe, SiCpanel, SiDigitalocean, SiGithub } from 'react-icons/si'
// import { TbBrandNodejs, TbBrandCpp } from 'react-icons/tb'
// import { DiJava } from 'react-icons/di'
// import { GrDeploy } from 'react-icons/gr'
// import { useState } from 'react'

// // Define FiStack component BEFORE it's used in the milestones array
// const FiStack = ({ className }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
//     <path d="M11.4 24c-1.2 0-2.4-.4-3.3-1.2L1.2 15.9C.4 15 .1 13.8.1 12.6s.3-2.4 1.1-3.3L8.1 1.2C9 .4 10.2.1 11.4.1s2.4.3 3.3 1.1l7.2 7.2c.8.8 1.1 2 1.1 3.3s-.3 2.4-1.1 3.3l-7.2 7.2c-.8.8-2 1.2-3.3 1.2zm0-21.8c-.8 0-1.6.3-2.2.9L1.9 10.2c-.6.6-.9 1.4-.9 2.2s.3 1.6.9 2.2l7.2 7.2c.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9l7.2-7.2c.6-.6.9-1.4.9-2.2s-.3-1.6-.9-2.2L13.6 2.1c-.6-.6-1.4-.9-2.2-.9z"/>
//     <path d="M11.4 18.8c-.6 0-1.2-.2-1.7-.7L3.5 11.9c-.9-.9-.9-2.5 0-3.4L9.7 2.3c.5-.5 1.1-.7 1.7-.7s1.2.2 1.7.7l6.2 6.2c.9.9.9 2.5 0 3.4l-6.2 6.2c-.5.5-1.1.7-1.7.7zm0-13c-.2 0-.5.1-.6.2L4.6 11.2c-.3.3-.3.9 0 1.2l6.2 6.2c.1.1.4.2.6.2s.5-.1.6-.2l6.2-6.2c.3-.3.3-.9 0-1.2L12 6c-.1-.1-.4-.2-.6-.2z"/>
//     <path d="M11.4 15.6c-.4 0-.8-.2-1.1-.5L5.1 9.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l5.1 5.1 5.1-5.1c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-5.1 5.1c-.3.3-.7.5-1.1.5z"/>
//   </svg>
// )

// export default function JourneyTimeline() {
//   const [expandedItem, setExpandedItem] = useState(null)
//   const [hoveredItem, setHoveredItem] = useState(null)

//   const milestones = [
//     {
//       year: "2019",
//       title: "The Beginning: University & C++/Java",
//       icon: <FiBookOpen className="text-blue-400" />,
//       role: "Computer Science Student",
//       company: "Electrical & Computer Engineering",
//       description: "Started programming journey with formal education in C++ and Java during 3rd year university",
//       highlights: [
//         "First exposure to programming concepts",
//         "Learned algorithms and data structures basics",
//         "Completed university programming assignments",
//         "Built foundational programming mindset"
//       ],
//       skills: [
//         { name: "C++", icon: <TbBrandCpp className="text-[#00599C]" />, level: 70 },
//         { name: "Java", icon: <DiJava className="text-[#007396]" />, level: 65 },
//         { name: "Logic Building", icon: <FiCpu className="text-purple-400" />, level: 75 }
//       ],
//       projects: 8,
//       certifications: ["University Programming Courses"]
//     },
//     {
//       year: "2020",
//       title: "Self-Taught Web Development",
//       icon: <FaHtml5 className="text-[#E34F26]" />,
//       role: "Self-Learner",
//       company: "YouTube, W3Schools, FrontendMentor",
//       description: "Dedicated myself to learning web development through online resources and practical projects",
//       highlights: [
//         "Mastered HTML5 & CSS3 fundamentals",
//         "Learned Bootstrap & TailwindCSS",
//         "Started JavaScript basics",
//         "Built projects from FrontendMentor.com",
//         "Practiced with CodeWars challenges",
//         "Learned Git & GitHub for version control"
//       ],
//       skills: [
//         { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
//         { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
//         { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 60 },
//         { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, level: 80 },
//         { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 70 }
//       ],
//       projects: 15,
//       certifications: ["Frontend Development Fundamentals"]
//     },
//     {
//       year: "2021",
//       title: "JavaScript & React Deep Dive",
//       icon: <FaReact className="text-[#61DAFB]" />,
//       role: "JavaScript Developer",
//       company: "Self-Study & Project Building",
//       description: "Focused on mastering JavaScript and React framework while building more complex applications",
//       highlights: [
//         "Deepened JavaScript knowledge (ES6+)",
//         "Learned React.js fundamentals",
//         "Mastered API integration & async operations",
//         "Built interactive web applications",
//         "Learned state management patterns"
//       ],
//       skills: [
//         { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 85 },
//         { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 85 },
//         { name: "API Integration", icon: <FiCode className="text-green-400" />, level: 75 },
//         { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" />, level: 65 }
//       ],
//       projects: 12,
//       certifications: ["Modern JavaScript", "React Fundamentals"]
//     },
//     {
//       year: "2022",
//       title: "Frontend Developer & Teaching",
//       icon: <FiVideo className="text-yellow-400" />,
//       role: "Frontend Developer & Teacher",
//       company: "Freelance & Mentoring",
//       description: "Became professional frontend developer while teaching others and exploring WordPress",
//       highlights: [
//         "Started teaching web development",
//         "Worked on freelance frontend projects",
//         "Began WordPress development",
//         "Improved debugging & problem-solving skills",
//         "Learned performance optimization"
//       ],
//       skills: [
//         { name: "React Advanced", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
//         { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" />, level: 70 },
//         { name: "Git/GitHub", icon: <FiGitBranch className="text-orange-400" />, level: 85 },
//         { name: "Responsive Design", icon: <FiLayers className="text-pink-400" />, level: 90 }
//       ],
//       projects: 18,
//       certifications: ["Advanced React Patterns", "WordPress Development"]
//     },
//     {
//       year: "2023",
//       title: "Full-Stack & Deployment Mastery",
//       icon: <FiServer className="text-green-400" />,
//       role: "Full-Stack Developer",
//       company: "Real Projects & Advanced Learning",
//       description: "Mastered full-stack development and learned advanced deployment, VPS management, and digital marketing",
//       highlights: [
//         "Mastered Node.js & Express.js for backend",
//         "Learned MongoDB, PostgreSQL, MySQL databases",
//         "Mastered VPS deployment & management",
//         "Learned cPanel administration",
//         "Built custom email solutions",
//         "Learned digital marketing strategies",
//         "Deployed projects to Vercel & Netlify",
//         "Built RESTful APIs & authentication systems"
//       ],
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 88 },
//         { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 85 },
//         { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
//         { name: "VPS Deployment", icon: <GrDeploy className="text-[#0080FF]" />, level: 80 },
//         { name: "cPanel", icon: <SiCpanel className="text-[#FF6C2C]" />, level: 75 },
//         { name: "Linux", icon: <FaLinux className="text-[#FCC624]" />, level: 70 }
//       ],
//       projects: 25,
//       certifications: ["Full-Stack Development", "Server Administration", "Digital Marketing"]
//     },
//     {
//       year: "2024",
//       title: "Advanced Projects & Entrepreneurship",
//       icon: <FiTrendingUp className="text-purple-400" />,
//       role: "Full-Stack Developer & Entrepreneur",
//       company: "Vibeica Technology & Client Projects",
//       description: "Built complex real-world applications, started my own tech company, and worked on high-value client projects",
//       highlights: [
//         "Founded Vibeica Technology (vibeica.com)",
//         "Built real-time chat applications",
//         "Developed full-stack ecommerce platforms",
//         "Built news API with Node.js",
//         "Created WordPress ecommerce (queenofshebafoods.com)",
//         "Developed EthioWildlifeTours (ethiowildlifetours.com)",
//         "Mastered TypeScript & Next.js 14",
//         "Worked with Strapi CMS & Stripe payments",
//         "Deployed multiple production applications"
//       ],
//       skills: [
//         { name: "Next.js 14", icon: <SiNextdotjs className="text-white" />, level: 90 },
//         { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
//         { name: "Strapi CMS", icon: <SiStrapi className="text-[#4945FF]" />, level: 80 },
//         { name: "Stripe", icon: <SiStripe className="text-[#635BFF]" />, level: 75 },
//         { name: "MERN Stack", icon: <FiStack className="text-purple-400" />, level: 92 },
//         { name: "Real-time Apps", icon: <FiMessageSquare className="text-green-400" />, level: 85 }
//       ],
//       projects: 15,
//       certifications: ["TypeScript Mastery", "Next.js Advanced", "Entrepreneurship"]
//     }
//   ]

//   // Featured Projects
//   const featuredProjects = [
//     {
//       name: "Real-time Chat App",
//       description: "Full-featured chat application with real-time messaging",
//       tech: ["React", "Node.js", "Socket.io", "MongoDB"],
//       github: "https://github.com/yonas-fsaha/chat-app",
//       live: "#",
//       icon: <FiMessageSquare className="text-blue-400" />
//     },
//     {
//       name: "Ecommerce Platform",
//       description: "Complete ecommerce solution with admin dashboard",
//       tech: ["MERN Stack", "Redux", "Stripe", "JWT"],
//       github: "https://github.com/yonas-fsaha/ecommerce-app",
//       live: "#",
//       icon: <FiShoppingCart className="text-green-400" />
//     },
//     {
//       name: "News API",
//       description: "RESTful news API with multiple sources and filtering",
//       tech: ["Node.js", "Express", "MongoDB", "JWT"],
//       github: "https://github.com/yonas-fsaha/news-api",
//       live: "#",
//       icon: <FiGlobe className="text-yellow-400" />
//     },
//     {
//       name: "Queen of Sheba Foods",
//       description: "WordPress ecommerce website with custom features",
//       tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
//       github: null,
//       live: "https://queenofshebafoods.com/",
//       icon: <FaWordpress className="text-[#21759B]" />
//     },
//     {
//       name: "EthioWildlifeTours",
//       description: "Dynamic tour booking website with CMS integration",
//       tech: ["Next.js", "TypeScript", "Strapi", "Tailwind"],
//       github: null,
//       live: "https://ethiowildlifetours.com/",
//       icon: <SiNextdotjs className="text-white" />
//     },
//     {
//       name: "Vibeica Technology",
//       description: "My tech company website with services showcase",
//       tech: ["Next.js", "Tailwind", "Framer Motion", "EmailJS"],
//       github: null,
//       live: "https://vibeica.com/",
//       icon: <FiBriefcase className="text-purple-400" />
//     }
//   ]

//   const toggleExpand = (index) => {
//     setExpandedItem(expandedItem === index ? null : index)
//   }

//   return (
//     <section id="journey" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.h2
//             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             <span className="text-blue-400">
//               My Development Journey
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
//           >
//             From university student to full-stack developer and tech entrepreneur
//           </motion.p>
//         </motion.div>

//         {/* Responsive Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-pink-400/20 transform -translate-x-1/2"></div>
          
//           {/* Milestones */}
//           <div className="space-y-8 md:space-y-16">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 {/* Year Marker */}
//                 <div className={`flex items-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-6 md:pr-6' : 'md:ml-6 md:pl-6'}`}>
//                   <motion.div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${hoveredItem === index ? 'border-blue-400 scale-110' : 'border-white/10'} transition-all duration-300`}
//                     animate={{
//                       backgroundColor: hoveredItem === index ? 
//                         'rgba(96, 165, 250, 0.1)' : 
//                         'rgba(255, 255, 255, 0.05)'
//                     }}
//                   >
//                     <motion.div
//                       className="w-4 h-4 rounded-full bg-blue-400"
//                       animate={{
//                         scale: hoveredItem === index ? 1.2 : 1,
//                         opacity: hoveredItem === index ? 1 : 0.7
//                       }}
//                     />
//                   </motion.div>
//                   <span className={`ml-4 md:ml-3 md:relative md:whitespace-nowrap text-sm font-medium text-blue-400 ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-2'}`}>
//                     {milestone.year}
//                   </span>
//                 </div>

//                 {/* Card */}
//                 <motion.div
//                   className={`flex-1 w-full ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} md:max-w-[32rem]`}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${hoveredItem === index ? 'border-blue-400/30 shadow-lg' : 'border-white/10 shadow-md'} bg-sky-400/5 backdrop-blur-sm`}>
//                     {/* Card Header */}
//                     <div 
//                       className="p-4 md:p-5 cursor-pointer flex items-start gap-3"
//                       onClick={() => toggleExpand(index)}
//                     >
//                       <div className={`p-2 md:p-3 rounded-lg ${hoveredItem === index ? 'bg-blue-400/10 border-blue-400/30' : 'bg-white/5 border-white/10'} border transition-colors duration-300`}>
//                         {milestone.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-lg md:text-xl font-bold text-white">{milestone.title}</h3>
//                             <p className="text-xs md:text-sm text-blue-400 mt-1">
//                               {milestone.role} • {milestone.company}
//                             </p>
//                           </div>
//                           <motion.div
//                             animate={{ rotate: expandedItem === index ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="text-[#9ca3af]"
//                           >
//                             <FiChevronDown />
//                           </motion.div>
//                         </div>
//                         <p className="text-sm md:text-base text-[#9ca3af] mt-2">
//                           {milestone.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Expanded Content */}
//                     <AnimatePresence>
//                       {expandedItem === index && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="px-4 pb-4 md:px-5 md:pb-5 border-t border-white/10">
//                             {/* Highlights */}
//                             <div className="mb-4 md:mb-5">
//                               <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
//                               <ul className="space-y-1.5 md:space-y-2">
//                                 {milestone.highlights.map((highlight, i) => (
//                                   <li key={i} className="flex items-start">
//                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 md:mt-2 mr-2 rounded-full bg-blue-400"></span>
//                                     <span className="text-sm md:text-base text-white">{highlight}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Skills */}
//                             <div className="mb-4 md:mb-5">
//                               <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">SKILLS DEVELOPED</h4>
//                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
//                                 {milestone.skills.map((skill, i) => (
//                                   <div key={i} className="flex items-center">
//                                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-white/5 flex items-center justify-center mr-3">
//                                       {skill.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex justify-between text-xs text-[#9ca3af] mb-1">
//                                         <span>{skill.name}</span>
//                                         <span>{skill.level}%</span>
//                                       </div>
//                                       <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2">
//                                         <div 
//                                           className="bg-blue-400 h-1.5 md:h-2 rounded-full" 
//                                           style={{ width: `${skill.level}%` }}
//                                         ></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Stats */}
//                             <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
//                               <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                                 <div className="text-xl md:text-2xl font-bold text-blue-400">
//                                   {milestone.projects}+
//                                 </div>
//                                 <div className="text-xs md:text-sm text-[#9ca3af]">
//                                   Projects Built
//                                 </div>
//                               </div>
//                               <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                                 <div className="text-xl md:text-2xl font-bold text-blue-400">
//                                   {milestone.certifications.length}
//                                 </div>
//                                 <div className="text-xs md:text-sm text-[#9ca3af]">
//                                   Skills Mastered
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Certifications */}
//                             <div>
//                               <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">ACHIEVEMENTS</h4>
//                               <div className="flex flex-wrap gap-2">
//                                 {milestone.certifications.map((cert, i) => (
//                                   <span 
//                                     key={i} 
//                                     className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
//                                   >
//                                     {cert}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Projects Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 md:mt-20"
//         >
//           <div className="text-center mb-10 md:mb-12">
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               <span className="text-blue-400">Featured Projects</span>
//             </h3>
//             <p className="text-[#9ca3af] font-mono max-w-2xl mx-auto">
//               A showcase of my best work across different technologies and platforms
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {featuredProjects.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 className="group relative bg-gradient-to-br from-sky-400/5 to-purple-400/5 rounded-xl border border-white/10 overflow-hidden"
//               >
//                 <div className="p-5 md:p-6">
//                   <div className="flex items-start gap-4 mb-4">
//                     <div className="p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-400/30 transition-colors">
//                       {project.icon}
//                     </div>
//                     <div>
//                       <h4 className="text-lg md:text-xl font-bold text-white mb-1">
//                         {project.name}
//                       </h4>
//                       <p className="text-sm text-[#9ca3af]">
//                         {project.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech, i) => (
//                         <span
//                           key={i}
//                           className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     {project.github && (
//                       <motion.a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white transition-all flex-1"
//                       >
//                         <SiGithub className="text-lg" />
//                         GitHub
//                       </motion.a>
//                     )}
//                     {project.live && (
//                       <motion.a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-400 hover:bg-blue-300 text-[#020617] rounded-lg text-sm font-medium transition-all flex-1"
//                       >
//                         <FiGlobe className="text-lg" />
//                         Live Demo
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Summary Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-12 md:mt-16 bg-gradient-to-r from-blue-400/10 via-purple-400/5 to-pink-400/10 rounded-2xl p-6 md:p-8 border border-white/10"
//         >
//           <div className="text-center">
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Journey Summary
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//               <div className="text-center">
//                 <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">5+</div>
//                 <div className="text-[#9ca3af] font-mono">Years of Learning</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">93+</div>
//                 <div className="text-[#9ca3af] font-mono">Projects Built</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">30+</div>
//                 <div className="text-[#9ca3af] font-mono">Technologies Mastered</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">1</div>
//                 <div className="text-[#9ca3af] font-mono">Tech Company Founded</div>
//               </div>
//             </div>
//             <p className="text-[#9ca3af] text-sm md:text-base font-mono max-w-3xl mx-auto">
//               From university programming to founding my own technology company, this journey reflects 
//               continuous growth, dedication to learning, and passion for creating impactful digital solutions 
//               that solve real-world problems.
//             </p>
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-12 md:mt-16 text-center"
//         >
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.a
//               whileHover={{ 
//                 y: -3,
//                 scale: 1.03,
//                 backgroundColor: '#60a5fa'
//               }}
//               whileTap={{ scale: 0.98 }}
//               href="https://github.com/yonas-fsaha"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono"
//             >
//               <FaGithub className="mr-2 text-lg" />
//               View My GitHub
//             </motion.a>
//             <motion.button
//               whileHover={{ 
//                 y: -3,
//                 scale: 1.03,
//                 backgroundColor: 'rgba(96, 165, 250, 0.1)'
//               }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => window.location.href = '#projects'}
//               className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-white/5 text-white border border-white/10 hover:border-blue-400/30 rounded-lg md:rounded-xl font-medium font-mono"
//             >
//               <FiBriefcase className="mr-2" />
//               Explore All Projects
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


















// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiBriefcase, FiBook, FiAward, FiCode, FiLayers, FiChevronDown, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaUniversity, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
// import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiGraphql, SiJest } from 'react-icons/si'
// import { TbBrandNodejs } from 'react-icons/tb'
// import { useState } from 'react'

// export default function JourneyTimeline() {
//   const [expandedItem, setExpandedItem] = useState(null)
//   const [hoveredItem, setHoveredItem] = useState(null)

//   const milestones = [
//     {
//       year: "2015-2018",
//       title: "Computer Science Foundations",
//       icon: <FaUniversity className="text-blue-400" />,
//       role: "CS Student",
//       company: "Tech University",
//       description: "Built strong fundamentals in computer science principles and software engineering",
//       highlights: [
//         "Specialized in Data Structures & Algorithms",
//         "Database Management Systems coursework",
//         "Software Development Lifecycle projects"
//       ],
//       skills: [
//         { name: "Java", icon: <FiCode className="text-[#007396]" />, level: 80 },
//         { name: "Python", icon: <FiCode className="text-[#3776ab]" />, level: 75 },
//         { name: "SQL", icon: <FiDatabase className="text-[#cc2927]" />, level: 70 }
//       ],
//       projects: 12,
//       certifications: ["CS50", "Algorithms Specialization"]
//     },
//     {
//       year: "2018-2020",
//       title: "Frontend Development",
//       icon: <FaReact className="text-[#087ea4]" />,
//       role: "Frontend Developer",
//       company: "Digital Solutions Inc.",
//       description: "Developed responsive UIs for e-commerce platforms and marketing sites",
//       highlights: [
//         "Built 15+ responsive storefronts",
//         "Improved page load times by 40%",
//         "Implemented A/B testing frameworks"
//       ],
//       skills: [
//         { name: "React", icon: <FaReact className="text-[#087ea4]" />, level: 85 },
//         { name: "JavaScript", icon: <FiCode className="text-[#f7df1e]" />, level: 90 },
//         { name: "CSS3", icon: <FiLayers className="text-[#1572b6]" />, level: 80 }
//       ],
//       projects: 23,
//       certifications: ["Frontend Nanodegree"]
//     },
//     {
//       year: "2020-2022",
//       title: "Fullstack Transition",
//       icon: <TbBrandNodejs className="text-[#339933]" />,
//       role: "Fullstack Developer",
//       company: "Web Innovations LLC",
//       description: "Transitioned to fullstack development with Node.js and MongoDB",
//       highlights: [
//         "Architected RESTful APIs for SaaS products",
//         "Implemented JWT authentication",
//         "Optimized MongoDB queries"
//       ],
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
//         { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
//         { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 75 }
//       ],
//       projects: 18,
//       certifications: ["MERN Stack Certification"]
//     },
//     {
//       year: "2022-Present",
//       title: "MERN Stack Expert",
//       icon: <SiNextdotjs className="text-white" />,
//       role: "Senior Fullstack Engineer",
//       company: "Tech Horizon",
//       description: "Building performant fullstack applications with modern architectures",
//       highlights: [
//         "Led migration to Next.js and TypeScript",
//         "Implemented CI/CD pipelines",
//         "Developed microservices architecture"
//       ],
//       skills: [
//         { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 90 },
//         { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" />, level: 85 },
//         { name: "GraphQL", icon: <SiGraphql className="text-[#e10098]" />, level: 75 }
//       ],
//       projects: 32,
//       certifications: ["AWS Certified", "Advanced React"]
//     }
//   ]

//   const toggleExpand = (index) => {
//     setExpandedItem(expandedItem === index ? null : index)
//   }

//   return (
//     <section id="journey" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-50px" }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <motion.h2
//             className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
//           >
//             <span className="text-blue-400">
//               My Developer Journey
//             </span>
//           </motion.h2>
          
//           <motion.p
//             className="text-base md:text-lg lg:text-xl text-[#9ca3af] max-w-3xl mx-auto font-mono"
//           >
//             From foundational learning to mastering modern fullstack architectures
//           </motion.p>
//         </motion.div>

//         {/* Responsive Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-pink-400/20 transform -translate-x-1/2"></div>
          
//           {/* Milestones */}
//           <div className="space-y-8 md:space-y-16">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 {/* Year Marker */}
//                 <div className={`flex items-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-6 md:pr-6' : 'md:ml-6 md:pl-6'}`}>
//                   <motion.div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${hoveredItem === index ? 'border-blue-400 scale-110' : 'border-white/10'} transition-all duration-300`}
//                     animate={{
//                       backgroundColor: hoveredItem === index ? 
//                         'rgba(96, 165, 250, 0.1)' : 
//                         'rgba(255, 255, 255, 0.05)'
//                     }}
//                   >
//                     <motion.div
//                       className="w-4 h-4 rounded-full bg-blue-400"
//                       animate={{
//                         scale: hoveredItem === index ? 1.2 : 1,
//                         opacity: hoveredItem === index ? 1 : 0.7
//                       }}
//                     />
//                   </motion.div>
//                   <span className={`ml-4 md:ml-3 md:relative md:whitespace-nowrap text-sm font-medium text-blue-400 ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-2'}`}>
//                     {milestone.year}
//                   </span>
//                 </div>

//                 {/* Card */}
//                 <motion.div
//                   className={`flex-1 w-full ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} md:max-w-[32rem]`}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${hoveredItem === index ? 'border-blue-400/30 shadow-lg' : 'border-white/10 shadow-md'} bg-sky-400/5 backdrop-blur-sm`}>
//                     {/* Card Header */}
//                     <div 
//                       className="p-4 md:p-5 cursor-pointer flex items-start gap-3"
//                       onClick={() => toggleExpand(index)}
//                     >
//                       <div className={`p-2 md:p-3 rounded-lg ${hoveredItem === index ? 'bg-blue-400/10 border-blue-400/30' : 'bg-white/5 border-white/10'} border transition-colors duration-300`}>
//                         {milestone.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-lg md:text-xl font-bold text-white">{milestone.title}</h3>
//                             <p className="text-xs md:text-sm text-blue-400 mt-1">
//                               {milestone.role} • {milestone.company}
//                             </p>
//                           </div>
//                           <motion.div
//                             animate={{ rotate: expandedItem === index ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="text-[#9ca3af]"
//                           >
//                             <FiChevronDown />
//                           </motion.div>
//                         </div>
//                         <p className="text-sm md:text-base text-[#9ca3af] mt-2">
//                           {milestone.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Expanded Content */}
//                     <AnimatePresence>
//                       {expandedItem === index && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="px-4 pb-4 md:px-5 md:pb-5 border-t border-white/10">
//                             {/* Highlights */}
//                             <div className="mb-4 md:mb-5">
//                               <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
//                               <ul className="space-y-1.5 md:space-y-2">
//                                 {milestone.highlights.map((highlight, i) => (
//                                   <li key={i} className="flex items-start">
//                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 md:mt-2 mr-2 rounded-full bg-blue-400"></span>
//                                     <span className="text-sm md:text-base text-white">{highlight}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Skills */}
//                             <div className="mb-4 md:mb-5">
//                               <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">SKILLS DEVELOPED</h4>
//                               <div className="grid grid-cols-2 gap-3 md:gap-4">
//                                 {milestone.skills.map((skill, i) => (
//                                   <div key={i} className="flex items-center">
//                                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-white/5 flex items-center justify-center mr-3">
//                                       {skill.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex justify-between text-xs text-[#9ca3af] mb-1">
//                                         <span>{skill.name}</span>
//                                         <span>{skill.level}%</span>
//                                       </div>
//                                       <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2">
//                                         <div 
//                                           className="bg-blue-400 h-1.5 md:h-2 rounded-full" 
//                                           style={{ width: `${skill.level}%` }}
//                                         ></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Stats */}
//                             <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
//                               <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                                 <div className="text-xl md:text-2xl font-bold text-blue-400">
//                                   {milestone.projects}+
//                                 </div>
//                                 <div className="text-xs md:text-sm text-[#9ca3af]">
//                                   Projects
//                                 </div>
//                               </div>
//                               <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                                 <div className="text-xl md:text-2xl font-bold text-blue-400">
//                                   {milestone.certifications.length}
//                                 </div>
//                                 <div className="text-xs md:text-sm text-[#9ca3af]">
//                                   Certifications
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Certifications */}
//                             <div>
//                               <h4 className="text-xs md:text-sm font-semibold text-[#9ca3af] mb-2 md:mb-3">CERTIFICATIONS EARNED</h4>
//                               <div className="flex flex-wrap gap-2">
//                                 {milestone.certifications.map((cert, i) => (
//                                   <span 
//                                     key={i} 
//                                     className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
//                                   >
//                                     {cert}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-12 md:mt-16 text-center"
//         >
//           <motion.button
//             whileHover={{ 
//               y: -3,
//               scale: 1.03,
//               backgroundColor: '#60a5fa'
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-blue-400 text-[#020617] rounded-lg md:rounded-xl font-medium font-mono mx-auto"
//           >
//             <FiBriefcase className="mr-2" />
//             Explore My Work
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }























// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiBriefcase, FiBook, FiAward, FiCode, FiLayers, FiChevronDown, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaUniversity, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
// import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiGraphql, SiJest } from 'react-icons/si'
// import { TbBrandNodejs } from 'react-icons/tb'
// import { useState } from 'react'

// export default function JourneyTimeline() {
//   const [expandedItem, setExpandedItem] = useState(null)
//   const [hoveredItem, setHoveredItem] = useState(null)

//   const milestones = [
//     {
//       year: "2015-2018",
//       title: "Computer Science Foundations",
//       icon: <FaUniversity className="text-blue-400" />,
//       role: "CS Student",
//       company: "Tech University",
//       description: "Built strong fundamentals in computer science principles and software engineering",
//       highlights: [
//         "Specialized in Data Structures & Algorithms",
//         "Database Management Systems coursework",
//         "Software Development Lifecycle projects"
//       ],
//       skills: [
//         { name: "Java", icon: <FiCode className="text-red-400" />, level: 80 },
//         { name: "Python", icon: <FiCode className="text-yellow-400" />, level: 75 },
//         { name: "SQL", icon: <FiDatabase className="text-blue-400" />, level: 70 }
//       ],
//       projects: 12,
//       certifications: ["CS50", "Algorithms Specialization"]
//     },
//     {
//       year: "2018-2020",
//       title: "Frontend Development",
//       icon: <FaReact className="text-cyan-400" />,
//       role: "Frontend Developer",
//       company: "Digital Solutions Inc.",
//       description: "Developed responsive UIs for e-commerce platforms and marketing sites",
//       highlights: [
//         "Built 15+ responsive storefronts",
//         "Improved page load times by 40%",
//         "Implemented A/B testing frameworks"
//       ],
//       skills: [
//         { name: "React", icon: <FaReact className="text-blue-400" />, level: 85 },
//         { name: "JavaScript", icon: <FiCode className="text-yellow-400" />, level: 90 },
//         { name: "CSS3", icon: <FiLayers className="text-pink-400" />, level: 80 }
//       ],
//       projects: 23,
//       certifications: ["Frontend Nanodegree"]
//     },
//     {
//       year: "2020-2022",
//       title: "Fullstack Transition",
//       icon: <TbBrandNodejs className="text-green-400" />,
//       role: "Fullstack Developer",
//       company: "Web Innovations LLC",
//       description: "Transitioned to fullstack development with Node.js and MongoDB",
//       highlights: [
//         "Architected RESTful APIs for SaaS products",
//         "Implemented JWT authentication",
//         "Optimized MongoDB queries"
//       ],
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
//         { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
//         { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 }
//       ],
//       projects: 18,
//       certifications: ["MERN Stack Certification"]
//     },
//     {
//       year: "2022-Present",
//       title: "MERN Stack Expert",
//       icon: <SiNextdotjs className="text-black dark:text-white" />,
//       role: "Senior Fullstack Engineer",
//       company: "Tech Horizon",
//       description: "Building performant fullstack applications with modern architectures",
//       highlights: [
//         "Led migration to Next.js and TypeScript",
//         "Implemented CI/CD pipelines",
//         "Developed microservices architecture"
//       ],
//       skills: [
//         { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 90 },
//         { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
//         { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 75 }
//       ],
//       projects: 32,
//       certifications: ["AWS Certified", "Advanced React"]
//     }
//   ]

//   const toggleExpand = (index) => {
//     setExpandedItem(expandedItem === index ? null : index)
//   }

//   return (
//     <section id="journey" className="relative py-20 bg-gray-50 dark:bg-[#0a0e17] text-gray-900 dark:text-gray-100 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div 
//           className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-200/50 to-blue-400/20 dark:from-blue-600/10 dark:to-indigo-600/10 blur-[100px]"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.7, 0.9, 0.7]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             repeatType: 'reverse'
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-200/50 to-pink-300/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-[120px]"
//           animate={{
//             scale: [1, 1.05, 1],
//             opacity: [0.6, 0.8, 0.6]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             delay: 3
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 dark:bg-black/30 border border-blue-500/40 shadow-lg backdrop-blur-sm mb-6"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//             <span className="text-sm font-medium text-gray-600 dark:text-[#9ca3af] tracking-wider">PROFESSIONAL EVOLUTION</span>
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               My Developer Journey
//             </span>
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-600 dark:text-[#94a3b8] max-w-3xl mx-auto">
//             From foundational learning to mastering modern fullstack architectures
//           </p>
//         </motion.div>

//         {/* Responsive Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 transform -translate-x-1/2"></div>
          
//           {/* Milestones */}
//           <div className="space-y-12 md:space-y-16">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 {/* Year Marker - Now always visible on desktop */}
//                 <div className={`flex items-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'}`}>
//                   <motion.div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${hoveredItem === index ? 'border-blue-500 scale-110' : 'border-gray-300 dark:border-[#1e293b]'} transition-all duration-300`}
//                     animate={{
//                       backgroundColor: hoveredItem === index ? 
//                         'rgba(59, 130, 246, 0.1)' : 
//                         'rgba(255, 255, 255, 0.05)'
//                     }}
//                   >
//                     <motion.div
//                       className="w-4 h-4 rounded-full bg-blue-500"
//                       animate={{
//                         scale: hoveredItem === index ? 1.2 : 1,
//                         opacity: hoveredItem === index ? 1 : 0.7
//                       }}
//                     />
//                   </motion.div>
//                   <span className={`ml-4 md:ml-3 md:relative md:whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? 'md:mr-2' : 'md:ml-2'}`}>
//                     {milestone.year}
//                   </span>
//                 </div>

//                 {/* Card */}
//                 <motion.div
//                   className={`flex-1 w-full ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} md:max-w-[32rem]`}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${hoveredItem === index ? 'border-blue-400/50 shadow-lg' : 'border-gray-200 dark:border-[#1e293b] shadow-md'} bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-sm`}>
//                     {/* Card Header */}
//                     <div 
//                       className="p-6 cursor-pointer flex items-start gap-4 md:p-5"
//                       onClick={() => toggleExpand(index)}
//                     >
//                       <div className={`p-3 rounded-lg ${hoveredItem === index ? 'bg-blue-500/10 border-blue-500/30' : 'bg-gray-100/50 dark:bg-[#1e293b] border-gray-200 dark:border-[#1e293b]'} border transition-colors duration-300 md:p-2.5`}>
//                         {milestone.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-xl font-bold md:text-lg">{milestone.title}</h3>
//                             <p className="text-sm text-blue-500 dark:text-blue-400 mt-1 md:text-xs">
//                               {milestone.role} • {milestone.company}
//                             </p>
//                           </div>
//                           <motion.div
//                             animate={{ rotate: expandedItem === index ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="text-gray-400 dark:text-gray-500 md:text-sm"
//                           >
//                             <FiChevronDown />
//                           </motion.div>
//                         </div>
//                         <p className="text-gray-600 dark:text-[#94a3b8] mt-2 md:text-sm md:mt-1">
//                           {milestone.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Expanded Content */}
//                     <AnimatePresence>
//                       {expandedItem === index && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="px-6 pb-6 border-t border-gray-100 dark:border-[#1e293b] md:px-5 md:pb-5">
//                             {/* Highlights */}
//                             <div className="mb-6 md:mb-4">
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 md:text-xs md:mb-2">KEY HIGHLIGHTS</h4>
//                               <ul className="space-y-2 md:space-y-1.5">
//                                 {milestone.highlights.map((highlight, i) => (
//                                   <li key={i} className="flex items-start md:text-sm">
//                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 mr-2 rounded-full bg-blue-500 md:mt-1.5"></span>
//                                     <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Skills */}
//                             <div className="mb-6 md:mb-4">
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 md:text-xs md:mb-2">SKILLS DEVELOPED</h4>
//                               <div className="grid grid-cols-2 gap-4 md:gap-3">
//                                 {milestone.skills.map((skill, i) => (
//                                   <div key={i} className="flex items-center">
//                                     <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-[#1e293b] flex items-center justify-center mr-3 md:w-7 md:h-7">
//                                       {skill.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1 md:text-[0.65rem]">
//                                         <span>{skill.name}</span>
//                                         <span>{skill.level}%</span>
//                                       </div>
//                                       <div className="w-full bg-gray-200 dark:bg-[#1e293b] rounded-full h-1.5 md:h-1">
//                                         <div 
//                                           className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full md:h-1" 
//                                           style={{ width: `${skill.level}%` }}
//                                         ></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Stats */}
//                             <div className="grid grid-cols-2 gap-4 mb-6 md:gap-3 md:mb-4">
//                               <div className="bg-gray-100/50 dark:bg-[#1e293b] rounded-lg p-4 md:p-3">
//                                 <div className="text-2xl font-bold text-blue-500 dark:text-blue-400 md:text-xl">
//                                   {milestone.projects}+
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xs">
//                                   Projects
//                                 </div>
//                               </div>
//                               <div className="bg-gray-100/50 dark:bg-[#1e293b] rounded-lg p-4 md:p-3">
//                                 <div className="text-2xl font-bold text-purple-500 dark:text-purple-400 md:text-xl">
//                                   {milestone.certifications.length}
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xs">
//                                   Certifications
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Certifications */}
//                             <div>
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 md:text-xs md:mb-2">CERTIFICATIONS EARNED</h4>
//                               <div className="flex flex-wrap gap-2 md:gap-1.5">
//                                 {milestone.certifications.map((cert, i) => (
//                                   <span 
//                                     key={i} 
//                                     className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 md:px-2 md:py-0.5 md:text-[0.65rem]"
//                                   >
//                                     {cert}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 md:px-5 md:py-2.5 md:text-sm"
//           >
//             <FiBriefcase className="mr-2 md:w-4 md:h-4" />
//             Explore My Work
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
















// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiBriefcase, FiBook, FiAward, FiCode, FiLayers, FiChevronDown, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaUniversity, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
// import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiGraphql, SiJest } from 'react-icons/si'
// import { TbBrandNodejs } from 'react-icons/tb'
// import { useState } from 'react'

// export default function JourneyTimeline() {
//   const [expandedItem, setExpandedItem] = useState(null)
//   const [hoveredItem, setHoveredItem] = useState(null)

//   const milestones = [
//     {
//       year: "2015-2018",
//       title: "Computer Science Foundations",
//       icon: <FaUniversity className="text-blue-400" />,
//       role: "CS Student",
//       company: "Tech University",
//       description: "Built strong fundamentals in computer science principles and software engineering",
//       highlights: [
//         "Specialized in Data Structures & Algorithms",
//         "Database Management Systems coursework",
//         "Software Development Lifecycle projects"
//       ],
//       skills: [
//         { name: "Java", icon: <FiCode className="text-red-400" />, level: 80 },
//         { name: "Python", icon: <FiCode className="text-yellow-400" />, level: 75 },
//         { name: "SQL", icon: <FiDatabase className="text-blue-400" />, level: 70 }
//       ],
//       projects: 12,
//       certifications: ["CS50", "Algorithms Specialization"]
//     },
//     {
//       year: "2018-2020",
//       title: "Frontend Development",
//       icon: <FaReact className="text-cyan-400" />,
//       role: "Frontend Developer",
//       company: "Digital Solutions Inc.",
//       description: "Developed responsive UIs for e-commerce platforms and marketing sites",
//       highlights: [
//         "Built 15+ responsive storefronts",
//         "Improved page load times by 40%",
//         "Implemented A/B testing frameworks"
//       ],
//       skills: [
//         { name: "React", icon: <FaReact className="text-blue-400" />, level: 85 },
//         { name: "JavaScript", icon: <FiCode className="text-yellow-400" />, level: 90 },
//         { name: "CSS3", icon: <FiLayers className="text-pink-400" />, level: 80 }
//       ],
//       projects: 23,
//       certifications: ["Frontend Nanodegree"]
//     },
//     {
//       year: "2020-2022",
//       title: "Fullstack Transition",
//       icon: <TbBrandNodejs className="text-green-400" />,
//       role: "Fullstack Developer",
//       company: "Web Innovations LLC",
//       description: "Transitioned to fullstack development with Node.js and MongoDB",
//       highlights: [
//         "Architected RESTful APIs for SaaS products",
//         "Implemented JWT authentication",
//         "Optimized MongoDB queries"
//       ],
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
//         { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
//         { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 }
//       ],
//       projects: 18,
//       certifications: ["MERN Stack Certification"]
//     },
//     {
//       year: "2022-Present",
//       title: "MERN Stack Expert",
//       icon: <SiNextdotjs className="text-black dark:text-white" />,
//       role: "Senior Fullstack Engineer",
//       company: "Tech Horizon",
//       description: "Building performant fullstack applications with modern architectures",
//       highlights: [
//         "Led migration to Next.js and TypeScript",
//         "Implemented CI/CD pipelines",
//         "Developed microservices architecture"
//       ],
//       skills: [
//         { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 90 },
//         { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
//         { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 75 }
//       ],
//       projects: 32,
//       certifications: ["AWS Certified", "Advanced React"]
//     }
//   ]

//   const toggleExpand = (index) => {
//     setExpandedItem(expandedItem === index ? null : index)
//   }

//   return (
//     <section id="journey" className="relative py-20 bg-gray-50 dark:bg-[#0a0e17] text-gray-900 dark:text-gray-100 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div 
//           className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-200/50 to-blue-400/20 dark:from-blue-600/10 dark:to-indigo-600/10 blur-[100px]"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.7, 0.9, 0.7]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             repeatType: 'reverse'
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-200/50 to-pink-300/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-[120px]"
//           animate={{
//             scale: [1, 1.05, 1],
//             opacity: [0.6, 0.8, 0.6]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             delay: 3
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 dark:bg-black/30 border border-blue-500/40 shadow-lg backdrop-blur-sm mb-6"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//             <span className="text-sm font-medium text-gray-600 dark:text-[#9ca3af] tracking-wider">PROFESSIONAL EVOLUTION</span>
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               My Developer Journey
//             </span>
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-600 dark:text-[#94a3b8] max-w-3xl mx-auto">
//             From foundational learning to mastering modern fullstack architectures
//           </p>
//         </motion.div>

//         {/* Responsive Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 transform -translate-x-1/2"></div>
          
//           {/* Milestones */}
//           <div className="space-y-12 md:space-y-16">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 {/* Year Marker */}
//                 <div className={`flex items-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'}`}>
//                   <motion.div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${hoveredItem === index ? 'border-blue-500 scale-110' : 'border-gray-300 dark:border-[#1e293b]'} transition-all duration-300`}
//                     animate={{
//                       backgroundColor: hoveredItem === index ? 
//                         'rgba(59, 130, 246, 0.1)' : 
//                         'rgba(255, 255, 255, 0.05)'
//                     }}
//                   >
//                     <motion.div
//                       className="w-4 h-4 rounded-full bg-blue-500"
//                       animate={{
//                         scale: hoveredItem === index ? 1.2 : 1,
//                         opacity: hoveredItem === index ? 1 : 0.7
//                       }}
//                     />
//                   </motion.div>
//                   <span className={`ml-4 md:ml-0 md:absolute md:whitespace-nowrap text-sm font-medium ${index % 2 === 0 ? 'md:right-full md:mr-12' : 'md:left-full md:ml-12'}`}>
//                     {milestone.year}
//                   </span>
//                 </div>

//                 {/* Card - Now with desktop size constraints */}
//                 <motion.div
//                   className={`flex-1 w-full ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} md:max-w-[32rem]`}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${hoveredItem === index ? 'border-blue-400/50 shadow-lg' : 'border-gray-200 dark:border-[#1e293b] shadow-md'} bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-sm`}>
//                     {/* Card Header */}
//                     <div 
//                       className="p-6 cursor-pointer flex items-start gap-4 md:p-5"
//                       onClick={() => toggleExpand(index)}
//                     >
//                       <div className={`p-3 rounded-lg ${hoveredItem === index ? 'bg-blue-500/10 border-blue-500/30' : 'bg-gray-100/50 dark:bg-[#1e293b] border-gray-200 dark:border-[#1e293b]'} border transition-colors duration-300 md:p-2.5`}>
//                         {milestone.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-xl font-bold md:text-lg">{milestone.title}</h3>
//                             <p className="text-sm text-blue-500 dark:text-blue-400 mt-1 md:text-xs">
//                               {milestone.role} • {milestone.company}
//                             </p>
//                           </div>
//                           <motion.div
//                             animate={{ rotate: expandedItem === index ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="text-gray-400 dark:text-gray-500 md:text-sm"
//                           >
//                             <FiChevronDown />
//                           </motion.div>
//                         </div>
//                         <p className="text-gray-600 dark:text-[#94a3b8] mt-2 md:text-sm md:mt-1">
//                           {milestone.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Expanded Content */}
//                     <AnimatePresence>
//                       {expandedItem === index && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="px-6 pb-6 border-t border-gray-100 dark:border-[#1e293b] md:px-5 md:pb-5">
//                             {/* Highlights */}
//                             <div className="mb-6 md:mb-4">
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 md:text-xs md:mb-2">KEY HIGHLIGHTS</h4>
//                               <ul className="space-y-2 md:space-y-1.5">
//                                 {milestone.highlights.map((highlight, i) => (
//                                   <li key={i} className="flex items-start md:text-sm">
//                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 mr-2 rounded-full bg-blue-500 md:mt-1.5"></span>
//                                     <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Skills */}
//                             <div className="mb-6 md:mb-4">
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 md:text-xs md:mb-2">SKILLS DEVELOPED</h4>
//                               <div className="grid grid-cols-2 gap-4 md:gap-3">
//                                 {milestone.skills.map((skill, i) => (
//                                   <div key={i} className="flex items-center">
//                                     <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-[#1e293b] flex items-center justify-center mr-3 md:w-7 md:h-7">
//                                       {skill.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1 md:text-[0.65rem]">
//                                         <span>{skill.name}</span>
//                                         <span>{skill.level}%</span>
//                                       </div>
//                                       <div className="w-full bg-gray-200 dark:bg-[#1e293b] rounded-full h-1.5 md:h-1">
//                                         <div 
//                                           className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full md:h-1" 
//                                           style={{ width: `${skill.level}%` }}
//                                         ></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Stats */}
//                             <div className="grid grid-cols-2 gap-4 mb-6 md:gap-3 md:mb-4">
//                               <div className="bg-gray-100/50 dark:bg-[#1e293b] rounded-lg p-4 md:p-3">
//                                 <div className="text-2xl font-bold text-blue-500 dark:text-blue-400 md:text-xl">
//                                   {milestone.projects}+
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xs">
//                                   Projects
//                                 </div>
//                               </div>
//                               <div className="bg-gray-100/50 dark:bg-[#1e293b] rounded-lg p-4 md:p-3">
//                                 <div className="text-2xl font-bold text-purple-500 dark:text-purple-400 md:text-xl">
//                                   {milestone.certifications.length}
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400 md:text-xs">
//                                   Certifications
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Certifications */}
//                             <div>
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 md:text-xs md:mb-2">CERTIFICATIONS EARNED</h4>
//                               <div className="flex flex-wrap gap-2 md:gap-1.5">
//                                 {milestone.certifications.map((cert, i) => (
//                                   <span 
//                                     key={i} 
//                                     className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 md:px-2 md:py-0.5 md:text-[0.65rem]"
//                                   >
//                                     {cert}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 md:px-5 md:py-2.5 md:text-sm"
//           >
//             <FiBriefcase className="mr-2 md:w-4 md:h-4" />
//             Explore My Work
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





















// 'use client'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiBriefcase, FiBook, FiAward, FiCode, FiLayers, FiChevronDown, FiDatabase, FiCpu } from 'react-icons/fi'
// import { FaUniversity, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
// import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiTypescript, SiGraphql, SiJest } from 'react-icons/si'
// import { TbBrandNodejs } from 'react-icons/tb'
// import { useState } from 'react'

// export default function JourneyTimeline() {
//   const [expandedItem, setExpandedItem] = useState(null)
//   const [hoveredItem, setHoveredItem] = useState(null)

//   const milestones = [
//     {
//       year: "2015-2018",
//       title: "Computer Science Foundations",
//       icon: <FaUniversity className="text-blue-400" />,
//       role: "CS Student",
//       company: "Tech University",
//       description: "Built strong fundamentals in computer science principles and software engineering",
//       highlights: [
//         "Specialized in Data Structures & Algorithms",
//         "Database Management Systems coursework",
//         "Software Development Lifecycle projects"
//       ],
//       skills: [
//         { name: "Java", icon: <FiCode className="text-red-400" />, level: 80 },
//         { name: "Python", icon: <FiCode className="text-yellow-400" />, level: 75 },
//         { name: "SQL", icon: <FiDatabase className="text-blue-400" />, level: 70 }
//       ],
//       projects: 12,
//       certifications: ["CS50", "Algorithms Specialization"]
//     },
//     {
//       year: "2018-2020",
//       title: "Frontend Development",
//       icon: <FaReact className="text-cyan-400" />,
//       role: "Frontend Developer",
//       company: "Digital Solutions Inc.",
//       description: "Developed responsive UIs for e-commerce platforms and marketing sites",
//       highlights: [
//         "Built 15+ responsive storefronts",
//         "Improved page load times by 40%",
//         "Implemented A/B testing frameworks"
//       ],
//       skills: [
//         { name: "React", icon: <FaReact className="text-blue-400" />, level: 85 },
//         { name: "JavaScript", icon: <FiCode className="text-yellow-400" />, level: 90 },
//         { name: "CSS3", icon: <FiLayers className="text-pink-400" />, level: 80 }
//       ],
//       projects: 23,
//       certifications: ["Frontend Nanodegree"]
//     },
//     {
//       year: "2020-2022",
//       title: "Fullstack Transition",
//       icon: <TbBrandNodejs className="text-green-400" />,
//       role: "Fullstack Developer",
//       company: "Web Innovations LLC",
//       description: "Transitioned to fullstack development with Node.js and MongoDB",
//       highlights: [
//         "Architected RESTful APIs for SaaS products",
//         "Implemented JWT authentication",
//         "Optimized MongoDB queries"
//       ],
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
//         { name: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
//         { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 }
//       ],
//       projects: 18,
//       certifications: ["MERN Stack Certification"]
//     },
//     {
//       year: "2022-Present",
//       title: "MERN Stack Expert",
//       icon: <SiNextdotjs className="text-black dark:text-white" />,
//       role: "Senior Fullstack Engineer",
//       company: "Tech Horizon",
//       description: "Building performant fullstack applications with modern architectures",
//       highlights: [
//         "Led migration to Next.js and TypeScript",
//         "Implemented CI/CD pipelines",
//         "Developed microservices architecture"
//       ],
//       skills: [
//         { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 90 },
//         { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
//         { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 75 }
//       ],
//       projects: 32,
//       certifications: ["AWS Certified", "Advanced React"]
//     }
//   ]

//   const toggleExpand = (index) => {
//     setExpandedItem(expandedItem === index ? null : index)
//   }

//   return (
//     <section id="journey" className="relative py-20 bg-gray-50 dark:bg-[#0a0e17] text-gray-900 dark:text-gray-100 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div 
//           className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-200/50 to-blue-400/20 dark:from-blue-600/10 dark:to-indigo-600/10 blur-[100px]"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.7, 0.9, 0.7]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             repeatType: 'reverse'
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-200/50 to-pink-300/20 dark:from-purple-600/10 dark:to-pink-600/10 blur-[120px]"
//           animate={{
//             scale: [1, 1.05, 1],
//             opacity: [0.6, 0.8, 0.6]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             delay: 3
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 dark:bg-black/30 border border-blue-500/40 shadow-lg backdrop-blur-sm mb-6"
//             whileHover={{ scale: 1.02 }}
//           >
//             <span className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//             <span className="text-sm font-medium text-gray-600 dark:text-[#9ca3af] tracking-wider">PROFESSIONAL EVOLUTION</span>
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               My Developer Journey
//             </span>
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-600 dark:text-[#94a3b8] max-w-3xl mx-auto">
//             From foundational learning to mastering modern fullstack architectures
//           </p>
//         </motion.div>

//         {/* Responsive Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 transform -translate-x-1/2"></div>
          
//           {/* Milestones */}
//           <div className="space-y-12 md:space-y-16">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
//                 onMouseEnter={() => setHoveredItem(index)}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 {/* Year Marker */}
//                 <div className={`flex items-center mb-4 md:mb-0 ${index % 2 === 0 ? 'md:mr-8 md:pr-8' : 'md:ml-8 md:pl-8'}`}>
//                   <motion.div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${hoveredItem === index ? 'border-blue-500 scale-110' : 'border-gray-300 dark:border-[#1e293b]'} transition-all duration-300`}
//                     animate={{
//                       backgroundColor: hoveredItem === index ? 
//                         'rgba(59, 130, 246, 0.1)' : 
//                         'rgba(255, 255, 255, 0.05)'
//                     }}
//                   >
//                     <motion.div
//                       className="w-4 h-4 rounded-full bg-blue-500"
//                       animate={{
//                         scale: hoveredItem === index ? 1.2 : 1,
//                         opacity: hoveredItem === index ? 1 : 0.7
//                       }}
//                     />
//                   </motion.div>
//                   <span className={`ml-4 md:ml-0 md:absolute md:whitespace-nowrap text-sm font-medium ${index % 2 === 0 ? 'md:right-full md:mr-12' : 'md:left-full md:ml-12'}`}>
//                     {milestone.year}
//                   </span>
//                 </div>

//                 {/* Card */}
//                 <motion.div
//                   className={`flex-1 w-full ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${hoveredItem === index ? 'border-blue-400/50 shadow-lg' : 'border-gray-200 dark:border-[#1e293b] shadow-md'} bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-sm`}>
//                     {/* Card Header */}
//                     <div 
//                       className="p-6 cursor-pointer flex items-start gap-4"
//                       onClick={() => toggleExpand(index)}
//                     >
//                       <div className={`p-3 rounded-lg ${hoveredItem === index ? 'bg-blue-500/10 border-blue-500/30' : 'bg-gray-100/50 dark:bg-[#1e293b] border-gray-200 dark:border-[#1e293b]'} border transition-colors duration-300`}>
//                         {milestone.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-xl font-bold">{milestone.title}</h3>
//                             <p className="text-sm text-blue-500 dark:text-blue-400 mt-1">
//                               {milestone.role} • {milestone.company}
//                             </p>
//                           </div>
//                           <motion.div
//                             animate={{ rotate: expandedItem === index ? 180 : 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="text-gray-400 dark:text-gray-500"
//                           >
//                             <FiChevronDown />
//                           </motion.div>
//                         </div>
//                         <p className="text-gray-600 dark:text-[#94a3b8] mt-2">
//                           {milestone.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Expanded Content */}
//                     <AnimatePresence>
//                       {expandedItem === index && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: 'auto', opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <div className="px-6 pb-6 border-t border-gray-100 dark:border-[#1e293b]">
//                             {/* Highlights */}
//                             <div className="mb-6">
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">KEY HIGHLIGHTS</h4>
//                               <ul className="space-y-2">
//                                 {milestone.highlights.map((highlight, i) => (
//                                   <li key={i} className="flex items-start">
//                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 mr-2 rounded-full bg-blue-500"></span>
//                                     <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Skills */}
//                             <div className="mb-6">
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">SKILLS DEVELOPED</h4>
//                               <div className="grid grid-cols-2 gap-4">
//                                 {milestone.skills.map((skill, i) => (
//                                   <div key={i} className="flex items-center">
//                                     <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-[#1e293b] flex items-center justify-center mr-3">
//                                       {skill.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
//                                         <span>{skill.name}</span>
//                                         <span>{skill.level}%</span>
//                                       </div>
//                                       <div className="w-full bg-gray-200 dark:bg-[#1e293b] rounded-full h-1.5">
//                                         <div 
//                                           className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full" 
//                                           style={{ width: `${skill.level}%` }}
//                                         ></div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>

//                             {/* Stats */}
//                             <div className="grid grid-cols-2 gap-4 mb-6">
//                               <div className="bg-gray-100/50 dark:bg-[#1e293b] rounded-lg p-4">
//                                 <div className="text-2xl font-bold text-blue-500 dark:text-blue-400">
//                                   {milestone.projects}+
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                                   Projects
//                                 </div>
//                               </div>
//                               <div className="bg-gray-100/50 dark:bg-[#1e293b] rounded-lg p-4">
//                                 <div className="text-2xl font-bold text-purple-500 dark:text-purple-400">
//                                   {milestone.certifications.length}
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-400">
//                                   Certifications
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Certifications */}
//                             <div>
//                               <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">CERTIFICATIONS EARNED</h4>
//                               <div className="flex flex-wrap gap-2">
//                                 {milestone.certifications.map((cert, i) => (
//                                   <span 
//                                     key={i} 
//                                     className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
//                                   >
//                                     {cert}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
//           >
//             <FiBriefcase className="mr-2" />
//             Explore My Work
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }















// 'use client'
// import { motion } from 'framer-motion'
// import { FiBriefcase, FiBook, FiAward, FiCode, FiLayers } from 'react-icons/fi'
// import { FaUniversity, FaReact, FaNodeJs } from 'react-icons/fa'
// import { SiMongodb, SiExpress } from 'react-icons/si'

// export default function JourneyTimeline() {
//   const milestones = [
//     {
//       year: "2015-2018",
//       title: "Computer Science Degree",
//       icon: <FaUniversity className="text-blue-400" />,
//       description: "Fundamentals of algorithms, data structures, and software engineering",
//       tags: ["Data Structures", "OOP", "DBMS"]
//     },
//     {
//       year: "2018-2019",
//       title: "Frontend Developer",
//       icon: <FiCode className="text-purple-400" />,
//       description: "Built responsive UIs for e-commerce platforms",
//       tags: ["HTML/CSS", "JavaScript", "jQuery"]
//     },
//     {
//       year: "2019-2020",
//       title: "Fullstack Transition",
//       icon: <FiLayers className="text-green-400" />,
//       description: "Learned MERN stack through project-based learning",
//       tags: ["React", "Node.js", "MongoDB"]
//     },
//     {
//       year: "2020-Present",
//       title: "MERN Stack Developer",
//       icon: <FaReact className="text-cyan-400" />,
//       description: "Developing fullstack applications with modern architectures",
//       tags: ["Next.js", "GraphQL", "Microservices"]
//     }
//   ]

//   return (
//     <section id="journey" className="relative py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] dark:from-[#0f172a] dark:to-[#05070a] text-gray-900 dark:text-gray-100 overflow-hidden border-t border-gray-200 dark:border-[#1e293b]">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         <motion.div
//           className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 blur-[120px]"
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
//             <span className="text-sm font-medium text-gray-600 dark:text-[#9ca3af] tracking-wider">PROFESSIONAL JOURNEY</span>
//           </motion.div>
          
//           <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//               My Path
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-600 dark:text-[#94a3b8] max-w-3xl mx-auto">
//             From foundational learning to mastering the MERN stack
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 dark:bg-[#1e293b] transform -translate-x-1/2"></div>
          
//           {/* Milestones */}
//           <div className="space-y-16">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
//               >
//                 {/* Year */}
//                 <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
//                   <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-[#1e293b] rounded-full text-sm font-medium">
//                     {milestone.year}
//                   </span>
//                 </div>
                
//                 {/* Card */}
//                 <div className="flex-1">
//                   <div className={`p-6 rounded-xl border border-gray-200 dark:border-[#1e293b] bg-white dark:bg-[#0f172a] shadow-lg ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className="p-3 rounded-lg bg-gray-100 dark:bg-[#1e293b]">
//                         {milestone.icon}
//                       </div>
//                       <h3 className="text-2xl font-bold">{milestone.title}</h3>
//                     </div>
//                     <p className="text-gray-600 dark:text-[#94a3b8] mb-4">{milestone.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {milestone.tags.map((tag, i) => (
//                         <span key={i} className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-[#1e293b] text-gray-700 dark:text-[#9ca3af]">
//                           {tag}
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