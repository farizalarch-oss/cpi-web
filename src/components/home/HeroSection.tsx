import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Leaf, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Indonesian export landscape with coconut plantation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2.5 mb-8"
          >
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium tracking-wide">From Local to Global</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-8"
          >
            Connecting Our Customers with{" "}
            <span className="text-accent">High Quality Products</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl"
          >
            Professional & Dedicated Team of Creative Products Indonesia — 
            Your trusted partner for sustainable, export-ready Indonesian products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/products" className="flex items-center gap-2">
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-8"
          >
            {[
              { icon: Shield, label: "Export Certified" },
              { icon: Leaf, label: "Eco-Friendly" },
              { icon: Globe, label: "Global Reach" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-11 h-11 bg-primary-foreground/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-primary-foreground/80 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
