import React from "react";

function DigitalSkillsEducation() {
  const features = [
    {
      id: 1,
      title: "Engaging Coding Programs",
      description: "Students can dive into blocks and text based coding and create real projects in interactive sessions.",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Ready-to-use learning modules",
      description: "Award-winning, ready-made modules designed for grades 1-12 for future-ready students in schools worldwide.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Customizable Curriculum",
      description: "Schools can start with our standard curriculum and customize based on their size and needs, plus they get a safe digital platform.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Ongoing Educational Support",
      description: "Full teacher onboarding, with detailed lesson plans, training, and a dedicated resource hub for best practices.",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Digital Skills Education, Designed for Your School
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          From structured coding programs to flexible curriculum options, we help you nurture future innovators.


          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {/* Top Image Area */}
              <div 
                className="h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden relative"
              >
                {/* Kids Image */}
                <img
                  src={feature.image}
                  alt="Kids learning"
                  className="absolute bottom-0 object-contain max-h-64 mx-auto left-0 right-0"
                />
              </div>

              {/* Content Box */}
              <div style={{alignSelf:"center"}} className="max-w-[370px] bg-white p-7 md:p-8 -mt-24  shadow-[0_10px_25px_rgba(0,0,0,0.15)] relative z-10">
                <h2 className="text-2xl font-bold text-[#002B45] mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default DigitalSkillsEducation;