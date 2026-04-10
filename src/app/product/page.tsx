import { Typography } from '../components/ui/Typography';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const products = [
    {
        number: '01',
        title: 'SaaS Platforms',
        summary: 'Cloud-based software solutions that enable businesses and professionals to operate efficiently — no complex infrastructure required.',
        highlights: [
            'Centrally managed & continuously improved',
            'Scalable from individual to enterprise',
            'Unified ecosystem integration',
            'Intuitive, user-centric interfaces',
            'Modern cloud architecture & security',
        ],
        tag: 'Core Foundation',
        dark: false,
    },
    {
        number: '02',
        title: 'Cloud Drive',
        summary: 'A secure, scalable digital storage solution for storing, managing, accessing, and sharing files seamlessly across devices.',
        highlights: [
            'Access anytime, anywhere, any device',
            'Advanced encryption & access control',
            'Real-time file sharing & collaboration',
            'Seamless integration with LODBE tools',
            'Full user data ownership & control',
        ],
        tag: 'Storage & Collaboration',
        dark: true,
    },
    {
        number: '03',
        title: 'AI Tools',
        summary: 'Practical artificial intelligence integrated into everyday operations — automating tasks, generating insights, and optimizing workflows.',
        highlights: [
            'Data analysis & actionable insights',
            'Automation of repetitive tasks',
            'Content generation & decision support',
            'Integrated across SaaS & Cloud Drive',
            'Ethical use & data privacy by design',
        ],
        tag: 'Artificial Intelligence',
        dark: false,
    },
    {
        number: '04',
        title: 'Apps & Digital Products',
        summary: 'A diverse range of web apps, mobile apps, and digital tools — built and owned by LODBE for long-term scalable value.',
        highlights: [
            'Web & mobile applications',
            'Standardized, scalable product builds',
            'Integrated across the LODBE ecosystem',
            'Continuously updated & improved',
            'Built for individuals, startups & enterprises',
        ],
        tag: 'Digital Products',
        dark: true,
    },
];

export default function ProductPage() {
    return (
        <main className="w-full">
            <section className="w-full py-16">

                {/* Section Header */}
                <div className="px-6 max-w-7xl mx-auto mb-12 space-y-3">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-zinc-400 border border-zinc-200 rounded-full px-4 py-1.5">
                        What We&apos;re Building
                    </span>
                    <Typography variant="h2" className="text-3xl sm:text-4xl">
                        Products That Power the Ecosystem
                    </Typography>
                    <p className="text-zinc-500 text-sm max-w-xl leading-relaxed">
                        LODBE builds and owns a connected suite of platforms — from SaaS tools
                        to AI systems, cloud infrastructure, and digital products.
                    </p>
                </div>

                {/* Product Blocks */}
                <div className="divide-y divide-zinc-100">
                    {products.map((product) => (
                        <div
                            key={product.number}
                            className={`w-full px-6 py-14 ${product.dark ? 'bg-zinc-900' : 'bg-white'}`}
                        >
                            <ScrollReveal delay={0.1}>
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                                {/* Left */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-bold tracking-widest ${product.dark ? 'text-zinc-500' : 'text-zinc-300'}`}>
                                            {product.number}
                                        </span>
                                        <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${product.dark ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-500'}`}>
                                            {product.tag}
                                        </span>
                                    </div>
                                    <h3 className={`text-2xl sm:text-3xl font-semibold leading-tight ${product.dark ? 'text-white' : 'text-zinc-900'}`}>
                                        {product.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed max-w-md ${product.dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                        {product.summary}
                                    </p>
                                </div>

                                {/* Right */}
                                <ul className="space-y-3">
                                    {product.highlights.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className={`mt-1.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${product.dark ? 'bg-yellow-400' : 'bg-zinc-900'}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${product.dark ? 'bg-zinc-900' : 'bg-white'}`} />
                                            </span>
                                            <span className={`text-sm leading-relaxed ${product.dark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}