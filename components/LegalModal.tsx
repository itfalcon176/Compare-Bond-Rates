'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  legalType: string | null;
}

export default function LegalModal({ isOpen, onClose, legalType }: LegalModalProps) {
  if (!isOpen || !legalType) return null;

  const documents: Record<string, { title: string; content: React.ReactNode }> = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p><strong>Last Updated: January 2026</strong></p>
          <h4 className="text-base font-bold text-slate-900">1. Who We Are</h4>
          <p>
            CompareBondRates.co.uk is owned and operated by Compare Bond Rates Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. Company Registration Number: 12847593. We act as an independent data controller under the UK Data Protection Act 2018 and UK GDPR.
          </p>
          <h4 className="text-base font-bold text-slate-900">2. Information We Collect</h4>
          <p>
            We may collect personal information including: full name, contact telephone number, email address, UK postcode, target investment amount, preferred investment horizon, and communication history.
          </p>
          <h4 className="text-base font-bold text-slate-900">3. How We Use Your Data</h4>
          <p>
            We use your information exclusively to: generate your personalised fixed-rate bond comparison report, match your investment requirements with authorised UK financial product issuers, assess product eligibility, and maintain regulatory compliance.
          </p>
          <h4 className="text-base font-bold text-slate-900">4. Data Sharing &amp; Security</h4>
          <p>
            Your details are transferred via bank-grade 256-bit SSL encryption. We only introduce you to FSCS-covered, FCA-authorised banks and institutional issuers. We never sell your personal data to unaffiliated third-party marketing lists.
          </p>
          <h4 className="text-base font-bold text-slate-900">5. Your Statutory Rights</h4>
          <p>
            Under UK GDPR, you retain the right to access, rectify, or request erasure of your data, or object to processing. To exercise these rights, email <strong>privacy@comparebondrates.co.uk</strong>.
          </p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p><strong>Last Updated: January 2026</strong></p>
          <h4 className="text-base font-bold text-slate-900">1. Intermediary Service</h4>
          <p>
            Compare Bond Rates Limited provides an impartial comparison and introductory service for fixed-rate bonds and cash deposit products. We do not manufacture or hold client funds directly.
          </p>
          <h4 className="text-base font-bold text-slate-900">2. No Upfront Fee to Clients</h4>
          <p>
            Our service is 100% free for individual investors. We are remunerated through standard intermediary commissions paid directly by partner financial institutions upon successful account opening.
          </p>
          <h4 className="text-base font-bold text-slate-900">3. Independent Information</h4>
          <p>
            All rates displayed are subject to institutional availability and individual underwriting criteria. Information provided on this website does not constitute direct regulated financial advice; investors should review full product terms before committing funds.
          </p>
          <h4 className="text-base font-bold text-slate-900">4. Limitation of Liability</h4>
          <p>
            While we verify provider credentials and FSCS registration, Compare Bond Rates Limited is not liable for performance variations of third-party institutions.
          </p>
        </div>
      )
    },
    cookie: {
      title: "Cookie Policy",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p><strong>Last Updated: January 2026</strong></p>
          <h4 className="text-base font-bold text-slate-900">1. What are Cookies?</h4>
          <p>
            Cookies are small text files placed on your device to enhance site navigation, measure comparison tool usage, and store your slider preferences.
          </p>
          <h4 className="text-base font-bold text-slate-900">2. Cookies We Deploy</h4>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Essential Cookies:</strong> Required for the rate calculator and secure form submission.</li>
            <li><strong>Analytics Cookies:</strong> Anonymised analytics to help us measure site performance and popular bond terms.</li>
            <li><strong>Preference Cookies:</strong> Retains your selected investment currency and term filters.</li>
          </ul>
        </div>
      )
    },
    complaints: {
      title: "Complaints Procedure",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p><strong>Last Updated: January 2026</strong></p>
          <h4 className="text-base font-bold text-slate-900">Our Commitment to Service</h4>
          <p>
            We strive to provide outstanding customer support. If you have any concern or complaint regarding our intermediary service:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl space-y-1">
            <p><strong>Email:</strong> complaints@comparebondrates.co.uk</p>
            <p><strong>Telephone:</strong> 070 2165 1946</p>
            <p><strong>Post:</strong> Complaints Department, Compare Bond Rates Limited, 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
          </div>
          <h4 className="text-base font-bold text-slate-900">Resolution Timelines</h4>
          <p>
            We acknowledge all written complaints within 1 business day and issue a formal resolution within 4 weeks. If unresolved, eligible complainants may refer the matter to the Financial Ombudsman Service (Exchange Tower, London E14 9SR).
          </p>
        </div>
      )
    },
    slavery: {
      title: "Modern Slavery & Human Trafficking Statement",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p><strong>Pursuant to Section 54(1) of the Modern Slavery Act 2015</strong></p>
          <p>
            Compare Bond Rates Limited maintains a strict zero-tolerance approach to modern slavery and human trafficking across all operational practices and partner supply chains. We partner solely with established UK and European banking institutions subject to rigorous compliance and ethical governance standards.
          </p>
        </div>
      )
    }
  };

  const doc = documents[legalType] || documents.privacy;

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

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-4 pr-8">
            {doc.title}
          </h3>

          {doc.content}

          <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
