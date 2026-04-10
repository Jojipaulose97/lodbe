import { Typography } from '../../ui/Typography';

const traits = [
    'Builders, not just coders',
    'People who think in systems, not features',
    'Problem solvers who take ownership',
    'Individuals excited about SaaS, AI, and digital ecosystems',
    'Fast learners who adapt and grow with the company',
];

export const WhoWeLookingFor = () => {
    return (
        <section className="px-6 py-16 bg-zinc-50 w-full">
            <div className="max-w-7xl mx-auto text-center space-y-10">
                <Typography variant="h2" className="text-3xl text-black sm:text-4xl">
                    Who We&apos;re Looking For
                </Typography>
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                    {traits.map((trait, i) => (
                        <span
                            key={i}
                            className="text-sm bg-white border border-zinc-200 text-zinc-700 px-5 py-2.5 rounded-full shadow-sm"
                        >
                            {trait}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};