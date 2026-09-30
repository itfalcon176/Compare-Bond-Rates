'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface InvestmentComparisonProps {
  onCtaClick?: () => void;
}

export default function InvestmentComparison({ onCtaClick }: InvestmentComparisonProps) {
  const comparisonData = [
    {
      investmentType: 'Fixed Rate Bonds',
      highlight: true,
      returns: 'Up to 8.1% P.A.',
      riskLevel: 'FSCS Protected',
      liquidity: 'Fixed Term',
      protection: '£120,000 Insured',
    },
    {
      investmentType: 'Stocks & ETFs',
      highlight: false,
      returns: 'Variable Returns',
      riskLevel: 'High Volatility',
      liquidity: 'Immediate',
      protection: 'No Protection',
    },
    {
      investmentType: 'Savings Accounts',
      highlight: false,
      returns: '2-3% P.A.',
      riskLevel: 'Very Low',
      liquidity: 'Immediate',
      protection: '£120,000 Insured',
    },
    {
      investmentType: 'Property Investment',
      highlight: false,
      returns: 'Variable Returns',
      riskLevel: 'Market Dependent',
      liquidity: 'Low',
      protection: 'No Protection',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80" id="investment-comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Comparison Table Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-blue-600 text-white text-xs sm:text-sm font-bold tracking-wide">
                  <th className="py-4 px-6 font-extrabold">Investment Type</th>
                  <th className="py-4 px-5 font-extrabold">Returns</th>
                  <th className="py-4 px-5 font-extrabold">Risk Level</th>
                  <th className="py-4 px-5 font-extrabold">Liquidity</th>
                  <th className="py-4 px-6 font-extrabold">Protection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors duration-150 ${
                      row.highlight
                        ? 'bg-emerald-50/50 hover:bg-emerald-50/70 border-l-4 border-l-emerald-500 font-medium'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    {/* 1. Investment Type */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2.5">
                        {row.highlight && (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 stroke-[2.2]" />
                        )}
                        <span
                          className={`font-bold ${
                            row.highlight
                              ? 'text-emerald-700 text-sm sm:text-base font-extrabold'
                              : 'text-slate-900'
                          }`}
                        >
                          {row.investmentType}
                        </span>
                      </div>
                    </td>

                    {/* 2. Returns */}
                    <td className="py-4 px-5">
                      <span
                        className={`${
                          row.highlight
                            ? 'font-extrabold text-slate-900 text-sm sm:text-base'
                            : 'font-semibold text-slate-800'
                        }`}
                      >
                        {row.returns}
                      </span>
                    </td>

                    {/* 3. Risk Level */}
                    <td className="py-4 px-5">
                      <span
                        className={`font-medium ${
                          row.highlight
                            ? 'text-slate-900 font-semibold'
                            : row.riskLevel === 'High Volatility'
                            ? 'text-slate-800'
                            : 'text-slate-800'
                        }`}
                      >
                        {row.riskLevel}
                      </span>
                    </td>

                    {/* 4. Liquidity */}
                    <td className="py-4 px-5 font-medium text-slate-800">
                      {row.liquidity}
                    </td>

                    {/* 5. Protection */}
                    <td className="py-4 px-6">
                      <span
                        className={`font-semibold ${
                          row.protection.includes('Insured') || row.protection.includes('Protected')
                            ? 'text-slate-900 font-bold'
                            : 'text-slate-600'
                        }`}
                      >
                        {row.protection}
                      </span>
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
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              <span>Lock In Up to 8.1% Fixed Returns</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
