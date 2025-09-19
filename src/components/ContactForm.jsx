import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaUser, FaBuilding, FaPhone, FaPaperPlane } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    organization: '',
    query: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not properly configured')
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          contact: formData.contact,
          organization: formData.organization,
          message: formData.query,
          to_email: 'gmalviya3210@gmail.com', // Your email to receive messages
        },
        publicKey
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          contact: '',
          email: '',
          organization: '',
          query: ''
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      
      // Check if it's a template ID error
      if (error.text && error.text.includes('template ID not found')) {
        setSubmitStatus('template_error')
      } else {
        setSubmitStatus('error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16">
      <div className="mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-1 w-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full"></div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full"></div>
        </div>
        <p className="text-zinc-400 text-center max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                  <FaUser className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact" className="block text-sm font-medium text-zinc-300">
                  <FaPhone className="inline mr-2" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                  <FaEnvelope className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-medium text-zinc-300">
                  <FaBuilding className="inline mr-2" />
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="Your company or organization"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="query" className="block text-sm font-medium text-zinc-300">
                <FaPaperPlane className="inline mr-2" />
                Message *
              </label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project, idea, or any questions you have..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-300">
                <p className="text-center">Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300">
                <p className="text-center">Sorry, there was an error sending your message. Please try again or contact me directly.</p>
              </div>
            )}

            {submitStatus === 'template_error' && (
              <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg text-yellow-300">
                <p className="text-center mb-2">EmailJS template not configured. Please contact me directly:</p>
                <p className="text-center">
                  <a href="mailto:gmalviya3210@gmail.com" className="text-yellow-200 hover:text-yellow-100 underline">
                    gmalviya3210@gmail.com
                  </a>
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <FaPaperPlane />
                  Send Message
                </div>
              )}
            </button>
          </form>
        </div>

        

      </motion.div>
    </section>
  )
}

export default ContactForm
