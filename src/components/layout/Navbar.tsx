import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-cpi.png";
import { companyInfo } from "@/lib/companyInfo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "News", path: "/news" },
  { name: "Why Us", path: "/why-us" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

interface NavbarProps {
  headerTheme?: string;
}

export const Navbar = ({ headerTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* HEADER BG */
  const getHeaderBg = () => {
    if (isScrolled)
      return "bg-white text-[#5A3A1E] shadow-md opacity-95 backdrop-blur";
    return "bg-transparent text-[#5A3A1E] opacity-100";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        getHeaderBg()
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoImg}
              alt="PT. Creative Products Indonesia"
              className="
                h-12 w-auto
                transition-all duration-300
                group-hover:scale-105
                drop-shadow-[0_0_6px_rgba(160,110,40,0.4)]
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                  location.pathname === item.path
                    ? isScrolled
                      ? "bg-honey/20 text-[#5A3A1E]"
                      : "bg-honey/20 text-[#5A3A1E]"
                    : isScrolled
                    ? "text-[#5A3A1E] hover:bg-honey/10 hover:text-honey"
                    : "text-[#5A3A1E] hover:bg-honey/10 hover:text-honey"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden lg:block">
            <Button asChild variant="hero" size="lg">
              <a
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              "hover:bg-honey/20"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#5A3A1E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#5A3A1E]" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[450px] pb-6" : "max-h-0"
          )}
        >
          <div
            className="
              flex flex-col gap-2 pt-4 p-4 rounded-xl
              bg-white/95 text-[#5A3A1E]
              shadow-md
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-honey/20 text-[#5A3A1E]"
                    : "hover:bg-honey/10 hover:text-honey"
                )}
              >
                {item.name}
              </Link>
            ))}

            <Button asChild variant="hero" size="lg" className="mt-4">
              <a
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
