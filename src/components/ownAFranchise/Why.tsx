import React from "react";

function Why() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why is Logiscool the best choice for you?
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                alt="AI learning"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center mb-12 md:mb-16">
              <h4 className="font-serif text-3xl sm:text-2xl md:text-5xl font-bold text-foreground mb-4">
                Why is Logiscool the best choice for you?
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
                High demand on programming and digital literacy. Proven and
                recession-proof business in education.
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                alt="AI learning"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center mb-12 md:mb-16">
              <h4 className="font-serif text-3xl sm:text-2xl md:text-5xl font-bold text-foreground mb-4">
                Best method
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
                Modular curriculum for all ages and knowledge levels with a
                cutting-edge platform designed for smooth transition to text
                coding.
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                alt="AI learning"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center mb-12 md:mb-16">
              <h4 className="font-serif text-3xl sm:text-2xl md:text-5xl font-bold text-foreground mb-4">
                Verified business solution
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
                Profitable, proven and successful business with a unique
                solution for smart investors
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                alt="AI learning"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center mb-12 md:mb-16">
              <h4 className="font-serif text-3xl sm:text-2xl md:text-5xl font-bold text-foreground mb-4">
                Make a difference in your community
              </h4>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
                Invest in the future of the next generation and have a real
                social impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
