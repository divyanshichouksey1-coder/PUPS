import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TrustSignals = () => {
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      text: 'Exceptional service! My dog Raja loves coming here. The medicated grooming has helped with his skin issues.',
      avatar: '👩',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      rating: 5,
      text: 'Best pet care in Lucknow. The crèche facility is amazing and the staff is incredibly caring.',
      avatar: '👨',
    },
    {
      id: 3,
      name: 'Anjali Patel',
      rating: 4,
      text: 'Professional grooming and excellent customer service. Highly recommend PUPS!',
      avatar: '👩',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      rating: 5,
      text: 'Adopted our beloved Bholu from here. The adoption process was smooth and the support continues.',
      avatar: '👨',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Press Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight-navy text-center mb-8">
            Press & <span className="text-gradient">Recognition</span>
          </h2>
          
          <div className="bg-gradient-to-br from-champagne-gold/10 to-champagne-gold/5 rounded-2xl p-8 border border-champagne-gold/20">
            <div className="flex items-start space-x-4">
              <Quote className="text-champagne-gold flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-display font-bold text-midnight-navy mb-2">
                  Featured in Now Lucknow
                </h3>
                <p className="text-midnight-navy/80 mb-4">
                  PUPS has been recognized by Now Lucknow for our commitment to premium pet care and our innovative approach to combining luxury services with community adoption initiatives.
                </p>
                <a
                  href="#"
                  className="text-champagne-gold font-semibold hover:underline"
                >
                  Read the Article →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-champagne-gold fill-champagne-gold" size={32} />
                <span className="text-4xl font-display font-bold text-midnight-navy">4.6</span>
              </div>
              <p className="text-midnight-navy/70">Google Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-soft-ivory rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-champagne-gold/20 flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-midnight-navy">{review.name}</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < review.rating
                              ? 'text-champagne-gold fill-champagne-gold'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-midnight-navy/80 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSignals

