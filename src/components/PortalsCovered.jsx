import React from 'react';
import { PORTALS_COVERED } from '../data/companyData';
import { Globe, ExternalLink, CheckCircle2, Award } from 'lucide-react';

export default function PortalsCovered() {
  return (
    <section id="portals" className="py-20 lg:py-28 relative bg-[#FFF9F2] border-t border-[#FED7AA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF4E5] border border-[#FED7AA] text-[#C2410C] text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 mr-1 text-[#EA580C]" />
            <span>Portals & PSUs Covered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tender Bidding & Empanelment Across <span className="text-gradient">Key Government Portals</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Active bid management across central procurement gateways, state departments, and top public sector enterprises.
          </p>
        </div>

        {/* Portal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTALS_COVERED.map((portal, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#FED7AA]/70 hover:border-[#F97316] hover:shadow-xl hover:shadow-[#EA580C]/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C2410C] via-[#EA580C] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#FFF4E5] border border-[#FED7AA] text-[#C2410C] text-xs font-semibold mb-2">
                    {portal.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#C2410C] transition-colors">
                    {portal.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-[#FFF9F2] border border-[#FED7AA] text-slate-500 group-hover:text-[#EA580C] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="font-mono text-xs text-slate-500 mb-3">
                Domain / Coverage: <span className="text-[#C2410C] font-semibold">{portal.domain}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                {portal.description}
              </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="flex items-center text-xs font-bold text-[#C2410C]">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#EA580C]" />
                  {portal.highlight}
                </span>
                <span className="text-[11px] text-slate-500">Empanelment Ready</span>
              </div>

            </div>
          ))}
        </div>

        {/* PSUs Empanelment Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#7C2D12] via-[#C2410C] to-[#EA580C] text-white border border-[#F97316]/40 text-center space-y-3 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#FDE047] bg-[#7C2D12]/60 border border-[#FDE047]/40 px-3.5 py-1.5 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-[#FDE047]" />
            <span>Specialized Supplier Registration & Empanelment</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white">
            BHEL, EIL & Indian Railways etc • NTPC • IOCL • GAIL etc • Defence & State Portals
          </div>
          <p className="text-xs sm:text-sm text-[#FFEDD5] max-w-2xl mx-auto leading-relaxed">
            We prepare vendor dossiers, balance sheet compilations, technical capability declarations, and handle complete department liaisoning.
          </p>
        </div>

      </div>
    </section>
  );
}
