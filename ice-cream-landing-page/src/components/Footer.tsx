"use client";

import React from "react";
import { IceCream, Mail } from "lucide-react"; // Keep general icons here
import { SiInstagram, SiFacebook, SiX } from "react-icons/si"; // Social icons from Simple Icons

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-text text-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-full text-white">
                <IceCream size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Cream<span className="text-accent">Bliss</span>
              </span>
            </div>
            <p className="text-primary/60 leading-relaxed">
              Bringing sweetness to your life, one scoop at a time. The most
              artisanal and creamy ice cream in town.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary/60 hover:text-accent transition-colors"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary/60 hover:text-accent transition-colors"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary/60 hover:text-accent transition-colors"
              >
                <SiX size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4 text-primary/60">
              <li>
                <a href="/" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#flavors"
                  className="hover:text-accent transition-colors"
                >
                  Our Flavors
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-4 text-primary/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Sweet</h4>
            <p className="text-primary/60 text-sm">
              Subscribe to get the latest flavor drops and special offers!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent w-full"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg font-bold hover:bg-accent/90 transition-all">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-16 pt-8 text-center text-primary/40 text-sm">
          <p>
            © {new Date().getFullYear()} CreamBliss Artisanal Ice Cream. All
            rights reserved. 🍦
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
