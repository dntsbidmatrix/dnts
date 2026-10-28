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

        {/* Workflow Timeline Steps with Full-Bleed Fluid Wave Lines Stream (Ref: Image 2) */}
        <div className="relative">
          {/* Full-Bleed Screen-to-Screen Fluid Wave (Touches both screen edges, spans across vertical center of all 5 cards) */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen pointer-events-none -z-0 overflow-hidden">
            <svg className="w-full h-64 pointer-events-none" viewBox="0 0 1920 220" fill="none" preserveAspectRatio="none">
              {/* Layer 1: Ambient Background Depth Ribbon */}
              <path 
                d="M 0,70 C 240,45 480,110 720,70 C 960,30 1200,95 1440,55 C 1680,15 1800,80 1920,65 L 1920,155 C 1800,140 1680,195 1440,165 C 1200,125 960,190 720,150 C 480,110 240,175 0,150 Z" 
                fill="url(#cool-wave-depth)" 
              />

              {/* Layer 2: Main Fluid Ribbon Body (Soft Glowing Cyan-to-Indigo Gradient) */}
              <path 
                d="M 0,88 C 120,80 180,73 240,73 C 360,73 420,98 480,98 C 540,98 660,73 720,73 C 780,73 900,93 960,93 C 1020,93 1140,73 1200,73 C 1260,73 1380,98 1440,98 C 1500,98 1620,73 1680,73 C 1760,73 1840,85 1920,88 L 1920,132 C 1840,129 1760,117 1680,117 C 1620,117 1500,142 1440,142 C 1380,142 1260,117 1200,117 C 1140,117 1020,137 960,137 C 900,137 780,117 720,117 C 660,117 540,142 480,142 C 420,142 360,117 240,117 C 180,117 120,124 0,132 Z" 
                fill="url(#cool-wave-body)" 
              />

              {/* Layer 3: Harmonic Flow Lines (Solid Luminous Wave Vector Lines from Image 2 - Zero Dots) */}
              {/* Top Boundary Line */}
              <path 
                d="M 0,88 C 120,80 180,73 240,73 C 360,73 420,98 480,98 C 540,98 660,73 720,73 C 780,73 900,93 960,93 C 1020,93 1140,73 1200,73 C 1260,73 1380,98 1440,98 C 1500,98 1620,73 1680,73 C 1760,73 1840,85 1920,88" 
                stroke="url(#cool-wave-stroke-1)" 
                strokeWidth="2.5" 
                fill="none" 
                opacity="0.9" 
              />

              {/* Upper Echo Line */}
              <path 
                d="M 0,72 C 160,55 320,110 480,78 C 640,46 800,102 960,70 C 1120,38 1280,94 1440,62 C 1600,30 1760,86 1920,72" 
                stroke="url(#cool-wave-stroke-cyan)" 
                strokeWidth="1.5" 
                fill="none" 
                opacity="0.65" 
              />

              {/* Center Flowing Spine Line */}
              <path 
                d="M 0,110 C 120,102 180,95 240,95 C 360,95 420,120 480,120 C 540,120 660,95 720,95 C 780,95 900,115 960,115 C 1020,115 1140,95 1200,95 C 1260,95 1380,120 1440,120 C 1500,120 1620,95 1680,95 C 1760,95 1840,107 1920,110" 
                stroke="url(#cool-wave-stroke-2)" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.8" 
              />

              {/* Lower Echo Line */}
              <path 
                d="M 0,148 C 160,165 320,110 480,142 C 640,174 800,118 960,150 C 1120,182 1280,126 1440,158 C 1600,190 1760,134 1920,148" 
                stroke="url(#cool-wave-stroke-indigo)" 
                strokeWidth="1.5" 
                fill="none" 
                opacity="0.55" 
              />

              {/* Bottom Boundary Line */}
              <path 
                d="M 0,132 C 120,124 180,117 240,117 C 360,117 420,142 480,142 C 540,142 660,117 720,117 C 780,117 900,137 960,137 C 1020,137 1140,117 1200,117 C 1260,117 1380,142 1440,142 C 1500,142 1620,117 1680,117 C 1760,117 1840,129 1920,132" 
                stroke="url(#cool-wave-stroke-3)" 
                strokeWidth="2.5" 
                fill="none" 
                opacity="0.85" 
              />

              <defs>
                {/* Main Body Gradient */}
                <linearGradient id="cool-wave-body" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.28" />
                  <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="0.22" />
                  <stop offset="75%" stopColor="#4F46E5" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.28" />
                </linearGradient>

                {/* Depth Wave Gradient */}
                <linearGradient id="cool-wave-depth" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.14" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.11" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.13" />
                </linearGradient>

                {/* Stroke Gradient 1 */}
                <linearGradient id="cool-wave-stroke-1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="35%" stopColor="#38BDF8" />
                  <stop offset="70%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>

                {/* Stroke Gradient 2 */}
                <linearGradient id="cool-wave-stroke-2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>

                {/* Stroke Gradient 3 */}
                <linearGradient id="cool-wave-stroke-3" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="40%" stopColor="#2563EB" />
                  <stop offset="80%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>

                {/* Cyan Echo Stroke */}
                <linearGradient id="cool-wave-stroke-cyan" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>

                {/* Indigo Echo Stroke */}
                <linearGradient id="cool-wave-stroke-indigo" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
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
