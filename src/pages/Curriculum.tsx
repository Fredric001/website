import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Hero from "@/components/curriculum/Hero";
import TopNavigation from "@/components/TopNavigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SubBlog from "@/components/curriculum/SubBlog";
import LearnByDo from "@/components/curriculum/LearnByDo";
import OurPlatforms from "@/components/curriculum/OurPlatforms";
import CTA from "@/components/curriculum/CTA";
import Archivements from "@/components/home/Acheivements";
import Testimonials from "@/components/home/Testimonials";
import WhyCobot from "@/components/curriculum/WhyCobot";
import Roadmap from "@/components/curriculum/Roadmap";
import Form from "@/components/Form";
import NewsLetter from "@/components/NewsLetter";
import TextRoadmap from "@/components/curriculum/TextRoadmap";
function Curriculum() {
     const [loading, setLoading] = useState(true);
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
        <SubBlog/>
       <LearnByDo/>
       <OurPlatforms/>
       <CTA/>
       <Archivements/>
       <CTA/>
       <Testimonials/>
       <WhyCobot/>
       <Roadmap/>
       {/* <TextRoadmap/> */}
       <Form/>
       <NewsLetter/>
      </main>
      <Footer />
    </div>
  )
}

export default Curriculum