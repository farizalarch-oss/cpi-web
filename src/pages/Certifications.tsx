import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, Leaf, CheckCircle2, ArrowRight } from "lucide-react";

const certifications = [
  {
    name: "SUCOFINDO",
    fullName: "SUCOFINDO Certified P-IRT",
    description: "Independent inspection and testing certification ensuring product quality and compliance with Indonesian export standards.",
    icon: Shield,
    color: "bg-forest",
  },
  {
    name: "Export Quality",
    fullName: "Export Quality Standard",
    description: "Products meet international export quality requirements for global market distribution.",
    icon: Award,
    color: "bg-gold",
  },
  {
    name: "MUI Halal",
    fullName: "MUI Halal Certification",
    description: "Certified halal by the Indonesian Ulema Council, ensuring compliance with Islamic dietary standards.",
    icon: CheckCircle2,
    color: "bg-forest",
  },
  {
    name: "BPOM",
    fullName: "BPOM Registered",
    description: "Registered with the Indonesian Food and Drug Administration for food safety compliance.",
    icon: Shield,
    color: "bg-earth",
  },
  {
    name: "FDA",
    fullName: "FDA Compliant",
    description: "Products prepared according to FDA standards for US market entry requirements.",
    icon: Award,
    color: "bg-forest-light",
  },
  {
    name: "Organic",
    fullName: "Organic Certification",
    description: "Select products certified organic, grown without synthetic pesticides or fertilizers.",
    icon: Leaf,
    color: "bg-gold",
  },
];

const qualityProcess = [
  {
    step: "01",
    title: "Raw Material Selection",
    description: "Careful selection of raw materials from trusted local suppliers.",
  },
  {
    step: "02",
    title: "Quality Control",
    description: "Rigorous testing at every stage of production.",
  },
  {
    step: "03",
    title: "Processing Standards",
    description: "Modern processing facilities meeting international standards.",
  },
  {
    step: "04",
    title: "Final Inspection",
    description: "Comprehensive final quality check before packaging.",
  },
  {
    step: "05",
    title: "Export Documentation",
    description: "Complete documentation for smooth international shipping.",
  },
];

const Certifications = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Certifications
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Quality You Can Trust
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Our products meet rigorous international standards, backed by recognized 
              certifications that ensure quality, safety, and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Our Certifications
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Internationally Recognized Standards
            </h2>
            <p className="text-muted-foreground text-lg">
              Each certification represents our commitment to quality and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in-up border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <cert.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="inline-block bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {cert.name}
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {cert.fullName}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Quality Assurance
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Quality Control Process
            </h2>
            <p className="text-muted-foreground text-lg">
              Every product goes through a comprehensive quality assurance journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {qualityProcess.map((process, index) => (
                  <div
                    key={index}
                    className="relative flex gap-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-forest rounded-2xl flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-primary-foreground font-heading font-bold text-lg">
                        {process.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="bg-card rounded-xl p-6 flex-1 shadow-soft">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Partners Worldwide
            </h2>
            <p className="text-muted-foreground text-lg">
              Our certifications give our international partners confidence in every shipment.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-background rounded-xl px-6 py-4 shadow-soft flex items-center gap-3"
              >
                <cert.icon className="w-5 h-5 text-forest" />
                <span className="font-medium text-foreground">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Partner with a Certified Exporter?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our certifications ensure you receive products that meet the highest 
            international standards. Contact us to learn more.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact" className="flex items-center gap-2">
              Request Certificate Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
