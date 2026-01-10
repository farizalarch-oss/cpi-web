import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Globe, Building2, Users, Target, Leaf } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We prioritize excellence in every product we export.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to green energy and eco-friendly practices.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships with global partners.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting Indonesian products to worldwide markets.",
  },
];

const offices = [
  {
    city: "Semarang",
    type: "Headquarters",
    address: "Jl. Example Street No. 123, Semarang, Central Java, Indonesia",
  },
  {
    city: "Surabaya",
    type: "Branch Office",
    address: "Jl. Sample Avenue No. 456, Surabaya, East Java, Indonesia",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              PT. Creative Products Indonesia
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              An Indonesian company dedicated to providing high-quality resources and services 
              for overseas customers, with strong commitment to green energy and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Semarang to the World
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in Semarang, Central Java, PT. Creative Products Indonesia (CPI) was born 
                  from a vision to bridge Indonesian quality products with global markets. Our journey 
                  began with a simple mission: to showcase the best of Indonesian craftsmanship and 
                  natural resources to the world.
                </p>
                <p>
                  Today, we proudly represent multiple product lines including premium coconut charcoal 
                  briquettes, organic honey, traditional crafts, and agricultural products. Each product 
                  in our portfolio reflects our commitment to quality, sustainability, and fair trade practices.
                </p>
                <p>
                  With offices in Semarang and Surabaya, we are strategically positioned to serve 
                  international buyers with efficiency and reliability. Our professional team ensures 
                  that every transaction, from inquiry to delivery, meets the highest standards of 
                  business excellence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forest rounded-2xl p-8 text-primary-foreground animate-fade-in-up">
                <div className="text-4xl font-bold font-heading mb-2">10+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="bg-gold rounded-2xl p-8 text-forest-dark animate-fade-in-up animation-delay-100">
                <div className="text-4xl font-bold font-heading mb-2">50+</div>
                <div className="text-forest-dark/80">Export Partners</div>
              </div>
              <div className="bg-earth rounded-2xl p-8 text-primary-foreground animate-fade-in-up animation-delay-200">
                <div className="text-4xl font-bold font-heading mb-2">20+</div>
                <div className="text-primary-foreground/80">Countries Served</div>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground animate-fade-in-up animation-delay-300">
                <div className="text-4xl font-bold font-heading mb-2">100%</div>
                <div className="text-secondary-foreground/80">Quality Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-forest/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-forest transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-forest group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Our Locations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategically Located Across Indonesia
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium">{office.type}</span>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-forest" />
              </div>
              <span className="text-foreground">+62 123 456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-forest" />
              </div>
              <span className="text-foreground">info@cpi-indonesia.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-forest" />
              </div>
              <span className="text-foreground">www.cpi-indonesia.com</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
