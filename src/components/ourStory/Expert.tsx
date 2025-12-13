import React from "react";

function Expert() {
  const features = [
    {
      id: 1,
      title: "For Parents and Children",
      subtitle: "Empower your child with future-proof digital skills!",
      description: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptiontwo: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionthree: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionfour: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "For Parents and Children",
      subtitle: "Empower your child with future-proof digital skills!",
      description: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptiontwo: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionthree: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionfour: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "For Parents and Children",
      subtitle: "Empower your child with future-proof digital skills!",
      description: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptiontwo: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionthree: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionfour: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
     title: "For Parents and Children",
      subtitle: "Empower your child with future-proof digital skills!",
      description: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptiontwo: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionthree: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
      descriptionfour: "✅ Digital literacy, coding, AI, robotics and digital creation courses, camps, and workshops for children",
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
          Our Expert Digital Education Solutions for Everyone!
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
                 <h4 className="text-1xl font-bold text-[#002B45] mb-4">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.descriptiontwo}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.descriptionthree}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.descriptionfour}
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

export default Expert;