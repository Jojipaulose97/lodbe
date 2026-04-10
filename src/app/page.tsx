import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'LODBE – Digital Business Ecosystem Platform | SaaS, AI & Networking',
  description: 'Technology platform to build business ecosystems with SaaS, AI tools, cloud storage, and networking.',
  keywords: ['digital business ecosystem', 'SaaS ecosystem platform', 'AI business tools platform', 'lodbe'],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-400 selection:text-black">

      <Hero />

    </main>
  );
}
