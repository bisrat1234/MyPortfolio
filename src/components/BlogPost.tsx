import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'react-scalable-apps',
    title: 'Building Scalable Web Applications with React',
    content: `
# Building Scalable Web Applications with React

As a junior developer, I've learned that building scalable React applications requires careful planning and following best practices from the start.

## Key Principles I Follow

### 1. Component Structure
- Keep components small and focused
- Use functional components with hooks
- Implement proper prop validation

### 2. State Management
- Use React's built-in state for simple cases
- Consider Context API for shared state
- Plan for future scaling needs

### 3. Code Organization
- Organize files by feature, not by type
- Use consistent naming conventions
- Keep related files together

## Practical Tips

From my experience working on the Clearance Management System, I learned that:

- **Performance matters**: Use React.memo() for expensive components
- **Testing is crucial**: Write tests as you build features
- **Documentation helps**: Comment complex logic for future reference

## Conclusion

Building scalable applications is a journey. Each project teaches new lessons about architecture and best practices.
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    id: 'spring-boot-guide',
    title: 'Java Spring Boot: A Beginner\'s Guide',
    content: `
# Java Spring Boot: A Beginner's Guide

Starting with Spring Boot as a student has been an exciting journey. Here's what I've learned building my Court Case Management System.

## Why Spring Boot?

Spring Boot simplifies Java development by:
- Providing auto-configuration
- Including embedded servers
- Offering production-ready features out of the box

## Getting Started

### 1. Project Setup
\`\`\`java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
\`\`\`

### 2. Creating REST Controllers
\`\`\`java
@RestController
@RequestMapping("/api/cases")
public class CaseController {
    
    @GetMapping
    public List<Case> getAllCases() {
        return caseService.findAll();
    }
}
\`\`\`

## Database Integration

Using JPA with MySQL made database operations straightforward:
- Entity mapping with annotations
- Repository pattern for data access
- Automatic table creation

## Lessons Learned

- Start with simple CRUD operations
- Use proper error handling
- Implement validation early
- Test your endpoints regularly

Spring Boot has made backend development more approachable for students like me.
    `,
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['Java', 'Spring Boot', 'Backend'],
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques for Better UX',
    content: `
# Modern CSS Techniques for Better UX

CSS has evolved significantly, and as a junior developer, I'm constantly learning new techniques to improve user experience.

## CSS Grid and Flexbox

These layout methods have revolutionized how we build responsive designs:

### Grid for 2D Layouts
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

### Flexbox for 1D Layouts
\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Custom Properties

Variables make maintenance easier:
\`\`\`css
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 1rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
}
\`\`\`

## Animation and Transitions

Subtle animations enhance user experience:
- Use \`transition\` for hover effects
- Implement \`@keyframes\` for complex animations
- Consider \`prefers-reduced-motion\` for accessibility

## Responsive Design

Mobile-first approach works best:
1. Start with mobile styles
2. Add breakpoints for larger screens
3. Test on real devices

These techniques have helped me create better interfaces in my portfolio projects.
    `,
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['CSS', 'UI/UX', 'Frontend'],
  },
];

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView = ({ post, onBack }: BlogPostViewProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Articles
      </Button>
      
      <article className="card-gradient rounded-2xl p-8 border border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
          <Button variant="ghost" size="sm">
            <Share2 size={16} />
          </Button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-mono text-primary/80 bg-primary/5 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none">
          <pre className="whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
            {post.content}
          </pre>
        </div>
      </article>
    </div>
  );
};

export { blogPosts, BlogPostView };
export type { BlogPost };