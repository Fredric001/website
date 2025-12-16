import { motion } from "framer-motion";
import TextHero from "@/components/ownAFranchise/hero/TextHero";
import Background from "@/components/forShools/hero/Background";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      
      {/* Content - On top of background */}
      <div className="relative  min-h-screen flex flex-col">
        {/* Hero Content */}
        <div className="flex-grow flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* TextHero Component */}
              <TextHero />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;