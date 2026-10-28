import React, { useState } from 'react';
import { COMPANY_INFO, FAQS } from '../data/companyData';
import { ShieldCheck, ChevronDown, ChevronUp, FileCheck, Building, HelpCircle, Scale } from 'lucide-react';

export default function ComplianceSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const compliancePoints = [
    {
      title: "CVC & General Procurement Rules",
      desc: "Our advisors are well-versed in public policies, rules, and circulars of entities including the Central Vigilance Commission (CVC) and General Financial Rules (GFR 2017).",
      icon: Scale
    },
    {
      title: "Vendor Assessment & Vendor Exemption",
      desc: "Comprehensive expertise in preparing desktop audit document packs for vendor assessment on GeM and securing official vendor exemptions.",
      icon: ShieldCheck
    },
    {
      title: "Public-Private Partnership (PPP) & RTI Norms",
      desc: "Strict compliance with Public-Private Partnership project guidelines, transparency laws, and Right to Information (RTI) procedures during departmental liaisoning.",
      icon: FileCheck
    },
    {
      title: "Statutory Tax & Regulatory Registration",
      desc: "Headquartered in Begusarai, Bihar with active GSTIN: 10CDBPR1005E1ZH. Fully compliant with all legal and commercial registration standards.",
      icon: Building
    }
  ];

  return (
    <section id="compliance" className="py-20 lg:py-28 relative bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      {/* Classy Governance Seal & Compliance Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Subtle dot matrix */}
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{
            backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />

        {/* Ambient soft glow */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/[0.035] rounded-full blur-3xl" />

        {/* Governance Guilloche / Geometric Shield Watermark (Right Background) */}
        <svg className="hidden lg:block absolute -right-20 top-1/4 w-[520px] h-[520px] text-blue-600/10" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric octagonal / geometric security rosette rings */}
          <circle cx="250" cy="250" r="230" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
          <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="110" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Rotated squares forming security star */}
          <rect x="150" y="150" width="200" height="200" rx="20" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 5" />
          <rect x="150" y="150" width="200" height="200" rx="20" transform="rotate(45 250 250)" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 5" />

          {/* Coordinate Crosshairs */}
          <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="250" cy="250" r="4" fill="currentColor" />

          {/* Directional Chevrons */}
          <path d="M250 65 L254 73 L246 73 Z" fill="currentColor" />
          <path d="M435 250 L427 254 L427 246 Z" fill="currentColor" />
          <path d="M250 435 L246 427 L254 427 Z" fill="currentColor" />
          <path d="M65 250 L73 246 L73 254 Z" fill="currentColor" />
        </svg>

        {/* Blueprint coordinate markers */}
        <div className="hidden xl:flex absolute top-10 left-8 items-center space-x-1 font-mono text-[9px] text-slate-400/50 uppercase tracking-widest">
          <span className="text-blue-500/60">+</span>
          <span>GOV.AUDIT.COMPLIANCE.SEAL</span>
        </div>
        <div className="hidden xl:flex absolute bottom-8 left-8 items-center space-x-1 font-mono text-[9px] text-slate-400/50 uppercase tracking-widest">
          <span className="text-blue-500/60">+</span>
          <span>STATUTORY.INTEGRITY.GFR2017</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-blue-600" />
            <span>Policy Compliance & FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Governance, Public Policy & <span className="text-gradient">FAQs</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Advisors well-versed in central public procurement guidelines, vigilance norms, and portal frameworks.
          </p>
        </div>

        {/* 2-Column: Compliance Highlights & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Compliance Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
              <span>Public Procurement Expertise</span>
            </h3>

            {compliancePoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Official Tax Badge Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs shadow-sm">
              <span className="text-slate-600 font-medium">GSTIN Registered Identification:</span>
              <span className="font-mono text-blue-600 font-bold text-sm">{COMPANY_INFO.gstin}</span>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-sm hover:border-blue-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-slate-50"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <div className="text-blue-600 flex-shrink-0">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Proposal Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-cyan-50/70 border border-blue-200/80 text-xs space-y-2 mt-6">
              <div className="font-bold text-slate-900 text-sm">
                Need a tailored proposal letter for your company?
              </div>
              <p className="text-slate-600">
                Email us your company profile to <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-600 underline font-semibold">{COMPANY_INFO.email}</a> or call our advisors directly at <span className="text-blue-700 font-bold">{COMPANY_INFO.phone}</span> / <span className="text-blue-700 font-bold">{COMPANY_INFO.altPhone}</span>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
