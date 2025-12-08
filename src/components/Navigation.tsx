import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../components/Logo"
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  
    { name: "About Us", path: "/aboutUs" },
    { name: "Programs", path: "/programs" },
   
  ];

  return (
    <nav
      className={`py-2 top-0  left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "fixed bg-background/95 backdrop-blur-md shadow-soft fixed py-2" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
         <Link to="/" className="flex items-center space-x-2">
            <div className="font-serif text-2xl font-bold text-primary">
              <Logo/>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button  className="bg-blue/50 text-accent-foreground"></button>
            <Button variant="default" size="sm">
              Location
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Location
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
