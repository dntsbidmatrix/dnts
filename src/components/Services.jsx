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
    <section id="services" className="py-20 lg:py-28 relative bg-[#F8FAFC] overflow-hidden">
      {/* Classy Architectural GovTech Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Subtle dot matrix grid */}
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{
            backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient depth glows */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.035] rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-cyan-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-indigo-500/[0.03] rounded-full blur-3xl" />

        {/* Left Side: Architectural Vector Linework & Flow Arrows */}
        <svg className="hidden lg:block absolute left-0 top-24 w-72 h-[800px] text-blue-600/20" viewBox="0 0 288 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Vertical conduit line with 90-deg breaks */}
          <path d="M40 0 V180 L100 240 H160 L200 280 V420 L140 480 H60 L20 520 V800" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Circuit / Procurement Nodes */}
          <circle cx="40" cy="180" r="3.5" fill="currentColor" />
          <circle cx="100" cy="240" r="2.5" fill="currentColor" />
          <circle cx="200" cy="280" r="4" fill="currentColor" />
          <circle cx="200" cy="420" r="3" fill="currentColor" />
          <circle cx="140" cy="480" r="2.5" fill="currentColor" />
          <circle cx="20" cy="520" r="3.5" fill="currentColor" />

          {/* Directional Chevrons / Flow Arrows along the path */}
          <path d="M196 340 L200 348 L204 340" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M196 355 L200 363 L204 355" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          
          <path d="M95 480 L103 480 L99 476 M103 480 L99 484" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 640 L20 648 L24 640" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Delicate Wireframe Hexagon Motif */}
          <polygon points="120,80 150,97 150,132 120,149 90,132 90,97" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="120" cy="115" r="2" fill="currentColor" />

          {/* Coordinate Crosshairs */}
          <path d="M35 80 H45 M40 75 V85" stroke="currentColor" strokeWidth="1" />
          <path d="M215 420 H225 M220 415 V425" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Right Side: Architectural Linework, Geometric Rings & Forward Vectors */}
        <svg className="hidden lg:block absolute right-0 top-36 w-80 h-[900px] text-cyan-600/20" viewBox="0 0 320 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Intersecting flow vectors */}
          <path d="M280 20 V220 L220 280 H140 L100 320 V500 L160 560 H260 L300 600 V900" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          
          {/* Hub Nodes */}
          <circle cx="280" cy="220" r="3" fill="currentColor" />
          <circle cx="140" cy="280" r="3" fill="currentColor" />
          <circle cx="100" cy="320" r="4.5" fill="currentColor" />
          <circle cx="100" cy="500" r="3" fill="currentColor" />
          <circle cx="160" cy="560" r="3" fill="currentColor" />
          <circle cx="300" cy="600" r="4" fill="currentColor" />

          {/* Downward / Forward Directional Chevron Arrows */}
          <path d="M96 400 L100 408 L104 400" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M96 415 L100 423 L104 415" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M296 720 L300 728 L304 720" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Concentric Architectural Rings Motif */}
          <circle cx="220" cy="120" r="45" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
          <circle cx="220" cy="120" r="28" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="220" cy="120" r="3" fill="currentColor" />
          <line x1="220" y1="65" x2="220" y2="175" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="165" y1="120" x2="275" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

          {/* Geometric Diamond Accent */}
          <rect x="180" y="660" width="40" height="40" rx="6" transform="rotate(45 200 680)" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
          <circle cx="200" cy="680" r="2" fill="currentColor" />
        </svg>

        {/* Technical Blueprint Margin Labels */}
        <div className="hidden xl:flex flex-col space-y-40 absolute left-6 top-72 font-mono text-[9px] text-slate-400/50 uppercase tracking-widest">
          <div>
            <span className="text-blue-500/60 font-bold">+ </span>SPEC.MATRIX.01
          </div>
          <div>
            <span className="text-blue-500/60 font-bold">+ </span>BOQ.VERIFY.02
          </div>
          <div>
            <span className="text-blue-500/60 font-bold">+ </span>AUDIT.FLOW.03
          </div>
        </div>

        <div className="hidden xl:flex flex-col space-y-40 absolute right-6 top-80 font-mono text-[9px] text-slate-400/50 uppercase tracking-widest text-right">
          <div>
            L1.STRATEGY <span className="text-cyan-500/60 font-bold">+</span>
          </div>
          <div>
            PORTAL.SYNC <span className="text-cyan-500/60 font-bold">+</span>
          </div>
          <div>
            REGULATORY.OK <span className="text-cyan-500/60 font-bold">+</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 mr-1 text-blue-600" />
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
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-md shadow-blue-600/25 scale-105 border border-blue-500'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (9 Core Domains) - Large rounded GovTech cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || FileCheck2;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 overflow-hidden"
              >
                {/* Top Glowing Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6 border-t border-slate-100 pt-5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-sm"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Our Services from the Official Quotation Proposal (15-Item Checklist Plaque) */}
        <div className="rounded-3xl bg-gradient-to-br from-[#060D20] via-[#0B1536] to-[#111C44] text-white border border-blue-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <ListOrdered className="w-4 h-4 mr-1.5 text-cyan-300" />
                <span>Proposal Checklist</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Our Complete Scope of Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                As detailed in our official technical proposal for public & private sector tendering.
              </p>
            </div>
            <div>
              <button
                onClick={() => onSelectService('Complete Tender Services Package')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 border border-cyan-400/30"
              >
                Request Proposal For Our Services
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DETAILED_15_SERVICES.map((item) => (
              <div 
                key={item.no}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:bg-white/10 transition-all flex items-start space-x-3.5"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-mono font-bold text-xs flex-shrink-0">
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
