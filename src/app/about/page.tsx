import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AboutHero } from '../components/sections/about/AboutHero';
import { MissionVision } from '../components/sections/about/MissionVision';
import { Philosophy } from '../components/sections/about/Philosophy';
import { Ecosystem } from '../components/sections/about/Ecosystem';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <AboutHero />
            <MissionVision />
            <Philosophy />
            <Ecosystem />
        </main>
    );
}
