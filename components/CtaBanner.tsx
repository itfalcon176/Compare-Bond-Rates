'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onCtaClick: () => void;
}

export default function CtaBanner({ onCtaClick }: CtaBannerProps) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 border border-white/15 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                60-SECOND BESPOKE REPORT
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white">
                Discover the UK's Best Bond Rates Today
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Join over 15,000 satisfied investors securing guaranteed returns up to 8.20% p.a. Zero broker fees and 100% impartial guidance.
              </p>
            </div>

            <div className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-900 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl transition-all"
              >
                <span>Get Your Free Rates Report</span>
                <ArrowRight className="w-5 h-5 text-blue-700" />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
