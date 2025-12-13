import React from "react";

function Funbase() {
  const features = [
    {
      left: "Skills Beyond Basic Computer Use",
      right: "From Passive to Active Screen Time"
    },
    {
      left: "Flexibility & Progressing at Own Speed",
      right: "Gamified Tech Learning"
    },
    {
      left: "Future-Proof Skills",
      right: "Real-World Application"
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

        {/* Features Grid */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10"
            >
              {/* Left Feature */}
              <div className="p-4 sm:p-6 md:p-8 border rounded-lg hover:shadow-md transition-shadow">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground text-center sm:text-left">
                  {feature.left}
                </h2>
              </div>
              
              {/* Right Feature */}
              <div className="p-4 sm:p-6 md:p-8 border rounded-lg hover:shadow-md transition-shadow">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground text-center sm:text-left">
                  {feature.right}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Locations Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            We have Locations all around the world. Find the closest one and check out our local offers!
          </h2>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base md:text-lg">
            Find Location
          </button>
        </div>
      </div>
    </section>
  );
}

export default Funbase;