import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Boutique', href: '#boutique' },
    { label: 'Grooming', href: '#grooming' },
    { label: 'Crèche', href: '#creche' },
    { label: 'Adoption', href: '#adoption' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-display font-bold text-champagne-gold">
              PUPS
            </span>
            <span className={`text-sm font-body ${
              scrolled ? 'text-midnight-navy/70' : 'text-soft-ivory/80'
            }`}>
              Elite Paws
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${
                  scrolled ? 'text-midnight-navy' : 'text-soft-ivory'
                } hover:text-champagne-gold transition-colors font-medium`}
              >
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookClick}
              className="px-6 py-2 bg-champagne-gold text-midnight-navy rounded-full font-semibold hover:bg-yellow-500 transition-colors"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              scrolled ? 'text-midnight-navy' : 'text-soft-ivory'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block hover:text-champagne-gold transition-colors ${
                  scrolled ? 'text-midnight-navy' : 'text-soft-ivory'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onBookClick()
                setMobileMenuOpen(false)
              }}
              className="w-full px-6 py-2 bg-champagne-gold text-midnight-navy rounded-full font-semibold"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar

