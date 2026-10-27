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
    <section id="compliance" className="py-20 lg:py-28 relative bg-[#FFF9F2] border-t border-[#FED7AA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF4E5] border border-[#FED7AA] text-[#C2410C] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#EA580C]" />
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
                  className="p-5 rounded-2xl bg-white border border-[#FED7AA]/70 hover:border-[#F97316] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-[#FFF4E5] border border-[#FED7AA] text-[#C2410C] flex-shrink-0 mt-1 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#C2410C] transition-colors">
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
            <div className="p-4 rounded-xl bg-white border border-[#FED7AA]/70 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">GSTIN Registered Identification:</span>
              <span className="font-mono text-[#C2410C] font-bold text-sm">{COMPANY_INFO.gstin}</span>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-[#EA580C]" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-[#FED7AA]/70 overflow-hidden transition-all duration-200 shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-[#FFF9F2]"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <div className="text-[#EA580C] flex-shrink-0">
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
            <div className="p-5 rounded-2xl bg-[#FFF4E5] border border-[#FED7AA] text-xs space-y-2 mt-6">
              <div className="font-bold text-slate-900 text-sm">
                Need a tailored proposal letter for your company?
              </div>
              <p className="text-slate-600">
                Email us your company profile to <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#C2410C] underline font-semibold">{COMPANY_INFO.email}</a> or call our advisors directly at <span className="text-[#C2410C] font-bold">{COMPANY_INFO.phone}</span> / <span className="text-[#C2410C] font-bold">{COMPANY_INFO.altPhone}</span>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
