'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  onCompareClick: () => void;
}

export default function Header({ onCompareClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Calculator', href: '#calculator' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQs', href: '#faq' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' 
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
        
        {/* PROMINENT, LARGE BRAND LOGO - STRICTLY NO BORDER, NO SHADOW */}
        <Link 
          href="/" 
          className="inline-flex items-center p-0 m-0 border-0 shadow-none outline-none bg-transparent flex-shrink-0"
        >
          <Image
            src="/assets/logo.png"
            alt="Compare Bond Rates UK"
            width={340}
            height={120}
            priority
            className="logo-img-clean w-[220px] sm:w-[270px] md:w-[310px] lg:w-[340px] h-auto max-h-16 sm:max-h-18 object-contain mix-blend-multiply transition-all"
          />
        </Link>

        {/* Desktop Section Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm lg:text-[16px] font-bold text-slate-700 hover:text-blue-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCompareClick}
            className="bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-extrabold px-5 sm:px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Compare The Market</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline" />
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-700 hover:text-blue-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-6 pt-2 pb-6 space-y-3 shadow-lg"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-800 py-2 hover:text-blue-700 border-b border-slate-100"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:02038904567"
                className="flex items-center gap-2 text-sm font-bold text-slate-700 py-1"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call: 0203 890 4567</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCompareClick();
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow text-center"
              >
                Get Personalised Rates
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
