import React, { useState, useEffect } from "react";

function LogoSliderSimple() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const logos = [
    {
      id: 1,
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png",
      color: "#00A1F1"
    },
    {
      id: 2,
      name: "Vodafone",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Vodafone_2017_logo.svg/800px-Vodafone_2017_logo.svg.png",
      color: "#E60000"
    },
    {
      id: 3,
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
      color: "#4285F4"
    },
    {
      id: 4,
      name: "Amazon",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png",
      color: "#FF9900"
    },
    {
      id: 5,
      name: "Apple",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png",
      color: "#000000"
    },
    {
      id: 6,
      name: "Intel",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png",
      color: "#0071C5"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % Math.ceil(logos.length / 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [logos.length]);

  const slides = [];
  for (let i = 0; i < logos.length; i += 2) {
    slides.push(logos.slice(i, i + 2));
  }

  return (
    <div className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations that trust our platform for their educational needs
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Logo Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slideLogos, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="flex items-center justify-center gap-8 md:gap-16 px-4">
                    {slideLogos.map((logo) => (
                      <div 
                        key={logo.id}
                        className="group relative"
                      >
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                          <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-10 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                          <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap">
                            {logo.name}
                          </div>
                          <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-8 md:mt-12 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-[#00AEEF] scale-110' 
                    : 'border-2 border-[#00AEEF] hover:bg-[#00AEEF] hover:bg-opacity-30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveSlide(prev => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setActiveSlide(prev => (prev + 1) % slides.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "50+", label: "Partner Companies" },
            { value: "100K+", label: "Students Trained" },
            { value: "95%", label: "Satisfaction Rate" },
            { value: "10+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00AEEF] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSliderSimple;