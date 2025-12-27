import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import HeroSection from './components/HeroSection'
import BoutiqueGrid from './components/BoutiqueGrid'
import GroomingSuite from './components/GroomingSuite'
import LuxuryCreche from './components/LuxuryCreche'
import NobleAdoption from './components/NobleAdoption'
import BookingWizard from './components/BookingWizard'
import TrustSignals from './components/TrustSignals'
import ContactConcierge from './components/ContactConcierge'
import Footer from './components/Footer'

function App() {
  const [showBooking, setShowBooking] = useState(false)

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar onBookClick={() => setShowBooking(true)} />
      <HeroSection onBookClick={() => setShowBooking(true)} />
      <BoutiqueGrid />
      <GroomingSuite />
      <LuxuryCreche />
      <NobleAdoption />
      <TrustSignals />
      <Footer />
      <ContactConcierge />
      <MobileNav onBookClick={() => setShowBooking(true)} />
      
      {showBooking && (
        <BookingWizard onClose={() => setShowBooking(false)} />
      )}
    </div>
  )
}

export default App

