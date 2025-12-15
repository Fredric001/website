import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import TopNavigation from "@/components/TopNavigation";
import Strips from "@/components/Strips";
import SubBlog from "@/components/home/SubBlog";
import Acheivements from "@/components/home/Acheivements";
import WhyCobot from "@/components/home/WhyCobot";
import New from "@/components/home/New";
import LevelAndPartnership from "@/components/home/LevelAndPartnership";
import Logo from "@/components/Logo";
const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust time as needed

    return () => clearTimeout(timer);
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
        <Features />
        <Stats />
        <Strips />
        <SubBlog />
        <Strips />
        <Acheivements />
        <Testimonials />
        <WhyCobot />
        <Strips />
        <New />
        <LevelAndPartnership />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
