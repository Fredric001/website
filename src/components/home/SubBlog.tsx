import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const SubBlog = () => {
  return (
    <section className=" items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className=" pt-20 lg:pt-0">
            <h5
              className="font-serif text-2xl md:text-2xl lg:text-2xl font-bold leading-tight mb-2 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Master Logical Thinking.
            </h5>

            <p
              className="text-lg md:text-xl  mb-4 leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Japan's premier cram school for universityize in proof-based
              learning and logical writing to help you achieve your academic
              goals.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-2 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                >
                  Select Your Country
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div
            className="lg:flex items-center justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-lg">
              <div className="wrapper">
                <div className="shape shape-blue"></div>
                <div className="shape shape-green"></div>

                <div className="main-box">
                  <img src="https://assets.logiscool.com/f/57188/2656x1096/2c20238a21/main-page-banner-img-16-franchise-desktop.jpg" alt="World Map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
           <div
            className="lg:flex items-center justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-lg">
              <div className="wrapper">
                <div className="shape shape-blue"></div>
                <div className="shape shape-green"></div>

                <div className="main-box">
                  <img src="https://assets.logiscool.com/f/57188/2656x1096/2c20238a21/main-page-banner-img-16-franchise-desktop.jpg" alt="World Map" />
                </div>
              </div>
            </div>
          </div>
        

          {/* Right Content - Image Placeholder */}
            <div className=" pt-20 lg:pt-0">
            <h5
              className="font-serif text-2xl md:text-2xl lg:text-2xl font-bold leading-tight mb-2 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Master Logical Thinking.
            </h5>

            <p
              className="text-lg md:text-xl  mb-4 leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Japan's premier cram school for universityize in proof-based
              learning and logical writing to help you achieve your academic
              goals.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-2 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground group"
                >
                  Select Your Country
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBlog;
