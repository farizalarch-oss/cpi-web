import { Flame, Droplet, Leaf, Palette, Music, Snowflake, Shell } from "lucide-react";

// Product images
import charcoalImg from "@/assets/product-charcoal-new.jpg";
import copraImg from "@/assets/product-copra-new.jpg";
import sweetpotatoImg from "@/assets/product-sweetpotato-new.jpg";
import honeyImg from "@/assets/product-honey-new.jpg";
import craftsImg from "@/assets/product-batik.png";
import cinnamonImg from "@/assets/product-cinnamon.png";
import vanillaImg from "@/assets/product-vanilla.jpg";
import grouperImg from "@/assets/product-grouper.jpg";
import squidImg from "@/assets/product-squid.jpg";
import angklungImg from "@/assets/product-angklung.png";
import desiccatedImg from "@/assets/product-desiccated.png";

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  longDescription?: string;
  specs: string[];
  features: string[];
  icon: typeof Flame;
  theme: string;
  headerBg: string;
  bgClass: string;
  accentClass: string;
  tagClass: string;
}

export const productThemes = {
  honey: {
    headerBg: "bg-gradient-to-r from-honey-dark via-honey to-honey-light",
    name: "BeeZee Honey Indonesia",
  },
  coconut: {
    headerBg: "bg-gradient-to-r from-coconut-dark via-coconut to-coconut-light",
    name: "Coconut Products",
  },
  spice: {
    headerBg: "bg-gradient-to-r from-spice-dark via-spice to-spice-light",
    name: "Premium Spices",
  },
  vanilla: {
    headerBg: "bg-gradient-to-r from-vanilla-dark via-vanilla to-vanilla-light",
    name: "Premium Vanilla",
  },
  seafood: {
    headerBg: "bg-gradient-to-r from-seafood-dark via-seafood to-seafood-light",
    name: "Premium Seafood",
  },
  music: {
    headerBg: "bg-gradient-to-r from-music-dark via-music to-music-light",
    name: "Musikalite",
  },
  potato: {
    headerBg: "bg-gradient-to-r from-potato-dark via-potato to-potato-light",
    name: "Japanese Sweet Potato",
  },
  batik: {
    headerBg: "bg-gradient-to-r from-batik-dark via-batik to-batik-light",
    name: "Nusantaraya",
  },
  charcoal: {
    headerBg: "bg-gradient-to-r from-charcoal-dark via-charcoal to-charcoal-light",
    name: "Coconut Charcoal",
  },
};

export const allProducts: ProductData[] = [
  // CPI Products
  {
    id: "charcoal",
    slug: "coconut-charcoal-briquette",
    name: "Coconut Charcoal Briquette",
    category: "CPI Products",
    image: charcoalImg,
    description: "Premium coconut shell charcoal briquettes ideal for BBQ, hookah/shisha, and industrial applications.",
    longDescription: "Our premium coconut charcoal briquettes are made from 100% natural coconut shells, providing a clean, long-lasting burn perfect for BBQ, hookah/shisha, and various industrial applications. We offer custom grades and shapes to meet your specific requirements.",
    specs: ["Ash content: Max 2.5%", "Calories: > 7,200", "Fixed carbon: Max 80%", "Odorless burning", "Burn time: Up to 2 hours"],
    features: ["Custom Grades (A, B, C)", "Custom Shapes", "Bulk Orders", "Export Quality"],
    icon: Flame,
    theme: "charcoal",
    headerBg: "bg-gradient-to-r from-charcoal-dark via-charcoal to-charcoal-light",
    bgClass: "bg-charcoal-muted",
    accentClass: "bg-charcoal text-primary-foreground",
    tagClass: "bg-charcoal/10 text-charcoal",
  },
  {
    id: "copra",
    slug: "copra",
    name: "Copra (Dried Coconut Meat)",
    category: "CPI Products",
    image: copraImg,
    description: "High-quality dried coconut meat sourced from Indonesian coconut farms for oil production.",
    longDescription: "Our copra is carefully dried coconut meat sourced from premium Indonesian coconut farms. With high oil content and consistent quality, it's ideal for coconut oil production and various food industry applications.",
    specs: ["Water content: 5%", "Oil content: 65-70%", "Clean processing", "Consistent quality"],
    features: ["Food Grade", "Bulk Supply", "Regular Shipments", "Export Quality"],
    icon: Droplet,
    theme: "coconut",
    headerBg: "bg-gradient-to-r from-coconut-dark via-coconut to-coconut-light",
    bgClass: "bg-coconut-muted",
    accentClass: "bg-coconut-dark text-primary-foreground",
    tagClass: "bg-coconut-dark/10 text-coconut-dark",
  },
  {
    id: "desiccated-coconut",
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    category: "CPI Products",
    image: desiccatedImg,
    description: "Export-grade desiccated coconut suitable for international food industries and domestic markets.",
    longDescription: "Premium desiccated coconut processed to international food safety standards. Available in fine and medium grades, our desiccated coconut maintains pure white color and natural coconut flavor, perfect for confectionery, bakery, and food manufacturing.",
    specs: ["Fine & medium grade available", "Low moisture content", "Pure white color", "No additives"],
    features: ["Food Grade", "Export Quality", "Bulk Supply", "International Standards"],
    icon: Droplet,
    theme: "coconut",
    headerBg: "bg-gradient-to-r from-coconut-dark via-coconut to-coconut-light",
    bgClass: "bg-coconut-muted",
    accentClass: "bg-coconut-dark text-primary-foreground",
    tagClass: "bg-coconut-dark/10 text-coconut-dark",
  },
  {
    id: "sweetpotato",
    slug: "japanese-sweet-potato",
    name: "Japanese Sweet Potato (Beniazuma)",
    category: "CPI Products",
    image: sweetpotatoImg,
    description: "Premium Beniazuma sweet potatoes with distinctive purple skin and sweet yellow flesh.",
    longDescription: "Our Japanese Sweet Potatoes (Beniazuma variety) feature distinctive purple skin and sweet, creamy yellow flesh. Locally grown using sustainable farming practices, these premium sweet potatoes are perfect for export markets seeking authentic Japanese quality.",
    specs: ["Variety: Beniazuma", "Skin: Purple", "Flesh: Yellow", "Locally grown"],
    features: ["Fresh Harvest", "Export Quality", "Seasonal"],
    icon: Leaf,
    theme: "potato",
    headerBg: "bg-gradient-to-r from-potato-dark via-potato to-potato-light",
    bgClass: "bg-potato-muted",
    accentClass: "bg-potato text-primary-foreground",
    tagClass: "bg-potato/10 text-potato",
  },
  // Spices
  {
    id: "cinnamon",
    slug: "cinnamon",
    name: "Cinnamon",
    category: "Premium Spices",
    image: cinnamonImg,
    description: "Premium Indonesian cinnamon available in powder and stick form, meeting international export quality standards.",
    longDescription: "Our premium Indonesian cinnamon (Cinnamomum burmannii) is sourced from the finest plantations. Available in both powder and stick form, it features high oil content and rich aroma that makes it ideal for culinary, pharmaceutical, and cosmetic applications.",
    specs: ["Available: Powder & Stick", "High oil content", "Rich aroma", "Authentic Indonesian origin"],
    features: ["Export Grade", "Powder Form", "Stick Form", "Premium Quality"],
    icon: Leaf,
    theme: "spice",
    headerBg: "bg-gradient-to-r from-spice-dark via-spice to-spice-light",
    bgClass: "bg-spice-muted",
    accentClass: "bg-spice text-primary-foreground",
    tagClass: "bg-spice/10 text-spice-dark",
  },
  {
    id: "vanilla",
    slug: "vanilla",
    name: "Vanilla",
    category: "Premium Spices",
    image: vanillaImg,
    description: "Premium export-grade vanilla beans sourced from Indonesian plantations, available in two varieties.",
    longDescription: "We offer two premium varieties of Indonesian vanilla: Vanilla Planifolia (Bourbon-type) known for its classic, rich flavor, and Vanilla Tahitensis with its unique floral, fruity notes. Hand-selected beans with high vanillin content for gourmet applications.",
    specs: ["Vanilla Planifolia", "Vanilla Tahitensis", "High vanillin content", "Hand-selected beans"],
    features: ["Premium Grade", "Export Quality", "Gourmet Standard", "Two Varieties"],
    icon: Leaf,
    theme: "vanilla",
    headerBg: "bg-gradient-to-r from-vanilla-dark via-vanilla to-vanilla-light",
    bgClass: "bg-vanilla-muted",
    accentClass: "bg-vanilla text-primary-foreground",
    tagClass: "bg-vanilla/10 text-vanilla-dark",
  },
  // Seafood
  {
    id: "seafood",
    slug: "seafood",
    name: "Premium Indonesian Seafood",
    category: "Seafood",
    image: grouperImg,
    description: "Fresh and frozen seafood products with proper export handling and cold chain standards.",
    longDescription: "Our seafood collection includes Sea Cucumber (Teripang), Frozen Squid, Crab, and Grouper Fish (Kerapu). All products are handled with strict cold chain management to ensure freshness and quality throughout the export process.",
    specs: ["Sea Cucumber (Teripang)", "Frozen Squid", "Crab", "Grouper Fish (Kerapu)"],
    features: ["Cold Chain Standards", "Export Quality", "Fresh & Frozen", "HACCP Certified"],
    icon: Snowflake,
    theme: "seafood",
    headerBg: "bg-gradient-to-r from-seafood-dark via-seafood to-seafood-light",
    bgClass: "bg-seafood-muted",
    accentClass: "bg-seafood text-primary-foreground",
    tagClass: "bg-seafood/10 text-seafood-dark",
  },
  // Honey
  {
    id: "honey",
    slug: "beezee-honey",
    name: "BeeZee Honey Indonesia",
    category: "BeeZee Honey",
    image: honeyImg,
    description: "Pure, natural honey from Indonesian apiaries meeting international export standards.",
    longDescription: "BeeZee Honey Indonesia offers pure, natural honey sourced from Indonesian apiaries. Our honey meets international export standards and is available in multiple packaging sizes to suit various market needs. No additives, preservatives, or artificial sweeteners.",
    specs: ["100% Pure Natural Honey", "No additives", "Multiple packaging sizes", "Lab-tested quality"],
    features: ["Export Quality", "140gr", "350gr", "730gr"],
    icon: Droplet,
    theme: "honey",
    headerBg: "bg-gradient-to-r from-honey-dark via-honey to-honey-light",
    bgClass: "bg-honey-muted",
    accentClass: "bg-honey text-primary-foreground",
    tagClass: "bg-honey/10 text-honey-dark",
  },
  // Crafts
  {
    id: "crafts",
    slug: "nusantaraya",
    name: "Nusantaraya Arts & Crafts",
    category: "Nusantaraya",
    image: craftsImg,
    description: "Authentic handmade products celebrating Indonesian cultural heritage and traditional craftsmanship.",
    longDescription: "Nusantaraya showcases authentic Indonesian arts and crafts, including premium batik products, handcrafted animal figurines, and traditional keychains. Each piece is handcrafted by skilled Indonesian artisans, celebrating our rich cultural heritage.",
    specs: ["Batik Products", "Animal Crafts", "Keychains", "Handmade Quality"],
    features: ["Handcrafted", "Cultural Heritage", "Export Quality", "Artisan Made"],
    icon: Palette,
    theme: "batik",
    headerBg: "bg-gradient-to-r from-batik-dark via-batik to-batik-light",
    bgClass: "bg-batik-muted",
    accentClass: "bg-batik text-primary-foreground",
    tagClass: "bg-batik/10 text-batik",
  },
  // Musikalite
  {
    id: "musikalite",
    slug: "musikalite",
    name: "Musikalite Musical Instruments",
    category: "Musikalite",
    image: angklungImg,
    description: "Export-quality traditional Indonesian musical instruments, handcrafted with premium materials.",
    longDescription: "Musikalite offers premium Indonesian traditional musical instruments, including the iconic Angklung (UNESCO Intangible Cultural Heritage) and various other traditional instruments. Each piece is handcrafted with premium materials and authentic craftsmanship.",
    specs: ["Angklung", "Traditional Instruments", "Premium Materials", "Authentic Craftsmanship"],
    features: ["Premium Craftsmanship", "Export Quality", "Cultural Heritage", "UNESCO Heritage"],
    icon: Music,
    theme: "music",
    headerBg: "bg-gradient-to-r from-music-dark via-music to-music-light",
    bgClass: "bg-music-muted",
    accentClass: "bg-music text-primary-foreground",
    tagClass: "bg-music/10 text-music-dark",
  },
];

export const getProductBySlug = (slug: string): ProductData | undefined => {
  return allProducts.find((p) => p.slug === slug);
};

export const seafoodItems = [
  { name: "Sea Cucumber (Teripang)", desc: "Premium dried sea cucumber" },
  { name: "Frozen Squid", desc: "Flash-frozen for freshness" },
  { name: "Crab", desc: "Live and frozen options" },
  { name: "Grouper Fish (Kerapu)", desc: "Fresh and frozen varieties" },
];
