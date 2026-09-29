'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight, ShieldCheck, Sparkles, Building2, Lock, Percent } from 'lucide-react';

interface FaqProps {
  onCtaClick: () => void;
}

export default function Faq({ onCtaClick }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How are fixed-rate bond coupon yields (up to 8.1% p.a.) secured?",
      a: "Fixed-rate bonds are legally binding debt instruments issued by authorized UK financial institutions and corporate entities. Once you lock in your allocation, the issuing institution is contractually obligated to pay your fixed interest rate for the entire agreed term, completely unaffected by Bank of England base rate adjustments or financial market volatility.",
    },
    {
      q: "How does statutory FSCS deposit protection work for bondholders?",
      a: "Eligible fixed deposits and qualifying savings bonds are protected by the UK Financial Services Compensation Scheme (FSCS) up to £120,000 per person, per authorized banking licence. This provides statutory government-backed compensation covering 100% of your initial capital and accrued interest against institutional default.",
    },
    {
      q: "What is the minimum and maximum capital threshold?",
      a: "Standard institutional fixed tranches typically start from £10,000, while premier high-yield corporate notes begin from £25,000 to £50,000. There are no upper allocation limits for high-net-worth (HNW) investors, family offices, or corporate treasury deposits exceeding £1,000,000+.",
    },
    {
      q: "Why are wholesale institutional rates higher than high-street retail banks?",
      a: "Traditional high-street banks maintain expensive branch networks and high operational overheads, passing only a fraction of their lending margins to retail depositors. Institutional fixed-income notes connect investors directly with corporate, infrastructure, and sovereign debt desks, eliminating retail intermediary markups.",
    },
    {
      q: "Can I choose between monthly cash income and compounded growth at maturity?",
      a: "Yes. Most featured fixed-rate products offer tailored payout schedules. You can select predictable monthly passive income paid directly into your UK bank account on a set date, quarterly disbursements, or annual compounding at maturity to maximize total cumulative profit.",
    },
    {
      q: "Are these fixed-rate bonds eligible for SIPP, SSAS, or ISA tax wrappers?",
      a: "Yes. Many of our featured fixed-rate notes and cash bonds are structured for inclusion within Self-Invested Personal Pensions (SIPPs), Small Self-Administered Schemes (SSAS), and Stocks & Shares ISAs, allowing you to generate tax-free or tax-deferred fixed returns within your annual allowances.",
    },
    {
      q: "How does CompareBondRates UK provide a 100% free service to investors?",
      a: "Our independent comparison and introductory platform is completely free for individual and corporate investors. Issuing institutions pay a standardized placement fee upon successful account funding. Zero broker fees, management deductions, or subscription charges are ever taken from your principal or interest.",
    },
    {
      q: "What is a bond laddering strategy and how does it protect liquidity?",
      a: "A bond ladder involves dividing your total investment across staggered maturity dates (e.g. 1, 2, 3, and 5 years). This ensures that a portion of your capital matures every 12 months for cash access or reinvestment, while locking in the highest yields on longer-term tranches.",
    },
    {
      q: "What is the step-by-step application and onboarding process?",
      a: "After completing our 60-second online rate request, you receive a full institutional prospectus. Your allocated UK relationship manager assists with digital identity verification and direct funds transfer to the regulated custodian, with accounts typically activated in 3 to 5 working days.",
    },
    {
      q: "What happens to my capital at the end of the fixed term?",
      a: "Upon term completion, 100% of your initial capital plus any final coupon interest is transferred directly back to your nominated UK bank account. You also have the option to roll over your funds into the highest available market rates at that time with a single instruction.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Icon + Titles */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>UK Fixed-Income Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Essential facts on FSCS statutory guarantees, wholesale yield mechanics, tax wrapper eligibility, and maturity procedures.
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="space-y-3 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${isOpen
                    ? 'border-emerald-400 bg-white shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-emerald-600 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dedicated UK Fixed-Income Specialists</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Have questions regarding your specific allocation?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our bond introduction specialists can walk you through institutional prospectuses, FSCS limits, and current peak yield availability.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onCtaClick}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Get Your Impartial Bond Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:02038904567"
              className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-200 transition-all"
            >
              Call 0203 890 4567
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
