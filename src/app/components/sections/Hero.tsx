import { Button } from '../ui/Button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 max-w-7xl mx-auto w-full pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            the app for getting <br /> 
            <span className="text-gray-500">your life together</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            A new kind of productivity app to help you tackle your toughest and most ambitious goals, explore new ideas and make difficult decisions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-black px-8 py-3 flex items-center gap-2">
              <span className="text-xs"></span> Download on App Store
            </Button>
            <Button variant="outline" className="px-8 py-3">
              Watch Video
            </Button>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="relative h-[600px] w-full flex justify-center items-end">
          {/* Placeholder for the Phone Images in your screenshot */}
          <div className="relative w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden translate-x-10 -translate-y-10">
             <div className="p-4 bg-yellow-400 h-1/2 w-full" /> {/* Mock Screen */}
          </div>
          <div className="absolute bottom-0 right-10 w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden">
             <div className="p-4 bg-zinc-800 h-full w-full" /> {/* Mock Screen */}
          </div>
        </div>
      </div>
    </section>
  );
};
