import React from 'react';
import { PORTALS_COVERED } from '../data/companyData';
import { Globe, ExternalLink, CheckCircle2, Award } from 'lucide-react';

export default function PortalsCovered() {
  return (
    <section id="portals" className="py-20 lg:py-28 relative bg-[#F3F7F3] border-t border-[#DDE7DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF2E8] border border-[#588157]/30 text-[#344E41] text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 mr-1 text-[#3A5A40]" />
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
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D8E6D8] hover:border-[#5A9F68] hover:shadow-xl hover:shadow-[#3A5A40]/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Hover Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#344E41] via-[#5A9F68] to-[#BBD58E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#EAF2E8] border border-[#C5D8C5] text-[#344E41] text-xs font-semibold mb-2">
                    {portal.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#344E41] transition-colors">
                    {portal.name}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-[#F4F7F4] border border-[#D8E6D8] text-slate-500 group-hover:text-[#3A5A40] transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="font-mono text-xs text-slate-500 mb-3">
                Domain / Coverage: <span className="text-[#344E41] font-semibold">{portal.domain}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                {portal.description}
              </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="flex items-center text-xs font-bold text-[#344E41]">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#5A9F68]" />
                  {portal.highlight}
                </span>
                <span className="text-[11px] text-slate-500">Empanelment Ready</span>
              </div>

            </div>
          ))}
        </div>

        {/* PSUs Empanelment Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1C2C23] via-[#344E41] to-[#3A5A40] text-white border border-[#588157]/40 text-center space-y-3 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#BBD58E] bg-white/10 border border-[#BBD58E]/40 px-3.5 py-1.5 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-[#BBD58E]" />
            <span>Specialized Supplier Registration & Empanelment</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-white">
            BHEL, EIL & Indian Railways etc • NTPC • IOCL • GAIL etc • Defence & State Portals
          </div>
          <p className="text-xs sm:text-sm text-[#D6E5D7] max-w-2xl mx-auto leading-relaxed">
            We prepare vendor dossiers, balance sheet compilations, technical capability declarations, and handle complete department liaisoning.
          </p>
        </div>

      </div>
    </section>
  );
}
