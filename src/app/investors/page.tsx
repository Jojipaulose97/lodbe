
import { InvestorHero } from '../components/sections/investors/InvestorHero';
import { InvestorGrid } from '../components/sections/investors/InvestorGrid';
import { InvestorRoadmap } from '../components/sections/investors/InvestorRoadmap';

export default function InvestorsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">

            <InvestorHero />
            <InvestorGrid />
            <InvestorRoadmap />

        </main>
    );
}
