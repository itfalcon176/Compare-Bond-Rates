'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Percent, Calendar, PoundSterling, Clock } from 'lucide-react';

interface ReturnsCalculatorProps {
  onApplyRate: (amount: string, term: string) => void;
}

export default function ReturnsCalculator({ onApplyRate }: ReturnsCalculatorProps) {
  const [amount, setAmount] = useState<number>(50000);
  const [term, setTerm] = useState<number>(2);
  const [rate, setRate] = useState<number>(8.20);
  const [interval, setInterval] = useState<string>('Monthly');

  // Calculations
  const principal = amount;
  const annualRate = rate / 100;
  const years = term;

  let totalReturns = 0;
  let maturityAmount = 0;
  let monthlyReturns = 0;

  if (interval === 'At Maturity') {
    maturityAmount = principal * Math.pow(1 + annualRate, years);
    totalReturns = maturityAmount - principal;
    monthlyReturns = totalReturns / (years * 12);
  } else {
    totalReturns = principal * annualRate * years;
    maturityAmount = principal + totalReturns;
    monthlyReturns = (principal * annualRate) / 12;
  }

  const handleTermChange = (newTerm: number) => {
    setTerm(newTerm);
    if (newTerm === 1) setRate(7.45);
    else if (newTerm === 2) setRate(8.20);
    else if (newTerm === 3) setRate(7.85);
    else if (newTerm === 4) setRate(7.75);
    else if (newTerm === 5) setRate(7.60);
  };

  const formatGBP = (val: number) => {
    return Number(Math.round(val)).toLocaleString('en-GB');
  };

  const formatDecimalGBP = (val: number) => {
    return Number(val).toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100" id="calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Icon + Titles */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <Calculator className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            Bond Returns Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Calculate your potential returns with our professional bond calculator. Get instant results based on current market rates.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Inputs 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* 1. Investment Amount */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Investment Amount (£)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-bold">
                  £
                </span>
                <input
                  type="number"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* 2. Investment Term (Includes 1, 2, 3, 4, 5 Years!) */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Investment Term
              </label>
              <select
                value={term}
                onChange={(e) => handleTermChange(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer"
              >
                <option value={1}>1 Year (7.45% P.A.)</option>
                <option value={2}>2 Years (8.20% P.A. - Popular)</option>
                <option value={3}>3 Years (7.85% P.A.)</option>
                <option value={4}>4 Years (7.75% P.A.)</option>
                <option value={5}>5 Years (7.60% P.A.)</option>
              </select>
            </div>

            {/* 3. Interest Rate */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Interest Rate (% per annum)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.05"
                  min="1"
                  max="15"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full pl-4 pr-9 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
                <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500 font-bold">
                  %
                </span>
              </div>
            </div>

            {/* 4. Payout Interval */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Payout Interval
              </label>
              <select
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all cursor-pointer"
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annually">Annually</option>
                <option value="At Maturity">At Maturity</option>
              </select>
            </div>

          </div>

          {/* Results Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Monthly Returns
              </span>
              <strong className="block text-2xl font-extrabold font-display text-emerald-600">
                £{formatDecimalGBP(monthlyReturns)}
              </strong>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Total Returns
              </span>
              <strong className="block text-2xl font-extrabold font-display text-emerald-600">
                £{formatDecimalGBP(totalReturns)}
              </strong>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Maturity Amount
              </span>
              <strong className="block text-2xl font-extrabold font-display text-blue-700">
                £{formatDecimalGBP(maturityAmount)}
              </strong>
            </div>

          </div>

          {/* Text Statement Callout */}
          <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 text-center text-xs sm:text-sm text-blue-900">
            A <strong className="font-bold">£{formatGBP(principal)}</strong> investment will generate{' '}
            <strong className="font-bold text-emerald-700">£{formatGBP(totalReturns)}</strong> in total returns over{' '}
            <strong className="font-bold">{term} year{term > 1 ? 's' : ''}</strong> at{' '}
            <strong className="font-bold">{rate.toFixed(2)}%</strong> per annum.
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            type="button"
            onClick={() => onApplyRate(amount.toString(), term.toString())}
            className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-blue-700/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Find Bonds with This Interest Rate</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

        </div>

      </div>
    </section>
  );
}
