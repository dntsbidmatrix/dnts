import React, { useState } from 'react';
import { COMPANY_INFO, FAQS } from '../data/companyData';
import { ShieldCheck, ChevronDown, ChevronUp, CheckCircle, FileCheck, Building, HelpCircle } from 'lucide-react';

export default function ComplianceSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const compliancePoints = [
    {
      title: "Active Bihar GST Registration",
      desc: "Registered under Bihar jurisdiction with State Code 10. GSTIN: 10CDBPR1005E1ZH. Fully active with regular GST-1 and GSTR-3B filings.",
      icon: ShieldCheck
    },
    {
      title: "GeM Seller & Bid Compliance",
      desc: "Fully aligned with GeM GTC (General Terms and Conditions), STC, and SLA clauses for supply and service categories.",
      icon: FileCheck
    },
    {
      title: "Make in India (MII) Preference",
      desc: "Prioritizing Class-I and Class-II local suppliers to maximize local content compliance under DPIIT Public Procurement Orders.",
      icon: CheckCircle
    },
    {
      title: "Transparent Accounting & Audit Trail",
      desc: "Clean digital banking, GST e-invoices, and E-Way bill generation for seamless interstate and intrastate movement.",
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
            <span>Governance & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Statutory <span className="text-gradient">Compliance & FAQs</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Complete transparency in business credentials, tax registrations, and procurement norms.
          </p>
        </div>

        {/* 2-Column: Compliance Highlights & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Compliance Cards */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <span>Statutory Alignment</span>
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
              <span className="text-slate-300">GSTIN Tax Registration ID:</span>
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

            {/* Quick Inquiry Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 text-xs space-y-2 mt-6">
              <div className="font-bold text-white text-sm">
                Have a specific Tender NIT or BOQ for verification?
              </div>
              <p className="text-slate-300">
                Email us your Tender document or RFP link directly to <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-300 underline font-medium">{COMPANY_INFO.email}</a> for feasibility assessment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
