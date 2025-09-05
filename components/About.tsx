'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Shield,
  Tv
} from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '4', label: 'IT Subscription Tiers' },
    { icon: Award, number: '100%', label: 'Managed Services' },
    { icon: Target, number: '24/7', label: 'Expert Support' },
    { icon: TrendingUp, number: '1', label: 'coLaunchTV Solution' }
  ]

  const values = [
    {
      title: 'User-Based Pricing',
      description: 'Fair, transparent pricing based on your actual team size and needs.'
    },
    {
      title: 'Comprehensive Security',
      description: 'AI-powered protection against viruses, ransomware, phishing, and other threats.'
    },
    {
      title: 'Proactive Management',
      description: 'We monitor and maintain your systems before issues become problems.'
    },
    {
      title: 'Innovation First',
      description: 'From coLaunchTV to advanced endpoint protection, we deliver cutting-edge solutions.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>About coLaunch IT</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              IT Management That Scales With Your Business
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              coLaunch IT specialises in comprehensive IT subscription services designed to keep your business 
              running smoothly and securely. From our Ignition plan for basic IT management to our AutoPilot 
              tier with dedicated IT leadership, we have a solution for every business size.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our innovative coLaunchTV reception display system adds another dimension to our offerings, 
              helping businesses create engaging customer experiences while generating additional revenue 
              through local advertising opportunities.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore Our Plans
            </motion.button>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Service Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6" />
                  <h3 className="text-lg font-bold">IT Subscriptions</h3>
                </div>
                <p className="text-white/90 text-sm">
                  Four comprehensive tiers from Ignition to AutoPilot, each designed to meet different business needs and budgets.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <Tv className="w-6 h-6" />
                  <h3 className="text-lg font-bold">coLaunchTV</h3>
                </div>
                <p className="text-white/90 text-sm">
                  Innovative reception display system with weather, news, and advertising capabilities to enhance customer experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our Service Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Ignition - Basic IT Management',
              'Cruise - Enhanced Security & Protection',
              'Overdrive - Enterprise-Grade Security',
              'AutoPilot - Dedicated IT Leadership'
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="text-primary-600 font-semibold">{service}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
