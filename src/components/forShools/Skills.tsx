const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Academic skills",
      subtitleOne: "Algorithmic thinking",
      subtitleTwo: "Problem solving",
      subtitleThree: "Analytic and logical thinking",
      subtitleFour: "A better understanding of STEM",
      subtitleFive: "Multitasking",
      subtitleSix: "Critical thinking",
      imageOne: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageTwo: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageThree: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageFour: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
    },
    {
      id: 2,
      title: "Soft skills",
      subtitleOne: "Creativity",
      subtitleTwo: "Focus and precision",
      subtitleThree: "Concentration and perseverance",
      subtitleFour: "Self-confidence",
      subtitleFive: "Adaptability",
      subtitleSix: "Recognition",
      imageOne: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageTwo: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageThree: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      imageFour: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
    },
  ];

  // Create arrays of subtitles for easier mapping
  const skillSubtitles = (skill) => [
    skill.subtitleOne,
    skill.subtitleTwo,
    skill.subtitleThree,
    skill.subtitleFour,
    skill.subtitleFive,
    skill.subtitleSix
  ];

  // Create array of images for easier mapping
  const skillImages = (skill) => [
    skill.imageOne,
    skill.imageTwo,
    skill.imageThree,
    skill.imageFour
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Essential Digital and AI Skills for Life
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            At Logiscool, we go beyond digital skills by helping children build
            a well-rounded foundation for academic, personal, and long-term
            success. Our programs equip them with skills that last a lifetime —
            preparing them not just for school, but for future careers and
            everyday life in a digital world.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {skills.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              <div className="text-center p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002B45] mb-6 sm:mb-8">
                  {feature.title}
                </h2>
                
                {/* Skills Grid with Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {skillSubtitles(feature).map((subtitle, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {index < 4 && (
                        <img
                          src={skillImages(feature)[index % 4]}
                          alt={subtitle}
                          className="w-full max-w-[200px] sm:max-w-[180px] md:max-w-[200px] h-32 sm:h-36 md:h-40 object-cover rounded-lg mb-3 sm:mb-4"
                        />
                      )}
                      <p className="text-gray-700 font-medium text-sm sm:text-base">
                        {subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              AI is seamlessly woven into our curriculum, methods, and
              platforms. We go beyond simply instructing "how to use AI" and
              "how AI works" — it's ingrained in every lesson, right from the
              start. As AI evolves swiftly, the fundamental skills to comprehend
              its mechanics endure.
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg"
              alt="AI learning"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;