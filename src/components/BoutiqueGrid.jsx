import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

const BoutiqueGrid = () => {
  const categories = [
    {
      id: 'food',
      title: 'Premium Nutrition',
      description: 'Curated selection of high-quality pet food',
      image: '🍖',
      products: ['Organic Dry Food', 'Grain-Free Options', 'Puppy Formula', 'Senior Care'],
    },
    {
      id: 'toys',
      title: 'Luxury Toys',
      description: 'Engaging toys for mental stimulation',
      image: '🎾',
      products: ['Interactive Puzzles', 'Plush Companions', 'Training Toys', 'Outdoor Play'],
    },
    {
      id: 'meds',
      title: 'Health & Wellness',
      description: 'Vet-approved supplements and medications',
      image: '💊',
      products: ['Vitamins', 'Flea Prevention', 'Dental Care', 'Joint Support'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="boutique" className="py-20 px-4 bg-soft-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight-navy mb-4">
            The <span className="text-gradient">Boutique</span>
          </h2>
          <p className="text-lg text-midnight-navy/70 max-w-2xl mx-auto">
            Moderately Priced Luxury. Premium supplies curated for your pet's well-being.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-champagne-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="text-6xl mb-4">{category.image}</div>
            <h3 className="text-2xl font-display font-bold text-midnight-navy mb-2">
              {category.title}
            </h3>
            <p className="text-midnight-navy/70 mb-6">{category.description}</p>
            
            <ul className="space-y-2 mb-6">
              {category.products.map((product, idx) => (
                <li key={idx} className="flex items-center text-sm text-midnight-navy/80">
                  <span className="w-1.5 h-1.5 bg-champagne-gold rounded-full mr-2" />
                  {product}
                </li>
              ))}
            </ul>

            <button className="w-full py-3 bg-midnight-navy text-soft-ivory rounded-lg font-semibold hover:bg-midnight-navy/90 transition-colors flex items-center justify-center space-x-2">
              <ShoppingBag size={18} />
              <span>Explore Collection</span>
            </button>
          </div>
        </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BoutiqueGrid

