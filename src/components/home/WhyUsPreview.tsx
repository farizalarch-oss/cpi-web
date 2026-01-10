import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Zap, Users, Package, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: Globe,
    title: "Global Standards",
    description: "Local Indonesian products meeting international quality standards.",
  },
  {
    icon: Shield,
    title: "Integrity-Based",
    description: "Transparent and honest production processes you can trust.",
  },
  {
    icon: Heart,
    title: "Affordable Quality",
    description: "Competitive pricing without compromising on product excellence.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Quick response times and efficient delivery worldwide.",
  },
  {
    icon: Package,
    title: "Safe Delivery",
    description: "Product safety and delivery speed guaranteed.",
  },
  {
    icon: Users,
    title: "Flexible Partnership",
    description: "Open for negotiation and personalized solutions.",
  },
];

export const WhyUsPreview = () => {
  return (
    <section className="py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner for Indonesian Export Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              With years of experience in international trade, we bridge the gap between 
              Indonesian craftsmanship and global markets. Our commitment to quality, 
              sustainability, and customer satisfaction sets us apart.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/why-us" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Grid */}
          <div className="grid grid-cols-2 gap-5">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
