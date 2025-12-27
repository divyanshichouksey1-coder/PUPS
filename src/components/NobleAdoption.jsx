import { motion } from 'framer-motion'
import { CheckCircle, Heart } from 'lucide-react'

const NobleAdoption = () => {
  const adoptionDogs = [
    {
      id: 1,
      name: 'Raja',
      age: '2 years',
      breed: 'Desi Mix',
      badges: ['Potty Trained', 'Friendly', 'Vaccinated'],
      description: 'Loving and energetic companion',
    },
    {
      id: 2,
      name: 'Lakshmi',
      age: '1.5 years',
      breed: 'Desi Mix',
      badges: ['Potty Trained', 'Vaccinated'],
      description: 'Gentle and calm nature',
    },
    {
      id: 3,
      name: 'Bholu',
      age: '3 years',
      breed: 'Desi Mix',
      badges: ['Potty Trained', 'Friendly', 'Vaccinated'],
      description: 'Playful and loyal friend',
    },
    {
      id: 4,
      name: 'Chutki',
      age: '1 year',
      breed: 'Desi Mix',
      badges: ['Friendly', 'Vaccinated'],
      description: 'Energetic and smart',
    },
  ]

  const benefits = [
    'Naturally friendly and adaptable',
    'Low maintenance grooming needs',
    'High intelligence and trainability',
    'Strong immune system',
    'Unmatched loyalty and affection',
    'Perfect for Indian climate',
  ]

  return (
    <section id="adoption" className="py-20 px-4 bg-gradient-to-b from-white to-soft-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Narrative Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight-navy mb-6">
            The <span className="text-gradient">Desi Excellence</span> Initiative
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-midnight-navy/80">
            <p>
              At PUPS, we celebrate the extraordinary qualities of Desi variety canines. These remarkable companions represent the <strong className="text-midnight-navy">Premium Choice</strong> for pet parents who value intelligence, adaptability, and unconditional love.
            </p>
            <p>
              Desi dogs are not just pets—they are <strong className="text-midnight-navy">heritage companions</strong> with a natural resilience, friendly disposition, and low-maintenance care requirements that make them perfect for modern families.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-md"
            >
              <CheckCircle className="text-champagne-gold flex-shrink-0 mt-1" size={24} />
              <p className="text-midnight-navy/80 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Adoption Portal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold text-midnight-navy text-center mb-8">
            Available for Adoption
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionDogs.map((dog, idx) => (
              <motion.div
                key={dog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              >
                {/* Dog Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-champagne-gold/20 to-champagne-gold/10 flex items-center justify-center">
                  <Heart className="text-champagne-gold" size={48} />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-display font-bold text-midnight-navy">{dog.name}</h4>
                    <span className="text-sm text-midnight-navy/60">{dog.age}</span>
                  </div>
                  
                  <p className="text-sm text-champagne-gold font-semibold mb-3">{dog.breed}</p>
                  <p className="text-sm text-midnight-navy/70 mb-4">{dog.description}</p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dog.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-champagne-gold/10 text-champagne-gold text-xs font-semibold rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 bg-midnight-navy text-soft-ivory rounded-lg font-semibold hover:bg-midnight-navy/90 transition-colors">
                    Adopt {dog.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NobleAdoption

