import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, Flame, Droplet, Palette, Leaf, Snowflake, Music } from "lucide-react";
import { motion } from "framer-motion";
import { allProducts, seafoodItems } from "@/lib/productData";
import grouperImg from "@/assets/product-grouper.jpg";
import squidImg from "@/assets/product-squid.jpg";
import charcoalImg from "@/assets/product-charcoal-new.jpg";
import copraImg from "@/assets/product-copra-new.jpg";
import desiccatedImg from "@/assets/product-desiccated.png";
import sweetpotatoImg from "@/assets/product-sweetpotato-new.jpg";
import cinnamonImg from "@/assets/product-cinnamon.png";
import vanillaImg from "@/assets/product-vanilla.jpg";
import honeyImg from "@/assets/product-honey-new.jpg";
import craftsImg from "@/assets/product-batik.png";
import angklungImg from "@/assets/product-angklung.png";
import { companyInfo } from "@/lib/companyInfo";

const cpiProducts = [
  {
    id: "charcoal",
    slug: "coconut-charcoal-briquette",
    name: "Coconut Charcoal Briquette",
    image: charcoalImg,
    description: "Premium coconut shell charcoal briquettes ideal for BBQ, hookah/shisha, and industrial applications.",
    specs: ["Ash content: Max 2.5%", "Calories: > 7,200", "Fixed carbon: Max 80%", "Odorless burning", "Burn time: Up to 2 hours"],
    features: ["Custom Grades (A, B, C)", "Custom Shapes", "Bulk Orders", "Export Quality"],
    icon: Flame,
    theme: "charcoal",
    bgClass: "bg-charcoal-muted",
    accentClass: "bg-charcoal text-primary-foreground",
    tagClass: "bg-charcoal/10 text-charcoal",
  },
  {
    id: "copra",
    slug: "copra",
    name: "Copra (Dried Coconut Meat)",
    image: copraImg,
    description: "High-quality dried coconut meat sourced from Indonesian coconut farms for oil production.",
    specs: ["Water content: 5%", "Oil content: 65-70%", "Clean processing", "Consistent quality"],
    features: ["Food Grade", "Bulk Supply", "Regular Shipments", "Export Quality"],
    icon: Droplet,
    theme: "coconut",
    bgClass: "bg-coconut-muted",
    accentClass: "bg-coconut-dark text-primary-foreground",
    tagClass: "bg-coconut-dark/10 text-coconut-dark",
  },
  {
    id: "desiccated-coconut",
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    image: desiccatedImg,
    description: "Export-grade desiccated coconut suitable for international food industries and domestic markets.",
    specs: ["Fine & medium grade available", "Low moisture content", "Pure white color", "No additives"],
    features: ["Food Grade", "Export Quality", "Bulk Supply", "International Standards"],
    icon: Droplet,
    theme: "coconut",
    bgClass: "bg-coconut-muted",
    accentClass: "bg-coconut-dark text-primary-foreground",
    tagClass: "bg-coconut-dark/10 text-coconut-dark",
  },
  {
    id: "sweetpotato",
    slug: "japanese-sweet-potato",
    name: "Japanese Sweet Potato (Beniazuma)",
    image: sweetpotatoImg,
    description: "Premium Beniazuma sweet potatoes with distinctive purple skin and sweet yellow flesh.",
    specs: ["Variety: Beniazuma", "Skin: Purple", "Flesh: Yellow", "Locally grown"],
    features: ["Fresh Harvest", "Export Quality", "Seasonal"],
    icon: Leaf,
    theme: "potato",
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
    description: "Premium Indonesian cinnamon available in powder and stick form, meeting international export quality standards.",
    specs: ["Available: Powder & Stick", "High oil content", "Rich aroma", "Authentic Indonesian origin"],
    features: ["Export Grade", "Powder Form", "Stick Form", "Premium Quality"],
    icon: Leaf,
    theme: "spice",
    bgClass: "bg-spice-muted",
    accentClass: "bg-spice text-primary-foreground",
    tagClass: "bg-spice/10 text-spice-dark",
  },
  {
    id: "vanilla",
    slug: "vanilla",
    name: "Vanilla",
    image: vanillaImg,
    description: "Premium export-grade vanilla beans sourced from Indonesian plantations, available in two varieties.",
    specs: ["Vanilla Planifolia", "Vanilla Tahitensis", "High vanillin content", "Hand-selected beans"],
    features: ["Premium Grade", "Export Quality", "Gourmet Standard", "Two Varieties"],
    icon: Leaf,
    theme: "vanilla",
    bgClass: "bg-vanilla-muted",
    accentClass: "bg-vanilla text-primary-foreground",
    tagClass: "bg-vanilla/10 text-vanilla-dark",
  },
];

const seafoodProducts = [
  { name: "Sea Cucumber (Teripang)", desc: "Premium dried sea cucumber" },
  { name: "Frozen Squid", desc: "Flash-frozen for freshness" },
  { name: "Crab", desc: "Live and frozen options" },
  { name: "Grouper Fish (Kerapu)", desc: "Fresh and frozen varieties" },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Our Products</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Premium Indonesian Export Products</h1>
            <p className="text-primary-foreground/80 text-lg">Sustainable, high-quality products ready for international markets.</p>
          </motion.div>
        </div>
      </section>

      {/* CPI Products with themed sections */}
      {cpiProducts.map((product, index) => (
        <section key={product.id} id={product.id} className={`py-24 ${product.bgClass} transition-colors duration-500`}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-large">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${product.accentClass} rounded-xl flex items-center justify-center`}>
                      <product.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary" />{spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f, i) => (
                    <span key={i} className={`${product.tagClass} text-sm font-medium px-3 py-1 rounded-full`}>{f}</span>
                  ))}
                </div>
                {product.id === "honey" ? (
                  <Button onClick={() => navigate("/honey")}>
                    View Details<ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button asChild>
                    <Link to={`/products/${product.slug}`}>
                      View Details<ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Spices Section */}
      {spiceProducts.map((product, index) => (
        <section key={product.id} id={product.id} className={`py-24 ${product.bgClass} transition-colors duration-500`}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
              <div className={index % 2 === 0 ? "lg:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-large">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${product.accentClass} rounded-xl flex items-center justify-center`}>
                      <product.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 0 ? "lg:order-1" : ""}>
                <span className="inline-block text-spice-dark font-semibold text-sm tracking-widest uppercase mb-2">Premium Spices</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Check className="w-4 h-4 text-primary" />{spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f, i) => (
                    <span key={i} className={`${product.tagClass} text-sm font-medium px-3 py-1 rounded-full`}>{f}</span>
                  ))}
                </div>
                {product.id === "honey" ? (
                  <Button onClick={() => navigate("/honey")}>
                    View Details<ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button asChild>
                    <Link to={`/products/${product.slug}`}>
                      View Details<ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Seafood Section */}
      <section id="seafood" className="py-24 bg-seafood-muted transition-colors duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
            <span className="inline-block text-seafood-dark font-semibold text-sm tracking-widest uppercase mb-4">Export-Grade Seafood</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Indonesian Seafood</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Fresh and frozen seafood products with proper export handling and cold chain standards.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-large">
              <img src={grouperImg} alt="Grouper Fish" className="w-full h-72 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-heading text-xl font-bold">Grouper Fish (Kerapu)</h3>
                <p className="text-white/80 text-sm">Fresh and frozen varieties</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-large">
              <img src={squidImg} alt="Frozen Squid" className="w-full h-72 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-heading text-xl font-bold">Frozen Squid</h3>
                <p className="text-white/80 text-sm">Flash-frozen for freshness</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seafoodProducts.map((item, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-soft border border-seafood/10">
                <div className="w-12 h-12 bg-seafood/10 rounded-xl flex items-center justify-center mb-4">
                  <Snowflake className="w-6 h-6 text-seafood-dark" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{item.name}</h4>
                <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                <span className="bg-seafood/10 text-seafood-dark text-xs font-medium px-3 py-1 rounded-full">Export Quality</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-card rounded-xl p-6 shadow-soft border border-seafood/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-seafood text-primary-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                <Snowflake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-2">Cold Chain Standards</h4>
                <p className="text-muted-foreground text-sm">All seafood products are handled with proper cold chain management to ensure freshness and quality throughout the export process. We maintain strict temperature controls from harvest to delivery.</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Button asChild><Link to="/contact">Inquire About Seafood<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </div>
        </div>
      </section>

      {/* Honey Section */}
      <section id="honey" className="py-24 bg-honey-muted transition-colors duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-large"><img src={honeyImg} alt="BeeZee Honey" className="w-full h-96 object-cover" /></div>
              <div className="absolute -bottom-6 -right-6 bg-honey rounded-2xl p-6 shadow-large">
                <div className="text-accent-foreground font-heading font-bold text-2xl">Export</div>
                <div className="text-accent-foreground/80">Quality</div>
              </div>
            </div>
            <div>
              <span className="inline-block text-honey-dark font-semibold text-sm tracking-widest uppercase mb-4">BeeZee Honey Indonesia</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Indonesian Honey</h2>
              <p className="text-muted-foreground mb-6">Pure, natural honey from Indonesian apiaries meeting international export standards.</p>
              <div className="flex gap-3 mb-6">
                {["140gr", "350gr", "730gr"].map((s) => <span key={s} className="bg-honey/20 text-honey-dark border border-honey/30 text-sm font-medium px-4 py-2 rounded-lg">{s}</span>)}
              </div>
              <Button asChild variant="hero"><Link to="/contact">Inquire Now<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crafts Section */}
      <section id="crafts" className="py-24 bg-batik-muted transition-colors duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2"><div className="rounded-2xl overflow-hidden shadow-large bg-card p-8"><img src={craftsImg} alt="Nusantaraya Crafts" className="w-full h-80 object-contain" /></div></div>
            <div className="lg:order-1">
              <span className="inline-block text-batik font-semibold text-sm tracking-widest uppercase mb-4">Nusantaraya</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Indonesian Arts & Crafts</h2>
              <p className="text-muted-foreground mb-6">Authentic handmade products celebrating Indonesian cultural heritage and traditional craftsmanship.</p>
              <div className="bg-batik/10 rounded-xl p-6 mb-8 flex items-start gap-3">
                <Palette className="w-6 h-6 text-batik flex-shrink-0 mt-1" />
                <div><h4 className="font-semibold text-foreground mb-1">Cultural Heritage</h4><p className="text-muted-foreground text-sm">Handcrafted by skilled Indonesian artisans.</p></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-batik/10 text-batik text-sm font-medium px-3 py-1 rounded-full">Batik Products</span>
                <span className="bg-batik/10 text-batik text-sm font-medium px-3 py-1 rounded-full">Animal Crafts</span>
                <span className="bg-batik/10 text-batik text-sm font-medium px-3 py-1 rounded-full">Keychains</span>
                <span className="bg-batik/10 text-batik text-sm font-medium px-3 py-1 rounded-full">Export Quality</span>
              </div>
              <Button asChild><Link to="/contact">View Catalog<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Musikalite Section */}
      <section id="musikalite" className="py-24 bg-music-muted transition-colors duration-500">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-large bg-card p-8"><img src={angklungImg} alt="Musikalite Angklung" className="w-full h-80 object-contain" /></div>
            </div>
            <div>
              <span className="inline-block text-music-dark font-semibold text-sm tracking-widest uppercase mb-4">Musikalite</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Premium Indonesian Musical Instruments</h2>
              <p className="text-muted-foreground mb-6">Export-quality traditional Indonesian musical instruments, handcrafted with premium materials and authentic craftsmanship.</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-music/10 rounded-xl p-5 flex items-start gap-3">
                  <Music className="w-6 h-6 text-music-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Angklung</h4>
                    <p className="text-muted-foreground text-sm">Traditional bamboo musical instrument, UNESCO Intangible Cultural Heritage.</p>
                  </div>
                </div>
                <div className="bg-music/10 rounded-xl p-5 flex items-start gap-3">
                  <Music className="w-6 h-6 text-music-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Traditional Instruments</h4>
                    <p className="text-muted-foreground text-sm">Various traditional Indonesian instruments available for export.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-music/20 text-music-dark text-sm font-medium px-3 py-1 rounded-full">Premium Craftsmanship</span>
                <span className="bg-music/20 text-music-dark text-sm font-medium px-3 py-1 rounded-full">Export Quality</span>
                <span className="bg-music/20 text-music-dark text-sm font-medium px-3 py-1 rounded-full">Cultural Heritage</span>
              </div>
              <Button asChild><Link to="/contact">Inquire Now<ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Interested in Our Products?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">Contact our team to discuss pricing and shipping arrangements.</p>
          <Button asChild variant="hero" size="xl"><Link to="/contact">Request a Quote<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
