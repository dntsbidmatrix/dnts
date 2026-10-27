import React, { useState } from 'react';
import { SERVICES, DETAILED_15_SERVICES } from '../data/companyData';
import { 
  FileCheck2, 
  ShieldCheck, 
  Building2, 
  Layers, 
  Briefcase, 
  BadgePercent, 
  PackageCheck,
  Gavel,
  Receipt,
  Check, 
  ArrowRight,
  ListOrdered
} from 'lucide-react';

const iconMap = {
  FileCheck2,
  ShieldCheck,
  Building2,
  Layers,
  Briefcase,
  BadgePercent,
  PackageCheck,
  Gavel,
  Receipt
};

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Portal Registration', 'GeM Compliance', 'Empanelment', 'Catalogue Management', 'Bid Strategy', 'Execution & Post-Bid'];

  const filteredServices = activeFilter === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FEFCE8] border border-yellow-200 text-[#854D0E] text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 mr-1 text-[#CA8A04]" />
            <span>End-to-End Bid Processing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Core <span className="text-gradient">Tender Bidding & GeM Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Low-cost, high-quality, and prompt bidding management covering the entire procurement lifecycle.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#CA8A04] via-[#D97706] to-[#EAB308] text-white shadow-md shadow-yellow-600/20 scale-105 border border-yellow-300'
                  : 'bg-[#FEFDF9] text-slate-700 border border-yellow-100/90 hover:border-[#EAB308] hover:bg-[#FEFCE8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (9 Core Domains) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || FileCheck2;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-yellow-100/90 hover:border-[#EAB308] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10 overflow-hidden"
              >
                {/* Top Glowing Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B45309] via-[#EAB308] to-[#FDE047] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FEFCE8] border border-yellow-200 flex items-center justify-center text-[#A16207] group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#EAB308] group-hover:to-[#CA8A04] group-hover:text-slate-950 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#FEFDF9] border border-yellow-100 text-slate-700 text-[11px] font-semibold group-hover:bg-[#FEFCE8] group-hover:text-[#A16207] group-hover:border-yellow-300 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#A16207] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6 border-t border-slate-100 pt-5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#CA8A04] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FEFDF9] border border-yellow-100 group-hover:border-[#EAB308] group-hover:bg-[#FEFCE8] text-slate-700 group-hover:text-[#854D0E] text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CA8A04] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Our Services from the Official Quotation Proposal */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F1D] text-white border border-yellow-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FEF08A] via-[#FACC15] to-[#EAB308]" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center text-xs font-bold text-[#FACC15] uppercase tracking-wider">
                <ListOrdered className="w-4 h-4 mr-1.5" />
                <span>Proposal Checklist</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Our Complete Scope of Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                As detailed in our official technical proposal for public & private sector tendering.
              </p>
            </div>
            <div>
              <button
                onClick={() => onSelectService('Complete Tender Services Package')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308] hover:from-[#FEF08A] hover:to-[#FACC15] text-slate-950 font-black text-xs shadow-lg shadow-yellow-500/20 transition-all hover:scale-105"
              >
                Request Proposal For Our Services
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DETAILED_15_SERVICES.map((item) => (
              <div 
                key={item.no}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FACC15]/60 hover:bg-white/10 transition-all flex items-start space-x-3.5"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#FEF08A]/10 border border-yellow-400/40 text-[#FEF08A] font-mono font-bold text-xs flex-shrink-0">
                  {item.no < 10 ? `0${item.no}` : item.no}
                </span>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
