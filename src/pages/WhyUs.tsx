import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Shield,
  Heart,
  Zap,
  Package,
  Users,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "International Standards",
    description:
      "Local Indonesian products manufactured and processed to meet rigorous international quality standards. Every product undergoes strict quality control before export.",
    color: "bg-forest",
  },
  {
    icon: Shield,
    title: "Integrity-Based Production",
    description:
      "Transparent and honest production processes from sourcing to delivery. We maintain complete traceability and documentation for all our products.",
    color: "bg-gold",
  },
  {
    icon: Heart,
    title: "Affordable Pricing",
    description:
      "Competitive pricing structure that delivers maximum value without compromising on quality. Direct sourcing means better prices for our partners.",
    color: "bg-earth",
  },
  {
    icon: Zap,
    title: "Fast & Friendly Service",
    description:
      "Quick response times and dedicated customer service team ready to assist. We understand the importance of time in international trade.",
    color: "bg-forest-light",
  },
  {
    icon: Package,
    title: "Safe Delivery Guaranteed",
    description:
      "Product safety and delivery speed guaranteed with reliable logistics partners. Proper packaging and documentation for smooth customs clearance.",
    color: "bg-gold",
  },
  {
    icon: Handshake,
    title: "Flexible Partnership",
    description:
      "Open for negotiation and personalization of orders. We work with you to customize products according to your market requirements.",
    color: "bg-earth",
  },
];

const achievements = [
  { number: "10+", label: "Years of Experience" },
  { number: "50+", label: "Global Partners" },
  { number: "20+", label: "Countries Served" },
  { number: "1000+", label: "Successful Shipments" },
];

const commitments = [
  "Quality assurance on every product",
  "Competitive and transparent pricing",
  "Reliable and timely delivery",
  "Responsive customer support",
  "Eco-friendly packaging options",
  "Flexible payment terms",
  "Custom branding available",
  "Sample orders welcome",
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Why Choose Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Trusted Indonesian Export Partner
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Discover why businesses worldwide trust PT. Creative Products Indonesia 
              for their Indonesian product sourcing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-forest mb-2">
                  {item.number}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Our Advantages
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground text-lg">
              We combine Indonesian craftsmanship with international business standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 ${reason.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Experience */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
                Global Experience
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proven Track Record in International Trade
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With years of experience serving clients across multiple continents, 
                we understand the nuances of international trade. From documentation 
                to logistics, we handle every aspect of export with expertise.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Expert knowledge of export regulations",
                  "Established relationships with freight forwarders",
                  "Experience with various international markets",
                  "Multi-language customer support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-forest" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="forest" size="lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Partnership
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-large">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-forest" />
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  Our Commitment to You
                </h3>
              </div>
              <ul className="space-y-4">
                {commitments.map((commitment, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience the CPI Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing network of satisfied international partners. 
            Let us help bring Indonesian excellence to your market.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
