import React from 'react'

function CTA() {
  return (
    <div className="w-full">
      <div className="text-center md:text-left">
        <h5 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-4">
          Bring innovation to your classroom!
        </h5>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 mb-6 sm:mb-8">
          Meet national and EU standards with high-quality, budget-friendly coding and digital
          literacy programs. Empower your students with essential future skills.
        </p>
        
        {/* CTA Button */}
        <div className="text-center md:text-left">
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base md:text-lg w-full sm:w-auto">
            Schedule a consultation today
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA