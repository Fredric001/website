import React, { useState, useEffect } from "react";
import Hero from "@/components/ownAFranchise/Hero";
import InsightsFromExperts from "@/components/forShools/InsightsFromExperts";
import Funbase from "@/components/forShools/FunBased";
import Award from "@/components/forShools/Award";
import Scoolcode from "@/components/forShools/Scoolcode";
import Mission from "@/components/ourStory/Mission";
import Vision from "@/components/ourStory/Vision";
import Expert from "@/components/ourStory/Expert";
import Navigation from "@/components/Navigation";
import Stats from "@/components/home/Stats";
import Skills from "@/components/forShools/Skills";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/TopNavigation";
import Logo from "@/components/Logo";
import Testimonials from "@/components/home/Testimonials";
import How from "@/components/ourStory/How";
import Acheivements from "@/components/home/Acheivements"
// import Funbase from "@/components/ourStory/FunBased";
import Commitment from "@/components/ourStory/Commitment";
import NewsLetter from "@/components/NewsLetter";
import SubBlog from "@/components/forShools/SubBlog";
import CTA from "@/components/forShools/CTA";
import Form from "@/components/Form";
const ForSchools = () => {
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
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h2 className="text-2xl font-serif font-bold text-foreground  rounded-sm animate-bounce [animation-delay:-0.3s]">
              Cobot
            </h2>
            <h2 className="text-2xl font-serif font-bold text-foreground  rounded-sm animate-bounce [animation-delay:-0.6s]">
              Kids
            </h2>
            <h2 className="text-2xl font-serif font-bold text-foreground   rounded-sm animate-bounce">
              Academy
            </h2>
          </div>

          <p className=" text-muted-foreground">
            Empowering young minds through innovative technology education in
            Kenya.
          </p>
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
        <Stats/>

        {/* <Skills/> */}
        <Testimonials/>
        <Funbase/>
        <Award/>
        <Scoolcode/>
        <SubBlog/>
        <CTA/>
        <Form/>
        
      </main>
        <Footer />
    </div>
  );
};

export default ForSchools;
