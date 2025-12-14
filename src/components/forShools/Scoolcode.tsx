import React from "react";

function Scoolcode() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Scoolcode - Award winning education platform for teaching
              </h2>
            </div>
            <div>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 md:space-y-3">
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Award-winning coding education platform
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Created to help teaching CS
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Optimized for different ages and knowledge levels
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Python or JavaScript based coding education platform
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
              alt="Kids learning"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md sm:shadow-lg"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          <div className="flex justify-center lg:order-1 order-1">
            <img
              src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
              alt="Kids learning"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md sm:shadow-lg"
            />
          </div>
          <div className="lg:order-2 order-2 flex flex-col justify-center">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                MyLogiscool - Safe and secure edutaining community Portal
              </h2>
            </div>
            <div>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 md:space-y-3">
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    International edutainment community portal for students in coding and CS
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Engaging quizzes and challenges for improving analytical, algorithmic and logical skills
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Quests for testing and practicing
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base">
                    100% safe and secure
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scoolcode;