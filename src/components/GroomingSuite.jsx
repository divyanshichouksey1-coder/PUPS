import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const GroomingSuite = () => {
  const comparisonData = {
    standard: {
      bath: 'Standard Shampoo',
      drying: 'Air Dry',
      styling: 'Basic Trim',
      medications: 'Not Included',
      vetConsultation: 'No',
      price: '₹800 - ₹1,200',
    },
    medicated: {
      bath: 'Medicated Shampoo',
      drying: 'Professional Dryer',
      styling: 'Expert Styling',
      medications: 'Vet-Prescribed',
      vetConsultation: 'Yes',
      price: '₹1,500 - ₹2,500',
    },
  }

  const features = [
    'Skin Condition Treatment',
    'Flea & Tick Prevention',
    'Allergy Management',
    'Professional Grooming Tools',
    'Post-Grooming Care Instructions',
  ]

  return (
    <section id="grooming" className="py-20 px-4 bg-gradient-to-b from-soft-ivory to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-champagne-gold mr-2" size={32} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight-navy">
              Professional <span className="text-gradient">Grooming Suite</span>
            </h2>
          </div>
          <p className="text-lg text-midnight-navy/70 max-w-2xl mx-auto">
            Medicated & Vet-Prescribed grooming sessions for your pet's optimal health and appearance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Treatment Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-midnight-navy to-midnight-navy/90 p-6">
              <h3 className="text-2xl font-display font-bold text-soft-ivory text-center">
                Treatment Comparison
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-soft-ivory">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-midnight-navy">Service</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-midnight-navy">Standard</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-champagne-gold bg-champagne-gold/10">Medicated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.keys(comparisonData.standard).map((key) => (
                    <tr key={key} className="hover:bg-soft-ivory/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-midnight-navy capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-midnight-navy/70">
                        {comparisonData.standard[key]}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-champagne-gold font-semibold bg-champagne-gold/5">
                        {comparisonData.medicated[key]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-display font-bold text-midnight-navy mb-6">
                Medicated Grooming Benefits
              </h3>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="text-champagne-gold" size={20} />
                    </div>
                    <span className="text-midnight-navy/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-champagne-gold to-yellow-500 rounded-2xl p-8 text-center"
            >
              <p className="text-midnight-navy font-semibold text-lg mb-2">
                Book Your Pet's Spa Day
              </p>
              <p className="text-midnight-navy/80 text-sm">
                Our expert groomers are ready to provide the premium care your pet deserves.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GroomingSuite

