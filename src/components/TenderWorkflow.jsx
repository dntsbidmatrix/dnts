import React from 'react';
import { WORKFLOW_STEPS } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function TenderWorkflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF2E8] border border-[#588157]/30 text-[#344E41] text-xs font-semibold uppercase tracking-wider">
            <span>Step-by-Step Bidding Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 5-Stage <span className="text-gradient">Tender Management Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A systematic implementation methodology ensuring high win rates and zero procedural errors.
          </p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-2xl bg-[#F9FAF9] border border-[#DDE7DD] hover:border-[#5A9F68] hover:shadow-xl hover:shadow-[#3A5A40]/10 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#344E41] via-[#5A9F68] to-[#BBD58E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step Number with glowing ring */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#344E41] to-[#5A9F68] font-mono">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#DDE7DD] flex items-center justify-center text-slate-500 group-hover:text-[#5A9F68] group-hover:border-[#5A9F68] transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#344E41] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#A2BAA5]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Post-Bid Assurance Box */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-[#D8E6D8] shadow-lg shadow-[#3A5A40]/5 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#344E41] via-[#5A9F68] to-[#BBD58E]" />
          <div className="space-y-1 text-center sm:text-left pl-0 sm:pl-2">
            <h4 className="text-base font-bold text-slate-900">
              End-to-End Commitment: L1 Purchase Order & EMD Refund Assurance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              "If the position is L1, we support you to get the Purchase Order & follow up for payments. If the bid is not won, we actively track and manage your EMD refund from the department."
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#344E41] via-[#3A5A40] to-[#588157] text-white font-bold text-xs shadow-md border border-[#BBD58E]/30">
              Zero-Risk Handholding
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
