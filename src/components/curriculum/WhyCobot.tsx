import React from "react";

function WhyCobot() {
  const features = [
    {
      id: 1,
      title: "Fully gamified, smart lessons that make learning enjoyable.World-class, certified curriculum",
     
    },
    {
      id: 2,
      title: "Age-appropriate courses tailored to different developmental stages.",
     
    },
    {
      id: 3,
      title: "Successive learning modules with a structured, easy-to-follow path.",
     
    },
    {
      id: 4,
      title: "Multilingual support so children can learn in their native language.",
    
    },
     {
      id: 5,
      title: "Certified coding curriculum and educational platform.",
    
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why choose Logiscool?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {/* Content Box */}
              <div
                style={{ alignSelf: "center" }}
                className="max-w-[370px] bg-white p-7 md:p-8   shadow-[0_10px_25px_rgba(0,0,0,0.15)] relative z-10"
              >
                <h2 className="text-2xl font-bold text-[#002B45] mb-4">
                  {feature.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Try Cobot Kids Kenya
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyCobot;
