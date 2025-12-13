import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Background() {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = [
    "https://assets.logiscool.com/f/57188/1328x548/8ea08deb4c/main-page-banner-img-13.jpg",
    "https://assets.logiscool.com/f/57188/1328x548/8ea08deb4c/main-page-banner-img-13.jpg",
    "https://assets.logiscool.com/f/57188/1328x548/8ea08deb4c/main-page-banner-img-13.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Fade Animation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }
            }}
          >
            {/* Dark Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          </motion.div>
        ))}
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            transition: { 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [20, -20, 20],
            transition: { 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            transition: { 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
          }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Optional: Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${
                index === currentImage 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              animate={{
                scale: index === currentImage ? [1, 1.2, 1] : 1
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Background;