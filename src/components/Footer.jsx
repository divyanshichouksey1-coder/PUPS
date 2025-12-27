import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-soft-ivory py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-champagne-gold mb-4">
              PUPS
            </h3>
            <p className="text-soft-ivory/70 text-sm">
              Elite Paws - The Gold Standard of Pet Care in Lucknow
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-soft-ivory/70">
              <li><a href="#grooming" className="hover:text-champagne-gold transition-colors">Professional Grooming</a></li>
              <li><a href="#creche" className="hover:text-champagne-gold transition-colors">Luxury Crèche</a></li>
              <li><a href="#boutique" className="hover:text-champagne-gold transition-colors">Pet Boutique</a></li>
              <li><a href="#adoption" className="hover:text-champagne-gold transition-colors">Adoption</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-soft-ivory/70">
              <li>Gomti Nagar, Lucknow</li>
              <li><a href="tel:+917705064481" className="hover:text-champagne-gold transition-colors">+91 77050 64481</a></li>
              <li><a href="https://wa.me/917705064481" target="_blank" rel="noopener noreferrer" className="hover:text-champagne-gold transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-sm text-soft-ivory/70 mb-4">
              Stay connected for updates and pet care tips
            </p>
            <div className="flex space-x-4">
              {/* Social media links can be added here */}
            </div>
          </div>
        </div>

        <div className="border-t border-soft-ivory/20 pt-8 text-center text-sm text-soft-ivory/70">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span>Made with</span>
            <Heart className="text-champagne-gold fill-champagne-gold" size={16} />
            <span>for pets in Lucknow</span>
          </div>
          <p>&copy; {new Date().getFullYear()} PUPS - Elite Paws. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

