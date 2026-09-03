'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    amount: string;
    term: string;
  } | null;
}

export default function LeadModal({ isOpen, onClose, leadData }: LeadModalProps) {
  const [step, setStep] = useState<'verify' | 'confirmed'>('verify');
  const [otp, setOtp] = useState(['8', '2', '0', '4']);

  if (!isOpen || !leadData) return null;

  const handleOtpChange = (val: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    setStep('confirmed');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {step === 'verify' ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Phone className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900">
                Confirm Your Phone Number
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                To protect your bespoke rates, we've dispatched a quick SMS authentication code to{' '}
                <strong className="text-slate-800">
                  {leadData.phone.startsWith('+44') ? leadData.phone : `+44 ${leadData.phone}`}
                </strong>.
              </p>

              {/* OTP Digits */}
              <div className="flex justify-center gap-2.5 my-4">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, idx)}
                    className="w-12 h-14 text-center font-display font-extrabold text-2xl bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-blue-600 outline-none transition-all text-slate-900"
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleVerify}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Verify & View My Rates</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleVerify}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  Skip to Instant Report →
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>

              <h3 className="text-xl font-bold font-display text-slate-900">
                Your Rates Report is Ready!
              </h3>

              <p className="text-xs text-slate-500">
                Thank you, <strong className="text-slate-800">{leadData.firstName} {leadData.lastName}</strong>. We have matched your investment criteria (£{Number(leadData.amount).toLocaleString('en-GB')}) with today's leading fixed bonds:
              </p>

              {/* Matched Rates List */}
              <div className="space-y-2 text-left pt-2">
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex justify-between items-center">
                  <div>
                    <strong className="block text-xs font-bold text-emerald-950">Top Match: 2-Year Fixed Bond</strong>
                    <span className="text-[10px] text-emerald-700">FSCS Regulated • Up to £120k protected</span>
                  </div>
                  <span className="bg-emerald-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg">
                    8.20% P.A.
                  </span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">1-Year Treasury Bond</strong>
                    <span className="text-[10px] text-slate-500">Annual / Monthly Payout</span>
                  </div>
                  <span className="bg-blue-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg">
                    7.45% P.A.
                  </span>
                </div>
              </div>

              {/* Advisor Callout */}
              <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-2xl text-left text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-blue-900">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Dedicated Specialist Assigned</span>
                </div>
                <p className="text-blue-700 leading-snug">
                  One of our FCA-informed advisors will call you shortly from <strong>0203 890 4567</strong> to confirm your rate reservation.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition-all"
              >
                Close & Return to Comparison
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
