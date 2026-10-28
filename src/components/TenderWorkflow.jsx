import React from 'react';
import { WORKFLOW_STEPS } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function TenderWorkflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      {/* Classy Lifecycle Conduit & Process Vector Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Subtle dot matrix */}
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{
            backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient soft glow */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-64 bg-gradient-to-r from-blue-500/[0.035] via-cyan-500/[0.03] to-indigo-500/[0.035] rounded-full blur-3xl" />

        {/* Continuous Horizontal Lifecycle Vector Conduit (hidden on mobile, visible on desktop) */}
        <svg className="hidden md:block absolute top-[44%] left-0 w-full h-32 text-blue-600/20" viewBox="0 0 1200 128" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main flow hairline conduit */}
          <path d="M 0 64 L 1200 64" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          
          {/* Directional Flow Chevrons across the lifecycle */}
          <path d="M 120 58 L 128 64 L 120 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 360 58 L 368 64 L 360 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 600 58 L 608 64 L 600 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 840 58 L 848 64 L 840 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 1080 58 L 1088 64 L 1080 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Stepped coordinate ticks */}
          <line x1="240" y1="48" x2="240" y2="80" stroke="currentColor" strokeWidth="0.8" />
          <line x1="480" y1="48" x2="480" y2="80" stroke="currentColor" strokeWidth="0.8" />
          <line x1="720" y1="48" x2="720" y2="80" stroke="currentColor" strokeWidth="0.8" />
          <line x1="960" y1="48" x2="960" y2="80" stroke="currentColor" strokeWidth="0.8" />
        </svg>

        {/* Architectural Crosshairs in Corners */}
        <div className="absolute top-12 left-10 text-slate-400/40 font-mono text-[9px] hidden lg:block">
          <span className="text-blue-500/50">+</span> PHASE.STAGES.01-05
        </div>
        <div className="absolute top-12 right-10 text-slate-400/40 font-mono text-[9px] hidden lg:block text-right">
          SLA.PRECISION <span className="text-cyan-500/50">+</span>
        </div>

        {/* Subtle geometric wireframe diamond in left margin */}
        <svg className="hidden lg:block absolute left-8 bottom-16 w-32 h-32 text-indigo-600/15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="64" y="16" width="68" height="68" rx="8" transform="rotate(45 64 64)" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="64" cy="64" r="3" fill="currentColor" />
          <path d="M60 64 L64 68 L68 64" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Step-by-Step Bidding Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 5-Stage <span className="text-gradient">Tender Management Process</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A systematic implementation methodology ensuring high win rates and zero procedural errors.
          </p>
        </div>

        {/* Workflow Timeline Steps - Large rounded GovTech cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step Number with glowing ring */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-mono">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-cyan-600 group-hover:border-blue-400 transition-colors shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Post-Bid Assurance Box - Large rounded container */}
        <div className="mt-14 p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-cyan-50/70 border border-blue-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-cyan-500" />
          <div className="space-y-1 text-center sm:text-left pl-0 sm:pl-2">
            <h4 className="text-base font-bold text-slate-900">
              End-to-End Commitment: L1 Purchase Order & EMD Refund Assurance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              "If the position is L1, we support you to get the Purchase Order & follow up for payments. If the bid is not won, we actively track and manage your EMD refund from the department."
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold text-xs shadow-md">
              Zero-Risk Handholding
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
