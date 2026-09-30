import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';
import { MessageSquareWarning, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complaints Policy & Procedure | Compare Bond Rates UK',
  description: 'Our transparent complaints procedure, resolution timelines, and referral rights to the UK Financial Ombudsman Service (FOS).',
};

export default function ComplaintsPolicyPage() {
  return (
    <LegalPageLayout
      title="Complaints Policy & Procedure"
      subtitle="Our formal, transparent dispute handling procedure, resolution commitments, and referral rights."
      lastUpdated="January 2026"
      activeSlug="complaints-policy"
    >
      <div className="space-y-8">

        {/* Intro Alert Box */}
        <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-5 text-purple-950 flex items-start gap-3.5">
          <MessageSquareWarning className="w-5 h-5 text-purple-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Commitment to Fair Outcomes:</strong> Compare Bond Rates Limited takes all customer feedback and dissatisfaction seriously. We treat every complaint with urgency, fairness, and absolute confidentiality.
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
            Our Service Commitment
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We aim to deliver the highest standard of impartiality, clarity, and client care. However, if any aspect of our intermediary service or customer communications falls short of your expectations, we encourage you to inform us immediately so we can investigate and put things right.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
            How to Lodge a Complaint
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            You may register a complaint free of charge using any of the following communication channels:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">By Email</h4>
              <p className="text-xs text-slate-600 font-semibold break-all">
                complaints@comparebondrates.co.uk
              </p>
              <p className="text-[11px] text-slate-500">Subject: Formal Complaint - [Your Name]</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">By Telephone</h4>
              <p className="text-xs text-slate-600 font-semibold">
                0203 890 4567
              </p>
              <p className="text-[11px] text-slate-500">Mon-Fri: 8:00am - 6:00pm</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Landmark className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">By Post</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Complaints Department<br />
                Compare Bond Rates Limited<br />
                71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
            <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
            Investigation &amp; Resolution Timelines
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We adhere to strict operational service level agreements (SLAs) when investigating client complaints:
          </p>

          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Acknowledgement within 1 Business Day</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  We acknowledge receipt of your complaint in writing via email or letter within 24 hours of receipt, providing a unique reference number and the name of the assigned senior compliance investigator.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Investigation &amp; Progress Updates (Within 2 Weeks)</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Our compliance officer investigates the matter, reviewing call records, correspondence, and technical logs. If resolution requires additional third-party bank verification, we will provide a comprehensive progress update.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Final Response Letter (Within 4 Weeks)</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Within 4 weeks of your initial notification, we issue a formal Final Response Letter detailing our findings, our decision, and any corrective action or remedial offer.
                </p>
              </div>
            </div>
          </div>
        </section>



      </div>
    </LegalPageLayout>
  );
}
