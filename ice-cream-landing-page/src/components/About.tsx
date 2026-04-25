"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560851991-757667769977?q=80&w=1000&auto=format&fit=crop"
                alt="Our artisanal process"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-secondary/30"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Leaf size={20} />
              </div>
              <div>
                <p className="text-xs text-brand-text/60 font-medium">
                  100% Organic
                </p>
                <p className="text-sm font-bold text-brand-text">Pure Nature</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-secondary/30"
            >
              <div className="bg-pink-100 p-2 rounded-full text-accent">
                <Heart size={20} />
              </div>
              <div>
                <p className="text-xs text-brand-text/60 font-medium">
                  Made with
                </p>
                <p className="text-sm font-bold text-brand-text">Pure Love</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-text leading-tight">
              Crafting Moments of <span className="text-accent">Pure Joy</span>
            </h2>
          </div>

          <p className="text-lg text-brand-text/70 leading-relaxed">
            Founded in a small family kitchen, CreamBliss started with a simple
            dream: to create the creamiest, most authentic ice cream that brings
            people together. We believe that ice cream is not just a dessert,
            but an experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-xl text-accent">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-text">Award Winning</h4>
                <p className="text-sm text-brand-text/60">
                  Best Artisanal Creamery 2024
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-xl text-accent">
                <Heart size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-text">Eco-Friendly</h4>
                <p className="text-sm text-brand-text/60">
                  Sustainable sourcing only
                </p>
              </div>
            </div>
          </div>

          <button className="px-8 py-3 rounded-full font-bold text-brand-text border-2 border-brand-text/20 hover:border-accent hover:text-accent transition-all">
            Read More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
