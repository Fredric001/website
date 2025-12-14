import React from "react";

function Funbase() {
  const features = [
    {
      id: 1,
      title: "Globally recognized curriculum",
      description: "Logiscool's curriculum meets international standards and has been honored with prestigious awards."
    },
    {
      id: 2,
      title: "Comprehensive IT skills",
      description: "Our programs cover a wide range of IT topics, from coding to AI, providing students with versatile skills applicable to any profession."
    },
    {
      id: 3,
      title: "Seamless integration",
      description: "Logiscool's curriculum is easy to implement, scalable across grade levels, and designed to fit effortlessly into your existing timetable."
    },
    {
      id: 4,
      title: "Onboarding for teachers",
      description: "Teaching with Logiscool platform is easy, we can onboard any teacher available."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Fun-based AI, Digital Literacy and Coding for Children
          </h2>
        </div>

        {/* Features Grid - 2 columns on tablet, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="p-4 sm:p-5 md:p-6 border rounded-lg hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
            >
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Alternative: Grid with different breakpoints */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="p-6 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base md:text-lg">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Funbase;