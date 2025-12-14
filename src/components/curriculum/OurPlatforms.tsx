import React from "react";

function OurPlatforms() {
  const articles = [
    {
      id: 1,
      category: "DIGITALIZATION COBOTKIDS",
      title: "Blox coding Level 1-2",
      date: "November 18, 2025",
      description:
        "We start coding education with “building blocks”. Our unique visual coding method is always best adjusted to all ages and knowledge levels.",
      image:
        "https://assets.logiscool.com/f/57188/720x497/a03c619a71/icon_mix_v3.png",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 1,
      category: "DIGITALIZATION COBOTKIDS",
      title: "Mix coding Level 3",
      date: "November 18, 2025",
      description:
        "As a second step, students start writing codes in MIX mode, where they can see both the building blox and the text-based languages in parallel.",
      image:
        "https://assets.logiscool.com/f/57188/720x497/a03c619a71/icon_mix_v3.png",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 1,
      category: "DIGITALIZATION COBOTKIDS",
      title: "Text coding Level 4",
      date: "November 18, 2025",
      description:
        "Once they feel confident to leave the visual blocks behind, they can move to text-based programming languages, like Python and C# through different game developer engines like Unity and Godot.",
      image:
        "https://assets.logiscool.com/f/57188/720x497/a03c619a71/icon_mix_v3.png",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Platforms – The Best Way to Learn Digital Skills
          </h2>
        </div>

        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                1. MyCobotKids – More Than Just a Learning Portal
              </h2>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-2 sm:space-y-3">
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Safe & Controlled – A secure space where kids can learn and
                    create safely.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Global Community – Connect, share projects, and get inspired
                    by peers worldwide.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Engaging Challenges – Fun quizzes, coding quests, a nd
                    interactive games to reinforce learning.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Missions & Rewards – Complete challenges, earn prizes, and
                    stay motivated.
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
        <div className="">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p>
              Have a look at Logiscool's MyLogiscool portal and see why we offer
              the best solution in teaching digital literacy!
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center ">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              2. Scoolcode – Our Unique Coding Platform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our unique educational platform is developed for easy transition
              from visual coding to text based programming languages.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid items-center md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article) => (
              <div key={article.id} className="group">
                <div className="transition-all duration-300 transform hover:-translate-y-1">
                  {/* Image Container (only for first article) */}
                  {article.id === 1 && (
                    <div className=" h-48">
                      <img
                        src={article.image}
                        alt={article.title}
                        className=" h-full  group-hover:scale-105 transition-transform duration-500"
                        style={{ display: "flex", justifySelf: "center" }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 text-center ">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                  Quality You Can Trust
                </h2>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-2 sm:space-y-3">
                  <li>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      ✅ More than 10 years of experience in digital education
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      ✅ A dedicated team of expert developers and educators
                      continuously refining our curriculum
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      ✅ Over 1,000 trainers' feedback integrated to ensure the
                      best learning experience
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" mb-8 sm:mb-10">
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
              Our approach has been tested, proven, and trusted by parents,
              kids, and educators worldwide. Whether through courses, camps, or
              workshops, we deliver a learning experience that is both engaging
              and future-proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPlatforms;
