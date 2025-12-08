import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import cobotcodingvideo1 from "../../assets/cobotcodingvideo1.mp4";
// import cobotcodingvideo2 from "../../assets/cobotcodingvideo2.mp4";
const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle video load
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  // Handle video error
  const handleVideoError = () => {
    setIsLoading(false);
    console.error("Failed to load video");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/30 z-10" />
        <div className="absolute inset-0 bg-gradient-hero-overlay z-20" />

        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          {/* Add multiple video sources for better browser compatibility */}
          <source src={cobotcodingvideo1} type="video/webm" />
          <source src={cobotcodingvideo1} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Loading fallback */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground z-30 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        )}

        {/* Static fallback image if video fails */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: isLoading ? "none" : "block",
          }}
        ></div>
      </div>

      {/* Mute toggle button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-40 p-3 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors border border-background/30"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="text-primary-foreground" size={20} />
        ) : (
          <Volume2 className="text-primary-foreground" size={20} />
        )}
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground pt-20 lg:pt-0">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-medium text-sm mb-6 animate-fade-in">
              Elite University Preparation Since 2024
            </div>

            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Choose the best.
              <br />
              <span className="text-accent">
                coding,AI and digital literacy education for your child.
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We empower schools to teach Computer Science through fun,
              interactive, and engaging programs.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group backdrop-blur-sm"
                >
                  Explore Courses
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground  text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
                  style={{color:"black"}}
                >
                  Book Consultation
                </Button>
              </Link>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-accent" size={20} />
                <span className="text-sm">98% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-accent" size={20} />
                <span className="text-sm">Expert Faculty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-accent" size={20} />
                <span className="text-sm">Proven Methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
