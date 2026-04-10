import { Typography } from '../../components/ui/Typography';
import { BLOG_POSTS } from '../../constants/blog';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Find the post that matches the slug in the URL
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // If post is not found, show Next.js 404 page
  if (!post) notFound();

  return (
    <article className="min-h-screen py-24 px-6 max-w-4xl mx-auto w-full">
      <div className="space-y-12">
        
        {/* Post Header */}
        <div className="space-y-6">
          <Typography variant="label">{post.category}</Typography>
          <Typography variant="h1">{post.title}</Typography>
          <div className="flex items-center gap-4 text-zinc-500">
            <span className="text-sm">5 min read</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-zinc-800">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <Typography variant="p" className="text-xl leading-relaxed text-zinc-300">
            {post.content}
          </Typography>
          
          {/* Placeholder for more rich content */}
          <div className="mt-8 space-y-6">
             <div className="h-4 w-full bg-zinc-800 rounded" />
             <div className="h-4 w-3/4 bg-zinc-800 rounded" />
             <div className="h-4 w-5/6 bg-zinc-800 rounded" />
             <div className="h-4 w-full bg-zinc-800 rounded" />
          </div>
        </div>

      </div>
    </article>
  );
}
