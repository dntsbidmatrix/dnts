import React from 'react';
import { PORTALS_COVERED } from '../data/companyData';
import { Globe, ExternalLink, CheckCircle2, Award } from 'lucide-react';

export default function PortalsCovered() {
  return (
    <section id="portals" className="py-20 lg:py-28 relative bg-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      {/* Classy Procurement Network & Inter-Portal Vectors Background */}
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
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/[0.035] rounded-full blur-3xl" />

        {/* Subtle Radar Broadcast Rings (Top Right) */}
        <svg className="hidden md:block absolute -top-16 -right-16 w-96 h-96 text-blue-600/15" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 5" />
          <circle cx="200" cy="200" r="4" fill="currentColor" />
          {/* Crosshair lines */}
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
          {/* Subtle directional sweep chevron */}
          <path d="M260 170 L268 174 L260 178" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Pan-India Procurement Gateway Network Graph (Left Margin to Center) */}
        <svg className="hidden lg:block absolute left-4 top-1/3 w-80 h-96 text-indigo-600/20" viewBox="0 0 320 384" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Interconnecting gateway lines */}
          <line x1="40" y1="60" x2="140" y2="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="140" y1="120" x2="240" y2="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="140" y1="120" x2="100" y2="240" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="100" y1="240" x2="220" y2="280" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="240" y1="80" x2="220" y2="280" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="100" y1="240" x2="30" y2="330" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Network Nodes */}
          <circle cx="40" cy="60" r="4" fill="currentColor" />
          <circle cx="140" cy="120" r="5" fill="currentColor" />
          <circle cx="240" cy="80" r="3.5" fill="currentColor" />
          <circle cx="100" cy="240" r="4.5" fill="currentColor" />
          <circle cx="220" cy="280" r="4" fill="currentColor" />
          <circle cx="30" cy="330" r="3" fill="currentColor" />

          {/* Directional Chevrons on vectors */}
          <path d="M85 87 L92 92 L87 97" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M185 98 L193 100 L188 106" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M156 257 L164 260 L160 266" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Micro coordinate tags */}
          <text x="48" y="58" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="1">PORTAL.GEM</text>
          <text x="148" y="118" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="1">GATEWAY.CPPP</text>
          <text x="108" y="238" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="1">RAIL.IREPS</text>
          <text x="228" y="278" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="1">PSU.SYNC</text>
        </svg>

        {/* Blueprint coordinate markers */}
        <div className="hidden xl:flex absolute bottom-8 left-8 items-center space-x-1 font-mono text-[9px] text-slate-400/50 uppercase tracking-widest">
          <span className="text-blue-500/60">+</span>
          <span>NET.PAN_INDIA.COVERAGE</span>
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
