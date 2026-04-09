export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "future-of-ai-ecosystems",
    title: "The Future of AI-Driven Business Ecosystems",
    excerpt: "How intelligent systems are redefining the way professionals collaborate and scale their businesses.",
    content: "Full content of the article goes here... (Use Markdown or HTML)",
    category: "Artificial Intelligence",
    date: "Oct 24, 2023",
    image: "https://images.unsplash.com/photo-16774421321 দখল-id-123", // Replace with real images
  },
  {
    slug: "scaling-saas-products",
    title: "Scaling SaaS: From MVP to Global Platform",
    excerpt: "Key strategies for building scalable software architecture that supports millions of users.",
    content: "Full content of the article goes here...",
    category: "SaaS",
    date: "Oct 20, 2023",
    image: "https://images.unsplash.com/photo-1460925895917-b2fbf1d4c663",
  },
  {
    slug: "network-effects-explained",
    title: "Understanding Network Effects in Digital Platforms",
    excerpt: "Why the value of a platform increases as more users join the ecosystem.",
    content: "Full content of the article goes here...",
    category: "Ecosystem",
    date: "Oct 15, 2023",
    image: "https://images.unsplash.com/photo-1557804506-669a6167568c",
  },
];
