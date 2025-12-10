import React from "react";
import LogoSliderSimple from "./LogoSliderSimple";
function LevelAndPartnership() {
  const articles = [
    {
      id: 1,
      category: "DIGITALIZATION COBOTKIDS",
      title:
        "Blox codingLevel 1-2",
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
      title:
        "Mix coding Level 3",
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
      title:
        "Text coding Level 4",
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The world's number one coding education platform for learning
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our unique educational platform is developed for easy transition
            from visual coding to text based programming languages.
          </p>
        </div>
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <div key={article.id} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Container (only for first article) */}
                {article.id === 1 && (
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                 

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
          {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           Together for Digital Literacy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’re proud to collaborate with progressive companies to build a better digital future for the next generation. Together, we’re working to empower children with the digital skills they need to thrive in tomorrow’s world.
          </p>
        </div>
        <LogoSliderSimple />
      </div>
    </section>
  );
}

export default LevelAndPartnership;
