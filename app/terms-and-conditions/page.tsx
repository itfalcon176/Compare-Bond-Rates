import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import { Scale, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Compare Bond Rates UK',
  description: 'Terms and conditions governing the use of CompareBondRates.co.uk independent fixed-income comparison and introduction services.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="The contractual terms and regulatory conditions governing your use of CompareBondRates.co.uk."
      lastUpdated="January 2026"
      activeSlug="terms-and-conditions"
    >
      <div className="space-y-8">
        
        {/* Intro Alert Box */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 text-blue-950 flex items-start gap-3.5">
          <Scale className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Key Summary:</strong> CompareBondRates.co.uk provides a 100% free comparison and introduction service for retail and corporate investors. We are an independent intermediary and do not manufacture, underwrite, or hold client capital directly.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
            Acceptance of Terms
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            By accessing or using this website (<strong>CompareBondRates.co.uk</strong>) or submitting an enquiry for fixed-rate bond quotes, you agree to be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree with any part of these terms, you should immediately discontinue use of this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
            Nature of Our Intermediary Service
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Compare Bond Rates Limited operates solely as an independent, non-advisory intermediary and comparison service.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li>We aggregate published and wholesale rates across UK banks, building societies, and institutional bond issuers.</li>
            <li>We provide rate comparison calculators and cashflow projection simulations based on user input parameters.</li>
            <li>Upon your submission of an enquiry, we introduce you directly to authorised financial product issuers or appointed representatives.</li>
            <li>We do not take custody of, handle, or accept investor funds. All financial transactions occur directly between the investor and the product issuer.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
            100% Free Service &amp; Remuneration Disclosure
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our comparison and introductory service is <strong>completely free for individual and institutional investors</strong>. We do not levy any direct fees, brokerage charges, or hidden management surcharges on clients.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-bold text-slate-900">How We Are Remunerated:</p>
            <p>
              We receive standard institutional distribution commissions paid directly by the partner banks or product issuers when an account is successfully opened. This commercial arrangement does not increase the cost to you or reduce the yield rate you receive.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">4</span>
            No Regulated Financial Advice
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The content, calculator estimates, and comparisons displayed on CompareBondRates.co.uk are for <strong>informational, illustrative, and comparative purposes only</strong> and do not constitute direct regulated investment, tax, or legal advice under the Financial Services and Markets Act 2000 (FSMA).
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs sm:text-sm text-emerald-950 flex items-start gap-2.5">
            <AlertTriangle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p>
              Before committing capital to any fixed-term bond, note or cash deposit, investors must carefully review the issuer&apos;s complete Information Memorandum, prospectus, and terms. If you are uncertain about whether a product is suitable for your individual circumstances, you should seek advice from an independent financial adviser (IFA) authorised by the Financial Conduct Authority (FCA).
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">5</span>
            Rate Accuracy &amp; Market Availability
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Yield rates displayed (e.g. up to 8.20% p.a.) are accurate at the time of publication but are subject to change without notice depending on issuer tranches, tranche closures, and macroeconomic interest rate adjustments. Allocation is subject to product capacity and issuer underwriting approval.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">6</span>
            Limitation of Liability
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            While Compare Bond Rates Limited performs rigorous verification of provider credentials, FSCS coverage eligibility, and corporate registration:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li>We do not guarantee the financial solvency or uninterrupted performance of third-party product issuers.</li>
            <li>We shall not be held liable for indirect, consequential, or unforeseen capital loss arising from the use of third-party financial products.</li>
            <li>Nothing in these terms limits our liability for fraud, gross negligence, or any other liability that cannot be excluded under English law.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">7</span>
            Governing Law &amp; Jurisdiction
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            These Terms &amp; Conditions and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>, and subject to the exclusive jurisdiction of the Courts of England and Wales.
          </p>
        </section>

      </div>
    </LegalPageLayout>
  );
}
