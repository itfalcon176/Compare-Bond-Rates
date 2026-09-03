'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

interface FaqProps {
  onCtaClick: () => void;
}

export default function Faq({ onCtaClick }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are fixed-rate bonds and how do they work?",
      a: "Fixed-rate bonds are investment products where you lend money to a financial institution for a set period at a guaranteed interest rate. Your capital is locked in for the term, but you receive predictable returns either monthly, annually, or at maturity. They're ideal for investors seeking security and steady income.",
    },
    {
      q: "Are my investments protected and regulated?",
      a: "All bonds we recommend are from authorised and regulated institutions. Most deposits are protected by the Financial Services Compensation Scheme (FSCS) up to £120,000 per authorised institution, providing additional security for your investments.",
    },
    {
      q: "What's the minimum investment amount?",
      a: "Minimum investment amounts vary by provider and bond type, typically starting from £5,000. However, many of our best rates are available from £25,000. We'll help you find suitable options regardless of your investment amount and can recommend strategies to maximise your returns.",
    },
    {
      q: "How do your rates compare to high street banks?",
      a: "Our rates are typically 0.5-1.5% higher than standard high street bank offerings. We have access to exclusive institutional rates and wholesale markets that aren't available to individual investors directly. This means better returns for your money with the same level of security.",
    },
    {
      q: "Can I access my money early if needed?",
      a: "Most fixed-rate bonds require your money to be locked in for the full term. However, some providers offer early access with penalties, while others provide notice accounts with competitive rates but more flexibility. We'll discuss your liquidity needs during consultation to find the right balance.",
    },
    {
      q: "What fees do you charge for your service?",
      a: "Our consultation and comparison service is completely free. We're paid directly by the institutions when you invest, so there are no fees deducted from your investment. This means you get professional advice and access to exclusive rates at no cost to you.",
    },
    {
      q: "How quickly can I start investing?",
      a: "Once you've chosen a bond, the process typically takes 3-5 working days. This includes account opening, identity verification, and fund transfer. Some providers offer faster processing, and we'll guide you through each step to ensure a smooth experience.",
    },
    {
      q: "What happens if interest rates rise after I invest?",
      a: "With fixed-rate bonds, your rate is guaranteed for the full term regardless of market changes. If rates rise, you won't benefit during your current term, but you'll have certainty of returns. We can discuss laddering strategies to help manage interest rate risk across multiple investments.",
    },
    {
      q: "Do you offer bonds for ISAs and pensions?",
      a: "Yes, we have access to cash ISA bonds and SIPP-eligible bonds for pension investments. These can provide tax-efficient growth within your annual ISA allowance or pension contributions. Our advisors can help structure your investments for maximum tax efficiency.",
    },
    {
      q: "What makes Compare Bond Rates UK different from other services?",
      a: "We combine 9 years of experience with exclusive institutional access, transparent pricing, and personalised service. Unlike online-only platforms, you get a dedicated advisor who understands your needs. We're also completely independent, so our recommendations are always in your best interest.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Icon + Titles */}
        <div className="text-center mb-14">
          <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Get answers to common questions about bond investments and our services. Still have questions? Our experts are here to help.
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="space-y-3 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-500 bg-slate-50/50 shadow-sm' 
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
                    className="text-blue-700 flex-shrink-0"
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

        {/* Bottom CTA Box: Discover the Best Rates in Under 60 Seconds */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 text-center shadow-sm space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            Discover the Best Rates in Under 60 Seconds!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Ready to unlock exclusive bond rates that beat high street banks? It takes less than 60 seconds to discover your personalised rates and get started.
          </p>
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Get My Rates Now</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
