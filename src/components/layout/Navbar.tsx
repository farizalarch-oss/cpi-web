import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-cpi.png";
import { companyInfo } from "@/lib/companyInfo";
import { productThemes } from "@/lib/productData";
const navItems = [{
  name: "Home",
  path: "/"
}, {
  name: "About Us",
  path: "/about"
}, {
  name: "Products",
  path: "/products"
}, {
  name: "News",
  path: "/news"
}, {
  name: "Why Us",
  path: "/why-us"
}, {
  name: "Certifications",
  path: "/certifications"
}, {
  name: "Contact",
  path: "/contact"
}];
interface NavbarProps {
  headerTheme?: string;
}
export const Navbar = ({
  headerTheme
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-based header styles
  const getHeaderBg = () => {
    if (isScrolled) return "bg-white text-blue-800 shadow-md opacity-90 backdrop-blur translate-y-0";
    return "bg-transparent text-white opacity-100 translate-y-0";
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out", getHeaderBg())}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              alt="PT. Creative Products Indonesia" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
              src={logoImg} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <Link key={item.path} to={item.path} className={cn("px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300", location.pathname === item.path ? isScrolled ? "bg-blue-100 text-blue-800" : "bg-white/20 text-white backdrop-blur-sm" : isScrolled ? "text-blue-800 hover:bg-blue-50" : "text-white/90 hover:bg-white/10")}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild variant={isScrolled ? "default" : "hero"} size="lg">
              <a href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={cn("lg:hidden p-2 rounded-lg transition-colors", isScrolled ? "hover:bg-blue-50" : "hover:bg-white/10")} aria-label="Toggle menu">
            {isOpen ? <X className={cn("w-6 h-6", isScrolled ? "text-blue-800" : "text-white")} /> : <Menu className={cn("w-6 h-6", isScrolled ? "text-blue-800" : "text-white")} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("lg:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-[450px] pb-6" : "max-h-0")}>
          <div className={cn("flex flex-col gap-2 pt-4 rounded-xl p-4", isScrolled ? "bg-white/95 text-blue-800 shadow-md" : "bg-brand-dark/90 backdrop-blur-lg text-white")}>
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={cn("px-4 py-3 rounded-lg font-medium transition-all duration-300", location.pathname === item.path ? isScrolled ? "bg-blue-100 text-blue-800" : "bg-white/20 text-white" : isScrolled ? "text-blue-800 hover:bg-blue-50" : "text-white hover:bg-white/10")}>
                {item.name}
              </Link>)}
            <Button asChild variant={isScrolled ? "default" : "hero"} size="lg" className="mt-4">
              <a href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>;
};
