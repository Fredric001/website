import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SubBlog = () => {
  const missionPoints = [
    {
      id: 1,
      description: "Recognized achievements",
    },
    {
      id: 2,
      description: "A solid validation of programming and digital skills",
    },
    {
      id: 3,
      description: "Adds value to school or university",
    },
    {
      id: 4,
      description: "Completely free",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            From Digital Skills Development to Python Diploma
          </h2>
          <p>
            Our curriculum provides a structured path from digital literacy to
            advanced programming, game design, and AI. Unlike many coding
            schools, it’s designed to match kids' learning pace, ensuring steady
            and effective progress.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default SubBlog;
