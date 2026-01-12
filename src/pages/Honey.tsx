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
                BeeZee Honey Indonesia
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Indonesian Honey
              </h1>
              <p className="text-muted-foreground mb-6">
                Pure, natural honey from Indonesian apiaries meeting international export standards.
              </p>
              <h2 className="font-semibold text-foreground mb-3">Specifications</h2>
              <div className="flex gap-3 mb-6">
                {["140gr", "350gr", "730gr"].map((size) => (
                  <span
                    key={size}
                    className="bg-honey/20 text-honey-dark border border-honey/30 text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    {size}
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
    </Layout>
  );
};

export default Honey;
