'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiPhone, FiChevronDown, FiSearch, FiX, FiAlertCircle } from 'react-icons/fi'

// Complete country data included directly
const countries = [
  { code: 'ET', name: 'Ethiopia', dialCode: '+251', flag: '🇪🇹' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { code: 'IR', name: 'Iran', dialCode: '+98', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', dialCode: '+964', flag: '🇮🇶' },
  { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴' },
  { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
  { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭' },
  { code: 'CI', name: 'Ivory Coast', dialCode: '+225', flag: '🇨🇮' },
  { code: 'SN', name: 'Senegal', dialCode: '+221', flag: '🇸🇳' },
  { code: 'TZ', name: 'Tanzania', dialCode: '+255', flag: '🇹🇿' },
  { code: 'UG', name: 'Uganda', dialCode: '+256', flag: '🇺🇬' },
  { code: 'RW', name: 'Rwanda', dialCode: '+250', flag: '🇷🇼' },
  { code: 'ZM', name: 'Zambia', dialCode: '+260', flag: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe', dialCode: '+263', flag: '🇿🇼' },
  { code: 'MZ', name: 'Mozambique', dialCode: '+258', flag: '🇲🇿' },
  { code: 'AO', name: 'Angola', dialCode: '+244', flag: '🇦🇴' },
  { code: 'CM', name: 'Cameroon', dialCode: '+237', flag: '🇨🇲' },
  { code: 'MG', name: 'Madagascar', dialCode: '+261', flag: '🇲🇬' },
  { code: 'SD', name: 'Sudan', dialCode: '+249', flag: '🇸🇩' },
  { code: 'DZ', name: 'Algeria', dialCode: '+213', flag: '🇩🇿' },
  { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦' },
  { code: 'TN', name: 'Tunisia', dialCode: '+216', flag: '🇹🇳' },
  { code: 'LY', name: 'Libya', dialCode: '+218', flag: '🇱🇾' },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱' },
  { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴' },
  { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪' },
  { code: 'VE', name: 'Venezuela', dialCode: '+58', flag: '🇻🇪' },
  { code: 'EC', name: 'Ecuador', dialCode: '+593', flag: '🇪🇨' },
  { code: 'BO', name: 'Bolivia', dialCode: '+591', flag: '🇧🇴' },
  { code: 'PY', name: 'Paraguay', dialCode: '+595', flag: '🇵🇾' },
  { code: 'UY', name: 'Uruguay', dialCode: '+598', flag: '🇺🇾' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
  { code: 'FJ', name: 'Fiji', dialCode: '+679', flag: '🇫🇯' },
  { code: 'PG', name: 'Papua New Guinea', dialCode: '+675', flag: '🇵🇬' },
]

const serviceOptions = [
  'Web Development (Full-Stack)',
  'Frontend Development (React/Next.js)',
  'Backend Development (Node.js/API)',
  'WordPress Website Development',
  'E-commerce Solution',
  'Technical Consultation',
  'Digital Marketing',
  'Website Maintenance',
  'Others (Special Request)'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCode: '+251',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showServiceDropdown, setShowServiceDropdown] = useState(false)
  const [searchCountry, setSearchCountry] = useState('')
  const [submitError, setSubmitError] = useState('')

  const countryDropdownRef = useRef(null)
  const serviceDropdownRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all required fields (Name, Email, Message)')
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          phoneCode: formData.phoneCode,
          service: formData.service,
          message: formData.message
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      // Success
      console.log('Email sent successfully:', data)
      setSubmitSuccess(true)
      setSubmitError('')
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        phoneCode: '+251',
        service: '', 
        message: '' 
      })

      // Auto-hide success message after 10 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 10000)

    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(error.message || 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePhoneChange = (e) => {
    // Only allow numbers and + - ( ) for phone formatting
    const value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, '')
    setFormData({
      ...formData,
      phone: value
    })
  }

  const selectCountry = (country) => {
    setFormData({
      ...formData,
      phoneCode: country.dialCode
    })
    setShowCountryDropdown(false)
    setSearchCountry('')
  }

  const selectService = (service) => {
    setFormData({
      ...formData,
      service
    })
    setShowServiceDropdown(false)
  }

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
    country.dialCode.includes(searchCountry) ||
    country.code.toLowerCase().includes(searchCountry.toLowerCase())
  )

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false)
      }
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
        setShowServiceDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section id="contact" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="text-blue-400">
                Let's Collaborate
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-[#9ca3af] mb-8 md:mb-10 max-w-lg font-mono"
            >
              Whether you have a project in mind, need technical consultation, or just want to connect, I'm always open to discussing new opportunities.
            </motion.p>
            
            <div className="space-y-4 md:space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
                  <FiMail className="text-blue-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Email</h3>
                  <a 
                    href="mailto:yonasfsaha404@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    yonasfsaha404@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
                  <FiMapPin className="text-blue-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Location</h3>
                  <p className="text-white text-sm md:text-base">Addis Ababa, Ethiopia</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
                  <FiPhone className="text-blue-400 text-lg md:text-xl" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Phone</h3>
                  <a 
                    href="tel:+251913198516" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    +251 913198516
                  </a> <br/>
                  <a 
                    href="tel:+251966356211" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    +251 966356211
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-3 md:gap-4 pt-2 md:pt-4"
              >
                {[
                  { icon: <FiGithub />, url: 'https://github.com/yonas-fsaha', color: 'hover:text-white' },
                  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/yonas-fsaha', color: 'hover:text-blue-400' },
                  { icon: <FaXTwitter />, url: 'https://x.com/YonasFsaha', color: 'hover:text-blue-400' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 text-[#9ca3af] ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-sky-400/5 rounded-xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 md:py-8 lg:py-12"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-green-500/30">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">Thank you for reaching out. Check your email for confirmation!.</p>
                <motion.button
                  whileHover={{ 
                    y: -3,
                    scale: 1.03,
                    backgroundColor: '#60a5fa'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSubmitSuccess(false)}
                  className="px-4 md:px-6 py-2 md:py-3 bg-blue-400 text-[#020617] rounded-lg font-medium font-mono"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send me a message</h3>

                {/* Error Message Display */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <FiAlertCircle className="text-red-400 text-lg flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-red-400 text-sm font-medium">Failed to send message</p>
                        <p className="text-red-300 text-sm mt-1">{submitError}</p>
                      </div>
                      <button
                        onClick={() => setSubmitError('')}
                        className="text-red-300 hover:text-white transition-colors"
                      >
                        <FiX />
                      </button>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Your Name *</label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
                        required
                        placeholder="John Doe"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Email Address *</label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
                        required
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Phone Field with Country Selector */}
                  <div className="country-selector" ref={countryDropdownRef}>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Phone Number</label>
                    <div className="flex gap-2">
                      {/* Country Code Selector */}
                      <div className="relative flex-shrink-0 w-32 md:w-40">
                        <motion.button
                          type="button"
                          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                          onClick={() => {
                            setShowCountryDropdown(!showCountryDropdown)
                            setShowServiceDropdown(false)
                          }}
                          className="w-full px-3 py-3 md:px-4 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm md:text-base flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <span>{countries.find(c => c.dialCode === formData.phoneCode)?.flag || '🇪🇹'}</span>
                            <span>{formData.phoneCode}</span>
                          </span>
                          <FiChevronDown className={`transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} />
                        </motion.button>
                        
                        {/* Country Dropdown */}
                        {showCountryDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full left-0 right-0 mt-1 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden"
                          >
                            {/* Search Input */}
                            <div className="p-2 border-b border-white/10">
                              <div className="relative">
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8]" />
                                <input
                                  type="text"
                                  value={searchCountry}
                                  onChange={(e) => setSearchCountry(e.target.value)}
                                  placeholder="Search country..."
                                  className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                                />
                              </div>
                            </div>
                            
                            {/* Country List */}
                            <div className="max-h-48 overflow-y-auto">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <motion.button
                                    key={country.code}
                                    type="button"
                                    whileHover={{ backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
                                    onClick={() => selectCountry(country)}
                                    className="w-full px-3 py-2 text-left text-sm text-white hover:text-blue-400 flex items-center gap-2 border-b border-white/5 last:border-b-0"
                                  >
                                    <span className="text-base">{country.flag}</span>
                                    <span className="flex-1">{country.name}</span>
                                    <span className="text-blue-400 text-xs font-mono">{country.dialCode}</span>
                                  </motion.button>
                                ))
                              ) : (
                                <div className="px-3 py-4 text-center text-sm text-[#94a3b8]">
                                  No countries found
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Phone Input */}
                      <motion.div whileHover={{ scale: 1.01 }} className="flex-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
                          placeholder="Phone number"
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Service Type Dropdown */}
                  <div className="service-selector" ref={serviceDropdownRef}>
                    <label htmlFor="service" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Service Needed</label>
                    <div className="relative">
                      <motion.button
                        type="button"
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                        onClick={() => {
                          setShowServiceDropdown(!showServiceDropdown)
                          setShowCountryDropdown(false)
                        }}
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm md:text-base flex items-center justify-between text-left"
                      >
                        <span className={formData.service ? 'text-white' : 'text-[#94a3b8]'}>
                          {formData.service || 'Select a service...'}
                        </span>
                        <FiChevronDown className={`transition-transform duration-200 ${showServiceDropdown ? 'rotate-180' : ''}`} />
                      </motion.button>
                      
                      {/* Service Dropdown */}
                      {showServiceDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-50"
                        >
                          <div className="max-h-48 overflow-y-auto">
                            {serviceOptions.map((service, index) => (
                              <motion.button
                                key={index}
                                type="button"
                                whileHover={{ backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
                                onClick={() => selectService(service)}
                                className="w-full px-4 py-3 text-left text-sm text-white hover:text-blue-400 border-b border-white/10 last:border-b-0"
                              >
                                {service}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Your Message *</label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
                        required
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      ></textarea>
                    </motion.div>
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      y: -3,
                      scale: 1.02,
                      backgroundColor: '#60a5fa'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-blue-400 text-[#020617] rounded-lg font-medium flex items-center justify-center gap-2 md:gap-3 disabled:opacity-70 font-mono"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-[#020617]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="text-sm md:text-base">Send Message</span>
                        <FiSend className="text-[#020617]" />
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
















// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiPhone, FiChevronDown, FiSearch } from 'react-icons/fi'

// // Complete country data included directly
// const countries = [
//   { code: 'ET', name: 'Ethiopia', dialCode: '+251', flag: '🇪🇹' },
//   { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
//   { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
//   { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
//   { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
//   { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
//   { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
//   { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
//   { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
//   { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' },
//   { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
//   { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
//   { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
//   { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
//   { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
//   { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
//   { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
//   { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
//   { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
//   { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
//   { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
//   { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
//   { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
//   { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
//   { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
//   { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
//   { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
//   { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
//   { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
//   { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
//   { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
//   { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
//   { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
//   { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
//   { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
//   { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
//   { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱' },
//   { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
//   { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
//   { code: 'IR', name: 'Iran', dialCode: '+98', flag: '🇮🇷' },
//   { code: 'IQ', name: 'Iraq', dialCode: '+964', flag: '🇮🇶' },
//   { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴' },
//   { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧' },
//   { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
//   { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
//   { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
//   { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
//   { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭' },
//   { code: 'CI', name: 'Ivory Coast', dialCode: '+225', flag: '🇨🇮' },
//   { code: 'SN', name: 'Senegal', dialCode: '+221', flag: '🇸🇳' },
//   { code: 'TZ', name: 'Tanzania', dialCode: '+255', flag: '🇹🇿' },
//   { code: 'UG', name: 'Uganda', dialCode: '+256', flag: '🇺🇬' },
//   { code: 'RW', name: 'Rwanda', dialCode: '+250', flag: '🇷🇼' },
//   { code: 'ZM', name: 'Zambia', dialCode: '+260', flag: '🇿🇲' },
//   { code: 'ZW', name: 'Zimbabwe', dialCode: '+263', flag: '🇿🇼' },
//   { code: 'MZ', name: 'Mozambique', dialCode: '+258', flag: '🇲🇿' },
//   { code: 'AO', name: 'Angola', dialCode: '+244', flag: '🇦🇴' },
//   { code: 'CM', name: 'Cameroon', dialCode: '+237', flag: '🇨🇲' },
//   { code: 'MG', name: 'Madagascar', dialCode: '+261', flag: '🇲🇬' },
//   { code: 'SD', name: 'Sudan', dialCode: '+249', flag: '🇸🇩' },
//   { code: 'DZ', name: 'Algeria', dialCode: '+213', flag: '🇩🇿' },
//   { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦' },
//   { code: 'TN', name: 'Tunisia', dialCode: '+216', flag: '🇹🇳' },
//   { code: 'LY', name: 'Libya', dialCode: '+218', flag: '🇱🇾' },
//   { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷' },
//   { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱' },
//   { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴' },
//   { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪' },
//   { code: 'VE', name: 'Venezuela', dialCode: '+58', flag: '🇻🇪' },
//   { code: 'EC', name: 'Ecuador', dialCode: '+593', flag: '🇪🇨' },
//   { code: 'BO', name: 'Bolivia', dialCode: '+591', flag: '🇧🇴' },
//   { code: 'PY', name: 'Paraguay', dialCode: '+595', flag: '🇵🇾' },
//   { code: 'UY', name: 'Uruguay', dialCode: '+598', flag: '🇺🇾' },
//   { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
//   { code: 'FJ', name: 'Fiji', dialCode: '+679', flag: '🇫🇯' },
//   { code: 'PG', name: 'Papua New Guinea', dialCode: '+675', flag: '🇵🇬' },
// ]

// const serviceOptions = [
//   'Web Development (Full-Stack)',
//   'Frontend Development (React/Next.js)',
//   'Backend Development (Node.js/API)',
//   'WordPress Website Development',
//   'E-commerce Solution',
//   'Technical Consultation',
//   'Digital Marketing',
//   'Website Maintenance',
//   'Others (Special Request)'
// ]

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     phoneCode: '+251',
//     service: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitSuccess, setSubmitSuccess] = useState(false)
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false)
//   const [showServiceDropdown, setShowServiceDropdown] = useState(false)
//   const [searchCountry, setSearchCountry] = useState('')
//   const [submitError, setSubmitError] = useState('')





// // Replace the handleSubmit function
// const handleSubmit = async (e) => {
//   e.preventDefault()
//   setIsSubmitting(true)
//   setSubmitError('')
  
//   try {
//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         phoneCode: formData.phoneCode,
//         service: formData.service,
//         message: formData.message
//       })
//     })

//     const data = await response.json()

//     if (!response.ok) {
//       throw new Error(data.message || 'Failed to send message')
//     }

//     // Success
//     console.log('Email sent successfully:', data)
//     setSubmitSuccess(true)
//     setSubmitError('')
//     setFormData({ 
//       name: '', 
//       email: '', 
//       phone: '', 
//       phoneCode: '+251',
//       service: '', 
//       message: '' 
//     })

//     // Auto-hide success message after 10 seconds
//     setTimeout(() => {
//       setSubmitSuccess(false)
//     }, 10000)

//   } catch (error) {
//     console.error('Submission error:', error)
//     setSubmitError(error.message || 'Failed to send message. Please try again.')
//   } finally {
//     setIsSubmitting(false)
//   }
// }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handlePhoneChange = (e) => {
//     // Only allow numbers and + - ( ) for phone formatting
//     const value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, '')
//     setFormData({
//       ...formData,
//       phone: value
//     })
//   }

//   const selectCountry = (country) => {
//     setFormData({
//       ...formData,
//       phoneCode: country.dialCode
//     })
//     setShowCountryDropdown(false)
//     setSearchCountry('')
//   }

//   const selectService = (service) => {
//     setFormData({
//       ...formData,
//       service
//     })
//     setShowServiceDropdown(false)
//   }

//   const filteredCountries = countries.filter(country =>
//     country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
//     country.dialCode.includes(searchCountry) ||
//     country.code.toLowerCase().includes(searchCountry.toLowerCase())
//   )

//   // Close dropdowns when clicking outside
//   const handleClickOutside = (e) => {
//     if (showCountryDropdown && !e.target.closest('.country-selector')) {
//       setShowCountryDropdown(false)
//     }
//     if (showServiceDropdown && !e.target.closest('.service-selector')) {
//       setShowServiceDropdown(false)
//     }
//   }

//   // Add click outside listener
//   useState(() => {
//     document.addEventListener('click', handleClickOutside)
//     return () => document.removeEventListener('click', handleClickOutside)
//   })

//   return (
//     <section id="contact" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
//         >
//           {/* Left Column - Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             >
//               <span className="text-blue-400">
//                 Let's Collaborate
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-base md:text-lg lg:text-xl text-[#9ca3af] mb-8 md:mb-10 max-w-lg font-mono"
//             >
//               Whether you have a project in mind, need technical consultation, or just want to connect, I'm always open to discussing new opportunities.
//             </motion.p>
            
//             <div className="space-y-4 md:space-y-6">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="flex items-start gap-3 md:gap-4"
//               >
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
//                   <FiMail className="text-blue-400 text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Email</h3>
//                   <a 
//                     href="mailto:yonasfsaha404@gmail.com" 
//                     className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
//                   >
//                     yonasfsaha404@gmail.com
//                   </a>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex items-start gap-3 md:gap-4"
//               >
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
//                   <FiMapPin className="text-blue-400 text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Location</h3>
//                   <p className="text-white text-sm md:text-base">Addis Ababa, Ethiopia</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="flex items-start gap-3 md:gap-4"
//               >
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
//                   <FiPhone className="text-blue-400 text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Phone</h3>
//                   <a 
//                     href="tel:+251912345678" 
//                     className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
//                   >
//                     +251 912 345 678
//                   </a>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="flex gap-3 md:gap-4 pt-2 md:pt-4"
//               >
//                 {[
//                   { icon: <FiGithub />, url: 'https://github.com/yonas-fsaha', color: 'hover:text-white' },
//                   { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-400' },
//                   { icon: <FiTwitter />, url: 'https://twitter.com/yourhandle', color: 'hover:text-blue-400' }
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     whileHover={{ y: -3, scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 text-[#9ca3af] ${social.color} transition-all duration-300`}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
          
//           {/* Right Column - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-sky-400/5 rounded-xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
//           >
//             {submitSuccess ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-6 md:py-8 lg:py-12"
//               >
//                 <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-green-500/30">
//                   <svg className="w-8 h-8 md:w-10 md:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
//                 <motion.button
//                   whileHover={{ 
//                     y: -3,
//                     scale: 1.03,
//                     backgroundColor: '#60a5fa'
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSubmitSuccess(false)}
//                   className="px-4 md:px-6 py-2 md:py-3 bg-blue-400 text-[#020617] rounded-lg font-medium font-mono"
//                 >
//                   Send Another Message
//                 </motion.button>
//               </motion.div>
//             ) : (
//               <>
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send me a message</h3>

                
//                 <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//                   {/* Name Field */}
//                   <div>
//                     <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Your Name *</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                         required
//                         placeholder="John Doe"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   {/* Email Field */}
//                   <div>
//                     <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Email Address *</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                         required
//                         placeholder="john@example.com"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   {/* Phone Field with Country Selector */}
//                   <div className="country-selector">
//                     <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Phone Number</label>
//                     <div className="flex gap-2">
//                       {/* Country Code Selector */}
//                       <div className="relative flex-shrink-0 w-32 md:w-40">
//                         <motion.button
//                           type="button"
//                           whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
//                           onClick={() => {
//                             setShowCountryDropdown(!showCountryDropdown)
//                             setShowServiceDropdown(false)
//                           }}
//                           className="w-full px-3 py-3 md:px-4 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm md:text-base flex items-center justify-between"
//                         >
//                           <span className="flex items-center gap-2">
//                             <span>{countries.find(c => c.dialCode === formData.phoneCode)?.flag || '🇪🇹'}</span>
//                             <span>{formData.phoneCode}</span>
//                           </span>
//                           <FiChevronDown className={`transition-transform duration-200 ${showCountryDropdown ? 'rotate-180' : ''}`} />
//                         </motion.button>
                        
//                         {/* Country Dropdown */}
//                         {showCountryDropdown && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="absolute top-full left-0 right-0 mt-1 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden"
//                           >
//                             {/* Search Input */}
//                             <div className="p-2 border-b border-white/10">
//                               <div className="relative">
//                                 <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94a3b8]" />
//                                 <input
//                                   type="text"
//                                   value={searchCountry}
//                                   onChange={(e) => setSearchCountry(e.target.value)}
//                                   placeholder="Search country..."
//                                   className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
//                                 />
//                               </div>
//                             </div>
                            
//                             {/* Country List */}
//                             <div className="max-h-48 overflow-y-auto">
//                               {filteredCountries.length > 0 ? (
//                                 filteredCountries.map((country) => (
//                                   <motion.button
//                                     key={country.code}
//                                     type="button"
//                                     whileHover={{ backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
//                                     onClick={() => selectCountry(country)}
//                                     className="w-full px-3 py-2 text-left text-sm text-white hover:text-blue-400 flex items-center gap-2 border-b border-white/5 last:border-b-0"
//                                   >
//                                     <span className="text-base">{country.flag}</span>
//                                     <span className="flex-1">{country.name}</span>
//                                     <span className="text-blue-400 text-xs font-mono">{country.dialCode}</span>
//                                   </motion.button>
//                                 ))
//                               ) : (
//                                 <div className="px-3 py-4 text-center text-sm text-[#94a3b8]">
//                                   No countries found
//                                 </div>
//                               )}
//                             </div>
//                           </motion.div>
//                         )}
//                       </div>
                      
//                       {/* Phone Input */}
//                       <motion.div whileHover={{ scale: 1.01 }} className="flex-1">
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handlePhoneChange}
//                           className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                           placeholder="Phone number"
//                         />
//                       </motion.div>
//                     </div>
//                   </div>
                  
//                   {/* Service Type Dropdown */}
//                   <div className="service-selector">
//                     <label htmlFor="service" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Service Needed</label>
//                     <div className="relative">
//                       <motion.button
//                         type="button"
//                         whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
//                         onClick={() => {
//                           setShowServiceDropdown(!showServiceDropdown)
//                           setShowCountryDropdown(false)
//                         }}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm md:text-base flex items-center justify-between text-left"
//                       >
//                         <span className={formData.service ? 'text-white' : 'text-[#94a3b8]'}>
//                           {formData.service || 'Select a service...'}
//                         </span>
//                         <FiChevronDown className={`transition-transform duration-200 ${showServiceDropdown ? 'rotate-180' : ''}`} />
//                       </motion.button>
                      
//                       {/* Service Dropdown */}
//                       {showServiceDropdown && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="absolute top-full left-0 right-0 mt-1 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg z-50"
//                         >
//                           <div className="max-h-48 overflow-y-auto">
//                             {serviceOptions.map((service, index) => (
//                               <motion.button
//                                 key={index}
//                                 type="button"
//                                 whileHover={{ backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
//                                 onClick={() => selectService(service)}
//                                 className="w-full px-4 py-3 text-left text-sm text-white hover:text-blue-400 border-b border-white/10 last:border-b-0"
//                               >
//                                 {service}
//                               </motion.button>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </div>
//                   </div>
                  
//                   {/* Message Field */}
//                   <div>
//                     <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2 text-[#9ca3af]">Your Message *</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="4"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                         required
//                         placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
//                       ></textarea>
//                     </motion.div>
//                   </div>
                  
//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ 
//                       y: -3,
//                       scale: 1.02,
//                       backgroundColor: '#60a5fa'
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full px-4 md:px-6 py-3 md:py-4 bg-blue-400 text-[#020617] rounded-lg font-medium flex items-center justify-center gap-2 md:gap-3 disabled:opacity-70 font-mono"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-[#020617]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <span className="text-sm md:text-base">Send Message</span>
//                         <FiSend className="text-[#020617]" />
//                       </>
//                     )}
//                   </motion.button>
//                 </form>
//               </>
//             )}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
























// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiPhone } from 'react-icons/fi'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitSuccess, setSubmitSuccess] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500))
//       console.log('Form submitted:', formData)
//       setSubmitSuccess(true)
//       setFormData({ name: '', email: '', message: '' })
//     } catch (error) {
//       console.error('Submission error:', error)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <section id="contact" className="relative py-16 md:py-28 bg-[#020617] text-white overflow-hidden border-t border-[#1e293b]">
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
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
//         >
//           {/* Left Column - Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             >
//               <span className="text-blue-400">
//                 Let's Collaborate
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-base md:text-lg lg:text-xl text-[#9ca3af] mb-8 md:mb-10 max-w-lg font-mono"
//             >
//               Whether you have a project in mind, need technical consultation, or just want to connect, I'm always open to discussing new opportunities.
//             </motion.p>
            
//             <div className="space-y-4 md:space-y-6">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="flex items-start gap-3 md:gap-4"
//               >
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
//                   <FiMail className="text-blue-400 text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Email</h3>
//                   <a 
//                     href="mailto:yonasfsaha404@gmail.com" 
//                     className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
//                   >
//                     yonasfsaha404@gmail.com
//                   </a>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex items-start gap-3 md:gap-4"
//               >
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
//                   <FiMapPin className="text-blue-400 text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Location</h3>
//                   <p className="text-white text-sm md:text-base">Addis Ababa, Ethiopia</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="flex items-start gap-3 md:gap-4"
//               >
//                 <div className="p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 flex-shrink-0">
//                   <FiPhone className="text-blue-400 text-lg md:text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xs md:text-sm font-medium text-[#9ca3af] mb-1">Phone</h3>
//                   <a 
//                     href="tel:+251912345678" 
//                     className="text-white hover:text-blue-400 transition-colors duration-300 text-sm md:text-base"
//                   >
//                     +251 912 345 678
//                   </a>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="flex gap-3 md:gap-4 pt-2 md:pt-4"
//               >
//                 {[
//                   { icon: <FiGithub />, url: 'https://github.com', color: 'hover:text-white' },
//                   { icon: <FiLinkedin />, url: 'https://linkedin.com', color: 'hover:text-blue-400' },
//                   { icon: <FiTwitter />, url: 'https://twitter.com', color: 'hover:text-blue-400' }
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     whileHover={{ y: -3, scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-2 md:p-3 bg-white/5 rounded-lg border border-white/10 text-[#9ca3af] ${social.color} transition-all duration-300`}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
          
//           {/* Right Column - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-sky-400/5 rounded-xl p-4 md:p-6 lg:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
//           >
//             {submitSuccess ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-6 md:py-8 lg:py-12"
//               >
//                 <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-green-500/30">
//                   <svg className="w-8 h-8 md:w-10 md:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-sm md:text-base text-[#94a3b8] mb-4 md:mb-6">Thank you for reaching out. I'll get back to you soon.</p>
//                 <motion.button
//                   whileHover={{ 
//                     y: -3,
//                     scale: 1.03,
//                     backgroundColor: '#60a5fa'
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSubmitSuccess(false)}
//                   className="px-4 md:px-6 py-2 md:py-3 bg-blue-400 text-[#020617] rounded-lg font-medium font-mono"
//                 >
//                   Send Another Message
//                 </motion.button>
//               </motion.div>
//             ) : (
//               <>
//                 <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send me a message</h3>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4 md:mb-6">
//                     <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2 md:mb-3 text-[#9ca3af]">Your Name</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                         required
//                         placeholder="John Doe"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   <div className="mb-4 md:mb-6">
//                     <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2 md:mb-3 text-[#9ca3af]">Email Address</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                         required
//                         placeholder="john@example.com"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   <div className="mb-6 md:mb-8">
//                     <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2 md:mb-3 text-[#9ca3af]">Your Message</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="4"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 md:px-5 md:py-3.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400/50 text-sm md:text-base"
//                         required
//                         placeholder="Tell me about your project..."
//                       ></textarea>
//                     </motion.div>
//                   </div>
                  
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ 
//                       y: -3,
//                       scale: 1.02,
//                       backgroundColor: '#60a5fa'
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full px-4 md:px-6 py-3 md:py-4 bg-blue-400 text-[#020617] rounded-lg font-medium flex items-center justify-center gap-2 md:gap-3 disabled:opacity-70 font-mono"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-[#020617]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <span className="text-sm md:text-base">Send Message</span>
//                         <FiSend className="text-[#020617]" />
//                       </>
//                     )}
//                   </motion.button>
//                 </form>
//               </>
//             )}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



















// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiPhone } from 'react-icons/fi'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitSuccess, setSubmitSuccess] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500))
//       console.log('Form submitted:', formData)
//       setSubmitSuccess(true)
//       setFormData({ name: '', email: '', message: '' })
//     } catch (error) {
//       console.error('Submission error:', error)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <section id="contact" className="relative py-28 bg-gradient-to-b from-[#05070a] to-[#0f172a] text-white overflow-hidden border-t border-[#1e293b]">
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
//           className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//         >
//           {/* Left Column - Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-5 py-2 rounded-full bg-black/30 border border-blue-500/40 mb-6 backdrop-blur-sm"
//               whileHover={{ scale: 1.02 }}
//             >
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">CONNECT WITH ME</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
//             >
//               <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                 Let's Collaborate
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-lg"
//             >
//               Whether you have a project in mind, need technical consultation, or just want to connect, I'm always open to discussing new opportunities.
//             </motion.p>
            
//             <div className="space-y-6">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="flex items-start gap-4"
//               >
//                 <div className="p-3 bg-black/30 rounded-lg border border-[#1e293b] flex-shrink-0">
//                   <FiMail className="text-blue-400 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-[#9ca3af] mb-1">Email</h3>
//                   <a 
//                     href="mailto:yonasfsaha404@gmail.com" 
//                     className="text-white hover:text-blue-400 transition-colors duration-300"
//                   >
//                     yonasfsaha404@gmail.com
//                   </a>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex items-start gap-4"
//               >
//                 <div className="p-3 bg-black/30 rounded-lg border border-[#1e293b] flex-shrink-0">
//                   <FiMapPin className="text-indigo-400 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-[#9ca3af] mb-1">Location</h3>
//                   <p className="text-white">Addis Ababa, Ethiopia</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.7 }}
//                 className="flex items-start gap-4"
//               >
//                 <div className="p-3 bg-black/30 rounded-lg border border-[#1e293b] flex-shrink-0">
//                   <FiPhone className="text-purple-400 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-[#9ca3af] mb-1">Phone</h3>
//                   <a 
//                     href="tel:+251912345678" 
//                     className="text-white hover:text-purple-400 transition-colors duration-300"
//                   >
//                     +251 912 345 678
//                   </a>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="flex gap-4 pt-4"
//               >
//                 {[
//                   { icon: <FiGithub />, url: 'https://github.com', color: 'hover:text-white' },
//                   { icon: <FiLinkedin />, url: 'https://linkedin.com', color: 'hover:text-blue-400' },
//                   { icon: <FiTwitter />, url: 'https://twitter.com', color: 'hover:text-sky-400' }
//                 ].map((social, i) => (
//                   <motion.a
//                     key={i}
//                     whileHover={{ y: -3, scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 bg-black/30 rounded-lg border border-[#1e293b] text-[#9ca3af] ${social.color} transition-all duration-300`}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </div>
//           </motion.div>
          
//           {/* Right Column - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-[#0f172a] rounded-xl p-8 border border-[#1e293b] hover:border-blue-500/50 transition-all duration-300 shadow-xl"
//           >
//             {submitSuccess ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-12"
//               >
//                 <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
//                   <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
//                 <p className="text-[#94a3b8] mb-6">Thank you for reaching out. I'll get back to you soon.</p>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setSubmitSuccess(false)}
//                   className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium"
//                 >
//                   Send Another Message
//                 </motion.button>
//               </motion.div>
//             ) : (
//               <>
//                 <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-6">
//                     <label htmlFor="name" className="block text-sm font-medium mb-3 text-[#9ca3af]">Your Name</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3.5 rounded-lg border border-[#1e293b] bg-[#020617] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                         placeholder="John Doe"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   <div className="mb-6">
//                     <label htmlFor="email" className="block text-sm font-medium mb-3 text-[#9ca3af]">Email Address</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3.5 rounded-lg border border-[#1e293b] bg-[#020617] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                         placeholder="john@example.com"
//                       />
//                     </motion.div>
//                   </div>
                  
//                   <div className="mb-8">
//                     <label htmlFor="message" className="block text-sm font-medium mb-3 text-[#9ca3af]">Your Message</label>
//                     <motion.div whileHover={{ scale: 1.01 }}>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="5"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3.5 rounded-lg border border-[#1e293b] bg-[#020617] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                         placeholder="Tell me about your project..."
//                       ></textarea>
//                     </motion.div>
//                   </div>
                  
//                   <motion.button
//                     type="submit"
//                     disabled={isSubmitting}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium flex items-center justify-center gap-3 hover:shadow-lg transition-all disabled:opacity-70"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <span>Send Message</span>
//                         <FiSend className="text-white" />
//                       </>
//                     )}
//                   </motion.button>
//                 </form>
//               </>
//             )}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }





















// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     // Add your form submission logic here
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <section id="contact" className="relative py-28 bg-[#0d1117] text-white overflow-hidden border-t border-[#30363d]">
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
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#161b22] border border-[#3b82f6]/40 mb-6"
//             >
//               <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
//               <span className="text-sm font-medium text-[#9ca3af] tracking-wider">GET IN TOUCH</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-4xl md:text-5xl font-bold mb-6"
//             >
//               <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
//                 Let's Build Something Powerful
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-[#94a3b8] mb-8"
//             >
//               Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
//             </motion.p>
            
//             <div className="space-y-4">
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//                 className="flex items-center"
//               >
//                 <div className="p-3 bg-[#0d1117] rounded-lg border border-[#30363d] mr-4">
//                   <FiMail className="text-[#3b82f6]" size={20} />
//                 </div>
//                 <a 
//                   href="mailto:yonasfsaha404@gmail.com" 
//                   className="hover:text-[#3b82f6] transition-colors duration-300"
//                 >
//                   yonasfsaha404@gmail.com
//                 </a>
//               </motion.div>
              
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex space-x-4 mt-8"
//               >
//                 <a 
//                   href="https://github.com/yourusername" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="p-3 bg-[#0d1117] rounded-lg border border-[#30363d] hover:border-[#3b82f6]/50 transition-colors duration-300"
//                 >
//                   <FiGithub className="text-[#9ca3af] hover:text-white" size={20} />
//                 </a>
//                 <a 
//                   href="https://linkedin.com/in/yourprofile" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="p-3 bg-[#0d1117] rounded-lg border border-[#30363d] hover:border-[#3b82f6]/50 transition-colors duration-300"
//                 >
//                   <FiLinkedin className="text-[#9ca3af] hover:text-white" size={20} />
//                 </a>
//                 <a 
//                   href="https://twitter.com/yourhandle" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="p-3 bg-[#0d1117] rounded-lg border border-[#30363d] hover:border-[#3b82f6]/50 transition-colors duration-300"
//                 >
//                   <FiTwitter className="text-[#9ca3af] hover:text-white" size={20} />
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="bg-[#161b22] rounded-xl p-8 border border-[#30363d] hover:border-[#3b82f6]/50 transition-all duration-300"
//           >
//             <form onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#9ca3af]">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-[#30363d] bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#9ca3af]">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-[#30363d] bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#9ca3af]">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-[#30363d] bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
//                   required
//                 ></textarea>
//               </div>
              
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full px-6 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
//               >
//                 <span>Send Message</span>
//                 <FiSend className="text-white" />
//               </motion.button>
//             </form>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


























// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission
//     console.log('Form submitted:', formData)
//     // You can add your form submission logic here
//     // For example: API call to your backend or Formspree
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//         >
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Let's Build Something Powerful Together</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
//               Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
//             </p>
            
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <FiMail className="text-purple-500 mr-4" size={24} />
//                 <a href="mailto:yonasfsaha404@gmail.com" className="hover:underline">
//                   yonasfsaha404@gmail.com
//                 </a>
//               </div>
              
//               <div className="flex space-x-4 mt-8">
//                 <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//                   <FiGithub size={20} />
//                 </a>
//                 <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//                   <FiLinkedin size={20} />
//                 </a>
//                 <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
//                   <FiTwitter size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   required
//                 ></textarea>
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }