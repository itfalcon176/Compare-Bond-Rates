'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Clock, 
  ArrowLeft,
  Mail,
  PhoneCall,
  Award,
  Building2,
  Lock
} from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Thank You Page Content */}
      <main className="flex-grow py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden">
            
            {/* Top Green Hero Banner */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 px-6 sm:px-10 py-10 text-center text-white relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 15 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30 shadow-lg"
              >
                <CheckCircle2 className="w-11 h-11 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white mb-2"
              >
                Thank You for Your Submission!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm sm:text-base text-emerald-50 max-w-lg mx-auto opacity-95"
              >
                Your bond comparison request has been received successfully
              </motion.p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Intro message */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 text-slate-700">
                <p className="text-sm sm:text-base leading-relaxed">
                  We&apos;ve received your bond comparison request and our team is already working on finding you the best fixed rate bond rates available from FCA-regulated institutions.
                </p>
              </div>

              {/* What Happens Next Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                    What Happens Next?
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-1">
                  {[
                    {
                      step: '1',
                      title: 'Rate Analysis',
                      time: 'Within 24 Hours',
                      desc: 'Our team will analyse current fixed rate bond rates from leading FCA-regulated UK banks and building societies.',
                    },
                    {
                      step: '2',
                      title: 'Personalised Consultation',
                      time: 'Dedicated Adviser',
                      desc: 'A member of our team will contact you to discuss your personalised bond rate comparison and answer any questions.',
                    },
                    {
                      step: '3',
                      title: 'Detailed Bond Comparison',
                      time: 'Tailored Report',
                      desc: 'You\u2019ll receive a comprehensive comparison showing the best available fixed rate bond rates from multiple UK institutions.',
                    },
                    {
                      step: '4',
                      title: 'Simple Application Process',
                      time: 'Zero Hassle',
                      desc: 'Once you\u2019ve chosen your preferred bond, we\u2019ll guide you through the straightforward application process.',
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200/80 hover:border-emerald-200 transition-all flex gap-4 items-start"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-sm font-extrabold flex-shrink-0 shadow-sm mt-0.5">
                        {item.step}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            {item.title}
                          </h3>
                          {item.time && (
                            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                              {item.time}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Important Information Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3.5 shadow-md">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Important Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>All institutions we compare are FCA-regulated UK banks and building societies.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Your deposits are protected up to £120,000 per eligible person under the FSCS.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Our comparison service is completely free with no hidden charges.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Compare Bond Rates is a comparison aggregator and does not provide financial advice.</span>
                  </div>
                </div>
              </div>

              {/* Contact & Return Navigation */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left text-xs text-slate-500">
                  <span>Questions regarding your request? </span>
                  <a 
                    href="mailto:info@comparebondrates.co.uk" 
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    info@comparebondrates.co.uk
                  </a>
                </div>

                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow transition-all hover:shadow-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Home</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
