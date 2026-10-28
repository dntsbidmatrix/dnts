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
      {/* Modern Fluid Shapes & Wave Accents Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/[0.035] rounded-full blur-3xl" />

        {/* Large Organic Wave Swoosh on the Right Side (Ref: Image 1 & 3) */}
        <svg className="hidden lg:block absolute -right-16 top-12 w-[650px] h-[650px] pointer-events-none" viewBox="0 0 650 650" fill="none">
          <path 
            d="M200,0 C350,180 500,80 650,250 L650,650 C480,520 320,620 180,480 C40,340 120,180 200,0 Z" 
            fill="url(#comp-wave-grad)" 
          />
          <path 
            d="M200,0 C350,180 500,80 650,250" 
            stroke="#0284C7" 
            strokeWidth="2" 
            strokeDasharray="6 8" 
            opacity="0.8" 
          />
          <path 
            d="M650,650 C480,520 320,620 180,480" 
            stroke="#6366F1" 
            strokeWidth="1.5" 
            strokeDasharray="4 6" 
            opacity="0.65" 
          />
          <defs>
            <linearGradient id="comp-wave-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Side: Modern Fluid Wave Blob Touching the Top Section Line (Ref: User request) */}
        <div className="hidden lg:block absolute left-0 top-0 pointer-events-none">
          <div className="relative">
            {/* Fluid Wave/Blob Shape Originating Directly from the Top Line */}
            <svg className="w-64 h-96 pointer-events-none" viewBox="0 0 240 380" fill="none">
              {/* Layer 1: Ambient Background Depth */}
              <path 
                d="M 0,0 L 140,0 C 140,90 190,170 150,260 C 120,330 50,370 0,370 Z" 
                fill="url(#comp-left-depth)" 
              />
              {/* Layer 2: Main Fluid Blob Shape touching the top line */}
              <path 
                d="M 0,0 L 110,0 C 110,80 155,150 120,230 C 95,290 40,330 0,330 Z" 
                fill="url(#comp-left-blob)" 
              />
              {/* Solid Luminous Contour Line */}
              <path 
                d="M 110,0 C 110,80 155,150 120,230 C 95,290 40,330 0,330" 
                stroke="url(#comp-left-stroke)" 
                strokeWidth="2.5" 
              />
              <defs>
                <linearGradient id="comp-left-blob" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.28" />
                  <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.24" />
                  <stop offset="80%" stopColor="#2563EB" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="comp-left-depth" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.08" />
                </linearGradient>
                <linearGradient id="comp-left-stroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Layered Floating Sphere & Crescent Arc Hugging the Fluid Shape (Ref: Image 1 & 2) */}
            <div className="absolute top-44 left-16">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400/40 via-blue-500/30 to-indigo-600/30 shadow-lg border border-cyan-300/40" />
              <svg className="absolute -top-6 -left-6 w-24 h-24 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
                <path d="M 50 20 A 30 30 0 1 1 20 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Polka Dot Matrix Cluster (Ref: Image 1) */}
        <div className="hidden sm:grid grid-cols-6 gap-2 absolute top-10 left-44 opacity-30">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          ))}
        </div>

        {/* Floating Plus (+) Accents (Ref: Image 1) */}
        <span className="hidden sm:block absolute top-1/2 left-12 text-blue-500/35 text-2xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute bottom-24 left-1/4 text-cyan-500/40 text-xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute top-32 right-1/4 text-cyan-500/40 text-2xl font-bold select-none">+</span>

        {/* Right Side: Layered Floating Sphere & Crescent Ring (Ref: Image 1) */}
        <div className="hidden lg:block absolute right-12 bottom-20">
          <div className="relative">
            <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-600/25 shadow-lg border border-cyan-300/40" />
            <svg className="absolute -top-6 -left-6 w-24 h-24 text-blue-500 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M 22 50 A 30 30 0 1 1 50 78" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.65" />
            </svg>
          </div>
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
