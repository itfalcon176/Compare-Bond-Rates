'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Building2, Shield, Landmark as Bank, BadgeCheck } from 'lucide-react';

export default function InstitutionsBanner() {
  const institutions = [
    { name: "Barclays Tier-1 Network", icon: Landmark, tag: "FSCS Eligible" },
    { name: "HSBC Institutional Debt", icon: Bank, tag: "AAA Rated" },
    { name: "Lloyds Commercial Fixed", icon: Building2, tag: "Regulated" },
    { name: "Santander UK Issuance", icon: Shield, tag: "Statutory Covered" },
    { name: "NatWest Bond Desk", icon: Building2, tag: "FSCS Protected" },
    { name: "UK Challenger Banks", icon: BadgeCheck, tag: "Up to 8.20% p.a." },
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200/80 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Comparing Authorised UK & Global Financial Institutions
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {institutions.map((inst, idx) => {
            const Icon = inst.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm text-xs sm:text-sm font-semibold text-slate-800"
              >
                <Icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{inst.name}</span>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                  {inst.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
