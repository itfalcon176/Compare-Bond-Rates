'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Lock, 
  Percent, 
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface WhyChooseUsProps {
  onCtaClick: () => void;
}

export default function WhyChooseUs({ onCtaClick }: WhyChooseUsProps) {
  const stats = [
    {
      icon: TrendingUp,
      title: "Access to Exclusive Rates",
      desc: "Exclusive institutional rates not available to individual investors",
    },
    {
      icon: Award,
      title: "Award Winning Service",
      desc: "Winner of Best Bond Service 2024 - Money Marketing Awards",
    },
    {
      icon: ShieldCheck,
      title: "£2.5B+ Placed",
      desc: "Successfully placed over £2.5 billion in client investments",
    },
    {
      icon: Users,
      title: "15,000+ Happy Clients",
      desc: "Trusted by thousands of investors across the United Kingdom",
    },
  ];

  const benefits = [
    "Access to the UK's most competitive fixed-rate bonds",
    "Complete transparency with no hidden fees or charges",
    "FSCS protection up to £120,000 per institution",
    "Dedicated relationship managers for personalised service",
    "Real-time market updates and rate monitoring",
    "Comprehensive portfolio reporting and tracking",
  ];

  const beatOtherCards = [
    {
      title: "Guaranteed Returns",
      desc: "Unlike stocks, your returns are fixed and protected throughout the investment term.",
    },
    {
      title: "Better Than Savings Accounts",
      desc: "Earn rates up to 2% to 4% higher than traditional high street savings accounts.",
    },
    {
      title: "No Market Volatility",
      desc: "Your capital remains secure and protected from stock market crashes and downturns.",
    },
    {
      title: "FSCS Protected",
      desc: "Government statutory guarantee up to £120,000 per authorised institution.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Icon + Titles */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            Why Choose Compare Bond Rates?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            With 9 years of experience and exclusive access to institutional bond markets, we're the UK's most trusted independent bond comparison service.
          </p>
        </div>

        {/* 4 Feature Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 2-Column Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Professional Bond Service */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            
            {/* Visual Graphic Representation */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 p-8 text-white mb-6">
              <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                FSCS Protected
              </div>
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                9 Years Trust
              </div>
              <div className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                Up to 8.20% Fixed
              </div>

              <div className="text-center py-6 space-y-2">
                <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">
                  Institutional Security
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-display">
                  Guaranteed Wealth Preservation
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Trusted by UK retirees, wealth managers, and individual investors across Britain.
                </p>
              </div>
            </div>

            {/* Description & Checkmarks */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-display text-slate-900">
                Professional Bond Investment Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Compare Bond Rates UK provides access to the UK's most competitive fixed-rate bonds through our exclusive relationships with leading financial institutions. Our independent approach ensures you always get the best rates available in the market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CTA Box & Comparison Points */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Box: Ready to Grow Your Wealth? */}
            <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white rounded-3xl p-6 sm:p-7 text-center shadow-md space-y-4">
              <div className="w-12 h-12 bg-white/15 text-white rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Ready to Grow Your Wealth?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xs mx-auto">
                Discover exclusive bond rates that beat high street banks
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onCtaClick}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all"
              >
                Access The Market
              </motion.button>
            </div>

            {/* Bottom Box: Why Fixed Rate Bonds Beat Other Investments */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4 flex-grow">
              <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
                Why Fixed Rate Bonds Beat Other Investments
              </h3>

              <div className="space-y-3.5">
                {beatOtherCards.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <strong className="block text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </strong>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
