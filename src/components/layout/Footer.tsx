import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { companyInfo } from "@/lib/companyInfo";
import logoImg from "@/assets/logo-cpi.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Why Us", path: "/why-us" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

const productCategories = [
  { name: "Coconut Charcoal", path: "/products/coconut-charcoal-briquette" },
  { name: "BeeZee Honey", path: "/products/beezee-honey" },
  { name: "Nusantaraya Crafts", path: "/products/nusantaraya" },
  { name: "Desiccated Coconut", path: "/products/desiccated-coconut" },
  { name: "Seafood", path: "/products/seafood" },
];

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logoImg} 
                alt={companyInfo.name} 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              From Local to Global — Connecting our customers with high-quality, sustainable Indonesian products for the international market.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-6">Our Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product.path}>
                  <Link
                    to={product.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  {companyInfo.offices[0].address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={companyInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} PT. Creative Products Indonesia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
