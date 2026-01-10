import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Send,
  Clock,
  Building2,
} from "lucide-react";
import { companyInfo } from "@/lib/companyInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for your inquiry! We will respond within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Have questions about our products or interested in becoming a partner? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Country *
                      </label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry, product requirements, or any questions you have..."
                      rows={6}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="forest"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href={companyInfo.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-forest/10 rounded-lg hover:bg-forest/20 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">
                        {companyInfo.contact.whatsapp}
                      </div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="flex items-center gap-3 p-3 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-forest-dark" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">
                        {companyInfo.contact.email}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-forest" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 1:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Times shown in Western Indonesia Time (WIB/GMT+7)
                </p>
              </div>

              {/* Website */}
              <div className="bg-forest rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-gold" />
                  <h3 className="font-heading font-semibold text-lg text-primary-foreground">
                    Website
                  </h3>
                </div>
                <p className="text-primary-foreground/80">
                  www.cpi-indonesia.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-gold font-medium text-sm tracking-wide uppercase mb-4">
              Our Offices
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {companyInfo.offices.map((office, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-gold text-sm font-medium">{office.type}</span>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      {office.city}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-forest flex-shrink-0" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-forest" />
                    <a 
                      href={companyInfo.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-forest" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-soft max-w-4xl mx-auto">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map will be displayed here
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Semarang, Central Java, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
