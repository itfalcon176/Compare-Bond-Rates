'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, TrendingUp, ArrowRight, Star, Sparkles } from 'lucide-react';

interface RateComparisonProps {
  onSelectRate: (bondName: string, amount: string, term: string) => void;
}

export default function RateComparison({ onSelectRate }: RateComparisonProps) {
  const [selectedTerm, setSelectedTerm] = useState<'all' | '1-year' | '2-year' | '3-year' | '4-year' | '5-year'>('all');

  const bonds = [
    {
      id: 'bond-1',
      termKey: '2-year',
      title: 'Tier-1 Institutional Growth Bond',
      issuer: 'UK Regulated Bank',
      avatar: 'UK',
      rate: '8.20%',
      rateNum: 8.20,
      termBadge: '2 Years Fixed',
      minInvestment: '£10,000',
      payoutSchedule: 'Monthly or Maturity',
      fscs: 'Up to £120,000',
      profitSnippet: '£50,000 investment earns £8,546 total profit',
      featured: true,
      ribbon: '⭐ TOP MARKET YIELD',
    },
    {
      id: 'bond-2',
      termKey: '1-year',
      title: 'Premier 12-Month Treasury Bond',
      issuer: 'UK Debt Desk',
      avatar: 'FS',
      rate: '7.45%',
      rateNum: 7.45,
      termBadge: '1 Year Fixed',
      minInvestment: '£5,000',
      payoutSchedule: 'Annual / At Maturity',
      fscs: 'Full Coverage',
      profitSnippet: '£50,000 investment earns £3,725 in 12 months',
      featured: false,
    },
    {
      id: 'bond-3',
      termKey: '3-year',
      title: 'UK Corporate Secure Fixed Bond',
      issuer: 'London Commercial',
      avatar: 'GB',
      rate: '7.85%',
      rateNum: 7.85,
      termBadge: '3 Years Fixed',
      minInvestment: '£15,000',
      payoutSchedule: 'Quarterly / Annually',
      fscs: 'Up to £120,000',
      profitSnippet: '£50,000 investment earns £12,718 total profit',
      featured: false,
    },
    {
      id: 'bond-4-yr',
      termKey: '4-year',
      title: 'Capital Protected 4-Year Fixed Bond',
      issuer: 'Barclays Tier-1 Network',
      avatar: 'BC',
      rate: '7.75%',
      rateNum: 7.75,
      termBadge: '4 Years Fixed',
      minInvestment: '£15,000',
      payoutSchedule: 'Monthly or Annually',
      fscs: 'Up to £120,000',
      profitSnippet: '£50,000 investment earns £17,405 total profit',
      featured: false,
    },
    {
      id: 'bond-5',
      termKey: '5-year',
      title: 'Long-Term Wealth Annuity Bond',
      issuer: 'UK Annuity Provider',
      avatar: 'LC',
      rate: '7.60%',
      rateNum: 7.60,
      termBadge: '5 Years Fixed',
      minInvestment: '£25,000',
      payoutSchedule: 'Monthly Income Option',
      fscs: 'Full Statutory',
      profitSnippet: '£50,000 investment earns £22,102 compounded',
      featured: false,
    },
  ];

  const filteredBonds = selectedTerm === 'all' 
    ? bonds 
    : bonds.filter(b => b.termKey === selectedTerm);

  return (
    <section className="py-20 bg-white" id="compare-table">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            LIVE UK BOND RATES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            Compare Today's Top Fixed-Rate Bonds
          </h2>
          <p className="text-base text-slate-600">
            Market-leading fixed returns backed by leading UK financial institutions. Verified daily for maximum yield.
          </p>
        </div>

        {/* Filter Tabs (including 4 Years!) */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {[
            { key: 'all', label: 'All Terms' },
            { key: '1-year', label: '1 Year Fixed' },
            { key: '2-year', label: '2 Years Fixed (Popular)' },
            { key: '3-year', label: '3 Years Fixed' },
            { key: '4-year', label: '4 Years Fixed' },
            { key: '5-year', label: '5 Years Fixed' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTerm(tab.key as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedTerm === tab.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bonds Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          <AnimatePresence>
            {filteredBonds.map((bond) => (
              <motion.div
                key={bond.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`relative bg-white rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 ${
                  bond.featured
                    ? 'border-2 border-emerald-500 shadow-xl shadow-emerald-500/10'
                    : 'border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300'
                }`}
              >
                {bond.featured && (
                  <span className="absolute -top-3.5 right-4 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    {bond.ribbon}
                  </span>
                )}

                <div>
                  {/* Top Row: Issuer & Rate */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 font-extrabold text-xs flex items-center justify-center border border-blue-100 flex-shrink-0">
                      {bond.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                        {bond.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> {bond.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Rate Large */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3.5 text-center mb-3">
                    <div className="text-3xl font-extrabold font-display text-emerald-600 leading-none">
                      {bond.rate}
                    </div>
                    <span className="inline-block text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full mt-1.5">
                      {bond.termBadge}
                    </span>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-1.5 text-xs bg-slate-50/70 p-2.5 rounded-xl mb-3">
                    <div>
                      <span className="text-slate-400 block text-[9px] font-semibold uppercase">Min. Deposit</span>
                      <strong className="text-slate-800 font-bold text-xs">{bond.minInvestment}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] font-semibold uppercase">Protection</span>
                      <strong className="text-emerald-700 font-bold text-xs">{bond.fscs}</strong>
                    </div>
                  </div>

                  {/* Profit Snippet */}
                  <div className="bg-emerald-50/80 border border-dashed border-emerald-200 text-emerald-900 text-[11px] font-semibold p-2 rounded-xl text-center mb-4">
                    {bond.profitSnippet}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectRate(bond.title, '50000', bond.termKey.charAt(0))}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    bond.featured
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                      : 'bg-white hover:bg-slate-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  <span>Lock In {bond.rate} Rate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
