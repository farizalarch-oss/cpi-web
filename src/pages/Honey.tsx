import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import heroHoneyImg from "@/assets/product-honey-new.jpg";
import forestHoneyImg from "@/assets/honey-forest.jpg";
import blackHoneyImg from "@/assets/honey-black.jpg";
import multifloraHoneyImg from "@/assets/honey-multiflora.jpg";

const Honey = () => {
  return (
    <Layout headerTheme="honey">
      {/* HERO */}
      <section className="py-24 bg-honey-muted transition-colors duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={heroHoneyImg}
                  alt="Indonesian Forest Honey"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-honey rounded-2xl p-6 shadow-large">
                <div className="text-accent-foreground font-heading font-bold text-2xl">
                  Export
                </div>
                <div className="text-accent-foreground/80">Quality</div>
              </div>
            </div>

            <div>
              <span className="inline-block text-honey-dark font-semibold text-sm tracking-widest uppercase mb-4">
                Creative Products Indonesia
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Indonesian Forest Honey
              </h1>
              <p className="text-muted-foreground mb-6">
                Raw, unheated, and export-ready honey harvested from wild forest beehives in
                Indonesia’s tropical rainforests.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {["Raw", "Unheated", "Export-Ready"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-honey/20 text-honey-dark border border-honey/30 text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button asChild variant="hero">
                <Link to="/contact">
                  Inquire Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ORIGIN & PROCESS */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Wild Forest Origin, Natural Purity
            </h2>
            <p className="text-muted-foreground mb-6">
              Harvested from wild forest beehives, not farmed or industrial apiaries,
              preserving natural purity and unique botanical character.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Wild forest beehives</li>
              <li>Diverse forest nectar sources</li>
              <li>Authentic Indonesian origin</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">
              Processing Method
            </h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Raw & unheated throughout processing</li>
              <li>Naturally filtered</li>
              <li>No additives or preservatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAPACITY & EXPORT */}
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Capacity & Market Presence
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>10–20 metric tons monthly capacity</li>
              <li>Stable bulk & branded supply</li>
              <li>Distributed across major cities on Java Island</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">
              Export Readiness
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "100% Wild Forest Honey",
                "Raw & Unheated",
                "COA & NKV Certified",
                "Private Label Ready",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-honey/20 rounded-xl p-4 shadow-soft"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VARIETIES */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10">
            Honey Varieties
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Premium Forest */}
            <div className="border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <img src={forestHoneyImg} alt="Premium Forest Honey" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  Premium Forest Honey
                </h3>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>Raw & unheated</li>
                  <li>Mild floral aroma</li>
                  <li>Daily consumption</li>
                </ul>
              </div>
            </div>

            {/* Black Forest */}
            <div className="border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <img src={blackHoneyImg} alt="Black Forest Honey" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  Black Forest Honey
                </h3>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>High antioxidant</li>
                  <li>Bold flavor</li>
                  <li>Functional health markets</li>
                </ul>
              </div>
            </div>

            {/* Multiflora */}
            <div className="border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <img src={multifloraHoneyImg} alt="Multiflora Forest Honey" className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  Multiflora Forest Honey
                </h3>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>Balanced taste</li>
                  <li>Family consumption</li>
                  <li>Food applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Request Export Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Honey;
