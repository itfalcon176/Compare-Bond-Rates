'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ReturnsCalculator from '@/components/ReturnsCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import LegalModal from '@/components/LegalModal';
import LeadFormModal from '@/components/LeadFormModal';

export default function Home() {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadData, setLeadData] = useState<any>(null);

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<string | null>(null);

  const [prefillAmount, setPrefillAmount] = useState<string>('50000');
  const [prefillTerm, setPrefillTerm] = useState<string>('2');

  const handleOpenFormModal = () => {
    setFormModalOpen(true);
  };

  const handleLeadSuccess = (data: any) => {
    setFormModalOpen(false);
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
    setFormModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* 1. Header (Logo + Compare The Market with Popup Trigger) */}
      <Header onCompareClick={handleOpenFormModal} />

      {/* Main Page Flow */}
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

        {/* 4. Why Choose Compare Bond Rates */}
        <WhyChooseUs onCtaClick={handleOpenFormModal} />

        {/* 5. How It Works (Simple 3-Step Process) */}
        <HowItWorks onCtaClick={handleOpenFormModal} />

        {/* 6. What Our Clients Say (Testimonials & Reviews) */}
        <Testimonials onCtaClick={handleOpenFormModal} />

        {/* 6. Frequently Asked Questions */}
        <Faq onCtaClick={handleOpenFormModal} />
      </main>

      {/* 7. Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onScrollToForm={handleOpenFormModal}
      />

      {/* Interactive Form Popup Modal (Opened by 'Compare The Market' button) */}
      <LeadFormModal
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        onSuccess={handleLeadSuccess}
        onOpenLegal={handleOpenLegal}
        initialAmount={prefillAmount}
        initialTerm={prefillTerm}
      />

      {/* Verification & Instant Match Confirmation Modal */}
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
