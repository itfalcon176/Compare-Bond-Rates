'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ReturnsCalculator from '@/components/ReturnsCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import LegalModal from '@/components/LegalModal';

export default function Home() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadData, setLeadData] = useState<any>(null);

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<string | null>(null);

  const [prefillAmount, setPrefillAmount] = useState<string>('50000');
  const [prefillTerm, setPrefillTerm] = useState<string>('2');

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleLeadSuccess = (data: any) => {
    setLeadData(data);
    setLeadModalOpen(true);
  };

  const handleOpenLegal = (type: string) => {
    setLegalType(type);
    setLegalModalOpen(true);
  };

  const handleApplyFromCalculator = (amount: string, term: string) => {
    setPrefillAmount(amount);
    setPrefillTerm(term);
    scrollToLeadForm();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* 1. Header (Logo + Compare The Market) */}
      <Header onCompareClick={scrollToLeadForm} />

      {/* Main Page Flow (Exact 1:1 Reference Sections) */}
      <main className="flex-grow">
        {/* 2. Hero Section + 4-Step Lead Form */}
        <Hero 
          onSuccessLead={handleLeadSuccess}
          onOpenLegal={handleOpenLegal}
          prefillAmount={prefillAmount}
          prefillTerm={prefillTerm}
        />

        {/* 3. Bond Returns Calculator */}
        <ReturnsCalculator onApplyRate={handleApplyFromCalculator} />

        {/* 4. Why Choose Wise Rates / Compare Bond Rates */}
        <WhyChooseUs onCtaClick={scrollToLeadForm} />

        {/* 5. What Our Clients Say (Testimonials & Reviews) */}
        <Testimonials onCtaClick={scrollToLeadForm} />

        {/* 6. Frequently Asked Questions */}
        <Faq onCtaClick={scrollToLeadForm} />
      </main>

      {/* 7. Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onScrollToForm={scrollToLeadForm}
      />

      {/* Verification & Instant Match Modal */}
      <LeadModal 
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        leadData={leadData}
      />

      {/* Full Legal Policy Modal */}
      <LegalModal 
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        legalType={legalType}
      />
    </div>
  );
}
