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

  // Get theme-based header background
  const getHeaderBg = () => {
    if (isScrolled) return "bg-card/98 backdrop-blur-xl border-b border-border shadow-soft";
    if (headerTheme && productThemes[headerTheme as keyof typeof productThemes]) {
      return productThemes[headerTheme as keyof typeof productThemes].headerBg;
    }
    return "bg-transparent";
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", getHeaderBg())}>
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
            {navItems.map(item => <Link key={item.path} to={item.path} className={cn("px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300", location.pathname === item.path ? isScrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm" : isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground/90 hover:bg-primary-foreground/10")}>
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
          <button onClick={() => setIsOpen(!isOpen)} className={cn("lg:hidden p-2 rounded-lg transition-colors", isScrolled ? "hover:bg-secondary" : "hover:bg-primary-foreground/10")} aria-label="Toggle menu">
            {isOpen ? <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} /> : <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("lg:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-[450px] pb-6" : "max-h-0")}>
          <div className={cn("flex flex-col gap-2 pt-4 rounded-xl p-4", isScrolled ? "" : "bg-brand-dark/90 backdrop-blur-lg")}>
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={cn("px-4 py-3 rounded-lg font-medium transition-all duration-300", location.pathname === item.path ? "bg-primary text-primary-foreground" : isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10")}>
                {item.name}
              </Link>)}
            <Button asChild variant="hero" size="lg" className="mt-4">
              <a href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>;
};