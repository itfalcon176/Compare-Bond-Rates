'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PhoneCall, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onCtaClick?: () => void;
}

export default function HowItWorks({ onCtaClick }: HowItWorksProps) {
  const steps = [
    {
      num: "1",
      icon: Search,
      title: "1. Select Your Investment Goals",
      desc: "Tell us your target investment amount, preferred term (1–5 years), and payout frequency so we can match you with fixed bonds tailored to your objectives and income timeline.",
      badge: "Takes 60 Seconds • 100% Free",
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200/70"
    },
    {
      num: "2",
      icon: PhoneCall,
      title: "2. Speak With a Bond Specialist",
      desc: "A dedicated UK fixed-income specialist reviews the latest institutional tranches and presents a bespoke comparison from FCA-regulated providers matched directly to you.",
      badge: "FCA Regulated • Zero Broker Fees",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200/70"
    },
    {
      num: "3",
      icon: ShieldCheck,
      title: "3. Lock In Your Best Fixed Rate",
      desc: "Choose the fixed bond that best suits your goals and apply directly with the authorized institution. Your capital is protected under statutory FSCS limits up to £120,000.",
      badge: "Rates Up to 8.1% • FSCS Protected",
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200/70"
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50/90 text-blue-800 border border-blue-200/80 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Simple 3-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Three simple steps from initial rate comparison to securing your contracted fixed returns.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-8 sm:p-9 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Connector Line on Desktop */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-16 -right-4 w-8 h-[2px] bg-slate-200 z-10 pointer-events-none" />
                )}

                <div>
                  {/* Circular Amber/Gold Icon Badge matching user image style */}
                  <div className="w-16 h-16 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 group-hover:bg-emerald-100/90 group-hover:text-emerald-700 transition-all duration-300">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-3.5 group-hover:text-blue-950 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Trust/Advantage Pill at bottom of card */}
                <div className="pt-2 border-t border-slate-100">
                  <span className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action Bar */}
        {onCtaClick && (
          <div className="text-center pt-4">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-900 to-slate-900 hover:from-blue-800 hover:to-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <span>Compare Top 8.1% Rates Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-slate-500 mt-2.5">
              100% Free • No Broker Fees • No Obligation Quote
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
