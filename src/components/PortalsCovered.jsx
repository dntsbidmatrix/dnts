import React from 'react';
import { PORTALS_COVERED } from '../data/companyData';
import { Globe, ExternalLink, CheckCircle2, Award } from 'lucide-react';

export default function PortalsCovered() {
  return (
    <section id="portals" className="py-20 lg:py-28 relative bg-[#F4F9F5] border-t border-[#DCECDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF5ED] border border-[#BCDDC4] text-[#245439] text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 mr-1 text-[#387850]" />
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
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D5EADB] hover:border-[#5A9F68] hover:shadow-xl hover:shadow-[#245439]/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#245439] via-[#468C5D] to-[#BBD58E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#EAF5ED] border border-[#BCDDC4] text-[#245439] text-xs font-semibold mb-2">
                    {portal.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#245439] transition-colors">
                    {portal.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-[#F4F9F5] border border-[#D5EADB] text-slate-500 group-hover:text-[#245439] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="font-mono text-xs text-slate-500 mb-3">
                Domain / Coverage: <span className="text-[#245439] font-semibold">{portal.domain}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                {portal.description}
              </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="flex items-center text-xs font-bold text-[#245439]">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#5A9F68]" />
                  {portal.highlight}
                </span>
                <span className="text-[11px] text-slate-500">Empanelment Ready</span>
              </div>

            </div>
          ))}
        </div>

        {/* PSUs Empanelment Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#245439] via-[#2F6D4A] to-[#3E895C] text-white border border-[#5A9F68]/40 text-center space-y-3 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#BBD58E] bg-[#1B3E29]/60 border border-[#BBD58E]/40 px-3.5 py-1.5 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-[#BBD58E]" />
            <span>Specialized Supplier Registration & Empanelment</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white">
            BHEL, EIL & Indian Railways etc • NTPC • IOCL • GAIL etc • Defence & State Portals
          </div>
          <p className="text-xs sm:text-sm text-[#E2EFE4] max-w-2xl mx-auto leading-relaxed">
            We prepare vendor dossiers, balance sheet compilations, technical capability declarations, and handle complete department liaisoning.
          </p>
        </div>

      </div>
    </section>
  );
}
