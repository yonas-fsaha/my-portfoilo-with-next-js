'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import JourneyTimeline from '../components/JourneyTimeline'
import BlogHighlights from '../components/BlogHighlights'
import Contact from '../components/Contact'
import TechMarketing from '../components/TechMarketing'
import Footer from '../components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Check user preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Skills />
        <JourneyTimeline />
        <Projects />
        <TechMarketing />
        <BlogHighlights /> 
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

