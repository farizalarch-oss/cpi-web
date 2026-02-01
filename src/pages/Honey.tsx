import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import honeyImg from "@/assets/product-honey-new.jpg";

const Honey = () => {
  return (
    <Layout headerTheme="honey">
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
                  src={honeyImg}
                  alt="Beezee Honey Indonesia"
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Wild Forest Origin, Natural Purity
              </h2>
              <p className="text-muted-foreground mb-6">
                Creative Products Indonesia is a trusted Indonesian exporter of authentic wild forest
                honey sourced directly from tropical rainforests. Harvesting comes from wild forest
                beehives, not farmed or industrial apiaries, preserving natural purity and unique
                botanical character.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Wild forest beehives, not farmed or industrial apiaries.</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Distinct flavor profiles shaped by diverse forest nectar.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                Processing Method
              </h3>
              <p className="text-muted-foreground mb-6">
                To preserve natural quality, honey is never heated at any stage. We apply simple
                natural filtration and hygienic filling only, keeping enzymes, nutrients, and
                bioactive compounds intact.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Raw and unheated throughout processing.</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Naturally filtered with hygienic filling only.</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>No additives or preservatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Capacity & Market Presence
              </h2>
              <p className="text-muted-foreground mb-6">
                Monthly production capacity reaches 10–20 metric tons, supporting consistent supply
                and scalable volume for international markets.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Stable supply for bulk and branded programs.</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Established distribution across most major cities on Java Island.</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-honey" />
                  <p>Proven domestic market trust and long-term product acceptance.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                Export Readiness
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "100% Wild Forest Honey",
                  "Raw & Unheated (Enzyme Preserved)",
                  "COA & NKV Certified",
                  "Stable Supply: 10–20 Metric Tons / Month",
                  "Bulk, Retail & Private Label Ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-honey/20 bg-white p-4 shadow-soft"
                  >
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Honey Varieties
            </h2>
            <p className="text-muted-foreground">
              Three forest-sourced profiles with distinct flavor, composition, and benefit focus.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-honey/20 p-6 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Premium Forest Honey
              </h3>
              <p className="text-muted-foreground mb-4">
                Raw forest honey with smooth natural sweetness and a mild floral aroma from diverse
                wild forest nectar sources.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Processing Method</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Raw and unheated</li>
                  <li>Naturally filtered</li>
                  <li>No additives or preservatives</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Natural Composition</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Natural glucose and fructose</li>
                  <li>Active enzymes (diastase, invertase)</li>
                  <li>B-complex vitamins and essential minerals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Supports immune system health</li>
                  <li>Provides natural daily energy</li>
                  <li>Helps maintain digestive balance</li>
                  <li>Suitable for long-term daily consumption</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-honey/20 p-6 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Black Forest Honey
              </h3>
              <p className="text-muted-foreground mb-4">
                Naturally dark honey sourced from specific wild forest plants, known for bold flavor
                and higher antioxidant content.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Processing Method</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Raw and unheated</li>
                  <li>Light filtration only</li>
                  <li>Enzyme-preserved</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Natural Composition</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>High antioxidant levels (phenolics and flavonoids)</li>
                  <li>Rich mineral content</li>
                  <li>Naturally occurring bioactive compounds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Supports stamina and vitality</li>
                  <li>Helps reduce oxidative stress</li>
                  <li>Supports cardiovascular health</li>
                  <li>Ideal for premium and functional health markets</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-honey/20 p-6 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Multiflora Forest Honey
              </h3>
              <p className="text-muted-foreground mb-4">
                Raw honey collected from a wide variety of wild forest flowers, offering balanced
                taste and a comprehensive nutritional profile.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Processing Method</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>No heat treatment</li>
                  <li>Naturally filtered</li>
                  <li>Hygienic filling process</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Natural Composition</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Natural carbohydrates</li>
                  <li>Amino acids</li>
                  <li>Vitamins, minerals, and natural antibacterial properties</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Key Benefits</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Supports immune defense</li>
                  <li>Aids body recovery and endurance</li>
                  <li>Promotes healthy metabolism and skin</li>
                  <li>Suitable for family consumption and food applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quality Assurance & Certification
              </h2>
              <p className="text-muted-foreground mb-6">
                All honey products are supported by a Certificate of Analysis (COA) and NKV
                (Veterinary Control Number) certification issued by authorized Indonesian
                institutions.
              </p>
              <div className="space-y-4">
                <div className="rounded-xl border border-honey/20 bg-white p-5 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">Certificate of Analysis (COA)</h3>
                  <p className="text-muted-foreground mb-3">
                    Laboratory-based verification of product quality and safety, covering key
                    analytical parameters:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Moisture content</li>
                    <li>HMF (Hydroxymethylfurfural)</li>
                    <li>Diastase activity (enzyme level)</li>
                    <li>Microbiological safety and purity indicators</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    This enables transparent quality evaluation and aligns with global honey trade
                    requirements.
                  </p>
                </div>
                <div className="rounded-xl border border-honey/20 bg-white p-5 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">NKV (Veterinary Control Number)</h3>
                  <p className="text-muted-foreground mb-3">
                    Official Indonesian government certification confirming:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Processing facilities meet strict hygiene and sanitation standards</li>
                    <li>Production follows Good Manufacturing Practices (GMP)</li>
                    <li>Products are safe for human consumption and export</li>
                  </ul>
                  <p className="text-muted-foreground mt-3">
                    For overseas buyers, NKV demonstrates compliance with controlled processing and
                    hygiene standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-honey/20 bg-white p-8 shadow-soft h-fit">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Export Supply Snapshot
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monthly capacity</span>
                  <span className="font-medium text-foreground">10–20 metric tons</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing</span>
                  <span className="font-medium text-foreground">Raw & unheated</span>
                </div>
                <div className="flex justify-between">
                  <span>Certifications</span>
                  <span className="font-medium text-foreground">COA, NKV</span>
                </div>
                <div className="flex justify-between">
                  <span>Supply formats</span>
                  <span className="font-medium text-foreground">Bulk, retail, private label</span>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild variant="hero">
                  <Link to="/contact">
                    Request Export Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Honey;
