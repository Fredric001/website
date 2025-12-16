import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Optional: install lucide-react for icons

const TestimonialCard = ({ name, role, color, starsColor, children }) => {
  const bgColors = {
    yellow: 'bg-[#fbfde8]',
    blue: 'bg-[#e8f7ff]',
    pink: 'bg-[#fdeaf1]'
  }

  const starColors = {
    green: 'text-[#9cc800]',
    blue: 'text-[#00a8e8]',
    pink: 'text-[#b00059]'
  }

  return (
    <div className={`${bgColors[color]} h-full rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
          color === 'yellow' ? 'bg-[#e6b400]' :
          color === 'blue' ? 'bg-[#00a8e8]' :
          'bg-[#b00059]'
        }`}>
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-[#003b5c] text-lg md:text-xl font-bold">{name}</h4>
          <span className="text-[#003b5c] text-sm md:text-base opacity-80">{role}</span>
        </div>
      </div>
      
      <div className={`${starColors[starsColor]} text-xl md:text-2xl mb-6`}>
        ★★★★★
      </div>
      
      <p className="text-[#003b5c] text-sm md:text-base leading-relaxed md:leading-loose">
        {children}
      </p>
      
      <div className="mt-6 pt-4 border-t border-gray-200 border-opacity-30">
        <div className="text-xs text-gray-500">Verified Parent</div>
      </div>
    </div>
  )
}

function Digitization() {
  const testimonials = [
    {
      id: 1,
      name: 'Mariana',
      role: 'Mom of 1',
      color: 'yellow',
      starsColor: 'green',
      content: "Children can definitely learn the basics of IT and programming, even if they don't plan to pursue long-term. Since there is no IT education at this age (8 years old) in school, it is beneficial. Regardless of their future interests, this knowledge will only enhance their capabilities. With the help of programming, they will be able to succeed more easily in many areas of life."
    },
    {
      id: 2,
      name: 'Diego',
      role: 'Dad of 3',
      color: 'blue',
      starsColor: 'blue',
      content: "If we want to spark an elementary school child's interest in programming, I can't think of a better format than what Logiscool offers. Additionally, the development environment is appealing."
    },
    {
      id: 3,
      name: 'Isabella',
      role: 'Student, grade 6',
      color: 'pink',
      starsColor: 'pink',
      content: "It's not always about doing only what's expected; we can let our imagination run wild a bit too. I've always loved that. 😊"
    },
    {
      id: 4,
      name: 'Robert',
      role: 'Tech Lead',
      color: 'yellow',
      starsColor: 'green',
      content: "As a professional developer, I'm impressed with how Logiscool introduces complex concepts in an accessible way for kids. My son went from playing games to creating them!"
    },
    {
      id: 5,
      name: 'Sophia',
      role: 'Teacher',
      color: 'blue',
      starsColor: 'blue',
      content: "The curriculum perfectly complements what we teach in school. Students who attend Logiscool show improved problem-solving skills in all subjects."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
      <div className="text-center mb-12">
        <h2 className="text-[#003b5c] text-3xl md:text-4xl font-bold mb-4">
          Said about us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear from parents, students, and educators about their Logiscool experience
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#00a8e8]" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#00a8e8]" />
        </button>

        {/* Testimonials Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 md:gap-8 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  color={testimonial.color}
                  starsColor={testimonial.starsColor}
                >
                  {testimonial.content}
                </TestimonialCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center items-center mt-10 space-x-3">
        {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * itemsPerView)}
            className={`w-3 h-3 rounded-full border-2 border-[#00a8e8] transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerView) === index 
                ? 'bg-[#00a8e8] w-8' 
                : 'bg-transparent hover:bg-[#00a8e8] hover:bg-opacity-30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

     
    </section>
  )
}

export default Digitization