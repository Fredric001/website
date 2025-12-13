import React from "react";

function How() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            How We Teach: Learning by Doing
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            At Logiscool, we believe that the best way to learn is by doing. Our
            practice-based approach makes coding, AI, and digital literacy fun
            and effective through hands-on projects.
          </p>
        </div>

        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                Learning That's Fun and Effective
              </h2>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3">
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Coding, AI, and digital literacy are taught in an engaging,
                    hands-on way for all ages and skill levels.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Project-based learning approach that builds real-world skills.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Interactive lessons that keep children motivated and excited to learn.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
              alt="Kids learning"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="flex justify-center lg:order-1 order-1">
            <img
              src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
              alt="Kids learning"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:order-2 order-2 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                Hands-On Project Learning
              </h2>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3">
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Students work on real projects from day one, applying concepts immediately.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Collaborative learning environment that builds teamwork skills.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Immediate feedback and guidance from experienced instructors.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Flexible Learning Options Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Flexible Learning Options
          </h2>
        </div>

        {/* Flexible Learning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col sm:flex-row lg:flex-col items-center text-center sm:text-left lg:text-center p-4 sm:p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4 sm:mb-0 sm:mr-4 lg:mr-0 lg:mb-6">
                <img
                  src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                  alt="Learning option"
                  className="w-32 h-32 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  Coding, AI, and digital literacy are taught in an engaging,
                  hands-on way for all ages and skill levels.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Engaging Programs All Year Around for Everyone
          </h2>
        </div>

        {/* Programs Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col items-center text-center p-4 sm:p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4 sm:mb-6">
                <img
                  src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
                  alt="Program"
                  className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {item === 1 
                    ? "Our courses provide structured learning paths with engaging projects, helping kids master digital skills and coding."
                    : "Coding, AI, and digital literacy are taught in an engaging, hands-on way for all ages and skill levels."
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
            More about Our Curriculum and Platforms
          </button>
        </div>
      </div>
    </section>
  );
}

export default How;