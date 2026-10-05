import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Building2, FileSpreadsheet, Send, PhoneCall } from 'lucide-react';
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
            
            {/* Compliance Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Statutory Compliance Verified: GSTIN <strong>{COMPANY_INFO.gstin}</strong></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Precision Tender Execution &{' '}
              <span className="text-gradient">Technology Infrastructure</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Based in <strong>Begusarai, Bihar</strong>, D Nandani Tech Solutions is an authorized contractor & tech procurement partner. We execute high-precision contracts on <strong>GeM</strong>, <strong>CPPP</strong>, and state e-procurement portals with 100% compliance, rapid BOQ fulfillment, and on-site SLA delivery.
            </p>

            {/* Key Assurance Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>GeM Custom Bids & Direct Buying</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Turnkey IT Hardware & Server Setup</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>CCTV Surveillance & Campus Networking</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>On-Site SLA & Multi-Year AMC</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 mr-2" />
                <span>Submit Tender / RFP Query</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:text-white transition-all hover:bg-slate-800"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4 ml-2 text-cyan-400" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-xl font-medium text-xs text-slate-300 hover:text-cyan-300 hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>+91 8929851130</span>
              </a>
            </div>

            {/* Live Status Footnote */}
            <div className="pt-3 flex items-center justify-center lg:justify-start space-x-4 text-xs text-slate-400">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span>
                Official Registration: Bihar (State Code 10)
              </span>
              <span>•</span>
              <span>Prompt BOQ Turnaround</span>
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
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Official Profile</div>
                      <div className="text-base font-bold text-white tracking-tight">D NANDANI TECH</div>
                      <div className="text-xs text-slate-400">Begusarai, Bihar</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* GST Details Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>GSTIN / TAX IDENTIFIER</span>
                    <span className="text-emerald-400 text-[10px] font-sans font-bold">ACTIVE</span>
                  </div>
                  <div className="text-cyan-300 font-bold text-sm tracking-widest break-all">
                    {COMPANY_INFO.gstin}
                  </div>
                  <div className="text-[11px] text-slate-400 flex justify-between font-sans">
                    <span>Jurisdiction: Begusarai, Bihar</span>
                    <span>State Code: 10</span>
                  </div>
                </div>

                {/* Scope & Capabilities Quick Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Operational Domains:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-200">Govt. Tender Execution</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <FileSpreadsheet className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-200">GeM Custom Bids</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-200">CCTV & Network AMC</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200">Hardware Supply</span>
                    </div>
                  </div>
                </div>

                {/* Direct Connect Action inside Card */}
                <div className="pt-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>Connect with Managing Director via WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* Floating Pill - Top Right */}
              <div className="absolute -top-4 -right-4 bg-slate-900 border border-cyan-400/40 text-cyan-300 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>GeM & CPPP Ready</span>
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
