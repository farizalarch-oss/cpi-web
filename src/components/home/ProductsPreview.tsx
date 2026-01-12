import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import charcoalImg from "@/assets/product-charcoal-new.jpg";
import honeyImg from "@/assets/product-honey-new.jpg";
import craftsImg from "@/assets/product-batik.png";

const products = [
  {
    id: 1,
    name: "Coconut Charcoal Briquette",
    slug: "charcoal-briquette",
    category: "CPI Main Catalog",
    description:
      "Premium quality coconut shell charcoal for BBQ and hookah. Custom grades and shapes available.",
    image: charcoalImg,
    features: ["Ash < 2.5%", "7,200+ Calories", "2hr Burn Time"],
    accent: "charcoal",
  },
  {
    id: 2,
    name: "BeeZee Premium Honey",
    slug: "honey",
    category: "BeeZee Honey Indonesia",
    description:
      "Pure and black honey varieties from Indonesian beekeepers. Export quality with monthly production capacity.",
    image: honeyImg,
    features: ["Pure Natural", "Export Quality", "Multiple Sizes"],
    accent: "honey",
  },
  {
    id: 3,
    name: "Nusantaraya Crafts",
    slug: "nusantara-crafts",
    category: "Nusantaraya",
    description:
      "Authentic Indonesian arts & crafts including batik products, animal figurines, and handmade accessories.",
    image: craftsImg,
    features: ["Handmade", "Batik Art", "Cultural Heritage"],
    accent: "batik",
  },
];

const accentStyles = {
  charcoal: {
    badge: "bg-charcoal text-primary-foreground",
    tag: "bg-charcoal-muted text-charcoal",
    link: "text-charcoal hover:text-charcoal-light",
  },
  honey: {
    badge: "bg-honey text-accent-foreground",
    tag: "bg-honey-muted text-honey-dark",
    link: "text-honey-dark hover:text-honey",
  },
  batik: {
    badge: "bg-batik text-primary-foreground",
    tag: "bg-batik-muted text-batik",
    link: "text-batik hover:text-batik-light",
  },
};

export const ProductsPreview = () => {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Premium Indonesian Export Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our range of sustainable, high-quality products crafted for the global market.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const styles = accentStyles[product.accent as keyof typeof accentStyles];

            const linkTo =
              product.accent === "honey"
                ? "/honey"
                : `/products/${product.slug}`;

            const buttonLabel =
              product.accent === "honey" ? "View Details" : "Learn More";

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 border border-border/50"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${styles.badge} text-xs font-semibold px-3 py-1.5 rounded-full`}
                    >
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className={`${styles.tag} text-xs font-medium px-3 py-1 rounded-full`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={linkTo}
                    className={`inline-flex items-center gap-2 ${styles.link} font-semibold text-sm transition-colors duration-300`}
                  >
                    {buttonLabel}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button asChild variant="default" size="lg">
            <Link to="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
