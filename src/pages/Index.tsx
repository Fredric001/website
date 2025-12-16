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
  const [notification, setNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      setTimeout(() => {
        setNotification(false);
      }, 7000); // banner visible for 7s
    }, 5000);

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

      {notification && !loading && (
        <div className="fixed top-[72px] left-0 right-0 z-40 flex justify-center animate-slide-down">
          <div className="mx-4 w-full max-w-6xl">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-accent to-accent px-6 py-4 shadow-xl">
              <p className="text-sm md:text-base font-medium text-white">
              New updates are live! Explore features, partnerships, and
                insights.
              </p>

              <button
                onClick={() => setNotification(false)}
                className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white hover:bg-white/30 transition"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

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
