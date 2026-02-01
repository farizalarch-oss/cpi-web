import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HoverImage } from "@/components/ui/HoverImage";

import heroHoneyImg from "@/assets/product-honey-new.jpg";
import forestHoneyImg from "@/assets/honey-forest.jpg";
import blackHoneyImg from "@/assets/honey-black.jpg";
import multifloraHoneyImg from "@/assets/honey-multiflora.jpg";

const Honey = () => {
  return (
    <Layout headerTheme="honey">
      {/* ================= HERO ================= */}
      <section className="py-24 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <HoverImage
              src={heroHoneyImg}
              alt="Premium Indonesian Forest Honey"
              badge={
                <div className="bg-honey rounded-2xl p-6 shadow-large">
                  <div className="text-accent-foreground font-heading font-bold text-2xl">
                    Export
                  </div>
                  <div className="text-accent-foreground/80">Quality</div>
                </div>
              }
            />

            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                Premium Indonesian Forest Honey
              </h1>
              <p className="text-muted-foreground mb-6">
                Raw • Unheated • Export-Ready
              </p>

              <p className="text-muted-foreground mb-4">
                Creative Products Indonesia is a trusted Indonesian exporter
                specializing in authentic wild forest honey sourced directly
                from Indonesia’s tropical rainforests. Our honey is harvested
                from wild forest beehives, not farmed or industrial apiaries,
                ensuring its natural purity and unique botanical character.
              </p>

              <p className="text-muted-foreground mb-4">
                To preserve its natural quality, our honey is never heated at any
                stage of processing. We apply simple natural filtration and
                hygienic filling only, allowing the honey’s enzymes, nutrients,
                and bioactive compounds to remain intact.
              </p>

              <p className="text-muted-foreground mb-6">
                With a monthly production capacity of 10–20 metric tons, we
                provide consistent supply and scalable volume for international
                markets. Our honey brands are already distributed across most
                major cities on Java Island, reflecting strong domestic market
                trust and long-term product acceptance.
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

      {/* ================= VARIETIES ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold mb-12">
            Our Honey Varieties
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* PREMIUM FOREST */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <HoverImage src={forestHoneyImg} heightClass="h-56" />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Premium Forest Honey
                </h3>
                <p className="text-muted-foreground text-sm">
                  Raw forest honey with a smooth natural sweetness and mild
                  floral aroma, harvested from diverse wild forest nectar
                  sources.
                </p>

                <Section title="Processing Method" items={[
                  "Raw & unheated",
                  "Naturally filtered",
                  "No additives or preservatives"
                ]} />

                <Section title="Natural Composition" items={[
                  "Natural glucose & fructose",
                  "Active enzymes (diastase, invertase)",
                  "B-complex vitamins",
                  "Essential minerals"
                ]} />

                <Section title="Key Benefits" items={[
                  "Supports immune system health",
                  "Provides natural daily energy",
                  "Helps maintain digestive balance",
                  "Suitable for long-term daily consumption"
                ]} />
              </div>
            </div>

            {/* BLACK FOREST */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <HoverImage src={blackHoneyImg} heightClass="h-56" />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Black Forest Honey
                </h3>
                <p className="text-muted-foreground text-sm">
                  A naturally dark honey sourced from specific wild forest
                  plants, known for its bold flavor and higher antioxidant
                  content.
                </p>

                <Section title="Processing Method" items={[
                  "Raw & unheated",
                  "Light filtration only",
                  "Enzyme-preserved"
                ]} />

                <Section title="Natural Composition" items={[
                  "High antioxidant levels (phenolics & flavonoids)",
                  "Rich mineral content",
                  "Naturally occurring bioactive compounds"
                ]} />

                <Section title="Key Benefits" items={[
                  "Supports stamina and vitality",
                  "Helps reduce oxidative stress",
                  "Supports cardiovascular health",
                  "Ideal for premium and functional health markets"
                ]} />
              </div>
            </div>

            {/* MULTIFLORA */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <HoverImage src={multifloraHoneyImg} heightClass="h-56" />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Multiflora Forest Honey
                </h3>
                <p className="text-muted-foreground text-sm">
                  Raw honey collected from a wide variety of wild forest
                  flowers, offering a balanced taste and comprehensive
                  nutritional profile.
                </p>

                <Section title="Processing Method" items={[
                  "No heat treatment",
                  "Naturally filtered",
                  "Hygienic filling process"
                ]} />

                <Section title="Natural Composition" items={[
                  "Natural carbohydrates",
                  "Amino acids",
                  "Vitamins and minerals",
                  "Natural antibacterial properties"
                ]} />

                <Section title="Key Benefits" items={[
                  "Supports immune defense",
                  "Aids body recovery and endurance",
                  "Promotes healthy metabolism and skin",
                  "Suitable for family consumption and food applications"
                ]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="py-24 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Quality Assurance & Certification
          </h2>

          <p className="text-muted-foreground mb-10">
            All honey products from Creative Products Indonesia are supported by
            Certificate of Analysis (COA) and NKV (Veterinary Control Number)
            certification, issued by authorized Indonesian institutions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InfoBox title="Certificate of Analysis (COA)" items={[
              "Moisture content",
              "HMF (Hydroxymethylfurfural)",
              "Diastase activity (enzyme level)",
              "Microbiological safety",
              "Purity indicators"
            ]} />

            <InfoBox title="NKV (Veterinary Control Number)" items={[
              "Strict hygiene and sanitation standards",
              "Good Manufacturing Practices (GMP)",
              "Safe for human consumption and export"
            ]} />
          </div>
        </div>
      </section>

      {/* ================= EXPORT ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-8">
            Export Readiness & Commitment
          </h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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

/* ===== SMALL HELPERS (NO LOGIC CHANGE) ===== */
const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
);

const InfoBox = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white border border-honey/20 rounded-xl p-6 shadow-soft">
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
);

export default Honey;
