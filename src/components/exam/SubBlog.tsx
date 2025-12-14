import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SubBlog = () => {
  const missionPoints = [
    {
      id: 1,
      description:
        "Recognized achievements",
    },
    {
      id: 2,
      description:
        "A solid validation of programming and digital skills",
    },
    {
      id: 3,
      description:
        "Adds value to school or university",
    },
    {
      id: 4,
      description:
        "Completely free",
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
            Did you know that over 90% of jobs worldwide already require digital
            skills? And this number is only growing! At Logiscool, we help
            children develop essential tech skills through hands-on learning and
            structured pathways.
          </p>
        </div>
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Logiscool Diplomas
          </h2>
          <p>
            After completing the Logiscool exams, which are exclusively
            available for our Logiscool students, your child’s progress isn’t
            just personal growth—it’s recognized proof of their digital
            knowledge, whether they’re exploring the digital world, mastering
            visual programming, or Python.
          </p>
        </div>

        {/* AI Demo/Video Placeholder */}
        <div className="relative rounded-3xl overflow-hidden  p-8 md:p-12">
          <div className="text-center mb-12 md:mb-20">
            <p>
              Logiscool exams and diplomas celebrate every Scooler's progress
              and digital skills in a fun, motivating way.
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

        {/* Mission Section */}
        <div className="text-center mb-4 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
            Children May Earn a Logiscool Diploma!
          </h2>
          <p>
            Students who meet the course requirements can take a final exam on
            multiple levels and earn a diploma-more than just a certificate,
            it's a proof of true expertise!
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-14">
          {missionPoints.map((point) => (
            <div
              key={point.id}
              className="group relative  text-center  p-6 md:p-8  transition-all duration-500 hover:-translate-y-2"
            >
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {point.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubBlog;
