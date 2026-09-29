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
  ArrowRight,
  Landmark,
  PiggyBank,
  BadgePercent,
  Check
} from 'lucide-react';
import LeadForm from './LeadForm';

interface HeroProps {
  onSuccessLead: (data: any) => void;
  onOpenLegal?: (type: string) => void;
  prefillAmount?: string;
  prefillTerm?: string;
}

export default function Hero({ onSuccessLead, onOpenLegal, prefillAmount, prefillTerm }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 shadow-inner">
      
      {/* Dynamic Animated Background Mesh & Moving Bond Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        
        {/* Subtle Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient Glowing Gradient Orbs with continuous slow drift */}
        <motion.div 
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-600/35 rounded-full blur-3xl"
        />

        <motion.div 
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-emerald-500/25 rounded-full blur-3xl"
        />

        <motion.div 
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-24 left-1/3 w-[450px] h-[450px] bg-teal-400/20 rounded-full blur-3xl"
        />

        {/* ============================================================== */}
        {/* ANIMATED MOVING BOND CARDS & TICKER BADGES IN THE BACKGROUND */}
        {/* ============================================================== */}
        
        {/* 1. Moving Floating Bond Card 1 (Top Left) */}
        <motion.div
          animate={{
            opacity: [0.65, 0.9, 0.65],
            y: [0, -18, 0],
            x: [0, 15, 0],
            rotate: [0, 1.5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:flex absolute top-12 left-8 items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold text-xs shadow-md">
            8.20%
          </div>
          <div className="text-left">
            <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
              <span>Tier-1 Fixed Note</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <span className="text-[10px] text-emerald-300 font-semibold block">
              2-Year Fixed • Monthly Payout
            </span>
          </div>
        </motion.div>

        {/* 2. Moving Floating Bond Card 2 (Bottom Left) */}
        <motion.div
          animate={{
            opacity: [0.6, 0.85, 0.6],
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -2, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:flex absolute bottom-8 left-12 items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-500/30 border border-blue-400/40 text-blue-300 flex items-center justify-center font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white">FSCS Protected Deposit</div>
            <span className="text-[10px] text-blue-200 block">Up to £120,000 Guaranteed</span>
          </div>
        </motion.div>

        {/* 3. Moving Floating Bond Card 3 (Center Floating Behind Content) */}
        <motion.div
          animate={{
            opacity: [0.35, 0.6, 0.35],
            y: [0, -24, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden lg:flex absolute top-1/2 left-1/3 items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/15 px-4 py-2 rounded-2xl text-xs text-teal-200 font-semibold shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-teal-300" />
          <span>UK Sovereign Gilts: 7.60% Fixed</span>
        </motion.div>

        {/* 4. Moving Floating Yield Particle (Top Right) */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            y: [0, 16, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden xl:flex absolute top-16 right-16 items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 px-3.5 py-1.5 rounded-full text-xs text-emerald-300 font-bold shadow-lg"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Live Bond Stream: 7.85% p.a.</span>
        </motion.div>

        {/* Animated Moving SVG Yield Curve Waves */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-15" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
        >
          <motion.path
            d="M 0,350 C 300,200 600,450 900,250 C 1050,150 1150,200 1200,180"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="8 8"
            animate={{
              strokeDashoffset: [0, -100]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.path
            d="M 0,450 C 350,300 700,550 1000,380 C 1100,320 1180,350 1200,340"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="6 6"
            animate={{
              strokeDashoffset: [0, 100]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill with Pulsing Live Dot */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>2026 Sovereign &amp; Corporate Bonds</span>
              <span className="bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                FSCS £120k Protected
              </span>
            </div>

            {/* Main Clean Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.18] max-w-xl">
              Guaranteed High-Yield <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
                UK Fixed-Rate Bonds
              </span>
            </h1>

            {/* Premium Rate Highlight Card with Glass Effect & Hover Animation */}
            <motion.div 
              whileHover={{ scale: 1.015, y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3.5 bg-white/15 backdrop-blur-md border border-white/25 px-5 py-3.5 rounded-2xl shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold shadow-md flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                  <span>Contracted Yields Up to 8.20% p.a.</span>
                  <span className="text-[11px] font-bold text-emerald-950 bg-emerald-300 px-2 py-0.5 rounded-full">
                    Fixed Coupon
                  </span>
                </div>
                <span className="text-xs text-blue-100/80 block mt-0.5">
                  Direct institutional allocations with zero stock market volatility
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-blue-100/90 leading-relaxed max-w-xl">
              Access wholesale fixed-term bonds with contracted returns up to 8.20% p.a. Complete capital preservation, statutory FSCS protection up to £120k, and 100% independent market intelligence.
            </p>

            {/* 4 Trust Feature Pills in website glass style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold whitespace-nowrap">FSCS Protection</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold whitespace-nowrap">FCA Regulated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold whitespace-nowrap">Rates Up to 8.1% p.a.</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-bold whitespace-nowrap">18,000+ Happy Investors</span>
              </div>
            </div>

            {/* 4.9/5 Independent Score Rating Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 bg-slate-900/65 backdrop-blur-md border border-emerald-500/45 px-4 py-1.5 rounded-full shadow-md">
                <div className="flex items-center gap-1 text-emerald-400">
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                </div>
                <span className="text-xs font-bold text-emerald-300 tracking-wide">
                  4.9/5 Independent Score
                </span>
              </div>
            </div>
          </div>

          {/* Right Lead Form Column with Elevated Glass Glow */}
          <div 
            id="lead-form-section"
            className="lg:col-span-5"
          >
            <LeadForm 
              onSuccess={onSuccessLead}
              onOpenLegal={onOpenLegal}
              initialAmount={prefillAmount}
              initialTerm={prefillTerm}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
