'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechFlow Solutions',
      rating: 5,
      content: 'coLaunch IT transformed our entire business operations. Their custom software solution increased our efficiency by 300% and their team was incredibly professional throughout the entire process.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      company: 'InnovateCorp',
      rating: 5,
      content: 'The cloud migration project was executed flawlessly. coLaunch IT\'s expertise in AWS and their attention to detail ensured zero downtime during the transition.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director',
      company: 'Global Retail Inc.',
      rating: 5,
      content: 'Working with coLaunch IT has been a game-changer for our company. Their cybersecurity solutions gave us peace of mind and their ongoing support is exceptional.',
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      position: 'Founder',
      company: 'StartupXYZ',
      rating: 5,
      content: 'As a startup, we needed a partner who could scale with us. coLaunch IT delivered a solution that grew with our business and their consulting helped us make the right technology decisions.',
      avatar: 'DT'
    },
    {
      name: 'Lisa Wang',
      position: 'IT Manager',
      company: 'Healthcare Plus',
      rating: 5,
      content: 'The data analytics platform they built for us has revolutionized how we make decisions. The insights we\'re getting are invaluable and the ROI has been incredible.',
      avatar: 'LW'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with coLaunch IT.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '99%', label: 'Client Satisfaction Rate' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '500+', label: 'Happy Clients' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
