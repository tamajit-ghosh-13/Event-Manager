"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, IceCream } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-accent p-2 rounded-full text-white">
              <IceCream size={24} />
            </div>
            <span className="text-2xl font-bold text-brand-text tracking-tight">
              Cream<span className="text-accent">Bliss</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-text hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#order"
              className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 active:scale-95"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text p-2 rounded-md hover:bg-secondary/20 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-primary border-b border-secondary/30 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-text hover:text-accent hover:bg-secondary/10 transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#order"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-accent text-white px-6 py-3 rounded-full font-semibold mt-4"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
