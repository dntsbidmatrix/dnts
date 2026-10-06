import React, { useState } from 'react';
import { SERVICES, DETAILED_13_SERVICES } from '../data/companyData';
import { 
  FileCheck2, 
  ShieldCheck, 
  Building2, 
  Layers, 
  Briefcase, 
  BadgePercent, 
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
  BadgePercent
};

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Portal Registration', 'GeM Compliance', 'Empanelment', 'Catalogue Management', 'Bid Strategy', 'Execution & Post-Bid'];

  const filteredServices = activeFilter === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#091124] border-t border-slate-800/80">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 mr-1" />
            <span>End-to-End Bid Processing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Core <span className="text-gradient">Tender Bidding & GeM Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
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
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (6 Core Domains) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || FileCheck2;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#0C1733] border border-slate-800/90 hover:border-cyan-500/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-cyan-300 text-[11px] font-semibold">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6 border-t border-slate-800/80 pt-5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-300 text-xs font-bold flex items-center justify-center space-x-2 transition-all"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* The Exact 13 Services from the Official Quotation Proposal */}
        <div className="rounded-3xl bg-[#070D1E] border border-cyan-500/30 p-8 sm:p-10 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <ListOrdered className="w-4 h-4 mr-1.5" />
                <span>Proposal Checklist</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Complete 13-Point Scope of Work
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                As detailed in our official technical proposal for public & private sector tendering.
              </p>
            </div>
            <div>
              <button
                onClick={() => onSelectService('Complete 13-Point Tender Package')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 hover:from-cyan-300 hover:to-blue-400 transition-all"
              >
                Request Proposal For All 13 Services
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DETAILED_13_SERVICES.map((item) => (
              <div 
                key={item.no}
                className="p-4 rounded-xl bg-[#0C1733] border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-start space-x-3.5"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-xs flex-shrink-0">
                  {item.no < 10 ? `0${item.no}` : item.no}
                </span>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
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
