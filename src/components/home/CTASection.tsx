import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/companyInfo";

export const CTASection = () => {
  return (
    <section className="py-28 bg-gradient-hero relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Partner with Us?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 leading-relaxed">
            Let's discuss how we can help bring Indonesian quality products to your market. 
            Our team is ready to assist with your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <a 
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <a
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
