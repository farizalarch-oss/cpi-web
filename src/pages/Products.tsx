import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, Flame, Droplet, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { HoverImage } from "@/components/ui/HoverImage";

import charcoalImg from "@/assets/product-charcoal-new.jpg";
import copraImg from "@/assets/product-copra-new.jpg";
import desiccatedImg from "@/assets/product-desiccated.png";
import sweetpotatoImg from "@/assets/product-sweetpotato-new.jpg";
import cinnamonImg from "@/assets/product-cinnamon.png";
import vanillaImg from "@/assets/product-vanilla.jpg";
import honeyImg from "@/assets/product-honey-new.jpg";

const cpiProducts = [
  {
    id: "honey",
    slug: "honey",
    name: "BeeZee Premium Honey",
    image: honeyImg,
    description:
      "Pure and black honey varieties from Indonesian beekeepers. Export quality with monthly production capacity.",
    specs: ["140gr", "350gr", "730gr", "Pure Natural"],
    features: ["Export Quality", "Multiple Sizes", "Monthly Supply"],
    icon: Droplet,
    bgClass: "bg-honey-muted",
    accentClass: "bg-honey text-primary-foreground",
    tagClass: "bg-honey/20 text-honey-dark",
  },
  {
    id: "charcoal",
    slug: "coconut-charcoal-briquette",
    name: "Coconut Charcoal Briquette",
    image: charcoalImg,
    description:
      "Premium coconut shell charcoal briquettes ideal for BBQ, hookah/shisha, and industrial applications.",
    specs: [
      "Ash content: Max 2.5%",
      "Calories: > 7,200",
      "Fixed carbon: Max 80%",
      "Burn time: Up to 2 hours",
    ],
    features: ["Export Quality", "Custom Shapes", "Bulk Orders"],
    icon: Flame,
    bgClass: "bg-charcoal-muted",
    accentClass: "bg-charcoal text-primary-foreground",
    tagClass: "bg-charcoal/10 text-charcoal",
  },
  {
    id: "copra",
    slug: "copra",
    name: "Copra (Dried Coconut Meat)",
    image: copraImg,
    description:
      "High-quality dried coconut meat sourced from Indonesian coconut farms for oil production.",
    specs: ["Water content: 5%", "Oil content: 65–70%", "Clean processing"],
    features: ["Food Grade", "Bulk Supply", "Export Quality"],
    icon: Droplet,
    bgClass: "bg-coconut-muted",
    accentClass: "bg-coconut-dark text-primary-foreground",
    tagClass: "bg-coconut-dark/10 text-coconut-dark",
  },
  {
    id: "desiccated-coconut",
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    image: desiccatedImg,
    description:
      "Export-grade desiccated coconut suitable for international food industries.",
    specs: ["Fine & medium grade", "Low moisture", "Pure white", "No additives"],
    features: ["Food Grade", "Export Quality", "Bulk Supply"],
    icon: Droplet,
    bgClass: "bg-coconut-muted",
    accentClass: "bg-coconut-dark text-primary-foreground",
    tagClass: "bg-coconut-dark/10 text-coconut-dark",
  },
  {
    id: "sweetpotato",
    slug: "japanese-sweet-potato",
    name: "Japanese Sweet Potato (Beniazuma)",
    image: sweetpotatoImg,
    description:
      "Premium Beniazuma sweet potatoes with purple skin and sweet yellow flesh.",
    specs: ["Beniazuma variety", "Purple skin", "Yellow flesh"],
    features: ["Fresh Harvest", "Export Quality"],
    icon: Leaf,
    bgClass: "bg-potato-muted",
    accentClass: "bg-potato text-primary-foreground",
    tagClass: "bg-potato/10 text-potato",
  },
];

const spiceProducts = [
  {
    id: "cinnamon",
    slug: "cinnamon",
    name: "Cinnamon",
    image: cinnamonImg,
    description:
      "Premium Indonesian cinnamon available in powder and stick form.",
    bgClass: "bg-spice-muted",
  },
  {
    id: "vanilla",
    slug: "vanilla",
    name: "Vanilla",
    image: vanillaImg,
    description:
      "Premium export-grade vanilla beans sourced from Indonesian plantations.",
    bgClass: "bg-vanilla-muted",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* HERO */}
      <section className="py-32 bg-gradient-hero text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Premium Indonesian Export Products
        </h1>
        <p className="text-primary-foreground/80">
          Sustainable, high-quality products for global markets
        </p>
      </section>

      {/* MAIN PRODUCTS */}
      {cpiProducts.map((product, index) => (
        <section
          key={product.id}
          className={`py-24 ${product.bgClass}`}
        >
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE WITH HOVER */}
            <div className={index % 2 ? "lg:order-2" : ""}>
              <div className="relative">
                <HoverImage
                  src={product.image}
                  alt={product.name}
                  heightClass="h-80"
                />
                <div className="absolute top-4 left-4 z-30">
                  <div
                    className={`w-12 h-12 ${product.accentClass} rounded-xl flex items-center justify-center`}
                  >
                    <product.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="font-heading text-3xl font-bold mb-4">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.specs.map((s, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((f, i) => (
                  <span
                    key={i}
                    className={`${product.tagClass} px-3 py-1 rounded-full text-sm`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {product.id === "honey" ? (
                <Button onClick={() => navigate("/honey")}>
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button asChild>
                  <Link to={`/products/${product.slug}`}>
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* SPICES */}
      {spiceProducts.map((product) => (
        <section
          key={product.id}
          className={`py-24 ${product.bgClass}`}
        >
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <HoverImage
              src={product.image}
              alt={product.name}
              heightClass="h-80"
            />
            <div>
              <h3 className="font-heading text-3xl font-bold mb-4">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              <Button asChild>
                <Link to={`/products/${product.slug}`}>
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Products;
