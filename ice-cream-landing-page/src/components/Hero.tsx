"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-primary">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-block px-4 py-1 bg-secondary/30 text-accent font-bold rounded-full text-sm uppercase tracking-wider">
            ✨ Pure Creamy Happiness
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-text leading-tight">
            Indulge in <span className="text-accent">Pure Bliss</span>
          </h1>
          <p className="text-lg text-brand-text/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Experience the magic of hand-crafted, artisanal ice cream made with the finest organic ingredients.
            A symphony of flavors that melts in your mouth and cheers up your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#flavors"
              className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/30 flex items-center justify-center gap-2 group"
            >
              Explore Flavors
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-bold text-lg text-brand-text border-2 border-brand-text/20 hover:border-accent hover:text-accent transition-all flex items-center justify-center"
            >
              Our Story
            </a>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white">
            <img
              src="https://images.unsplash.com/photo-1501438502025-b39f756d577d?q=80&w=1000&auto=format&fit=crop"
              alt="Delicious scoop of ice cream"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/40 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
