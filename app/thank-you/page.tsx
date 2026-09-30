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
      title: 'Institutional Rate Matching',
      timing: 'In Progress',
      timingColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Our comparison engine is matching your chosen criteria against today’s highest-yielding fixed-rate bonds from FCA-regulated UK institutions.',
    },
    {
      step: '02',
      title: 'Senior Specialist Review',
      timing: 'Within 15 Minutes',
      timingColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description:
        'A dedicated fixed-income specialist reviews your requirements, validates current allocation availability, and prepares your bespoke rate report.',
    },
    {
      step: '03',
      title: 'Bespoke Rate Report Dispatch',
      timing: 'Sent to Inbox',
      timingColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description:
        'Your comprehensive rate breakdown will be dispatched directly to your registered email from enquiries@comparebondrates.co.uk with full return projections.',
    },
    {
      step: '04',
      title: 'Information Pack & Prospectus',
      timing: 'Direct to Email',
      timingColor: 'bg-slate-100 text-slate-700 border-slate-200',
      description:
        'Complete issuer documentation, FSCS protection details, and subscription guidelines will be available for you to review at your own pace.',
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
                We have received your details. Our team is now generating your tailored comparison report comparing top UK fixed-rate bonds yielding up to <strong className="text-emerald-400 font-bold">8.20% P.A.</strong>
              </motion.p>
            </div>

            {/* Body Container */}
            <div className="p-6 sm:p-10 space-y-10">

              {/* 2. Email Confirmation Notice Banner */}
              <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-emerald-200/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">
                      Check Your Inbox from <span className="text-emerald-700 font-extrabold">enquiries@comparebondrates.co.uk</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Your personalized fixed-rate bond comparison report and current allocation details are being dispatched directly to your registered email address.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <a
                    href="mailto:enquiries@comparebondrates.co.uk"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Us Direct</span>
                  </a>
                </div>
              </div>

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
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.timingColor}`}>
                          {item.timing}
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

              {/* 4. What You Receive with Compare Bond Rates */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">
                      Our Fixed Rate Guarantee &amp; Investor Protections
                    </h3>
                    <p className="text-xs text-slate-400">
                      Why thousands of UK savers trust Compare Bond Rates
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="block text-slate-200 font-bold">FSCS Eligible Allocations</strong>
                      <span className="text-slate-400 text-xs">Eligible deposits protected up to £120,000 per person per authorised firm.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="block text-slate-200 font-bold">100% Free &amp; Independent</strong>
                      <span className="text-slate-400 text-xs">Zero broker fees or commissions deducted from your initial capital.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="block text-slate-200 font-bold">Fixed Payout Certainty</strong>
                      <span className="text-slate-400 text-xs">Contractual fixed returns (monthly income or compounded at term maturity).</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="block text-slate-200 font-bold">Strict Privacy &amp; Data Security</strong>
                      <span className="text-slate-400 text-xs">256-bit bank-grade encryption in full compliance with UK GDPR laws.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Contact Channels & Navigation Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="text-center sm:text-left space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Need Assistance?</h4>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-slate-700">
                    <span className="text-slate-500">Official Support:</span>
                    <a href="mailto:enquiries@comparebondrates.co.uk" className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline">
                      <Mail className="w-3.5 h-3.5 text-emerald-600" />
                      <span>enquiries@comparebondrates.co.uk</span>
                    </a>
                  </div>
                </div>

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
