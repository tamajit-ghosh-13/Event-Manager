"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Ice Cream Lover',
    text: 'The Midnight Chocolate is absolutely divine! I have never tasted anything so rich and creamy. Truly a masterpiece.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Food Blogger',
    text: 'CreamBliss has perfected the art of artisanal ice cream. The texture is flawless and the flavors are bold yet balanced.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Emma Wilson',
    role: 'Regular Customer',
    text: 'Their Strawberry Dream is my absolute favorite. It tastes like a summer afternoon in a cone. Simply wonderful!',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=emma',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">Customer Love</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-text">
            What Our <span className="text-accent">Happy Scoopers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-secondary/30 relative overflow-hidden"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? "currentColor" : "none"}
                    className={i < t.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-brand-text/80 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-brand-text">{t.name}</p>
                  <p className="text-xs text-brand-text/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
