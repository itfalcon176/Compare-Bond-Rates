'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  onCtaClick: () => void;
}

export default function Testimonials({ onCtaClick }: TestimonialsProps) {
  const reviews = [
    {
      name: "David Miller",
      location: "Guildford, Surrey",
      date: "2 days ago",
      text: "Compare Bond Rates UK helped me secure a fantastic 8.2% P.A. rate on a 2-year bond. Their service was professional, transparent, and I felt completely supported throughout the process. Highly recommend!",
    },
    {
      name: "Ruth Thompson",
      location: "Harrogate",
      date: "1 week ago",
      text: "After comparing several services, Compare Bond Rates offered the most competitive rates and excellent customer service. My advisor explained everything clearly and found me exactly what I was looking for.",
    },
    {
      name: "The Myers Family",
      location: "Surrey",
      date: "2 weeks ago",
      text: "As someone approaching retirement, I needed secure investments. Compare Bond Rates provided excellent guidance and secured bonds at 8.2% P.A. that give me peace of mind and steady income.",
    },
    {
      name: "James Andrews",
      location: "Bath",
      date: "3 weeks ago",
      text: "The transparency and professionalism impressed me most. No hidden fees, clear explanations, and they found me rates I couldn't get directly from banks. Exceptional service.",
    },
    {
      name: "Sandra Taylor",
      location: "Oxford",
      date: "1 month ago",
      text: "Compare Bond Rates made bond investing simple and stress-free. Their calculator tools and expert advice helped me secure an 8.2% P.A. return. Very pleased with the results.",
    },
    {
      name: "Robert Davies",
      location: "Leeds",
      date: "1 month ago",
      text: "Professional, reliable, and trustworthy. They took time to understand my needs and found bonds that perfectly matched my investment goals. Outstanding service from start to finish.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60 border-y border-slate-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Icon + Titles */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <MessageSquareQuote className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Over 15,000 satisfied clients trust us with their bond investments. Here's what they have to say about our service.
          </p>
        </div>

        {/* 4 Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 text-center mb-12 shadow-sm">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-blue-700 mb-1">
              15,000+
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Happy Clients
            </span>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-emerald-600 mb-1">
              4.9 / 5
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Average Rating
            </span>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-amber-500 mb-1">
              £2.5B+
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Invested
            </span>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 mb-1">
              9 Years
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Experience
            </span>
          </div>
        </div>

        {/* 6 Review Cards (2 Rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 gap-1 mb-3.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="block font-bold text-slate-900">
                    {rev.name}
                  </strong>
                  <span className="text-slate-400 block text-[11px]">
                    {rev.location}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Thousands Banner */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Join Thousands of Satisfied Investors
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Start your bond investment journey today with the UK's most trusted comparison service. Free consultation, no obligations.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
