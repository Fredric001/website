import React from "react";
import { Target, Users, Globe, Brain, Cpu, Sparkles } from "lucide-react";

function Mission() {
  const missionPoints = [
    {
      id: 1,
      description:
        "Founded in January 2014, Logiscool is built on empowerment, growth, and community, providing a safe space where children gain confidence, develop digital skills, and express creativity.",
     
    },
    {
      id: 2,
      description:
        "At Cobot Kids Academy, we inspire children to innovate with digital tools, AI, programming, and digital literacy—essential skills for today and the future.",
     
    },
    {
      id: 3,
      description:
        "From local classrooms to international partnerships, we're shaping the future of education worldwide with our innovative approach to digital learning.",
    
    },
  ];


  return (
    <section className="blx blx-c cms-container">
      <div className="container blx blx-c cms-container m-auto pt-4 pt-lg-5 pb-4">
        {/* Mission Section */}
        <div className="text-center mb-4 md:mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
            How Our Mission Shaped Us into Global EdTech Experts
          </h2>
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

        {/* AI Demo/Video Placeholder */}
        <div className="relative rounded-3xl overflow-hidden  p-8 md:p-12">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
              Why Learning AI Is Essential
            </h2>
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
      </div>
    </section>
  );
}

export default Mission;
