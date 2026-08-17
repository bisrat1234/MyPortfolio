import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { BlogPostView, blogPosts } from './BlogPost';
import type { BlogPost } from './BlogPost';

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? blogPosts : blogPosts.slice(0, 3);

  if (selectedPost) {
    return (
      <section id="blog" className="py-4 sm:py-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </button>
          <BlogPostView post={selectedPost} onBack={() => setSelectedPost(null)} />
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-4 sm:py-6 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">05 — Articles</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {displayed.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedPost(article)}
              className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={11} />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={11} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-snug flex-grow">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {article.content.trim().split('\n').filter(l => l && !l.startsWith('#'))[0]}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-muted-foreground border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                Read article
                <ArrowRight size={12} />
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length > 3 && (
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-sm font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200"
            >
              {showAll ? 'Show Less' : `View All ${blogPosts.length} Articles`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
