export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishDate: string;
  author: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "expanding-global-reach-2024",
    title: "PT. Creative Products Indonesia Expands Global Reach in 2024",
    excerpt: "Our company continues to strengthen partnerships across Asia, Europe, and the Americas, bringing premium Indonesian products to new markets worldwide.",
    content: `
      <p>PT. Creative Products Indonesia is proud to announce significant expansion of our global distribution network in 2024. Through strategic partnerships and dedication to quality, we have successfully entered new markets across three continents.</p>
      
      <h2>New Market Partnerships</h2>
      <p>This year marks a milestone as we established partnerships with distributors in Germany, the Netherlands, and Spain, expanding our European footprint. Our premium coconut products and authentic Indonesian spices have received exceptional reception in these markets.</p>
      
      <h2>Quality That Speaks</h2>
      <p>Our commitment to ISO-certified quality standards and sustainable sourcing practices has been instrumental in building trust with international partners. Every product that leaves our facilities meets the highest international standards.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we continue to grow, our focus remains on maintaining the authenticity and quality that defines Indonesian craftsmanship. We are excited about the opportunities ahead and remain committed to bringing the best of Indonesia to the world.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    publishDate: "2024-12-15",
    author: "PT. Creative Products Indonesia"
  },
  {
    slug: "sustainable-coconut-farming",
    title: "Sustainable Coconut Farming: Our Commitment to the Environment",
    excerpt: "Learn about our sustainable practices in coconut sourcing and how we work with local farmers to protect Indonesia's natural resources.",
    content: `
      <p>At PT. Creative Products Indonesia, sustainability isn't just a buzzword—it's a core principle that guides every aspect of our operations. Our coconut products, from desiccated coconut to coconut charcoal briquettes, are sourced through environmentally responsible practices.</p>
      
      <h2>Working with Local Communities</h2>
      <p>We partner directly with over 500 farming families across Indonesia, providing fair wages and sustainable farming education. This approach ensures quality while supporting rural economies and preserving traditional farming knowledge.</p>
      
      <h2>Zero-Waste Processing</h2>
      <p>Our processing facilities operate on a zero-waste philosophy. Coconut shells become premium charcoal briquettes, coconut water is processed for beverages, and coconut husks are converted to coir fiber products. Nothing goes to waste.</p>
      
      <h2>Certifications and Standards</h2>
      <p>Our sustainability efforts are validated by international certifications including organic certification and fair trade partnerships. We continue to invest in sustainable technology and practices to minimize our environmental footprint.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60",
    publishDate: "2024-11-28",
    author: "PT. Creative Products Indonesia"
  },
  {
    slug: "new-honey-processing-facility",
    title: "BeeZee Honey Indonesia Opens New State-of-the-Art Facility",
    excerpt: "Our honey brand, BeeZee, celebrates the opening of a modern processing facility designed to meet growing international demand.",
    content: `
      <p>We are thrilled to announce the grand opening of our new BeeZee Honey processing facility in Central Java. This state-of-the-art center represents a significant investment in our capacity to deliver premium Indonesian honey to global markets.</p>
      
      <h2>Advanced Processing Technology</h2>
      <p>The new facility features cutting-edge honey extraction and packaging equipment that preserves the natural enzymes and nutrients in our raw honey products. Temperature-controlled processing ensures maximum quality retention.</p>
      
      <h2>Increased Capacity</h2>
      <p>With this expansion, our production capacity has increased by 300%, allowing us to meet growing demand from existing partners while exploring new market opportunities. The facility can process multiple honey varieties simultaneously while maintaining strict quality separation.</p>
      
      <h2>Quality Assurance Laboratory</h2>
      <p>An on-site laboratory enables real-time quality testing, ensuring every batch meets our exacting standards before shipment. From pollen analysis to purity testing, we leave nothing to chance.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&auto=format&fit=crop&q=60",
    publishDate: "2024-10-10",
    author: "PT. Creative Products Indonesia"
  }
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
