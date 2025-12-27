import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Dialog } from '@headlessui/react'

const BookingWizard = ({ onClose }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    petName: '',
    petType: '',
    petAge: '',
    ownerName: '',
    phone: '',
    email: '',
  })

  const services = [
    { id: 'grooming', name: 'Professional Grooming', price: '₹1,500 - ₹2,500' },
    { id: 'medicated-grooming', name: 'Medicated Grooming', price: '₹2,000 - ₹3,000' },
    { id: 'clinic', name: 'Veterinary Clinic Visit', price: '₹500 - ₹1,500' },
    { id: 'creche', name: 'Daycare (Crèche)', price: '₹800 - ₹1,200/day' },
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 1 && !formData.service) return
    if (step === 2 && (!formData.date || !formData.time)) return
    if (step < 3) setStep(step + 1)
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log('Booking submitted:', formData)
    alert('Booking request submitted! We will contact you shortly.')
    onClose()
  }

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-midnight-navy to-midnight-navy/90 p-6 flex items-center justify-between">
            <Dialog.Title className="text-2xl font-display font-bold text-soft-ivory">
              Book Your Appointment
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-soft-ivory hover:text-champagne-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="px-6 py-4 bg-soft-ivory">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s
                        ? 'bg-champagne-gold text-midnight-navy'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > s ? 'bg-champagne-gold' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-midnight-navy/70">
              <span>Service</span>
              <span>Date & Time</span>
              <span>Pet Details</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-display font-bold text-midnight-navy mb-6 flex items-center">
                    <Calendar className="mr-2 text-champagne-gold" size={24} />
                    Select Service
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleInputChange('service', service.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.service === service.id
                            ? 'border-champagne-gold bg-champagne-gold/10'
                            : 'border-gray-200 hover:border-champagne-gold/50'
                        }`}
                      >
                        <div className="font-semibold text-midnight-navy mb-1">
                          {service.name}
                        </div>
                        <div className="text-sm text-champagne-gold">{service.price}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-display font-bold text-midnight-navy mb-6 flex items-center">
                    <Clock className="mr-2 text-champagne-gold" size={24} />
                    Select Date & Time
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-midnight-navy mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-midnight-navy mb-2">
                      Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleInputChange('time', slot)}
                          className={`py-2 px-4 rounded-lg border-2 transition-all ${
                            formData.time === slot
                              ? 'border-champagne-gold bg-champagne-gold/10 text-champagne-gold font-semibold'
                              : 'border-gray-200 hover:border-champagne-gold/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Pet Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-display font-bold text-midnight-navy mb-6 flex items-center">
                    <User className="mr-2 text-champagne-gold" size={24} />
                    Pet & Owner Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-midnight-navy mb-2">
                        Pet Name *
                      </label>
                      <input
                        type="text"
                        value={formData.petName}
                        onChange={(e) => handleInputChange('petName', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-midnight-navy mb-2">
                        Pet Type *
                      </label>
                      <input
                        type="text"
                        value={formData.petType}
                        onChange={(e) => handleInputChange('petType', e.target.value)}
                        placeholder="e.g., Dog, Cat"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-midnight-navy mb-2">
                        Pet Age
                      </label>
                      <input
                        type="text"
                        value={formData.petAge}
                        onChange={(e) => handleInputChange('petAge', e.target.value)}
                        placeholder="e.g., 2 years"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-midnight-navy mb-2">
                        Owner Name *
                      </label>
                      <input
                        type="text"
                        value={formData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-midnight-navy mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-midnight-navy mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-champagne-gold focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-soft-ivory flex items-center justify-between">
            <button
              onClick={step > 1 ? () => setStep(step - 1) : onClose}
              className="flex items-center space-x-2 px-6 py-2 text-midnight-navy hover:text-champagne-gold transition-colors"
            >
              <ArrowLeft size={20} />
              <span>{step > 1 ? 'Back' : 'Cancel'}</span>
            </button>

            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2 bg-champagne-gold text-midnight-navy rounded-full font-semibold hover:bg-yellow-500 transition-colors"
              >
                <span>Next</span>
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-midnight-navy text-soft-ivory rounded-full font-semibold hover:bg-midnight-navy/90 transition-colors"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default BookingWizard

