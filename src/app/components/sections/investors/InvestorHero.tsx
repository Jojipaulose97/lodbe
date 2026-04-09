import { Typography } from '../../../components/ui/Typography';
import { Button } from '../../../components/ui/Button'; // Assuming you have a Button component

export const InvestorHero = () => {
    return (
        <section className="relative py-20 px-6 max-w-7xl mx-auto w-full overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-4xl mx-auto text-center"> {/* Changed to center for this style */}
                <Typography variant="label">Investor Relations</Typography>

                <Typography variant="h1" className="mt-4 mb-8">
                    Redefining the Modern <br /> Digital Economy
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-zinc-400 leading-relaxed text-left">
                    <Typography variant="p-muted">
                        LODBE is a technology-driven digital ecosystem platform built to redefine how businesses, professionals, and individuals connect, operate, and grow.
                    </Typography>
                    <Typography variant="p-muted">
                        Unlike traditional service-based companies, LODBE builds and owns its technology stack, enabling it to deliver consistent, scalable, and high-margin digital products.
                    </Typography>
                </div>
            </div>
        </section>
    );
};


