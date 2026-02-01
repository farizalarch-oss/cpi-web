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
      <section className="py-24 bg-honey-muted">
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
                  alt="Premium Indonesian Forest Honey"
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
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Premium Indonesian Forest Honey
              </h1>
              <p className="text-muted-foreground mb-4">
                Raw • Unheated • Export-Ready
              </p>
              <p className="text-muted-foreground mb-6">
                Creative Products Indonesia is a trusted Indonesian exporter
                specializing in authentic wild forest honey sourced directly
                from Indonesia’s tropical rainforests. Our honey is harvested
                from wild forest beehives, not farmed or industrial apiaries,
                ensuring its natural purity and unique botanical character.
              </p>

              <Button asChild variant="hero">
                <Link to="/contact">
                  Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <p className="text-muted-foreground mb-6">
            To preserve its natural quality, our honey is never heated at any
            stage of processing. We apply simple natural filtration and hygienic
            filling only, allowing the honey’s enzymes, nutrients, and bioactive
            compounds to remain intact.
          </p>
          <p className="text-muted-foreground">
            With a monthly production capacity of 10–20 metric tons, we provide
            consistent supply and scalable volume for international markets.
            Our honey brands are already distributed across most major cities on
            Java Island, reflecting strong domestic market trust and long-term
            product acceptance.
          </p>
        </div>
      </section>

      {/* VARIETIES */}
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold mb-10">
            Our Honey Varieties
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* PREMIUM FOREST */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <img src={forestHoneyImg} className="h-56 w-full object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Premium Forest Honey
                </h3>

                <p className="text-muted-foreground text-sm">
                  Raw forest honey with a smooth natural sweetness and mild
                  floral aroma, harvested from diverse wild forest nectar
                  sources.
                </p>

                <div>
                  <h4 className="font-semibold mb-2">Processing Method</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Raw & unheated</li>
                    <li>Naturally filtered</li>
                    <li>No additives or preservatives</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Natural Composition</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Natural glucose & fructose</li>
                    <li>Active enzymes (diastase, invertase)</li>
                    <li>B-complex vitamins</li>
                    <li>Essential minerals</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Supports immune system health</li>
                    <li>Provides natural daily energy</li>
                    <li>Helps maintain digestive balance</li>
                    <li>Suitable for long-term daily consumption</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BLACK FOREST */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <img src={blackHoneyImg} className="h-56 w-full object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Black Forest Honey
                </h3>

                <p className="text-muted-foreground text-sm">
                  A naturally dark honey sourced from specific wild forest
                  plants, known for its bold flavor and higher antioxidant
                  content.
                </p>

                <div>
                  <h4 className="font-semibold mb-2">Processing Method</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Raw & unheated</li>
                    <li>Light filtration only</li>
                    <li>Enzyme-preserved</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Natural Composition</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>High antioxidant levels (phenolics & flavonoids)</li>
                    <li>Rich mineral content</li>
                    <li>Naturally occurring bioactive compounds</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Supports stamina and vitality</li>
                    <li>Helps reduce oxidative stress</li>
                    <li>Supports cardiovascular health</li>
                    <li>Ideal for premium and functional health markets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MULTIFLORA */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <img src={multifloraHoneyImg} className="h-56 w-full object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Multiflora Forest Honey
                </h3>

                <p className="text-muted-foreground text-sm">
                  Raw honey collected from a wide variety of wild forest
                  flowers, offering a balanced taste and comprehensive
                  nutritional profile.
                </p>

                <div>
                  <h4 className="font-semibold mb-2">Processing Method</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>No heat treatment</li>
                    <li>Naturally filtered</li>
                    <li>Hygienic filling process</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Natural Composition</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Natural carbohydrates</li>
                    <li>Amino acids</li>
                    <li>Vitamins and minerals</li>
                    <li>Natural antibacterial properties</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Benefits</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Supports immune defense</li>
                    <li>Aids body recovery and endurance</li>
                    <li>Promotes healthy metabolism and skin</li>
                    <li>Suitable for family consumption and food applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATION */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Quality Assurance & Certification
          </h2>

          <p className="text-muted-foreground mb-8">
            All honey products from Creative Products Indonesia are supported by
            Certificate of Analysis (COA) and NKV (Veterinary Control Number)
            certification, issued by authorized Indonesian institutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-honey/20 rounded-xl p-6 shadow-soft">
              <h3 className="font-semibold mb-3">Certificate of Analysis (COA)</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Moisture content</li>
                <li>HMF (Hydroxymethylfurfural)</li>
                <li>Diastase activity (enzyme level)</li>
                <li>Microbiological safety</li>
                <li>Purity indicators</li>
              </ul>
            </div>

            <div className="bg-white border border-honey/20 rounded-xl p-6 shadow-soft">
              <h3 className="font-semibold mb-3">
                NKV (Veterinary Control Number)
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Strict hygiene and sanitation standards</li>
                <li>Good Manufacturing Practices (GMP)</li>
                <li>Safe for human consumption and export</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT READINESS */}
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Export Readiness & Commitment
          </h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "100% Wild Forest Honey",
              "Raw & Unheated (Enzyme Preserved)",
              "COA & NKV Certified",
              "Stable Supply: 10–20 Metric Tons / Month",
              "Bulk, Retail & Private Label Ready",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-honey/20 rounded-xl p-4 shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>

          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Request Export Details <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Honey;
