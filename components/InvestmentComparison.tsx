'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

interface InvestmentComparisonProps {
  onCtaClick?: () => void;
}

export default function InvestmentComparison({ onCtaClick }: InvestmentComparisonProps) {
  const comparisonData = [
    {
      product: "Fixed Rate Bonds",
      highlight: true,
      returnVal: "Up to 8.20% p.a.",
      risk: "Low",
      fscs: true,
      fixedRate: true,
      access: "Fixed term",
      beatsInflation: true,
    },
    {
      product: "Easy Access Savings",
      highlight: false,
      returnVal: "~3.5% p.a.",
      risk: "Low",
      fscs: true,
      fixedRate: false,
      access: "Anytime",
      beatsInflation: false,
    },
    {
      product: "Cash ISA",
      highlight: false,
      returnVal: "~4.5% p.a.",
      risk: "Low",
      fscs: true,
      fixedRate: null, // neutral dash
      access: "Anytime",
      beatsInflation: null, // neutral dash
    },
    {
      product: "Stocks & Shares",
      highlight: false,
      returnVal: "Variable",
      risk: "High",
      fscs: false,
      fixedRate: false,
      access: "Anytime",
      beatsInflation: true,
    },
    {
      product: "Premium Bonds",
      highlight: false,
      returnVal: "~4.0% avg",
      risk: "Low",
      fscs: true,
      fixedRate: false,
      access: "Anytime",
      beatsInflation: false,
    },
    {
      product: "Buy-to-Let Property",
      highlight: false,
      returnVal: "~5–7% yield",
      risk: "High",
      fscs: false,
      fixedRate: false,
      access: "Illiquid",
      beatsInflation: true,
    },
  ];

  const renderStatus = (val: boolean | null) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-bold">
          <Check className="w-4 h-4 stroke-[2.5]" />
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50 text-rose-500 font-bold">
          <X className="w-4 h-4 stroke-[2.5]" />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 text-slate-400 font-bold">
        <Minus className="w-4 h-4 stroke-[2.5]" />
      </span>
    );
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80" id="investment-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Market Benchmark Analysis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight mb-4">
            Investment Products Compared
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            See how UK fixed rate bonds stack up against other popular savings and investment options.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-[#0c1a3b] text-white text-xs sm:text-sm font-bold tracking-wide">
                  <th className="py-4 px-5 font-bold">Product</th>
                  <th className="py-4 px-4 font-bold text-center">Typical Return</th>
                  <th className="py-4 px-4 font-bold text-center">Risk</th>
                  <th className="py-4 px-4 font-bold text-center">FSCS Protected</th>
                  <th className="py-4 px-4 font-bold text-center">Fixed Rate</th>
                  <th className="py-4 px-4 font-bold text-center">Access</th>
                  <th className="py-4 px-4 font-bold text-center">Beats Inflation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors duration-150 ${
                      row.highlight
                        ? 'bg-[#fffcf2] border-l-4 border-l-amber-500 font-medium'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    {/* Product Name */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${row.highlight ? 'text-slate-950 text-sm sm:text-base' : 'text-slate-800'}`}>
                          {row.product}
                        </span>
                        {row.highlight && (
                          <span className="hidden sm:inline-block bg-amber-500/20 text-amber-800 border border-amber-400/40 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Typical Return */}
                    <td className="py-4 px-4 text-center">
                      <span className={row.highlight ? 'font-extrabold text-emerald-700 text-sm sm:text-base' : 'text-slate-700 font-semibold'}>
                        {row.returnVal}
                      </span>
                    </td>

                    {/* Risk Level */}
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-block font-semibold px-2.5 py-0.5 rounded-full text-xs ${
                          row.risk === 'Low'
                            ? 'text-emerald-700 bg-emerald-50'
                            : 'text-amber-800 bg-amber-50'
                        }`}
                      >
                        {row.risk}
                      </span>
                    </td>

                    {/* FSCS Protected */}
                    <td className="py-4 px-4 text-center">
                      {renderStatus(row.fscs)}
                    </td>

                    {/* Fixed Rate */}
                    <td className="py-4 px-4 text-center">
                      {renderStatus(row.fixedRate)}
                    </td>

                    {/* Access */}
                    <td className="py-4 px-4 text-center font-medium text-slate-700">
                      {row.access}
                    </td>

                    {/* Beats Inflation */}
                    <td className="py-4 px-4 text-center">
                      {renderStatus(row.beatsInflation)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer Footer Note */}
        <p className="text-center text-xs text-slate-500 max-w-3xl mx-auto mt-4 leading-relaxed">
          Indicative figures based on publicly available UK market data. Returns vary by provider, term, and personal eligibility. Capital may be at risk for non-FSCS products.
        </p>

        {/* Bottom CTA */}
        {onCtaClick && (
          <div className="text-center mt-8">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              <span>Lock In Up to 8.20% Fixed Returns</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
