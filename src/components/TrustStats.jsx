import React from 'react';
import { TRUST_METRICS, COMPANY_INFO } from '../data/companyData';
import { Shield, FileCheck, CheckCircle, Clock } from 'lucide-react';

export default function TrustStats() {
  const icons = [Shield, FileCheck, CheckCircle, Clock];

  return (
    <section className="relative z-10 py-8 sm:py-10 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid - Centered items and responsive typography */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {TRUST_METRICS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group flex flex-col items-center justify-center text-center"
              >
                {/* Centered Icon */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 text-blue-600 mb-2 sm:mb-2.5 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Primary Metric Value - Scaled down and center aligned */}
                <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 tracking-tight leading-snug w-full text-center break-words">
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
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-start sm:items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-1 sm:mt-0"></span>
            <span className="text-slate-800 font-bold whitespace-nowrap">Empanelment & Tenders:</span>
            <span className="leading-relaxed">BHEL, EIL & Indian Railways etc • NTPC • IOCL etc • CPPP • UNGM • GeM State & Central Bids</span>
          </div>
          <div className="flex items-center space-x-3 text-xs pt-1 sm:pt-0">
            <span className="text-blue-700 font-mono font-semibold">GSTIN: {COMPANY_INFO.gstin}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-medium">Begusarai, Bihar</span>
          </div>
        </div>

      </div>
    </section>
  );
}
