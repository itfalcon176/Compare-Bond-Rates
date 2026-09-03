'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Lock, 
  Star, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import LeadForm from './LeadForm';

interface HeroProps {
  onSuccessLead: (data: any) => void;
  onOpenLegal: (type: string) => void;
  prefillAmount?: string;
  prefillTerm?: string;
}

export default function Hero({ onSuccessLead, onOpenLegal, prefillAmount, prefillTerm }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 text-white pt-12 pb-18 lg:pt-18 lg:pb-24 shadow-inner">
      
      {/* Dynamic Background Mesh & Glowing Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Subtle Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Ambient Glowing Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-[550px] h-[550px] bg-emerald-500/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-teal-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Pill with Pulsing Live Dot */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>FSCS Protected Fixed Deposits</span>
              <span className="bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                Up to £120,000
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.12]">
              Compare the UK's <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
                Best Bond Rates
              </span>
            </h1>

            {/* Premium Rate Highlight Card with Glass Effect */}
            <motion.div 
              whileHover={{ scale: 1.015, y: -2 }}
              className="inline-flex items-center gap-3.5 bg-white/15 backdrop-blur-md border border-white/25 px-5 py-3.5 rounded-2xl shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold shadow-md flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <span>Earn up to 8.20% Fixed Returns</span>
                  <span className="text-[11px] font-bold text-emerald-950 bg-emerald-300 px-2 py-0.5 rounded-full">
                    Guaranteed
                  </span>
                </div>
                <span className="text-xs text-blue-100/80 block">
                  Beat high street bank rates with institutional fixed-term bonds
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl">
              Access exclusive fixed-rate bonds from leading financial institutions. Professional guidance, competitive rates, and complete transparency.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold">100% Impartial &amp; Free</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold">No Broker Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold">Instant Online Quote</span>
              </div>
            </div>

            {/* Trust Footer Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-white/15">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Award Winning Service
                  </span>
                  <span className="text-[11px] text-blue-200 block">
                    Money Marketing 2024
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    15,000+ Happy Clients
                  </span>
                  <span className="text-[11px] text-blue-200 block">
                    Over £2.5B+ placed
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-amber-400/15 border border-amber-300/30 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Lead Form Column with Elevated Glass Glow */}
          <motion.div 
            id="lead-form-section"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient backlight glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 via-teal-300/20 to-blue-400/30 rounded-3xl blur-2xl opacity-80 -z-10" />

            <LeadForm 
              onSuccess={onSuccessLead}
              onOpenLegal={onOpenLegal}
              initialAmount={prefillAmount}
              initialTerm={prefillTerm}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
