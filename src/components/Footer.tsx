import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Methodology", path: "/methodology" },
    { name: "Results", path: "/results" },
  ];

  const resources = [
    { name: "Teachers", path: "/teachers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Cobot Kids</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
             Empowering young minds through innovative technology education in Kenya.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Innovation Avenue, Nairobi , Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+254 713 820 055</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>cobotkidsacademy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Cobot Kids Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
