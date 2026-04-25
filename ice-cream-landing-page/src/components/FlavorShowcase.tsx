"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface Flavor {
  id: number;
  name: string;
  description: string;
  image: string;
  color: string;
  price: string;
}

const flavors: Flavor[] = [
  {
    id: 1,
    name: 'Velvet Vanilla',
    description: 'Classic, creamy, and infused with real Madagascan vanilla beans.',
    image: 'https://images.unsplash.com/photo-1570187711076-60778894d3c5?q=80&w=500&auto=format&fit=crop',
    color: 'bg-yellow-100',
    price: '$4.99',
  },
  {
    id: 2,
    name: 'Midnight Chocolate',
    description: 'Rich, dark Belgian chocolate for the ultimate cocoa experience.',
    image: 'https://images.unsplash.com/photo-1563805042-7673918556cf?q=80&w=500&auto=format&fit=crop',
    color: 'bg-brown-100',
    price: '$5.49',
  },
  {
    id: 3,
    name: 'Minty Fresh',
    description: 'Refreshing peppermint swirl with crunchy dark chocolate chips.',
    image: 'https://images.unsplash.com/photo-1497034825429-3097777fde7c?q=80&w=500&auto=format&fit=crop',
    color: 'bg-green-100',
    price: '$5.29',
  },
  {
    id: 4,
    name: 'Strawberry Dream',
    description: 'Sweet sun-ripened strawberries blended into a creamy pink swirl.',
    image: 'https://images.unsplash.com/photo-1488475539387-357d67767672?q=80&w=500&auto=format&fit=crop',
    color: 'bg-pink-100',
    price: '$4.99',
  },
];

const FlavorCard = ({ flavor }: { flavor: Flavor }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-secondary/20 group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={flavor.image}
          alt={flavor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-brand-text text-sm">
          {flavor.price}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-brand-text">{flavor.name}</h3>
        <p className="text-brand-text/70 leading-relaxed">
          {flavor.description}
        </p>
        <button className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-bold hover:bg-accent/90 transition-all active:scale-95">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const FlavorShowcase = () => {
  return (
    <section id="flavors" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold uppercase tracking-widest text-sm"
          >
            Our Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold text-brand-text"
          >
            Heavenly <span className="text-accent">Flavors</span>
          </motion.h2>
          <p className="text-brand-text/60 max-w-2xl mx-auto text-lg">
            From timeless classics to adventurous swirls, find your perfect match in our carefully curated selection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FlavorCard flavor={flavor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorShowcase;
