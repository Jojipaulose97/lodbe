import { Typography } from '../components/ui/Typography';
import { BlogCard } from '../components/sections/blog/BlogCard';
import { BLOG_POSTS } from '../constants/blog';

export default function BlogPage() {
  return (
    <main className="min-h-screen py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-20 space-y-4">
        <Typography variant="label">Insights & Knowledge</Typography>
        <Typography variant="h1">
          The LODBE <span className="text-brand-yellow">Blog</span>
        </Typography>
        <Typography variant="p-muted" className="max-w-2xl mx-auto">
          Exploring the intersection of AI, SaaS, and digital business ecosystems. 
          Stay updated with the latest in technology and growth strategies.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
