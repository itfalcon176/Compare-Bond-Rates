import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import { ShieldCheck, Lock, CheckCircle2, AlertTriangle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Compare Bond Rates UK',
  description: 'Understand how Compare Bond Rates Limited collects, uses, and safeguards your personal data under the UK Data Protection Act 2018 and UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we process, store, and safeguard your personal investment data under UK GDPR and the Data Protection Act 2018."
      lastUpdated="January 2026"
      activeSlug="privacy-policy"
    >
      <div className="space-y-8">
        
        {/* Intro Alert Box */}
        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 text-emerald-950 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Your Privacy is Guaranteed:</strong> Compare Bond Rates Limited is committed to protecting your personal information. We operate strictly in compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. We never sell your details to unaffiliated third-party marketing brokers.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
            Who We Are
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            CompareBondRates.co.uk is owned and operated by <strong>Compare Bond Rates Limited</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
            <p><strong>Company Registration Number:</strong> 12847593</p>
            <p><strong>Registered Office:</strong> 25 Moorgate, London, EC2R 6AY, United Kingdom</p>
            <p><strong>Data Controller Status:</strong> Registered Data Controller under UK Information Commissioner&apos;s Office (ICO) guidelines.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
            Information We Collect
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In order to generate your personalised fixed-rate bond comparison report and match you with eligible UK banking and institutional opportunities, we may collect and process the following categories of personal data:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li><strong>Identity &amp; Contact Data:</strong> Full legal name, telephone/mobile phone number, and email address.</li>
            <li><strong>Location Data:</strong> UK residential postcode (used to verify UK tax residency and regional product eligibility).</li>
            <li><strong>Investment Profile:</strong> Target investment capital amount (e.g. £10,000 to £1,000,000+), preferred bond horizon term (1 to 5 years), and account wrapper interest (Personal, ISA, SIPP, or Corporate Treasury).</li>
            <li><strong>Technical &amp; Usage Data:</strong> Internet Protocol (IP) address, browser type and version, device identifier, time zone setting, and website interaction telemetry to prevent automated bot submissions.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
            Lawful Basis &amp; How We Use Your Data
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We process your personal data under the lawful bases defined in Article 6 of the UK GDPR:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Contract &amp; Consent</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                To calculate your custom yield simulations and connect you with matching fixed-term bond product providers upon your explicit request.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Legitimate Interests</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                To improve comparison tool algorithms, prevent fraudulent submissions, and ensure high platform reliability.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Regulatory Compliance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                To maintain comprehensive audit logs as required under UK financial conduct and data controller obligations.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct Communication</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                To deliver your requested bond prospectus, confirm application details, and verify deposit eligibility.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">4</span>
            Data Sharing &amp; Institutional Introductions
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We only share your submitted details with authorised third parties under strict contractual data protection agreements:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li><strong>Regulated Financial Product Issuers:</strong> Authorised UK banks, building societies, and institutional bond issuers whose fixed-rate products match your stated preferences.</li>
            <li><strong>Secure Technical Infrastructure:</strong> ISO 27001 certified cloud hosting providers and CRM encryption services hosted within the UK/EEA.</li>
            <li><strong>Statutory Authorities:</strong> Where legally mandated by law enforcement, HMRC, the Financial Conduct Authority (FCA), or court order.</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Strict No-Spam Policy:</strong> We do not sell, rent, or lease personal customer data to non-affiliated telemarketing companies, lead aggregators, or unsolicited cold-calling operations.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">5</span>
            Security &amp; Data Retention
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            All data transmitted through CompareBondRates.co.uk is encrypted with bank-grade <strong>256-bit SSL (Secure Sockets Layer) encryption</strong> both in transit and at rest. We maintain strict internal access controls to ensure only authorized personnel handle customer records.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, and compliance reporting requirements (typically up to 6 years following the conclusion of an enquiry).
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">6</span>
            Your Statutory GDPR Rights
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under UK data protection law, you possess key rights regarding your personal information:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong>• Right of Access:</strong> Request a copy of all personal records we hold about you.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong>• Right to Rectification:</strong> Request correction of inaccurate or incomplete information.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong>• Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal data where no legal override exists.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong>• Right to Object &amp; Withdraw Consent:</strong> Opt-out at any time from future email or phone communications.
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">7</span>
            Contact Our Data Protection Officer
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you wish to exercise any of your statutory rights, or have questions concerning our privacy practices, please contact our Data Protection Officer:
          </p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-2xl space-y-2 text-xs sm:text-sm">
            <p><strong>Email:</strong> privacy@comparebondrates.co.uk</p>
            <p><strong>Telephone:</strong> 0203 890 4567</p>
            <p><strong>Postal Address:</strong> Data Protection Officer, Compare Bond Rates Limited, 25 Moorgate, London EC2R 6AY.</p>
          </div>
        </section>

      </div>
    </LegalPageLayout>
  );
}
