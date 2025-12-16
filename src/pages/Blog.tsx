import React, { useState, useEffect } from "react";
import Hero from "@/components/blog/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/TopNavigation";
import Logo from "@/components/Logo";
import LatestPost from "@/components/blog/LatestPosts";
import LatestNews from "@/components/blog/LatestNews";


const ForSchools = () => {
  const [loading, setLoading] = useState(true);


 const tabs = [
    "All Categories",
    "News",
    "Franchise",
    "Videos",
    "Digitization",
    "Education",
    "Coding & Tech",
    "Cobotschool",
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-1">
            <div className="  rounded-sm animate-bounce [animation-delay:-0.3s]">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TopNavigation />
      <Navigation />
      <main>
        <Hero />
        {/* Tabs */}
      <div className="flex justify-start md:justify-center gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-10 pb-4 border-b-3 border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 md:px-4 py-2 rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${
              index === 1
                ? "text-[#00a8ff] font-semibold bg-blue-50"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <LatestPost/>
      <LatestNews/>
      </main>
      <Footer />
    </div>
  );
};

export default ForSchools;
