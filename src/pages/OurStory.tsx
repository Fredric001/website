import React, { useState, useEffect } from "react";
import Hero from "@/components/ourStory/Hero";
import Mission from "@/components/ourStory/Mission";
import Vision from "@/components/ourStory/Vision";
import Expert from "@/components/ourStory/Expert";
import Navigation from "@/components/Navigation";
import Stats from "@/components/home/Stats";
import Skills from "@/components/ourStory/Skills";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/TopNavigation";
import Logo from "@/components/Logo";
import Testimonials from "@/components/home/Testimonials";
import How from "@/components/ourStory/How";
import Acheivements from "@/components/home/Acheivements"
import Funbase from "@/components/ourStory/FunBased";
import Commitment from "@/components/ourStory/Commitment";
import NewsLetter from "@/components/NewsLetter";
const About = () => {
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
            <div className="  rounded-sm animate-bounce ">
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
        <Mission/>
        <Vision/>
        <Expert/>
        <Stats/>
        <Skills/>
        <Testimonials/>
        <How/>
        <Acheivements/>
        <Funbase/>
        <Commitment/>
        <NewsLetter/>
      </main>
        <Footer />
    </div>
  );
};

export default About;
