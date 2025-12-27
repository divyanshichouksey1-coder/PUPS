import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X, MapPin } from 'lucide-react'

const ContactConcierge = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Floating Contact Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-24 md:bottom-8 right-8 z-40 w-16 h-16 bg-champagne-gold rounded-full shadow-2xl flex items-center justify-center hover:bg-yellow-500 transition-colors"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="text-midnight-navy" size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Phone className="text-midnight-navy" size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Expanded Contact Options */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-32 md:bottom-24 right-8 z-40 bg-white rounded-2xl shadow-2xl p-6 min-w-[280px]"
          >
            <h3 className="text-lg font-display font-bold text-midnight-navy mb-4">
              Contact Concierge
            </h3>
            
            <div className="space-y-3">
              <a
                href="tel:+917705064481"
                className="flex items-center space-x-3 p-3 bg-soft-ivory rounded-lg hover:bg-champagne-gold/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-champagne-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-midnight-navy" size={20} />
                </div>
                <div>
                  <div className="text-sm text-midnight-navy/70">Call Us</div>
                  <div className="font-semibold text-midnight-navy">+91 77050 64481</div>
                </div>
              </a>

              <a
                href="https://wa.me/917705064481"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-soft-ivory rounded-lg hover:bg-green-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-sm text-midnight-navy/70">WhatsApp</div>
                  <div className="font-semibold text-midnight-navy">Chat with us</div>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-3 bg-soft-ivory rounded-lg">
                <div className="w-10 h-10 bg-midnight-navy/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-midnight-navy" size={20} />
                </div>
                <div>
                  <div className="text-sm text-midnight-navy/70">Location</div>
                  <div className="font-semibold text-midnight-navy text-sm">Gomti Nagar, Lucknow</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Section */}
      <section className="py-20 px-4 bg-midnight-navy">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-soft-ivory mb-4">
              Visit Our <span className="text-gradient">Location</span>
            </h2>
            <p className="text-lg text-soft-ivory/80">
              Gomti Nagar, Lucknow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d80.9496!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNTguNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PUPS Location - Gomti Nagar, Lucknow"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ContactConcierge

