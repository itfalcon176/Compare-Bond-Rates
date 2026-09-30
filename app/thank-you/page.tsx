'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CheckCircle2,
  ShieldCheck,
  Mail,
  ArrowLeft,
  CalendarCheck,
  Check
} from 'lucide-react';

export default function ThankYouPage() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const nextSteps = [
    {
      step: '01',
      title: 'Rate Analysis (Within 24 Hours)',
      description:
        'Our team will review the latest fixed-rate bond offers from leading FCA-regulated banks and building societies across the UK.',
    },
    {
      step: '02',
      title: 'Personalised Consultation',
      description:
        'One of our team members will get in touch with you to go through your tailored bond comparison and address any questions you may have.',
    },
    {
      step: '03',
      title: 'Detailed Bond Comparison',
      description:
        'We’ll provide you with a clear, in-depth comparison of the most competitive fixed-rate bond options currently available from a range of UK institutions.',
    },
    {
      step: '04',
      title: 'Simple Application Process',
      description:
        'After selecting the bond that suits you, our team will support you throughout the application process, making each step clear and easy to complete.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header onCompareClick={() => { window.location.href = '/#hero-form'; }} />

      {/* Main Content Area */}
      <main className="flex-grow py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* 1. Main Success Hero Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">

            {/* Top Navy/Emerald Gradient Header */}
            <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 px-6 sm:px-12 py-10 sm:py-14 text-center text-white relative">

              {/* Subtle background glow */}
              <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Animated Check Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400/50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg backdrop-blur-sm"
              >
                <CheckCircle2 className="w-11 h-11 text-emerald-400 stroke-[2.2]" />
              </motion.div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Request Confirmed • {currentDate}</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white mb-3"
              >
                Thank You! Your Comparison Request Is Confirmed
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed"
              >
                We’ve received your request to compare bonds, and our team is currently reviewing the fixed-rate bond options offered by FCA-regulated institutions to find the most suitable rates for you.              </motion.p>
            </div>

            {/* Body Container */}
            <div className="p-6 sm:p-10 space-y-10">



              {/* 3. Step-by-Step Next Actions */}
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                      What Happens Next?
                    </h2>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Standard Response Timeline</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nextSteps.map((item, idx) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 hover:bg-white hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-lg">
                          STEP {item.step}
                        </span>
                      </div>

                      <div className="space-y-1.5 flex-grow">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 4. Important Information */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Important Information
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-slate-300">
                      We compare rates from FCA-regulated banks and building societies operating in the UK.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-slate-300">
                      Eligible deposits are protected by the FSCS up to £120,000 per person, subject to applicable eligibility criteria.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-slate-300">
                      Our bond comparison service is completely free of charge.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-slate-300">
                      Rates Pro acts as a comparison aggregator and does not provide financial advice.
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Contact Channels & Navigation Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">


                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Link>
              </div>

            </div>

          </div>

          {/* Compliance Disclaimer Footer */}
          <div className="text-center text-[11px] sm:text-xs text-slate-500 space-y-2 max-w-3xl mx-auto px-4 leading-relaxed">
            <p>
              Compare Bond Rates is a free, independent comparison platform matching UK savers and investors with institutional and corporate fixed-rate bond products. We do not offer direct investment advice or hold client funds directly.
            </p>
            <p>
              © {new Date().getFullYear()} Compare Bond Rates UK. All rights reserved. Registered in England and Wales.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer onScrollToForm={() => { window.location.href = '/#hero-form'; }} />
    </div>
  );
}
