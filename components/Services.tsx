'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  BarChart3,
  ArrowRight,
  Zap,
  Users,
  Monitor,
  Tv,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const subscriptionTiers = [
    {
      name: 'Ignition',
      description: 'Perfect for businesses that want robust, no-fuss IT management.',
      price: '£65/month',
      userLimit: 'Covers up to 5 users',
      features: [
        'Full access to all our IT management services',
        'Centrally managed email signature system (up to 5 managed signatures)',
        'Includes one secure password manager app for safer logins',
        'Fast, friendly support from our expert team'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Cruise',
      description: 'Includes everything from Ignition, with powerful endpoint protection.',
      price: '£129/month',
      userLimit: 'Covers up to 10 users',
      features: [
        'Full access to all our IT management services',
        'Up to 10 managed email signatures with consistent branding',
        'Includes one secure password manager app for safer logins',
        'Covers one user and their device with full threat protection',
        'AI-powered protection against viruses, ransomware, phishing',
        'Dark web monitoring with alerts',
        'Regular security reviews and compliance monitoring'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Overdrive',
      description: 'Top-tier plan with enterprise-grade security and intelligent monitoring.',
      price: '£249/month',
      userLimit: 'Covers 10+ users',
      features: [
        'Full access to all our IT management services',
        'Up to 15 managed email signatures for team-wide branding',
        'Includes two secure password manager apps',
        'Covers two users and their devices with full protection',
        'AI-powered protection against all threats',
        'Deep visibility into device activity and risks',
        'Real-time threat response and monitoring',
        'Security posture scoring and risk management'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'AutoPilot',
      description: 'Dedicated IT leadership and strategic planning for your business.',
      price: 'POA',
      userLimit: 'Per user based',
      features: [
        'Full access to all our IT management services',
        'Up to 15 managed email signatures for team-wide branding',
        'Includes two secure password manager apps',
        'Covers two users and their devices with full protection',
        'AI-powered protection against all threats',
        'Strategic IT leadership tailored to your business size',
        'Proactive support, system optimisation, and vendor management',
        'Fully managed IT planning, delivery, and improvement'
      ],
      color: 'from-red-500 to-red-600'
    }
  ]

  const specialProducts = [
    {
      icon: Tv,
      title: 'coLaunchTV',
      description: 'Innovative reception-based display system for businesses.',
      features: [
        'Company-branded webpage display',
        'Real-time weather forecast (next 8 days)',
        'Sky News integration',
        'Promotional banner for scrolling advertisements',
        'Custom space for business advertisements',
        'Revenue opportunity through local business ads',
        'TV not included - webpage only'
      ],
      demoLink: 'https://demo.colaunch.tv'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            <Zap className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Subscriptions & Solutions
          </h2>
                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Choose the perfect IT management plan for your business. Plans are automatically tiered based on user count - 
             any staff member with a company login counts as a user. <strong>You must upgrade to the next tier when you exceed the user limit.</strong>
           </p>
        </motion.div>

        {/* Subscription Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            IT Subscription Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subscriptionTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
                
                {/* Content */}
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                                     <div className="text-lg font-bold text-primary-600 mb-2">{tier.price}</div>
                   <div className="text-sm text-gray-500 mb-2">{tier.userLimit}</div>
                   <div className="text-xs text-gray-500 mb-6">Plan will be upgraded automatically once you exceed this limit.</div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Special Products
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {specialProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Demo Link */}
                    <motion.a
                      href={product.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                    >
                      <Monitor className="w-5 h-5" />
                      <span>View Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Definition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
        >
                     <h3 className="text-2xl font-bold mb-4">Important: User Limits Are Mandatory</h3>
           <p className="text-white/90 mb-6 max-w-2xl mx-auto">
             <strong>You must upgrade to the next tier when you exceed the user limit.</strong> For example, if you have 6 users, 
             you must be on the Cruise plan (£129/month), not Ignition (£65/month).
           </p>
           <h4 className="text-lg font-semibold mb-4">What Counts as a User?</h4>
           <p className="text-white/90 mb-6 max-w-2xl mx-auto">
             Any staff member who has a company login — for example, to access email, shared drives, or log into a work computer.
           </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Email access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-5 h-5" />
              <span>Shared drives</span>
            </div>
            <div className="flex items-center space-x-2">
              <Monitor className="w-5 h-5" />
              <span>Work computer login</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your IT Management?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss which subscription plan is perfect for your business and how we can help you achieve seamless IT operations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
