import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

function NewsLetter() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Would you like to stay updated on our news and programs?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Subscribe to our parent newsletter and get notified about our latest
                blog posts.
              </p>
              <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Or follow us on social media
            </h3>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-white rounded-full hover:opacity-80 transition-opacity"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-white rounded-full hover:opacity-80 transition-opacity"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-white rounded-full hover:opacity-80 transition-opacity"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-foreground text-white rounded-full hover:opacity-80 transition-opacity"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;