import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter for the professional SaaS look
import "./globals.css";
import { Navbar } from './components/layout/Navbar'; // Use @ alias for cleaner paths
import { Footer } from './components/layout/Footer';

// 1. Initialize Inter font with the variable name used in globals.css
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

// 2. Update Metadata for LODBE (Crucial for SEO)
export const metadata: Metadata = {
  title: "LODBE | Digital Business Ecosystems",
  description: "LODBE is a technology-driven digital platform creating scalable software, AI tools, and business ecosystems to empower modern enterprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 3. Apply the Inter variable to the html tag
    <html lang="en" className={`${inter.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
