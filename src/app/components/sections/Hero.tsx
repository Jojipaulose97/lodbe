"use client";

import { Typography } from '../ui/Typography';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer, floatVariant } from '../../lib/animations';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 max-w-7xl mx-auto w-full pt-12 md:pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

        {/* Left Side: Text Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 z-10 text-center lg:text-left"
        >

          <motion.div variants={fadeUpVariant}>
            <Typography variant="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Leadership &amp; Opportunity for{' '}
              <br className="hidden sm:block" />
              <span className="text-zinc-500">D</span><span className="text-zinc-500">igital</span>{' '}
              <span className="text-zinc-500">B</span><span className="text-zinc-500">usiness</span>{' '}
              <span className="text-zinc-500">E</span><span className="text-zinc-500">cosystems</span>
            </Typography>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <Typography variant="p-muted" className="max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              LODBE is a technology-driven platform that enables users to build, connect, and grow through digital business ecosystems.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <Image
                src="/images/appstore.webp"
                alt="Download on App Store"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <Image
                src="/images/googleplay.webp"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Phone Mockups */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[600px] w-full flex justify-center items-end">

          {/* Back Phone — unchanged, original yellow screen */}
          <motion.div 
            variants={floatVariant}
            initial="initial"
            animate="animate"
            className="relative w-40 sm:w-52 lg:w-64 h-[260px] sm:h-[380px] lg:h-[500px] bg-zinc-900 rounded-[2rem] lg:rounded-[3rem] border-4 lg:border-8 border-zinc-800 shadow-2xl overflow-hidden translate-x-6 sm:translate-x-8 lg:translate-x-10 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10"
          >
            <div className="p-4 bg-yellow-400 h-1/2 w-full" />
          </motion.div>

          {/* Front Phone — image only here */}
          <motion.div 
            variants={floatVariant}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5, duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-6 sm:right-8 lg:right-10 w-40 sm:w-52 lg:w-64 h-[260px] sm:h-[380px] lg:h-[500px] bg-zinc-900 rounded-[2rem] lg:rounded-[3rem] border-4 lg:border-8 border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-2 sm:inset-2 rounded-[1.5rem] overflow-hidden">
              <Image
                src="/images/mobile-ui.png"
                alt="App UI Screen"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};