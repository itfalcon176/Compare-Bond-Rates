import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import { Cookie, CheckCircle2, ShieldCheck, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | Compare Bond Rates UK',
  description: 'Understand how Compare Bond Rates Limited utilizes cookies, telemetry tokens, and browser tracking technologies on CompareBondRates.co.uk.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="Details on the cookies and local storage tokens deployed on CompareBondRates.co.uk and how you can manage them."
      lastUpdated="January 2026"
      activeSlug="cookie-policy"
    >
      <div className="space-y-8">
        
        {/* Intro Alert Box */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 text-emerald-950 flex items-start gap-3.5">
          <Cookie className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Transparent Tracking:</strong> We use cookies to enhance your navigation experience, retain your calculator inputs, and measure aggregate site performance. We never deploy intrusive cross-site advertising spyware or sell your tracking data.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
            What Are Cookies?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Cookies are small alphanumeric text files stored on your computer, tablet, or smartphone when you visit a website. They allow the website to recognize your device, remember your preferences over time, and facilitate smooth interactive features like multi-step forms and dynamic financial sliders.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
            Categories of Cookies We Deploy
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            CompareBondRates.co.uk deploys three distinct categories of cookies:
          </p>

          <div className="space-y-4 pt-1">
            {/* Category A */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  1. Strictly Necessary &amp; Essential Cookies
                </h4>
                <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Always Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                These cookies are indispensable for core site operations, including session security, load balancing, SSL encryption, and maintaining step progress in the comparison quote form. The platform cannot function properly without these cookies.
              </p>
            </div>

            {/* Category B */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-blue-600" />
                  2. Functional &amp; Preference Cookies
                </h4>
                <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  User Convenience
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                These allow our website to remember choices you make, such as your selected investment currency (GBP), preferred investment horizon slider positions, and recent calculation results so you don&apos;t have to re-enter data upon returning.
              </p>
            </div>

            {/* Category C */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  3. Performance &amp; Analytics Cookies
                </h4>
                <span className="text-[10px] font-bold uppercase bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                  Anonymised
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We use aggregated, anonymised analytics to understand visitor volume, average page load times, popular bond search terms, and error diagnostics. This aggregated data contains no personally identifiable information (PII).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
            How to Control &amp; Disable Cookies
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            You can modify your browser settings to accept, reject, or delete cookies at any time. However, please note that blocking strictly necessary cookies may disable key interactive features, such as our bond yield calculator and enquiry submission tool.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-bold text-slate-900">Browser Cookie Configuration Guides:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
              <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
              <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">4</span>
            Updates to This Policy
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We review this Cookie Policy regularly to maintain alignment with UK Information Commissioner&apos;s Office (ICO) guidelines and Privacy and Electronic Communications Regulations (PECR). Any revisions will be published here with an updated revision date.
          </p>
        </section>

      </div>
    </LegalPageLayout>
  );
}
