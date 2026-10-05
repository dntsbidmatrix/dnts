import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { 
  FileCheck2, 
  Server, 
  ShieldCheck, 
  Presentation, 
  Wrench, 
  Briefcase, 
  Check, 
  ArrowRight,
  Layers
} from 'lucide-react';

const iconMap = {
  FileCheck2,
  Server,
  ShieldCheck,
  Presentation,
  Wrench,
  Briefcase
};

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Tender Execution', 'IT & Hardware', 'Infrastructure', 'Smart Solutions', 'Maintenance', 'Consultancy'];

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
            <Layers className="w-3.5 h-3.5 mr-1" />
            <span>Operational Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient">Tender & Tech Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            End-to-end execution across high-demand public sector procurement domains with guaranteed SLA compliance.
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className="px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-[11px] font-semibold">
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
                    <span>Inquire For This Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
