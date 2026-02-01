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
      {/* HERO */}
      <section className="py-24 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* HERO IMAGE WITH HOVER */}
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
              <HoverImage
                src={forestHoneyImg}
                alt="Premium Forest Honey"
                heightClass="h-56"
              />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Premium Forest Honey
                </h3>
                <p className="text-muted-foreground text-sm">
                  Raw forest honey with a smooth natural sweetness and mild
                  floral aroma, harvested from diverse wild forest nectar
                  sources.
                </p>
              </div>
            </div>

            {/* BLACK FOREST */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <HoverImage
                src={blackHoneyImg}
                alt="Black Forest Honey"
                heightClass="h-56"
              />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Black Forest Honey
                </h3>
                <p className="text-muted-foreground text-sm">
                  A naturally dark honey sourced from specific wild forest
                  plants, known for its bold flavor and higher antioxidant
                  content.
                </p>
              </div>
            </div>

            {/* MULTIFLORA */}
            <div className="bg-white border border-honey/20 rounded-2xl overflow-hidden shadow-soft">
              <HoverImage
                src={multifloraHoneyImg}
                alt="Multiflora Forest Honey"
                heightClass="h-56"
              />
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold">
                  🍯 Multiflora Forest Honey
                </h3>
                <p className="text-muted-foreground text-sm">
                  Raw honey collected from a wide variety of wild forest
                  flowers, offering a balanced taste and comprehensive
                  nutritional profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT CTA */}
      <section className="py-20 bg-honey-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
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
