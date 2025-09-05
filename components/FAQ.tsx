'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Shield, Users, Zap, HelpCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqItems = [
    {
      category: 'IT Management Services',
      icon: Users,
      questions: [
        {
          question: 'What exactly are IT management services and how do they help me?',
          answer: 'Our IT management services mean you have a dedicated team monitoring, helping, and advising on your IT - just like how you call us for Garage Hive support. We monitor your computers\' performance, carry out maintenance tasks to ensure they run optimally and last as long as possible, advise on replacements, and help sort out any IT-related issues in your business. There\'s no contract - it\'s monthly rolling, so if you don\'t like what we do, you can stop.'
        },
        {
          question: 'Do I need to sign a contract?',
          answer: 'No contracts! Just like Garage Hive, it\'s monthly rolling. If you don\'t like what we do, you can stop anytime. We believe in earning your business every month.'
        }
      ]
    },
    {
      category: 'Security & Protection',
      icon: Shield,
      questions: [
        {
          question: 'How does your protection compare to traditional antivirus like McAfee?',
          answer: 'Traditional antivirus (like McAfee) is reactive - it waits for known viruses to be identified and added to a database. Our AI-powered SentinelOne solution is proactive - it identifies and blocks both known and unknown threats in real-time. Think of McAfee like a basic burglar alarm that rings if someone breaks in, but doesn\'t stop them. SentinelOne is like having a 24/7 security guard who can spot suspicious behavior, stop the intruder, and even clean up any mess they\'ve made.'
        },
        {
          question: 'What if I have more computers than licenses?',
          answer: 'If you have 7 machines but only 1 license (like in Cruise Plan), you\'ll need additional licenses at £15 per month per machine. For 7 machines, that would be £219 total (£129 base + £90 for 6 additional licenses). We recommend one license per person for best protection.'
        },
        {
          question: 'What\'s included in the security protection?',
          answer: 'AI-powered protection against viruses, ransomware, phishing, and other cyber threats; continuous monitoring and fast response to potential threats; active monitoring of all company computers; protection from email-based attacks like spoofing and impersonation; dark web monitoring with alerts if company credentials are exposed online; regular security reviews; and a security health score to track progress.'
        }
      ]
    },
    {
      category: 'Password Management',
      icon: Zap,
      questions: [
        {
          question: 'Why is password management so important?',
          answer: 'Weak or reused passwords are one of the most common ways hackers gain access to business systems. Our secure password manager creates and stores strong, unique passwords for each team member, makes logins faster and safer across all systems, and reduces the chance of a breach caused by stolen or compromised passwords.'
        },
        {
          question: 'How many password manager licenses do I get?',
          answer: 'Cruise Plan includes 1 license, Overdrive includes 2 licenses. Additional licenses are available if needed. We recommend one license per person so everyone\'s credentials are properly secured.'
        }
      ]
    },
    {
      category: 'Pricing & Plans',
      icon: HelpCircle,
      questions: [
        {
          question: 'What happens when my team grows beyond the user limit?',
          answer: 'If your team grows to 11+ users, we\'ll automatically upgrade you to our Overdrive Plan (£249/month) which offers extra protection and greater scalability. You also have the option to start with Overdrive now if you\'d like to go straight to our top-level package.'
        },
        {
          question: 'Is pricing per user or flat rate?',
          answer: 'Pricing is flat monthly fee, not per user. Cruise Plan is £129/month covering up to 10 users, Overdrive is £249/month covering 10+ users. Additional security licenses are charged separately if you need more than what\'s included.'
        },
        {
          question: 'What\'s the difference between Cruise and Overdrive?',
          answer: 'Overdrive includes everything from Cruise, plus: up to 15 managed email signatures (vs 10), two password manager licenses (vs 1), two AI-powered threat protection licenses (vs 1), enhanced threat detection with real-time response, and deep security reviews with continuous security scoring.'
        }
      ]
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

  const categoryVariants = {
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
    <section id="faq" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Questions from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on actual conversations with businesses like yours. No jargon, just honest answers to help you make the right decision.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {faqItems.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex
                  const isOpen = openItems.includes(globalIndex)
                  
                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        </motion.div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              We're here to help. No sales pressure, just honest answers to help you make the right decision for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Get Honest Answers</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
