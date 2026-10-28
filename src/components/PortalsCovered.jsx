import React from 'react';
import { PORTALS_COVERED } from '../data/companyData';
import { Globe, ExternalLink, CheckCircle2, Award } from 'lucide-react';

export default function PortalsCovered() {
  return (
    <section id="portals" className="py-20 lg:py-28 relative bg-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      {/* Modern Fluid Shapes & Wave Accents Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/[0.035] rounded-full blur-3xl" />

        {/* Organic Flowing Wave Ribbon across Upper Right (Ref: Image 1 & 3) */}
        <svg className="hidden md:block absolute -top-8 right-0 w-[600px] h-72 opacity-50 text-cyan-500" viewBox="0 0 600 280" fill="none">
          <path d="M100,0 C220,140 380,40 500,180 C560,240 600,200 600,160 L600,0 Z" fill="url(#portal-wave-grad)" opacity="0.3" />
          <path d="M100,0 C220,140 380,40 500,180 C560,240 600,200 600,160" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.7" />
          <defs>
            <linearGradient id="portal-wave-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Side: Modern 3D Tilted Rounded Slab, Crescent Arc & Sphere (Ref: Image 1 & 2) */}
        <div className="hidden lg:block absolute left-8 top-1/3">
          <div className="relative">
            {/* Tilted Rounded Capsule */}
            <div className="w-16 h-36 rounded-3xl bg-gradient-to-b from-blue-600/20 via-cyan-400/20 to-transparent rotate-[25deg] shadow-xl shadow-blue-500/10 border border-white/70 backdrop-blur-sm" />
            
            {/* Floating Soft Sphere with Shadow */}
            <div className="absolute -bottom-4 -left-6 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400/35 to-blue-600/30 shadow-lg border border-cyan-300/40" />

            {/* Crescent Arc (Ref: Image 1) */}
            <svg className="absolute -top-10 -left-6 w-24 h-24 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M 50 20 A 30 30 0 1 1 20 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
        </div>

        {/* Polka Dot Matrix Cluster (Left Margin - Ref: Image 1) */}
        <div className="hidden xl:grid grid-cols-6 gap-2 absolute left-12 bottom-24 opacity-30">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          ))}
        </div>

        {/* Floating Plus (+) Accents (Ref: Image 1) */}
        <span className="hidden sm:block absolute top-16 left-28 text-cyan-500/40 text-2xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute top-1/2 right-12 text-blue-500/35 text-xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute bottom-20 left-1/3 text-blue-500/30 text-lg font-bold select-none">+</span>

        {/* Right Side: Layered Floating Sphere & Crescent Ring (Ref: Image 1) */}
        <div className="hidden lg:block absolute right-8 bottom-32">
          <div className="relative">
            {/* Soft Floating Disc */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-cyan-400/30 shadow-xl shadow-blue-600/15 border border-white/60" />
            
            {/* Crescent Arc Hugging Disc */}
            <svg className="absolute -top-6 -right-6 w-28 h-28 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M 22 50 A 30 30 0 1 1 50 78" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
            </svg>

            {/* Tilted Small Diamond */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400/40 to-blue-600/30 rotate-45 shadow-md border border-white/60" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 mr-1 text-blue-600" />
            <span>Portals & PSUs Covered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tender Bidding & Empanelment Across <span className="text-gradient">Key Government Portals</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Active bid management across central procurement gateways, state departments, and top public sector enterprises.
          </p>
        </div>

        {/* Portal Cards Grid - Large rounded GovTech cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTALS_COVERED.map((portal, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
                      {portal.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {portal.name}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 group-hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="font-mono text-xs text-slate-500 mb-3">
                  Domain / Coverage: <span className="text-blue-600 font-semibold">{portal.domain}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                  {portal.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="flex items-center text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-cyan-600" />
                  {portal.highlight}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Empanelment Ready</span>
              </div>

            </div>
          ))}
        </div>

        {/* PSUs Empanelment Banner - Large rounded GovTech plaque */}
        <div className="mt-12 p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-[#060D20] via-[#0B1536] to-[#111C44] text-white border border-blue-500/30 text-center space-y-3 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-blue-950/80 border border-cyan-500/40 px-4 py-1.5 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Specialized Supplier Registration & Empanelment</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white">
            BHEL, EIL & Indian Railways etc • NTPC • IOCL • GAIL etc • Defence & State Portals
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            We prepare vendor dossiers, balance sheet compilations, technical capability declarations, and handle complete department liaisoning.
          </p>
        </div>

      </div>
    </section>
  );
}
