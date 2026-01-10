import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getArticleBySlug, formatDate } from "@/lib/newsData";
import NotFound from "./NotFound";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-brand-dark via-primary to-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 mb-6">
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:text-foreground prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline" size="lg">
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All News
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsDetail;
