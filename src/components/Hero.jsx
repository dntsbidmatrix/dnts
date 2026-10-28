import React from 'react';
import { 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  PhoneCall, 
  FileSpreadsheet, 
  ShieldCheck, 
  Building2, 
  Award, 
  Users,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 overflow-hidden bg-gradient-to-br from-[#060D20] via-[#0B1536] to-[#111C44] text-white">
      {/* Background Lighting & Digital Procurement Grid Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.12)_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Systematic Approach to Government Operations</span>
            </div>

            {/* Main Headline (100% Original Text) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Expand Your Business Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300">
                Govt Tenders & GeM Bidding
              </span>
            </h1>

            {/* Subtitle (100% Original Text) */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-cyan-300 font-semibold">BidMatrix</strong> provides end-to-end bid processing management and strategic tendering services. We act as your <strong className="text-white font-semibold">dedicated Virtual Bid Manager</strong>—handling portal registrations (GeM, CPPP, UNGM), GeM vendor assessment, PSUs empanelment (BHEL, EIL & Indian Railways etc), catalogue approvals, and live reverse auctions.
            </p>

            {/* Key Assurance Bullet Points from Official Proposal (100% Original Text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>GeM Portal, CPPP, UNGM & e-Procurement Registration</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Vendor Assessment & Vendor Exemption</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>PSUs Empanelment (BHEL, EIL & Indian Railways etc)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>OEM Panel and OEM Dashboard</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Tender Scrutiny, BOQ Study & Rate Strategy</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Bid Submission, Pre-Bid & Post-Bid Clarification/Representation</span>
              </div>
            </div>

            {/* Call to Actions (100% Original Text) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 border border-cyan-400/30"
              >
                <Send className="w-4 h-4 mr-2 text-cyan-300" />
                <span>Request Bidding Proposal</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all shadow-sm"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 text-cyan-400" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-2xl font-semibold text-xs text-cyan-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Live Status Footnote (100% Original Text) */}
            <div className="pt-3 flex items-center justify-center lg:justify-start space-x-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5"></span>
                Pan-India Tender Strategy & Bid Advisory
              </span>
              <span>•</span>
              <span>CVC & GFR 2017 Procurement Compliant</span>
            </div>

          </div>

          {/* Right Column: Visual Brand & Contractor Credential Card (100% Original Text) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Subtle Halo Shadow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/25 to-indigo-500/20 opacity-70 blur-2xl"></div>
              
              {/* Main Credential Showcase Card */}
              <div className="relative rounded-3xl bg-white/95 text-slate-800 p-6 sm:p-8 shadow-2xl border border-slate-200/80 backdrop-blur-xl space-y-6">
                
                {/* Header with Circular Logo */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden drop-shadow-md flex-shrink-0 ring-1 ring-blue-500/30">
                      <img 
                        src="/logo.png" 
                        alt="BidMatrix" 
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Proposal Profile</div>
                      <div className="text-base font-bold text-slate-900 tracking-tight">BidMatrix</div>
                      <div className="text-xs text-slate-500">Tender Bidding & GeM Advisors</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold">
                      ADVISOR
                    </span>
                  </div>
                </div>

                {/* Scope & Capabilities Quick Grid (100% Original Text) */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Core Bid Processing Capabilities:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2">
                      <FileSpreadsheet className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">GeM, CPPP & UNGM</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">Vendor Assessment</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">PSUs Empanelment</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2">
                      <Award className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">Reverse Auction (RA)</span>
                    </div>
                  </div>
                </div>

                {/* Outsourced Bid Manager Benefit Banner (100% Original Text) */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-xs space-y-1">
                  <div className="flex items-center text-blue-800 font-bold">
                    <Users className="w-4 h-4 mr-1.5 text-blue-600" />
                    <span>Dedicated Outsourced Bid Management</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Designed for manufacturers, MSMEs & traders who do not have an in-house bid team. We strategize, draft, bid, and follow up end-to-end.
                  </p>
                </div>

                {/* Direct Connect Action inside Card (100% Original Text) */}
                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-md shadow-emerald-600/20"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-100" />
                    <span>Connect for Tender Feasibility via WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Floating Pill - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white border border-slate-200 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
                <span>Pan-India Tender Coverage</span>
              </div>

              {/* Floating Pill - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                📍 Begusarai, Bihar Hub
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Visually Impressive Curved / Wave-Shaped Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-12 sm:h-20 md:h-28 text-[#F8FAFC]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
