import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Building2, FileSpreadsheet, Send, PhoneCall, Award, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows & Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3260_1px,transparent_1px)] [background-size:28px_28px] opacity-25"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Systematic Approach to Government Operations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Expand Your Business Through{' '}
              <span className="text-gradient">Govt Tenders & GeM Bidding</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong>D Nandani Tech Solutions</strong> provides end-to-end bid processing management and strategic tendering services. We act as your <strong>dedicated Virtual Bid Manager</strong>—handling portal registrations, GeM vendor assessment, PSU empanelment (BHEL, EIL, Railways), catalogue approvals, and live reverse auctions.
            </p>

            {/* Key Assurance Bullet Points from Official Proposal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>GeM & CPPP Portal Registration & DSC Setup</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Vendor Assessment (QCI) & BIS Exemption</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>PSU Empanelment (BHEL, EIL, Indian Railways)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>OEM Panel Creation & Reseller Management</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Tender Scrutiny, BOQ Study & Rate Strategy</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Live Reverse Auction, PO & EMD Refund Follow-up</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 mr-2" />
                <span>Request Bidding Proposal</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:text-white transition-all hover:bg-slate-800"
              >
                <span>View All 13 Services</span>
                <ArrowRight className="w-4 h-4 ml-2 text-cyan-400" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-medium text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Live Status Footnote */}
            <div className="pt-3 flex items-center justify-center lg:justify-start space-x-4 text-xs text-slate-400">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span>
                Pan-India Tender Strategy & Bid Advisory
              </span>
              <span>•</span>
              <span>CVC & GFR 2017 Procurement Compliant</span>
            </div>

          </div>

          {/* Right Column: Visual Brand & Contractor Credential Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-fuchsia-600 opacity-30 blur-xl"></div>
              
              {/* Main Credential Showcase Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#101C3D] to-[#0A1229] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Header with Logo */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950/90 border border-cyan-400/40 p-2 shadow-inner flex items-center justify-center">
                      <img 
                        src="/logo.png" 
                        alt="D Nandani Tech Solutions" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Proposal Profile</div>
                      <div className="text-base font-bold text-white tracking-tight">D NANDANI TECH</div>
                      <div className="text-xs text-slate-400">Tender Bidding & GeM Advisors</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-[11px] font-bold">
                      ADVISOR
                    </span>
                  </div>
                </div>

                {/* Scope & Capabilities Quick Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Bid Processing Capabilities:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <FileSpreadsheet className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-200">GeM / CPPP Portals</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200">Vendor Assessment</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-200">PSU Empanelment</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-200">Reverse Auction (RA)</span>
                    </div>
                  </div>
                </div>

                {/* Outsourced Bid Manager Benefit Banner */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs space-y-1">
                  <div className="flex items-center text-cyan-400 font-bold">
                    <Users className="w-4 h-4 mr-1.5" />
                    <span>Dedicated Outsourced Bid Management</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Designed for manufacturers, MSMEs & traders who do not have an in-house bid team. We strategize, draft, bid, and follow up end-to-end.
                  </p>
                </div>

                {/* Direct Connect Action inside Card */}
                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Connect for Tender Feasibility via WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Floating Pill - Top Right */}
              <div className="absolute -top-4 -right-4 bg-slate-900 border border-cyan-400/40 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Pan-India Tender Coverage</span>
              </div>

              {/* Floating Pill - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-blue-500/40 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                📍 Begusarai, Bihar Hub
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
