import Link from 'next/link';
import { Typography } from '../../../components/ui/Typography';

interface BlogCardProps {
  post: { slug: string; title: string; excerpt: string; category: string; date: string; image: string; };
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block space-y-4">
      <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all group-hover:border-brand-yellow/50">
        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full bg-brand-yellow text-black text-xs font-bold">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Typography variant="h3" className="group-hover:text-brand-yellow transition-colors">
          {post.title}
        </Typography>
        <Typography variant="p-muted" className="line-clamp-2">
          {post.excerpt}
        </Typography>
        <Typography variant="caption" className="block mt-4">{post.date}</Typography>
      </div>
    </Link>
  );
};
