import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  CircleUser,
  ShoppingCart,
  Search,
} from "lucide-react";


const TopNavigation = () => {
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

  const MobileLinks = [
    { name: "For Schools", path: "/for-schools" },
    { name: "Own a franchise", path: "/own-a-franchise" },
    // { name: "Find a Program", path: "" },
    { name: "MyCobotSchool", path: "" },
    // { name: "Teachers", path: "teachers" },
  ];

    const navLinks = [
    { name: "For Schools", path: "/for-schools" },
    { name: "Own a franchise", path: "/own-a-franchise" },
    { name: "Find a Program", path: "" },
    { name: "MyCobotSchool", path: "" },
    { name: "Teachers", path: "teachers" },
  
  ];
  return (
    <nav
      className={` top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-1">
            <div className=" text-2xl font-bold text-primary">
            +254718671256
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
           
          </div>

          {/* Mobile Menu Button */}
           <div style={{ display: "flex", gap: "15px" }}>
            <Link to="">
              <CircleUser />
            </Link>
            <Link to="">
              <ShoppingCart />
            </Link>
            <Link to="">
              <Search />
            </Link>
             {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
         {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            {MobileLinks.map((link) => (
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
          
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
