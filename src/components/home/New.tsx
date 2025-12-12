import React from "react";
import CTA from "@/components/home/CTA"
function New() {
  const articles = [
    {
      id: 1,
      category: "DIGITALIZATION COBOTKIDS",
      title: "AI and Creativity: How the Next Generation Will Work With Machines",
      date: "November 18, 2025",
      description: "Parents often hear the prediction that artificial intelligence will take over jobs. It is an understandable concern: machines are becoming faster, more capable, and able to do things we once believed were reserved for humans.",
      image: "https://assets.logiscool.com/f/57188/1100x620/89cd03fefb/curriculum-image-eaf-benefit-550x310px.jpg",
      link: "#",
      gradient: "from-blue-500 to-cyan-400",
      
    },
    {
      id: 2,
     
      title: "Give the Gift of Knowledge",
      date: "November 18, 2025",
      description: "This holiday season, instead of choosing another toy that may soon be forgotten, surprise your child or grandchild with something truly lasting: the joy of learning and creating.",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      category: "COBOTKIDS",
      title: "October is Cybersecurity Awareness Month",
      date: "November 18, 2025",
      description: "Every October, Cybersecurity Awareness Month reminds us all to take a closer look at how we use and protect our digital tools.",
      link: "#",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Latest Updates
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What's new
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest news, insights, and innovations in digital education
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
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-xs font-bold rounded-full`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {article.description}
                  </p>

                  <a
                    href={article.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group/link transition-colors duration-200"
                  >
                    READ MORE
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 p-8 md:p-12">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to see more insights?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Explore our complete collection of articles, blogs, and educational resources
            </p>
            <button className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span>Visit Blog and News</span>
              <svg 
                className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
        </div>
      </div>
    </section>
  );
}

export default New;