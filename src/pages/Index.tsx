import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { WhyUsPreview } from "@/components/home/WhyUsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsPreview />
      <WhyUsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
