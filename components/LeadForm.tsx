'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Lock,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Zap,
  Sparkles,
  Check,
  TrendingUp
} from 'lucide-react';

interface LeadFormProps {
  onSuccess: (data: {
    fullName: string;
    email: string;
    phone: string;
    amount: string;
    term: string;
    timeframe: string;
    consent: boolean;
  }) => void;
  onOpenLegal?: (type: string) => void;
  initialAmount?: string;
  initialTerm?: string;
}

export default function LeadForm({ onSuccess, onOpenLegal, initialAmount, initialTerm }: LeadFormProps) {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [selectedAmount, setSelectedAmount] = useState<string>('£50,000 - £100,000');
  const [selectedTerm, setSelectedTerm] = useState<string>('2 Years');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('Immediately');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
=======
  const [submissionError, setSubmissionError] = useState('');
>>>>>>> 3ff50197f402d92e3c84b67c449c1ca2b150e27f

  // Sync if prefilled from calculator
  useEffect(() => {
    if (initialAmount) {
      const num = parseInt(initialAmount, 10);
      if (num <= 50000) setSelectedAmount('£25,000 - £50,000');
      else if (num <= 100000) setSelectedAmount('£50,000 - £100,000');
      else if (num <= 250000) setSelectedAmount('£100,000 - £250,000');
      else setSelectedAmount('£250,000+');
    }
    if (initialTerm) {
      if (initialTerm === '1') setSelectedTerm('1 Year');
      else if (initialTerm === '2') setSelectedTerm('2 Years');
      else if (initialTerm === '3') setSelectedTerm('3 Years');
      else if (initialTerm === '4') setSelectedTerm('4 Years');
      else if (initialTerm === '5') setSelectedTerm('5 Years');
    }
  }, [initialAmount, initialTerm]);

  // Step 1 Options
  const amountOptions = [
    { label: '£25,000 - £50,000', badge: 'Standard Tier' },
    { label: '£50,000 - £100,000', badge: 'Premier Tier', popular: true },
    { label: '£100,000 - £250,000', badge: 'Bespoke Wealth' },
    { label: '£250,000+', badge: 'HNW Portfolio' },
  ];

  // Step 2 Options (including 4 Years!)
  const termOptions = [
    { label: '1 Year' },
    { label: '2 Years', popular: true },
    { label: '3 Years' },
    { label: '4 Years' },
    { label: '5 Years' },
  ];

  // Step 3 Options
  const timeframeOptions = [
    'Immediately',
    'Within 7 Days',
    'Within 14 Days',
    'Within a Month',
  ];

  const handleSelectAmount = (val: string) => {
    setSelectedAmount(val);
  };

  const handleSelectTerm = (val: string) => {
    setSelectedTerm(val);
  };

  const handleSelectTimeframe = (val: string) => {
    setSelectedTimeframe(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!agree) {
      alert('Please accept the Privacy Policy and Terms & Conditions to compare rates.');
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please fill in all required contact fields.');
      return;
    }

    setLoading(true);
<<<<<<< HEAD

    const formData = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      amount: selectedAmount,
      term: selectedTerm,
      timeframe: selectedTimeframe,
    };

    try {
      const response = await fetch('/api/compare-rates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit lead.');
      }

      if (onSuccess) {
        onSuccess(formData);
      }

      // Directly navigate to /thank-you
      router.push('/thank-you');
    } catch (err: any) {
      console.error('Lead submission error:', err);
      setErrorMsg(err?.message || 'An error occurred while submitting your request. Please try again.');
=======
    setSubmissionError('');

    const lead = {
      fullName,
      email,
      phone,
      amount: selectedAmount,
      term: selectedTerm,
      timeframe: selectedTimeframe,
      consent: agree,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Unable to submit your request right now. Please try again.');
      }

      onSuccess(lead);
      router.push('/thank-you');
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Unable to submit your request right now. Please try again.');
>>>>>>> 3ff50197f402d92e3c84b67c449c1ca2b150e27f
      setLoading(false);
    }
  };

  const progressPct = step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 100;

  return (
    <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden transition-all duration-300">

      {/* Top Green Accent Header with Gradient */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 px-6 py-5 text-center text-white relative shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
          Get Your Personalised Rates
        </h2>
        <p className="text-xs sm:text-sm text-emerald-50 max-w-sm mx-auto opacity-95">
          Fill out the form below to receive exclusive bond rates tailored to your investment goals
        </p>

        {/* Step Progress Pill Indicator */}
        <div className="mt-3.5 pt-2.5 border-t border-emerald-500/40 flex items-center justify-between text-xs text-emerald-100">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Step {step} of 4</span>
            <span>•</span>
            <span className="font-medium text-emerald-50">
              {step === 1 && 'Investment Amount'}
              {step === 2 && 'Investment Term'}
              {step === 3 && 'Investment Timeline'}
              {step === 4 && 'Contact Information'}
            </span>
          </div>
          <span className="font-extrabold text-white">{progressPct}%</span>
        </div>

        <div className="w-full h-1.5 bg-emerald-800/50 rounded-full overflow-hidden mt-1.5">
          <motion.div
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </div>

      {/* Inside Form: Live Rate Ticker Banner */}
      <div className="bg-emerald-50/90 border-b border-emerald-200/80 px-4 py-2.5 flex items-center justify-center gap-2 text-center text-xs">
        <span className="flex h-2 w-2 relative flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
        </span>
        <div className="flex items-center gap-1.5 flex-wrap justify-center font-semibold text-emerald-950">
          <span>Today&apos;s best rate:</span>
          <span className="font-extrabold text-emerald-700 text-xs sm:text-sm">8.1% P.A.</span>
          <span className="text-emerald-300 font-normal">·</span>
          <span className="text-emerald-800 font-medium">
            Updated {new Date().toLocaleDateString("en-GB", {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>
      </div>

      {/* Main Interactive Step Card Body */}
      <div className="p-6 sm:p-7 bg-white min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">

          {/* STEP 1: How much would you like to invest? */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  How much would you like to invest?
                </h3>
                <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  Min. £25,000
                </span>
              </div>

              <div className="space-y-2.5">
                {amountOptions.map((opt) => {
                  const isSelected = selectedAmount === opt.label;
                  return (
                    <motion.button
                      key={opt.label}
                      type="button"
                      whileHover={{ scale: 1.012, y: -1 }}
                      whileTap={{ scale: 0.988 }}
                      onClick={() => handleSelectAmount(opt.label)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${isSelected
                        ? 'bg-emerald-50/80 border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200/80 text-slate-700'
                          }`}>
                          £
                        </div>
                        <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {opt.label}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300 group-hover:border-emerald-500'
                        }`}>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}

          {/* STEP 2: What investment term are you looking for? */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
              className="space-y-4"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                What investment term are you looking for?
              </h3>

              <div className="space-y-2">
                {termOptions.map((opt) => {
                  const isSelected = selectedTerm === opt.label;
                  return (
                    <motion.button
                      key={opt.label}
                      type="button"
                      whileHover={{ scale: 1.012, y: -1 }}
                      whileTap={{ scale: 0.988 }}
                      onClick={() => handleSelectTerm(opt.label)}
                      className={`w-full text-left py-3.5 px-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${isSelected
                        ? 'bg-emerald-50/80 border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200/80 text-slate-700'
                          }`}>
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {opt.label}
                        </span>
                        {opt.popular && (
                          <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300 group-hover:border-emerald-500'
                          }`}>
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500" />}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setStep(3)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: How soon are you looking to invest? */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
              className="space-y-4"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                How soon are you looking to invest?
              </h3>

              <div className="space-y-2.5">
                {timeframeOptions.map((opt) => {
                  const isSelected = selectedTimeframe === opt;
                  return (
                    <motion.button
                      key={opt}
                      type="button"
                      whileHover={{ scale: 1.012, y: -1 }}
                      whileTap={{ scale: 0.988 }}
                      onClick={() => handleSelectTimeframe(opt)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${isSelected
                        ? 'bg-emerald-50/80 border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-slate-50/80 border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {opt}
                      </span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300 group-hover:border-emerald-500'
                        }`}>
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setStep(4)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Almost there... Contact Form */}
          {step === 4 && (
            <motion.form
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Almost there...
                </h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {selectedAmount} • {selectedTerm}
                </span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex-shrink-0">
                    GB +44
                  </span>
                  <input
                    type="tel"
                    placeholder="07XXX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4 flex-shrink-0"
                    required
                  />
                  <span className="text-[11px] leading-relaxed text-slate-500">
                    I agree to the{' '}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-semibold"
                    >
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:underline font-semibold"
                    >
                      Terms &amp; Conditions
                    </Link>
                    . Your information is secure and will never be shared with third parties.
                  </span>
                </label>
              </div>

              {/* Error Message Display */}
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200/80 rounded-xl text-xs font-semibold text-rose-700 leading-relaxed">
                  {errorMsg}
                </div>
              )}

              {/* Green COMPARE NOW CTA Button */}
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-75 uppercase tracking-wide"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Matching Best Rates...
                  </span>
                ) : (
                  <>
                    <span>COMPARE NOW →</span>
                  </>
                )}
              </motion.button>

              {submissionError && (
                <p role="alert" className="text-sm text-red-700 text-center">
                  {submissionError}
                </p>
              )}

              {/* Security guarantee */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your data is secure and encrypted</span>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>
            </motion.form>
          )}

        </AnimatePresence>

        {/* Persistent Social Proof Footer on all steps */}
        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-emerald-700">MT</div>
              <div className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-blue-700">DC</div>
              <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-emerald-700">PW</div>
            </div>
            <p className="text-xs text-slate-600">
              <strong className="font-bold text-slate-900">11,750+</strong> investors compared this week
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            <Clock className="w-3 h-3" /> Live
          </span>
        </div>

      </div>

    </div>
  );
}
