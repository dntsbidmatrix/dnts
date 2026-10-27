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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#0D1D3A] to-[#172554] text-white">
      {/* Background Lighting & Subtle Pattern Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Systematic Approach to Government Operations</span>
            </div>

            {/* Main Headline (100% Original Text) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-sm">
              Expand Your Business Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-blue-200">
                Govt Tenders & GeM Bidding
              </span>
            </h1>

            {/* Subtitle (100% Original Text) */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-white">BidMatrix</strong> provides end-to-end bid processing management and strategic tendering services. We act as your <strong className="text-white">dedicated Virtual Bid Manager</strong>—handling portal registrations (GeM, CPPP, UNGM), GeM vendor assessment, PSUs empanelment (BHEL, EIL & Indian Railways etc), catalogue approvals, and live reverse auctions.
            </p>

            {/* Key Assurance Bullet Points from Official Proposal (100% Original Text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>GeM Portal, CPPP, UNGM & e-Procurement Registration</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Vendor Assessment & Vendor Exemption</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>PSUs Empanelment (BHEL, EIL & Indian Railways etc)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>OEM Panel and OEM Dashboard</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Tender Scrutiny, BOQ Study & Rate Strategy</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Bid Submission, Pre-Bid & Post-Bid Clarification/Representation</span>
              </div>
            </div>

            {/* Call to Actions (100% Original Text) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-950/60 hover:scale-105 border border-blue-400/30"
              >
                <Send className="w-4 h-4 mr-2" />
                <span>Request Bidding Proposal</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all shadow-sm"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 text-sky-300" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Live Status Footnote (100% Original Text) */}
            <div className="pt-3 flex items-center justify-center lg:justify-start space-x-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span>
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
              <div className="absolute -inset-1 rounded-3xl bg-blue-500/20 opacity-40 blur-2xl"></div>
              
              {/* Main Credential Showcase Card */}
              <div className="relative rounded-3xl bg-white text-slate-800 p-6 sm:p-8 shadow-2xl border border-white/80 space-y-6">
                
                {/* Header with Circular Logo */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden drop-shadow-md flex-shrink-0">
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
                    <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold">
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
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center space-x-2">
                      <FileSpreadsheet className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">GeM, CPPP & UNGM</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">Vendor Assessment</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">PSUs Empanelment</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center space-x-2">
                      <Award className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">Reverse Auction (RA)</span>
                    </div>
                  </div>
                </div>

                {/* Outsourced Bid Manager Benefit Banner (100% Original Text) */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center text-blue-700 font-bold">
                    <Users className="w-4 h-4 mr-1.5" />
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
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Connect for Tender Feasibility via WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Floating Pill - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white border border-slate-200 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                <span>Pan-India Tender Coverage</span>
              </div>

              {/* Floating Pill - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md">
                📍 Begusarai, Bihar Hub
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
