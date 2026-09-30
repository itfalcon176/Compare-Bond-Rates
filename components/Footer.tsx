'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, AlertTriangle, ShieldCheck, Landmark, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenLegal?: (type: string) => void;
  onScrollToForm?: () => void;
}

export default function Footer({ onOpenLegal, onScrollToForm }: FooterProps) {
  const handleScroll = () => {
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      window.location.href = '/#form';
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4 Columns Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block px-1 py-1 border-0 shadow-none outline-none">
              <Image
                src="/assets/logo/logo white (2).png"
                alt="Compare Bond Rates UK"
                width={280}
                height={80}
                className="logo-img-clean w-[200px] sm:w-[240px] h-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              The UK's premier independent fixed-income intelligence and bond comparison platform. Connecting individual investors, retirees, and corporate treasuries directly with wholesale institutional yields up to 8.1% p.a. and statutory FSCS protection.
            </p>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button type="button" onClick={handleScroll} className="hover:text-emerald-400 transition-colors">
                  Fixed Rate Bonds
                </button>
              </li>
              <li>
                <button type="button" onClick={handleScroll} className="hover:text-emerald-400 transition-colors">
                  Corporate Bonds
                </button>
              </li>
              <li>
                <button type="button" onClick={handleScroll} className="hover:text-emerald-400 transition-colors">
                  ISA Eligible Bonds
                </button>
              </li>
              <li>
                <button type="button" onClick={handleScroll} className="hover:text-emerald-400 transition-colors">
                  SIPP Pension Bonds
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="tel:02038904567" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:02038904567" className="hover:text-emerald-400 font-semibold">
                  0203 890 4567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>enquiries@comparebondrates.co.uk</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>25 Moorgate, London, EC2R 6AY</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Mon-Fri: 8:00am - 6:00pm</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-6 my-6 border-y border-slate-900 text-xs text-slate-300">
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FSCS Protected up to £120,000</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl">
            <Landmark className="w-4 h-4 text-blue-400" />
            <span>Authorised Financial Institutions</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Free Comparison Service</span>
          </div>
        </div>

        {/* Yellow/Amber Risk Warning Card */}
        <div className="bg-amber-950/40 border border-amber-500/30 rounded-2xl p-6 mb-8 text-amber-200/90 text-xs leading-relaxed space-y-2.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wide">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>Important Investment Risk Warning</span>
          </div>
          <p>
            • The value of investments can go down as well as up and you may not get back the full amount you invested. Fixed-rate bonds require your capital to be locked in for the agreed term.
          </p>
          <p>
            • Most bonds do not allow early access to your funds before maturity. If early access is available, penalties may apply which could result in loss of interest or capital.
          </p>
          <p>
            • Fixed returns may not keep pace with inflation over the investment term, potentially reducing your purchasing power.
          </p>
          <p>
            • While covered by FSCS protection up to £120,000 per authorised institution, investments above this limit carry additional risk.
          </p>
          <p>
            • Interest earned may be subject to income tax. ISA and pension wrappers may provide tax advantages subject to annual limits and personal circumstances.
          </p>
        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('open-cookie-banner'));
                }
              }}
              className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
            >
              Cookie Preferences
            </button>
            <Link href="/complaints-policy" className="hover:text-emerald-400 transition-colors">Complaints Policy</Link>
            <Link href="/modern-slavery-statement" className="hover:text-emerald-400 transition-colors">Modern Slavery Statement</Link>
          </div>
          <p>© 2026 Compare Bond Rates Limited. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
