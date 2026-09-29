'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function RateTicker() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white py-2 relative overflow-hidden">
      {/* Subtle animated shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2.5 relative z-10">
        <TrendingUp className="w-4 h-4 text-emerald-100 flex-shrink-0" />
        <p className="text-xs sm:text-sm font-bold tracking-wide text-center">
          <span className="text-white">Today&apos;s best rate:</span>{' '}
          <span className="text-emerald-100 font-extrabold text-sm sm:text-base">8.1% P.A.</span>
          <span className="mx-2 text-emerald-300/60">·</span>
          <span className="text-emerald-100/90 font-medium">Updated 29 September 2026</span>
        </p>
      </div>
    </div>
  );
}
