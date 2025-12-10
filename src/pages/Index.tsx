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
const Index = () => {
  return (
    <div className="min-h-screen">
      <TopNavigation/>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Strips/>
        <SubBlog/>
          <Strips/>
          <Acheivements/>
        <Testimonials />
        <WhyCobot/>
        <Strips/>
        <New/>
        <LevelAndPartnership/>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
