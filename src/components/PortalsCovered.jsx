import React from 'react';
import { PORTALS_COVERED } from '../data/companyData';
import { Globe, ExternalLink, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function PortalsCovered() {
  return (
    <section id="portals" className="py-20 lg:py-28 relative bg-[#070D1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 mr-1" />
            <span>Portals & PSUs Covered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tender Bidding & Empanelment Across <span className="text-gradient">Key Government Portals</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Active bid management across central procurement gateways, state departments, and top public sector enterprises.
          </p>
        </div>

        {/* Portal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTALS_COVERED.map((portal, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0C1733] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-800/80 text-cyan-400 text-xs font-semibold mb-2">
                    {portal.type}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {portal.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="font-mono text-xs text-slate-400 mb-3">
                Domain / Coverage: <span className="text-cyan-300 font-semibold">{portal.domain}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {portal.description}
              </p>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="flex items-center text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  {portal.highlight}
                </span>
                <span className="text-[11px] text-slate-400">Empanelment Ready</span>
              </div>

            </div>
          ))}
        </div>

        {/* PSU Empanelment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0C1733] to-slate-900/90 border border-slate-800 text-center space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <Award className="w-4 h-4" />
            <span>Specialized Supplier Registration & Empanelment</span>
          </div>
          <div className="text-sm sm:text-base font-semibold text-white">
            BHEL • Engineers India Limited (EIL) • Indian Railways (IREPS) • NTPC • IOCL • GAIL • Defence & State Portals
          </div>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto">
            We prepare vendor dossiers, balance sheet compilations, technical capability declarations, and handle complete department liaisoning.
          </p>
        </div>

      </div>
    </section>
  );
}
