import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const InsightsFromExperts = () => {
  const testimonials = [
    {
      name: "Takeshi Yamamoto",
      university: "University of Tokyo",
        bgColor: "#ff0000ff", // Light red
      image: "/placeholder.svg",
      quote: "The logical thinking methods taught at Logi Academy were instrumental in my success. I developed skills that went beyond exam preparation."
    },
    {
      name: "Yuki Tanaka",
      university: "Kyoto University",
      image: "/placeholder.svg",
       bgColor: "#ff8c00ff", // Light orange
      quote: "The teachers here are exceptional. They don't just teach you answers—they teach you how to think critically and solve complex problems."
    },
    {
      name: "Hiroshi Sato",
      university: "Waseda University",
      image: "/placeholder.svg",
        bgColor: "#00ff4cff", // Light green
      quote: "I couldn't have gotten into my dream university without Logi Academy. The proof-based approach completely transformed my study habits."
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Insights from Experts
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="p-8 bg-accent border-border hover:shadow-xl transition-shadow mx-auto max-w-2xl"  style={{ backgroundColor: testimonial.bgColor }}>
                   <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif font-bold text-primary text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                     
                    </div>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed text-center text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    
                   
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>

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
         <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
         Offer Exclusive Coding & AI Programs!
          </h2>
          <p>In today’s fast-paced, tech-driven world, schools need flexible and future-ready digital education solutions. With Logiscool, you can seamlessly embed coding and AI into your ICT curriculum,
             create a dedicated digital education program, focus on STEM initiatives, or offer engaging after-school opportunities.</p>
             <p>Our structured, high-quality programs are designed to enhance student learning, strengthen your institution’s competitive edge, and equip students with essential 21st-century skills. Whether you’re integrating digital skills into the school day or expanding extracurricular offerings, Logiscool provides an innovative, cost-effective solution that adapts to your school’s needs.</p>
        </div>
       {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
           Stand out today
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsightsFromExperts;