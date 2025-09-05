'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ]

  const serviceItems = [
    { name: 'Ignition Plan', href: '#services' },
    { name: 'AutoPilot Tier', href: '#services' },
    { name: 'Custom Solutions', href: '#services' },
    { name: 'coLaunch TV', href: '#services' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/CIT.png" 
              alt="CIT Logo" 
              className="h-12 w-auto"
            />
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              coLaunch
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-300 hover:text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </motion.button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50 backdrop-blur-sm"
                  >
                    {serviceItems.map((service, index) => (
                      <motion.a
                        key={service.name}
                        href={service.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                          x: 8, 
                          backgroundColor: '#f3f4f6',
                          transition: { duration: 0.2 }
                        }}
                        className="block px-4 py-3 text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium group"
                      >
                        <span className="flex items-center justify-between">
                          {service.name}
                          <motion.span
                            className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-300 hover:text-white'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Contact Bubble */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {/* Services in Mobile */}
                <div className="space-y-2">
                  <div className="text-gray-700 font-medium">Services</div>
                  {serviceItems.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block pl-4 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
                
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Contact Bubble in Mobile */}
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 font-medium transition-colors duration-200 text-center"
                >
                  Contact
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
