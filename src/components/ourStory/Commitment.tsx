import React from "react";

function Commitment() {
  const features = [
    {
      id: 1,
      description:
        "Creating a supportive community for all our partners, learners, and collaborators.",
      image:
        "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      bgImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      description:
        "Fully gamified, smart lessons that make learning enjoyable.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      description:
        "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Commitment to Future-Ready education
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              {/* Top Image Area */}
              <div className="h-72 bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden relative">
                {/* Kids Image */}
                <img
                  src={feature.image}
                  alt="Kids learning"
                  className="absolute bottom-0 object-contain max-h-64 mx-auto left-0 right-0"
                />
              </div>

              {/* Content Box */}
              <div
                style={{ alignSelf: "center" }}
                className="max-w-[370px] bg-white p-7 md:p-8 -mt-24  shadow-[0_10px_25px_rgba(0,0,0,0.15)] relative z-10"
              >
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA BUTTONS */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8" >
          <div className="text-center mb-16" style={{borderRadius:"2px solid blue "}}>
            <h2 className="font-serif text-4xl md:text-1xl font-bold  mb-4" style={{color:"red"}}>
              I'm a Parent
            </h2>
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                CHOOSE A LOCATION{" "}
              </button>
            </div>
          </div>
          <div className="text-center mb-16" style={{borderRadius:"2px solid blue "}}>
            <h2 className="font-serif text-4xl md:text-1xl font-bold  mb-4" style={{color:"red"}}>
            I'm interested in opening a Logiscool Franchise
            </h2>
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="text-center mb-16" style={{borderRadius:"2px solid blue "}}>
            <h2 className="font-serif text-4xl md:text-1xl font-bold  mb-4" style={{color:"red"}}>
             I work for a school interested in cooperation
            </h2>
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                 LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
