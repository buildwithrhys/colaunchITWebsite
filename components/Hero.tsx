'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Shield, Users, Zap, Target, Heart } from 'lucide-react'
const Hero = () => {

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behaviour: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-800 overflow-hidden">
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0">
        {/* Base Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-800"></div>
        
        

        {/* Twinkling Starfield */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: Math.random() > 0.7 
                  ? '#ffffff' 
                  : Math.random() > 0.4 
                    ? '#e0e7ff' 
                    : '#c7d2fe'
              }}
            />
          </motion.div>
        ))}

        {/* Larger Twinkling Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`big-star-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.8, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: Math.random() > 0.6 
                  ? '#fbbf24' 
                  : Math.random() > 0.3 
                    ? '#ffffff' 
                    : '#dbeafe'
              }}
            />
          </motion.div>
        ))}



        {/* Floating Astronaut with Umbilical Cord */}
        <motion.div
          className="absolute top-1/4 right-1/4 z-20"
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{ 
            x: [0, 20, -15, 10, 0],
            y: [0, -30, 20, -10, 0],
            rotate: [0, 5, -3, 2, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Umbilical Cord */}
          <motion.svg
            width="200"
            height="300"
            viewBox="0 0 200 300"
            className="absolute -top-40 -left-20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <defs>
              <linearGradient id="cordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5b2fd1" />
                <stop offset="50%" stopColor="#6320ee" />
                <stop offset="100%" stopColor="#5b2fd1" />
              </linearGradient>
            </defs>
            <motion.path
              d="M100,0 Q120,50 100,100 Q80,150 100,200 Q120,250 100,300"
              stroke="url(#cordGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Cord attachment points */}
            <circle cx="100" cy="0" r="3" fill="#6320ee" />
            <circle cx="100" cy="300" r="3" fill="#6320ee" />
          </motion.svg>

          {/* Astronaut */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Astronaut Helmet */}
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full border-4 border-white shadow-lg relative">
              {/* Helmet Visor */}
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full border border-white/50"></div>
              {/* Helmet Reflection */}
              <div className="absolute top-2 left-3 w-4 h-2 bg-white/40 rounded-full blur-sm"></div>
            </div>
            
            {/* Astronaut Body */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-lg">
              {/* Control Panel */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded border border-white/30">
                <div className="flex justify-center items-center h-full">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Arms */}
            <div className="absolute top-14 -left-2 w-3 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full transform rotate-12"></div>
            <div className="absolute top-14 -right-2 w-3 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full transform -rotate-12"></div>
            
            {/* Legs */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full ml-2"></div>
            
            {/* Jetpack */}
            <div className="absolute top-16 -right-4 w-6 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-lg">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-full">
                <motion.div
                  className="w-full h-full bg-gradient-to-t from-orange-400 to-yellow-400 rounded-full"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>
            
            {/* Floating Stars around Astronaut */}
            <motion.div
              className="absolute -top-8 -left-8 w-2 h-2 bg-white rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            ></motion.div>
            <motion.div
              className="absolute -top-4 -right-6 w-1 h-1 bg-yellow-300 rounded-full"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.6, 1.4, 0.6]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-6 -left-4 w-1.5 h-1.5 bg-blue-300 rounded-full"
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [0.7, 1.3, 0.7]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <motion.span 
              className="block text-2xl md:text-3xl lg:text-4xl font-medium text-primary-300 mb-2 tracking-wider"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WELCOME TO
            </motion.span>
            <motion.span 
              className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              PERFORMANCE
            </motion.span>
            <motion.span 
              className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              ON PURPOSE
            </motion.span>
            <motion.span 
              className="block text-xl md:text-2xl lg:text-3xl font-medium text-yellow-100 italic mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Save Money, Same Excellence
            </motion.span>
          </motion.h1>

          {/* Enhanced Gradient separator line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mx-auto mb-8"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
            <motion.div
              className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"
              animate={{ 
                boxShadow: [
                  "0 0 0px rgba(91, 47, 209, 0)",
                  "0 0 20px rgba(91, 47, 209, 0.5)",
                  "0 0 0px rgba(91, 47, 209, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            ></motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            IT should be easy and safe, we keep it that way. 
            With full transparency from day one, you'll know exactly what you're getting and when you're getting it.
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4 },
              y: { duration: 0.8, delay: 0.4 },
              textShadow: { duration: 3, repeat: Infinity, delay: 1 }
            }}
            className="text-lg md:text-xl lg:text-2xl font-medium text-primary-200 italic mb-8"
          >
            Competence & Protection
            <br />
            Your company deserves both.
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(91, 47, 209, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 overflow-hidden"
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <Shield className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Busy? Have us call you!</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </motion.button>
            
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            {[
              { 
                icon: Target, 
                title: 'Performance on Purpose', 
                description: 'Every action has intention. Every solution has purpose.' 
              },
              { 
                icon: Heart, 
                title: 'Nurturing & Safe', 
                description: 'IT shouldn\'t intimidate. We make technology feel welcoming.' 
              },
              { 
                icon: Zap, 
                title: 'Full Transparency', 
                description: 'You\'ll know exactly what we do for you from day one.' 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold mb-2">{feature.title}</div>
                <div className="text-white/80 text-sm">{feature.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '100%', label: 'Transparent Process' },
              { number: '24/7', label: 'Monitoring Support' },
              { number: '4', label: 'Purpose-Driven Plans' },
              { number: '∞', label: 'Peace of Mind' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToServices}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white/80 hover:text-white transition-colors duration-200"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <div className="text-sm mt-2">Explore our services</div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
