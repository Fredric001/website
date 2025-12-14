import React from "react";

function Award() {
  const articles = [
    {
      id: 1,

      image:
        "https://assets.logiscool.com/f/57188/720x497/a03c619a71/icon_mix_v3.png",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 1,

      image:
        "https://assets.logiscool.com/f/57188/720x497/a03c619a71/icon_mix_v3.png",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: 1,

      image:
        "https://assets.logiscool.com/f/57188/720x497/a03c619a71/icon_mix_v3.png",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center ">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Award-Winning Coding Curriculum and Platform
          </h2>
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
                    //   alt={article.title}
                      className=" h-full  group-hover:scale-105 transition-transform duration-500"
                      style={{ display: "flex", justifySelf: "center" }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base">
            Check Out Curriculumn
          </button>
        </div>
      </div>
    </section>
  );
}

export default Award;
