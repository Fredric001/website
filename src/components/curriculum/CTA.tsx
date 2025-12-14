import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6"
          style={{fontFamily:"Raleway, Manrope, Cairo, Helvetica Neue, Arial, -apple-system, BlinkMacSystemFont, Apple Color Emoji, Segoe UI, Segoe UI Emoji, Segoe UI Symbol, sans-serif"}}>
           We have Locations all around the world. Find the closest one and check out our local offers!
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-2 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Find Location
          </button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
