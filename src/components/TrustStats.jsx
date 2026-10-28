import React from 'react';
import { TRUST_METRICS, COMPANY_INFO } from '../data/companyData';
import { Shield, FileCheck, CheckCircle, Clock } from 'lucide-react';

export default function TrustStats() {
  const icons = [Shield, FileCheck, CheckCircle, Clock];

  return (
    <section className="relative z-10 py-10 sm:py-12 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Modern Fluid Shapes & Subtle Wave Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute -top-10 left-1/3 w-96 h-48 bg-gradient-to-r from-blue-400/10 via-cyan-400/10 to-indigo-400/10 blur-3xl rounded-full" />
        
        {/* Left Margin: Floating Crescent Arc & Soft Disc (Ref: Image 1) */}
        <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2">
          <svg className="w-28 h-28 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <path d="M 22 50 A 30 30 0 1 1 50 78" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.65" />
            <circle cx="50" cy="50" r="14" fill="#2563EB" opacity="0.2" />
          </svg>
        </div>

        {/* Small Dot Grid Cluster (Top Left - Ref: Image 1) */}
        <div className="hidden sm:grid grid-cols-6 gap-2 absolute top-4 left-10 opacity-30">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          ))}
        </div>

        {/* Floating Plus (+) Accents (Ref: Image 1) */}
        <span className="hidden sm:block absolute top-6 right-24 text-cyan-500/40 text-xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute bottom-4 left-1/4 text-blue-500/30 text-lg font-bold select-none">+</span>

        {/* Right Margin: Floating Tilted Rounded Capsule & Sphere (Ref: Image 2) */}
        <div className="hidden lg:flex items-center space-x-3 absolute -right-6 top-1/2 -translate-y-1/2">
          <div className="w-10 h-24 rounded-full bg-gradient-to-b from-blue-500/20 to-cyan-400/25 rotate-[20deg] shadow-lg shadow-blue-500/10 border border-white/60" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-600/25 shadow-md -mt-8" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Cards Grid - Large rounded GovTech cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="relative p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group flex flex-col items-center justify-center text-center overflow-hidden"
              >
                {/* Top Subtle Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Centered Icon */}
                <div className="p-2.5 sm:p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-2.5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Primary Metric Value - Scaled down and center aligned */}
                <h3 className="text-sm sm:text-base md:text-lg font-black text-slate-900 group-hover:text-blue-600 tracking-tight leading-snug w-full text-center break-words transition-colors">
                  {item.value}
                </h3>

                {/* Metric Label */}
                <p className="font-bold text-xs sm:text-sm text-slate-800 text-center mt-1 w-full">
                  {item.label}
                </p>

                {/* Metric Subtext */}
                <p className="text-[11px] sm:text-xs text-slate-500 text-center mt-1 leading-relaxed w-full">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Portal & Authority Assurance Strip */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-start sm:items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0 mt-1 sm:mt-0"></span>
            <span className="text-slate-900 font-bold whitespace-nowrap">Empanelment & Tenders:</span>
            <span className="leading-relaxed text-slate-600">BHEL, EIL & Indian Railways etc • NTPC • IOCL etc • CPPP • UNGM • GeM State & Central Bids</span>
          </div>
          <div className="flex items-center space-x-3 text-xs pt-1 sm:pt-0">
            <span className="text-blue-600 font-mono font-bold">GSTIN: {COMPANY_INFO.gstin}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-medium">Begusarai, Bihar</span>
          </div>
        </div>

      </div>
    </section>
  );
}
