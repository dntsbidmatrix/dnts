import React from 'react';
import { WORKFLOW_STEPS } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function TenderWorkflow() {
  return (
    <section id="workflow" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      {/* Modern Fluid Shapes & S-Wave Workflow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-64 bg-gradient-to-r from-blue-500/[0.04] via-cyan-500/[0.035] to-indigo-500/[0.035] rounded-full blur-3xl" />

        {/* Dynamic S-Wave Flow Ribbon behind Stages (Ref: Image 1 & 3) */}
        <svg className="hidden md:block absolute top-[36%] left-0 w-full h-44 opacity-50 text-blue-600" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
          <path d="M0,100 C300,180 600,20 900,140 C1200,220 1350,60 1440,100 L1440,160 C1350,120 1200,240 900,180 C600,60 300,220 0,140 Z" fill="url(#workflow-wave-grad)" opacity="0.3" />
          <path d="M0,100 C300,180 600,20 900,140 C1200,220 1350,60 1440,100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 7" opacity="0.6" />
          <defs>
            <linearGradient id="workflow-wave-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Side: Crescent Arc Ring & Floating Disc (Ref: Image 1) */}
        <div className="hidden lg:block absolute left-6 top-16">
          <div className="relative">
            <svg className="w-24 h-24 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M 20 50 A 30 30 0 1 1 50 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
            </svg>
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-600/25 shadow-md" />
          </div>
        </div>

        {/* Dot Cluster (Ref: Image 1) */}
        <div className="hidden sm:grid grid-cols-6 gap-2 absolute top-8 right-28 opacity-25">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          ))}
        </div>

        {/* Floating Plus (+) Accents (Ref: Image 1) */}
        <span className="hidden sm:block absolute top-12 left-1/4 text-cyan-500/40 text-2xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute bottom-12 right-1/4 text-blue-500/35 text-xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute top-1/2 right-10 text-cyan-500/30 text-lg font-bold select-none">+</span>

        {/* Right Margin: Modern Tilted Rounded Capsule & Floating Sphere (Ref: Image 2) */}
        <div className="hidden lg:block absolute right-8 bottom-24">
          <div className="relative">
            <div className="w-14 h-32 rounded-3xl bg-gradient-to-br from-cyan-400/25 to-blue-600/20 rotate-[22deg] shadow-lg shadow-blue-500/10 border border-white/70 backdrop-blur-sm" />
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400/40 to-blue-600/30 shadow-md border border-cyan-300/40" />
          </div>
        </div>
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
