import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users } from 'lucide-react'

const LuxuryCreche = () => {
  const [currentClients, setCurrentClients] = useState(12)

  useEffect(() => {
    // Simulate live status updates
    const interval = setInterval(() => {
      setCurrentClients((prev) => {
        const change = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
        return Math.max(8, Math.min(20, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const galleryImages = [
    { id: 1, title: 'Play Area', description: 'Spacious play zones' },
    { id: 2, title: 'Rest Zone', description: 'Comfortable resting areas' },
    { id: 3, title: 'Outdoor Space', description: 'Safe outdoor activities' },
    { id: 4, title: 'Feeding Station', description: 'Hygienic meal times' },
  ]

  const features = [
    { icon: Shield, title: 'Safe Haven', description: '24/7 supervised care' },
    { icon: Heart, title: 'Loving Environment', description: 'Personalized attention' },
    { icon: Users, title: 'Socialization', description: 'Healthy interactions' },
  ]

  return (
    <section id="creche" className="py-20 px-4 bg-midnight-navy text-soft-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Luxury <span className="text-gradient">Crèche</span>
          </h2>
          <p className="text-lg text-soft-ivory/80 max-w-2xl mx-auto">
            A premium daycare experience where your pet enjoys a safe, engaging, and loving environment.
          </p>
        </motion.div>

        {/* Live Status Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-champagne-gold/20 to-champagne-gold/10 rounded-2xl p-8 mb-12 border border-champagne-gold/30"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Live Status</h3>
              <p className="text-soft-ivory/70">Currently Hosting</p>
            </div>
            <motion.div
              key={currentClients}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-6xl font-display font-bold text-champagne-gold"
            >
              {currentClients}
            </motion.div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold">Happy Clients</p>
              <div className="flex items-center space-x-1 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-soft-ivory/70">Live</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <Icon className="text-champagne-gold mb-4" size={32} />
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-soft-ivory/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square bg-gradient-to-br from-champagne-gold/20 to-champagne-gold/10 rounded-xl overflow-hidden border border-champagne-gold/30 group cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h4 className="text-lg font-display font-bold mb-1">{image.title}</h4>
                <p className="text-sm text-soft-ivory/70">{image.description}</p>
              </div>
              <div className="absolute inset-0 bg-champagne-gold/0 group-hover:bg-champagne-gold/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LuxuryCreche

