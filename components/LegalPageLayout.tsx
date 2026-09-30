'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  ChevronRight,
  FileText,
  Lock,
  Scale,
  Cookie,
  MessageSquareWarning,
  Phone,
  Mail,
  ArrowLeft,
  ArrowRight,
  Landmark,
  CheckCircle2,
  Calendar,
  Building2
} from 'lucide-react';
import Footer from './Footer';

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  activeSlug: 'privacy-policy' | 'terms-and-conditions' | 'cookie-policy' | 'complaints-policy';
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated = 'January 2026',
  activeSlug,
  children,
}: LegalPageLayoutProps) {
  const legalLinks = [
    {
      name: 'Privacy Policy',
      href: '/privacy-policy',
      slug: 'privacy-policy',
      icon: Lock,
      desc: 'How we collect, use, and protect your data under UK GDPR',
    },
    {
      name: 'Terms & Conditions',
      href: '/terms-and-conditions',
      slug: 'terms-and-conditions',
      icon: Scale,
      desc: 'Our intermediary platform terms, services, and limitations',
    },
    {
      name: 'Cookie Policy',
      href: '/cookie-policy',
      slug: 'cookie-policy',
      icon: Cookie,
      desc: 'Information regarding the cookies and tracking we deploy',
    },
    {
      name: 'Complaints Policy',
      href: '/complaints-policy',
      slug: 'complaints-policy',
      icon: MessageSquareWarning,
      desc: 'Our transparent dispute resolution procedure and timelines',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-600 selection:text-white">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center p-0 m-0 border-0 shadow-none outline-none bg-transparent flex-shrink-0"
          >
            <Image
              src="/assets/logo/logo (6).png"
              alt="Compare Bond Rates UK"
              width={340}
              height={120}
              priority
              className="logo-img-clean w-[220px] sm:w-[270px] md:w-[300px] h-auto max-h-16 object-contain"
            />
          </Link>

          {/* Right Navigation & CTA */}
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>



            <Link
              href="/#lead-form-section"
              className="bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-extrabold px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Compare Rates</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </Link>
          </div>

        </div>
      </header>

      {/* Hero Header Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-teal-950 text-white py-12 lg:py-16 border-b border-slate-800 relative overflow-hidden">

        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-blue-200/80 mb-5 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400/60" />
            <span className="text-blue-300/80">Legal &amp; Regulatory</span>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400/60" />
            <span className="text-white font-bold">{title}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Regulatory Documentation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-blue-200/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                Last Updated: <strong>{lastUpdated}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                Compare Bond Rates Limited (CRN: 12847593)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area: Left Sidebar Navigation + Right Legal Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">

            {/* Legal Documents Navigation Box */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4 px-2">
                Legal &amp; Compliance Hub
              </h3>
              <nav className="space-y-1.5">
                {legalLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.slug === activeSlug;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${isActive
                        ? 'bg-blue-50 border border-blue-200 text-blue-900 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                        }`}
                    >
                      <div className={`p-2 rounded-lg mt-0.5 flex-shrink-0 ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                        }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${isActive ? 'text-blue-900' : 'text-slate-800'}`}>
                            {item.name}
                          </span>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Quick Contact & Assistance Card
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-md border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Compliance Support</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Have questions about our terms?</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Our compliance and data protection officers are available to assist you Monday to Friday.
                </p>
              </div>
              <div className="space-y-2 pt-1 text-xs">
                <a 
                  href="tel:07021651946" 
                  className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>070 2165 1946</span>
                </a>
                <a 
                  href="mailto:enquiries@comparebondrates.co.uk" 
                  className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>enquiries@comparebondrates.co.uk</span>
                </a>
              </div>
            </div> */}

            {/* Regulatory Status Pill */}
            <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Landmark className="w-4 h-4 text-blue-700" />
                <span>Company Information</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Compare Bond Rates Limited. Registered in England &amp; Wales (No. 12847593). Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.
              </p>
            </div>

          </aside>

          {/* Right Main Legal Content Document Card */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm order-1 lg:order-2">
            <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
              {children}
            </div>

            {/* Bottom Document Stamp / Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Legal Document • Compare Bond Rates Limited</span>
              </div>
              <Link
                href="/#lead-form-section"
                className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Ready to compare fixed rates? Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

        </div>
      </main>

      {/* Global Footer */}
      <Footer
        onOpenLegal={() => { }}
        onScrollToForm={() => {
          window.location.href = '/#lead-form-section';
        }}
      />
    </div>
  );
}
