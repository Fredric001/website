import React from "react";

function OurDevelopments() {
  const features = [
    {
      id: 1,
      title: " Be profitable",
      description: "You can be profitable from day 1 of operationsFull return on investment in 2-3 yearsWidest range of revenue streams (courses, camps, workshops, events) ",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Enjoy the advantages of our system",
      description: "Efficient onboarding by our dedicated team of professionalsOngoing operation support and best-in-class franchise management toolsNo previous IT education needed",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Stand out from the competition in the after-school coding education market",
      descriptiHanon: "Certified curriculum that fits major international standardsUnique methodology: the best fit for all children, ages and knowledge levelsUnrivaled interactive and edutaining community portal for children",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
   
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our Developments - Your benefits
          </h2>
          
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <a 
                  href="#" 
                  className="bg-[#00AEEF] px-6 py-3 text-white font-bold rounded-full inline-block hover:bg-[#0099d6] transition-colors duration-300"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default OurDevelopments;