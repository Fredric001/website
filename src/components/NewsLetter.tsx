import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
function NewsLetter() {
  return (
    <section className="py-20 bg-background grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Would you like to stay updated on our news and programs?
          </h2>
          <p>
            Subscribe to our parent newsletter and get notified about our latest
            blog posts.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Subscribe
          </button>
        </div>

        {/* SOCIAL MEDIS HANDLES */}
      </div>
      <div>
        <h3 className="font-serif text-2xl font-bold mb-4">
          Or follow us on social media
        </h3>

        <div className="flex space-x-3">
          <a href="#" className="hover:text-accent text-white transition-colors rounded-full px-4 py-4 bg-foreground">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-accent text-white transition-colors rounded-full px-4 py-4 bg-foreground">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-accent text-white transition-colors rounded-full px-4 py-4 bg-foreground">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-accent text-white transition-colors rounded-full px-4 py-4 bg-foreground">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
