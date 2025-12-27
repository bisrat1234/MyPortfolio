import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BlogPostView, blogPosts } from './BlogPost';
import type { BlogPost } from './BlogPost';

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const displayedArticles = showAllArticles ? blogPosts : blogPosts.slice(0, 3);

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 sm:py-32 relative bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <BlogPostView 
            post={selectedPost} 
            onBack={() => setSelectedPost(null)} 
          />
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 sm:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedArticles.map((article, index) => (
              <article
                key={article.id}
                className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPost(article)}
              >
                <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
                  {article.content.substring(0, 150)}...
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-0 h-auto font-medium group-hover:text-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(article);
                  }}
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={() => setShowAllArticles(!showAllArticles)}
            >
              {showAllArticles ? 'Show Less' : 'View All Articles'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};