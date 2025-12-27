import { Home, ShoppingBag, Calendar, Phone } from 'lucide-react'

const MobileNav = ({ onBookClick }) => {
  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: ShoppingBag, label: 'Shop', href: '#boutique' },
    { icon: Calendar, label: 'Book', action: onBookClick },
    { icon: Phone, label: 'Call', href: 'tel:+917705064481' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          if (item.action) {
            return (
              <button
                key={item.label}
                onClick={item.action}
                className="flex flex-col items-center justify-center space-y-1 text-midnight-navy hover:text-champagne-gold transition-colors"
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          }
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center space-y-1 text-midnight-navy hover:text-champagne-gold transition-colors"
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNav

