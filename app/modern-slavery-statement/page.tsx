import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import { AlertCircle, ShieldCheck, CheckCircle2, Building2, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement | Compare Bond Rates UK',
  description: 'Modern Slavery & Human Trafficking Statement pursuant to Section 54(1) of the UK Modern Slavery Act 2015 for Compare Bond Rates Limited.',
};

export default function ModernSlaveryStatementPage() {
  return (
    <LegalPageLayout
      title="Modern Slavery Statement"
      subtitle="Our zero-tolerance commitment towards modern slavery, servitude, and human trafficking pursuant to Section 54(1) of the Modern Slavery Act 2015."
      lastUpdated="January 2026"
      activeSlug="modern-slavery-statement"
    >
      <div className="space-y-8">
        
        {/* Intro Alert Box */}
        <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 flex items-start gap-3.5 border border-slate-800">
          <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="text-white">Zero-Tolerance Policy:</strong> Compare Bond Rates Limited is committed to conducting business with ethical integrity, transparency, and strict adherence to human rights legislation. We maintain zero tolerance for modern slavery, human trafficking, or forced labor in our operations or supply chains.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
            Statutory Basis &amp; Scope
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            This statement is published pursuant to <strong>Section 54(1) of the Modern Slavery Act 2015</strong> and constitutes our modern slavery and human trafficking statement for the financial period ending 2026. It applies to all operations, corporate departments, and partner relationships managed by Compare Bond Rates Limited.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
            Our Organizational Structure &amp; Supply Chain
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Compare Bond Rates Limited is a UK-based financial technology and intermediary platform operating from London, England. Because we provide digital comparison software, rate aggregation, and customer introductory services, our supply chain consists primarily of:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li><strong>Authorised Financial Institutions:</strong> UK and European Tier-1 banks, building societies, and institutional bond issuers regulated by the PRA and FCA.</li>
            <li><strong>Enterprise Technology &amp; Hosting Providers:</strong> UK and EU-based data center infrastructure, cloud services, and cybersecurity vendors.</li>
            <li><strong>Professional Advisory Services:</strong> Regulated legal, accounting, compliance, and corporate advisory firms.</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed pt-1">
            Due to the professional, regulated, and digital nature of these services, our overall exposure to supply chain modern slavery risks is assessed as inherently low.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
            Due Diligence &amp; Partner Vetting
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We implement comprehensive due diligence procedures across all commercial and institutional partnerships:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">FCA &amp; Regulatory Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We only partner with financial product issuers that hold active FCA/PRA authorization and maintain verified corporate compliance records.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Employment &amp; Fair Pay Standards</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All direct employees and contractors are engaged under lawful UK employment contracts, paid above the UK Real Living Wage, and subject to identity verification.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Vendor Code of Conduct</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commercial contracts require suppliers to warrant strict compliance with the Modern Slavery Act 2015 and maintain fair labor practices.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Whistleblowing Protections</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide a protected, confidential whistleblowing channel allowing employees and partners to report any suspected human rights violations without fear of reprisal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">4</span>
            Board Approval &amp; Ongoing Commitment
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The Board of Directors of Compare Bond Rates Limited has formally reviewed and approved this Modern Slavery &amp; Human Trafficking Statement. We review this statement annually to ensure ongoing effectiveness and proactive compliance with all statutory standards.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1">
            <p><strong>Approved by:</strong> Board of Directors, Compare Bond Rates Limited</p>
            <p><strong>Date of Annual Review:</strong> January 2026</p>
            <p><strong>Registered Office:</strong> 25 Moorgate, London, EC2R 6AY</p>
          </div>
        </section>

      </div>
    </LegalPageLayout>
  );
}
