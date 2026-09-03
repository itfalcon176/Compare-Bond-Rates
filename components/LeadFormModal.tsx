'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import LeadForm from './LeadForm';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: any) => void;
  onOpenLegal: (type: string) => void;
  initialAmount?: string;
  initialTerm?: string;
}

export default function LeadFormModal({
  isOpen,
  onClose,
  onSuccess,
  onOpenLegal,
  initialAmount,
  initialTerm,
}: LeadFormModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-xl my-8"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 transition-colors shadow-lg"
            aria-label="Close form popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Render the LeadForm */}
          <LeadForm
            onSuccess={(data) => {
              onClose();
              onSuccess(data);
            }}
            onOpenLegal={onOpenLegal}
            initialAmount={initialAmount}
            initialTerm={initialTerm}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
