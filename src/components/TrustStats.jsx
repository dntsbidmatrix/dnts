import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Layers, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function TrustStats() {
  const trustPillars = [
    {
      icon: Layers,
      title: "Virtual Bid Management",
      badge: "Outsourced Function",
      desc: "Dedicated bid managers for MSMEs, OEMs & contractors without in-house bidding overhead."
    },
    {
      icon: Building2,
      title: "PSUs Empanelment",
      badge: "Approved Vendors",
      desc: "Specialized supplier dossiers for BHEL, EIL & Indian Railways etc, NTPC, IOCL, GAIL etc."
    },
    {
      icon: ShieldCheck,
      title: "100% CVC & GFR Norms",
      badge: "Policy Adherence",
      desc: "Strict adherence to public procurement manuals, transparency standards & tender rules."
    },
    {
      icon: TrendingUp,
      title: "Pre-Bid to EMD Refund",
      badge: "Complete Handholding",
      desc: "From tender study & BOQ rate strategy to live Reverse Auctions & PO clearance."
    }
  ];

  return (
    <section className="relative z-10 pt-36 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
            <span>Why Businesses Choose BidMatrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Government Tender Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Eliminating technical disqualifications with rigorous document audits and systematic execution.
          </p>
        </div>

        {/* 4 Trust Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                  <span>Verified Capability</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Portal & Authority Assurance Strip */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-600">
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
