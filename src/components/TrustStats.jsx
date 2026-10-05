import React from 'react';
import { TRUST_METRICS, COMPANY_INFO } from '../data/companyData';
import { Shield, FileCheck, CheckCircle, Clock } from 'lucide-react';

export default function TrustStats() {
  const icons = [Shield, FileCheck, CheckCircle, Clock];

  return (
    <section className="relative z-10 py-10 bg-[#0C1733]/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_METRICS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </div>
                </div>
                <div className="font-semibold text-sm text-slate-200">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Portal & Authority Assurance Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-slate-300 font-medium">Serving:</span>
            <span>Bihar State Departments • Central Ministries • PSUs • Municipal Corporations • Educational Institutions</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400 font-mono">GSTIN: {COMPANY_INFO.gstin}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Begusarai, Bihar</span>
          </div>
        </div>

      </div>
    </section>
  );
}
