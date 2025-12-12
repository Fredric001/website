import React, { useState, useEffect } from "react";

function LogoSliderSimple() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const logos = [
    {
      id: 1,
  
      src: "https://juniorschool.rockfields.ac.ke/wp-content/uploads/2024/08/junior-school-1.png",
      color: "#00A1F1"
    },
    {
      id: 2,
      name: "Pola Junior School",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaRZfYQhr1ZnmYqRXCTDVHpgMLgsMooXMQg&s",
      color: "#E60000"
    },
    {
      id: 3,
      name: "zuwena international school",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ec37tmuVMnqg9e2qjvYE2gauHV1CjAz13w&s",
      color: "#4285F4"
    },
    {
      id: 4,
      name: "The Ark Junior School",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR003DCNpg4-aGUucxQojjK4wcFbna8e37Whw&s",
      color: "#FF9900"
    },
    {
      id: 5,
      name: "Graceland Christian School",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe0k0vdviDQT-Lzn-FMcOUVUFY3CUTPOVoA&s",
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
    <>
    {/* Logo Slider */}
        <div className="relative max-w-4xl mx-auto ">
          {/* Logo Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 mb-6 ease-in-out"
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

         
          
        </div>
    </>
  );
}

export default LogoSliderSimple;