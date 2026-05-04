import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";
  const showDark = isHome && !isScrolled;

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : isHome
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className={`text-2xl font-bold transition-colors ${
              showDark ? "text-white" : "text-primary"
            }`}
          >
            Optireach
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? showDark
                      ? "text-white border-b-2 border-white"
                      : "text-primary border-b-2 border-primary"
                    : showDark
                      ? "text-white/70 hover:text-white"
                      : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/free-audit">
              <Button size="sm" className={showDark ? "bg-white text-slate-900 hover:bg-blue-50" : ""}>
                Free Audit
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={showDark ? "text-white" : "text-gray-900"} />
            ) : (
              <Menu size={24} className={showDark ? "text-white" : "text-gray-900"} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-lg mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-primary/5 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2 pb-1">
              <Link to="/free-audit">
                <Button className="w-full" size="sm">Free Audit</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
