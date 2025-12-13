import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../components/Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const aboutUsLinks = [
    { name: "Our Story", path: "/our-story" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Entry Assets", path: "/entry-assets" },
    { name: "Exams", path: "/exams" },
    { name: "Blog", path: "/blog" },
  ];
  

  const programsLinks = [
    { name: "Open Day", path: "/open-day" },
    { name: "Courses", path: "/courses" },
    { name: "Camp", path: "/camp" },
    { name: "Camps Open Day", path: "/camps-open-day" },
    { name: "Workshop", path: "/workshop" },
    { name: "Premium", path: "/premium" },
    { name: "Birthday", path: "/birthday" },
  ];

  const navItems = [
    {
      name: "About Us",
      path: "/about",
      dropdown: aboutUsLinks
    },
    {
      name: "Programs",
      path: "/programs",
      dropdown: programsLinks
    },
  ];

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMobileLinkClick = (path) => {
    closeAll();
  };

  const isDropdownActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.dropdown) {
      return item.dropdown.some(link => link.path === location.pathname);
    }
    return false;
  };

  return (
    <nav
      className={`py-2 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "fixed bg-background/95 backdrop-blur-md shadow-soft fixed py-2" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" onClick={closeAll}>
            <div className="font-serif text-2xl font-bold text-primary">
              <Logo/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        isDropdownActive(item) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div style={{zIndex:"1"}} className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 animate-in slide-in-from-top-5 duration-200">
                        {item.dropdown.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                              location.pathname === link.path 
                                ? "bg-primary/10 text-primary" 
                                : "text-foreground"
                            }`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setOpenDropdown(null)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Location
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu - FIXED VERSION */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border  animate-in slide-in-from-top-5 duration-200">
            {navItems.map((item) => (
              <div key={item.name} className="px-2">
                {item.dropdown ? (
                  <div className="py-2">
                    {/* Mobile dropdown header - shows the main category */}
                    <div className={`text-sm font-medium py-2 ${
                      isDropdownActive(item) ? "text-primary" : "text-foreground"
                    }`}>
                      {item.name}
                    </div>
                    
                    {/* Mobile dropdown links - ALWAYS VISIBLE in mobile */}
                    <div className="pl-4 space-y-2 border-l border-border">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={closeAll}
                          className={`block py-1 text-sm ${
                            location.pathname === link.path 
                              ? "text-primary font-medium" 
                              : "text-foreground"
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className={`block text-sm font-medium py-2 ${
                      location.pathname === item.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="px-4 py-2">
              <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Location
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;  