import React, { useState } from 'react';
import { COMPANY_INFO, FAQS } from '../data/companyData';
import { ShieldCheck, ChevronDown, ChevronUp, CheckCircle, FileCheck, Building, HelpCircle, Scale } from 'lucide-react';

export default function ComplianceSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const compliancePoints = [
    {
      title: "CVC & General Procurement Rules",
      desc: "Our advisors are well-versed in public policies, rules, and circulars of entities including the Central Vigilance Commission (CVC) and General Financial Rules (GFR 2017).",
      icon: Scale
    },
    {
      title: "QCI Vendor Assessment & BIS Exemption",
      desc: "Comprehensive expertise in preparing desktop audit document packs for Quality Council of India (QCI) assessment and securing exemptions for BIS licensees.",
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
    <section id="compliance" className="py-20 lg:py-28 relative bg-[#070D1E] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            <span>Policy Compliance & FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Governance, Public Policy & <span className="text-gradient">FAQs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Advisors well-versed in central public procurement guidelines, vigilance norms, and portal frameworks.
          </p>
        </div>

        {/* 2-Column: Compliance Highlights & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Compliance Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <span>Public Procurement Expertise</span>
            </h3>

            {compliancePoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0C1733] border border-slate-800 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Official Tax Badge Box */}
            <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-between text-xs">
              <span className="text-slate-300">GSTIN Registered Identification:</span>
              <span className="font-mono text-cyan-300 font-bold text-sm">{COMPANY_INFO.gstin}</span>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-cyan-400" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0C1733] border border-slate-800 overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-slate-900/40"
                    >
                      <span className="text-sm sm:text-base font-bold text-white">
                        {faq.q}
                      </span>
                      <div className="text-cyan-400 flex-shrink-0">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Proposal Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 text-xs space-y-2 mt-6">
              <div className="font-bold text-white text-sm">
                Need a tailored proposal letter for your company?
              </div>
              <p className="text-slate-300">
                Email us your company profile to <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-300 underline font-medium">{COMPANY_INFO.email}</a> or call our advisors directly at <span className="text-cyan-300 font-semibold">{COMPANY_INFO.phone}</span> / <span className="text-cyan-300 font-semibold">{COMPANY_INFO.altPhone}</span>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
