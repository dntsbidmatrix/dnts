import React from 'react';
import { WORKFLOW_STEPS } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function TenderWorkflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 relative bg-[#091124] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Step-by-Step Bidding Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 5-Stage <span className="text-gradient">Tender Management Process</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A systematic implementation methodology ensuring high win rates and zero procedural errors.
          </p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-2xl bg-[#0C1733] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Step Number with glowing ring */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-cyan-400 font-mono">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400/40">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Post-Bid Assurance Box */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-blue-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              End-to-End Commitment: L1 Purchase Order & EMD Refund Assurance
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              "If the position is L1, we support you to get the Purchase Order & follow up for payments. If the bid is not won, we actively track and manage your EMD refund from the department."
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-400/20">
              Zero-Risk Handholding
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
