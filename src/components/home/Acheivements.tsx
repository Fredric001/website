import { Card } from "@/components/ui/card";

import { useState, useEffect } from "react";

const Archivements = () => {
  const testimonials = [
    {
      
       imageUrl:
        "https://assets.logiscool.com/f/57188/661x460/ebf34d6652/wwpo_ifa.jpg",
    },
    {
     
       imageUrl:
        "https://assets.logiscool.com/f/57188/661x460/ebf34d6652/wwpo_ifa.jpg",
    },
    
    {
      
       imageUrl:
        "https://assets.logiscool.com/f/57188/661x460/ebf34d6652/wwpo_ifa.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
           What we're proud of
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="bg-background border-border hover:shadow-xl transition-shadow mx-auto max-w-2xl">
                  
                  <div className="">
                  <img
                    src={testimonial.imageUrl}
                    // alt={testimonial.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                  
                  
                </Card>
              </div>
            ))}
          </div>


          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archivements;