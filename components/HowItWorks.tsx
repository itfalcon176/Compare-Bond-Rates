'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, UserCheck, Lock } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "Submit Your Preferences",
      desc: "Tell us your target investment amount and preferred duration in our 60-second online comparison tool.",
    },
    {
      num: "02",
      icon: UserCheck,
      title: "Review Bespoke Rates",
      desc: "Your dedicated UK bond specialist compiles a tailored report of the highest FSCS-covered rates currently open.",
    },
    {
      num: "03",
      icon: Lock,
      title: "Lock In Guaranteed Yield",
      desc: "Open your account directly with the chosen authorised UK institution and enjoy steady monthly or maturity payouts.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide mb-3">
            <span>⚡</span>
            SIMPLE 3-STEP PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            How To Secure Your Fixed Rate Bond
          </h2>
          <p className="text-base text-slate-600">
            From initial comparison to earning guaranteed returns in as little as 3 business days.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="relative bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-extrabold font-display text-blue-200 mb-4 leading-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
