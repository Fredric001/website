import React from "react";

function LearnByDo() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Learning by Doing: The Key to Mastery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            At Logiscool, theory and practice go hand in hand. Research confirms
            that blending theory with practical projects leads to better
            retention and a stronger foundation for future success.
          </p>
        </div>

        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                That’s why in every lesson:
              </h2>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3">
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    ✔ Kids create cool projects while learning the underlying
                    concepts
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    ✔ They get immediate hands-on experience, making it easier
                    to understand and apply new skills
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    ✔ Practical learning boosts confidence, creativity, and
                    problem-solving abilities
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" mb-8 sm:mb-10">
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            With this method, digital skills become second nature, helping kids
            build a strong foundation for future studies and careers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearnByDo;
