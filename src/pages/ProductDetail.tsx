import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { getProductBySlug, allProducts } from "@/lib/productData";
import { companyInfo } from "@/lib/companyInfo";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Get related products (same category or nearby in list)
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout headerTheme={product.theme}>
      {/* Hero with dynamic color */}
      <section className={`py-32 ${product.headerBg} transition-colors duration-500`}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <span className="block text-primary-foreground/70 font-medium text-sm tracking-widest uppercase mb-3">
              {product.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {product.name}
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className={`py-20 ${product.bgClass}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-large bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className={`w-14 h-14 ${product.accentClass} rounded-xl flex items-center justify-center`}>
                    <product.icon className="w-7 h-7" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Product Overview
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
                <ul className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className={`${product.tagClass} text-sm font-medium px-4 py-2 rounded-full`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={companyInfo.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Other Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relProduct) => (
              <Link
                key={relProduct.id}
                to={`/products/${relProduct.slug}`}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`w-10 h-10 ${relProduct.accentClass} rounded-lg flex items-center justify-center`}>
                        <relProduct.icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {relProduct.category}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {relProduct.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact our team to discuss pricing, specifications, and shipping arrangements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <a
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
