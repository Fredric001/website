import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: install lucide-react for icons

const TestimonialCard = ({ name, role, color, starsColor, children }) => {
  const bgColors = {
    yellow: "bg-[#fbfde8]",
    blue: "bg-[#e8f7ff]",
    pink: "bg-[#fdeaf1]",
  };

  const starColors = {
    green: "text-[#9cc800]",
    blue: "text-[#00a8e8]",
    pink: "text-[#b00059]",
  };

  return (
    <div
      className={`${bgColors[color]} h-full rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
    >
      <p className="text-[#003b5c] text-sm md:text-base leading-relaxed md:leading-loose">
        {children}
      </p>

      <div className="mt-6 pt-4 border-t border-gray-200 border-opacity-30">
        <a href="">Read more</a>
      </div>
    </div>
  );
};

function TextHero() {
  const testimonials = [
    {
      id: 1,

      color: "yellow",

      content:
        "Chi  in many areas of life.",
    },
    {
      id: 2,

      color: "blue",

      content:
        "If s appealing.",
    },
    {
      id: 3,

      color: "pink",

      content:
        "It'sthat. 😊",
    },
    {
      id: 4,

      color: "yellow",

      content:
        "As a p went from playing games to creating them!",
    },
    {
      id: 5,

      color: "blue",

      content:
        "The ls in all subjects.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

 

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
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
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
              >
                <TestimonialCard color={testimonial.color}>
                  {testimonial.content}
                </TestimonialCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextHero;
