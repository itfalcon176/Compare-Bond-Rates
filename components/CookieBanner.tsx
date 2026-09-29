'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onOpenLegal?: (type: string) => void;
}

export default function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has previously set cookie preferences
    const savedConsent = localStorage.getItem('cbr_cookie_consent');
    if (!savedConsent) {
      setIsVisible(true);
    }

    // Listener for custom events from footer or policy pages to reopen banner
    const handleReopen = () => setIsVisible(true);
    window.addEventListener('open-cookie-banner', handleReopen);
    return () => window.removeEventListener('open-cookie-banner', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cbr_cookie_consent', 'all');
    localStorage.setItem('cbr_cookie_consent_date', new Date().toISOString());
    setIsVisible(false);

    // If Meta Pixel or Google Analytics are installed, track consent
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('consent', 'grant');
    }
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cbr_cookie_consent', 'essential');
    localStorage.setItem('cbr_cookie_consent_date', new Date().toISOString());
    setIsVisible(false);

    // Revoke tracking if applicable
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('consent', 'revoke');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-[580px] z-[9999]"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.18)] p-5 sm:p-6 text-slate-800 backdrop-blur-sm">
            {/* Top row: Cookie Icon + Message */}
            <div className="flex items-start gap-3.5 mb-5">
              <div className="text-slate-800 flex-shrink-0 pt-0.5">
                <Cookie className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="text-[13px] sm:text-[14px] leading-relaxed text-slate-700">
                We use essential cookies to operate our bond comparison tools, calculate live fixed rates, and ensure secure enquiries. We would also like to set optional analytics cookies to help us improve comparison accuracy and user experience.{' '}
                {onOpenLegal ? (
                  <button
                    type="button"
                    onClick={() => onOpenLegal('cookie')}
                    className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2 transition-colors cursor-pointer inline"
                  >
                    Read our Cookie Policy
                  </button>
                ) : (
                  <Link
                    href="/cookie-policy"
                    className="text-amber-700 hover:text-amber-800 font-semibold underline underline-offset-2 transition-colors inline"
                  >
                    Read our Cookie Policy
                  </Link>
                )}
              </div>
            </div>

            {/* Bottom row: Action Buttons matching the provided design */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="bg-[#152349] hover:bg-[#0e1937] text-white text-[13px] sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#152349]/30"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="bg-white hover:bg-slate-50 text-slate-800 text-[13px] sm:text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-300 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
