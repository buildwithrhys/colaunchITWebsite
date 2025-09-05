'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown, Shield, Users, Zap, Target, Heart } from 'lucide-react'

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 via-primary-800 to-primary-950 overflow-hidden">
      {/* Cyber-spacey Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Cyber grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Circuit board graphics */}
        <div className="absolute top-20 right-20 opacity-20">
          <svg width="200" height="150" viewBox="0 0 200 150" className="text-primary-400">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5b2fd1" />
                <stop offset="100%" stopColor="#6320ee" />
              </linearGradient>
            </defs>
            <path d="M20,20 L80,20 L80,40 L120,40 L120,60 L160,60 L160,80 L180,80" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
            <path d="M40,60 L100,60 L100,100 L140,100 L140,120 L180,120" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="3" fill="url(#circuitGradient)" />
            <circle cx="80" cy="20" r="3" fill="url(#circuitGradient)" />
            <circle cx="120" cy="40" r="3" fill="url(#circuitGradient)" />
            <circle cx="160" cy="60" r="3" fill="url(#circuitGradient)" />
            <circle cx="180" cy="80" r="3" fill="url(#circuitGradient)" />
            <circle cx="40" cy="60" r="3" fill="url(#circuitGradient)" />
            <circle cx="100" cy="100" r="3" fill="url(#circuitGradient)" />
            <circle cx="140" cy="120" r="3" fill="url(#circuitGradient)" />
            <circle cx="180" cy="120" r="3" fill="url(#circuitGradient)" />
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-16 opacity-15">
          <svg width="150" height="120" viewBox="0 0 150 120" className="text-primary-300">
            <defs>
              <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#602ca6" />
                <stop offset="100%" stopColor="#5b2fd1" />
              </linearGradient>
            </defs>
            <path d="M10,30 L60,30 L60,50 L100,50 L100,70 L130,70" stroke="url(#circuitGradient2)" strokeWidth="2" fill="none" />
            <path d="M30,70 L80,70 L80,90 L120,90" stroke="url(#circuitGradient2)" strokeWidth="2" fill="none" />
            <circle cx="10" cy="30" r="2" fill="url(#circuitGradient2)" />
            <circle cx="60" cy="30" r="2" fill="url(#circuitGradient2)" />
            <circle cx="100" cy="50" r="2" fill="url(#circuitGradient2)" />
            <circle cx="130" cy="70" r="2" fill="url(#circuitGradient2)" />
            <circle cx="30" cy="70" r="2" fill="url(#circuitGradient2)" />
            <circle cx="80" cy="90" r="2" fill="url(#circuitGradient2)" />
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-300 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <div className="w-32 h-32 border border-primary-400 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 opacity-15">
          <div className="w-24 h-24 border-2 border-primary-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Abstract wavy lines */}
        <div className="absolute top-1/2 left-1/6 opacity-20">
          <svg width="100" height="60" viewBox="0 0 100 60" className="text-primary-400">
            <path d="M0,30 Q25,10 50,30 T100,30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M0,40 Q25,20 50,40 T100,40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        </div>
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
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-primary-300 mb-2 tracking-wider">
              WELCOME TO
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              PERFORMANCE
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
              ON PURPOSE
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-primary-200 italic">
              Save Money, Same Excellence
            </span>
          </motion.h1>

          {/* Gradient separator line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"
          ></motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We make IT feel safe, not scary. Full transparency from day one - you'll know exactly what we do for you. 
            Like Apple, we're competent. Like family, we're nurturing. Your business deserves both.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <Shield className="w-5 h-5" />
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-primary-400 hover:border-primary-300 text-primary-300 hover:text-primary-200 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3"
            >
              <Play className="w-5 h-5" />
              <span>VIEW DEMO</span>
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
              { number: '24/7', label: 'Nurturing Support' },
              { number: '4', label: 'Purpose-Driven Plans' },
              { number: '∞', label: 'Peace of Mind' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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
