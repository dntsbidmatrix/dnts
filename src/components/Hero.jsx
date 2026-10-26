import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Building2, 
  Layers, 
  Briefcase,
  PhoneCall,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenInquiry }) {
  const [selectedPortal, setSelectedPortal] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');

  const portalOptions = [
    { value: 'all', label: 'All Portals & Tenders' },
    { value: 'gem', label: 'GeM Portal (gem.gov.in)' },
    { value: 'cppp', label: 'CPPP & State Portals' },
    { value: 'psu', label: 'PSUs (BHEL, NTPC, IOCL etc)' },
    { value: 'railways', label: 'Indian Railways (IREPS)' },
    { value: 'ungm', label: 'UNGM & UNDP Global' },
    { value: 'invoice', label: 'e-Invoice & Contract Mgmt' }
  ];

  const trendingTags = [
    'GeM Vendor Assessment',
    'BOQ Rate Strategy',
    'PSUs Empanelment',
    'Live Reverse Auction',
    'e-Invoice Management',
    'Brand Approval & Reseller'
  ];

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const portalObj = portalOptions.find(p => p.value === selectedPortal);
    const portalName = portalObj ? portalObj.label : 'All Portals';

    let inquiryMessage = '';
    if (searchKeyword.trim()) {
      inquiryMessage = `Inquiry: "${searchKeyword.trim()}" across ${portalName}`;
    } else if (selectedPortal !== 'all') {
      inquiryMessage = `${portalName} Tender Consultation`;
    } else {
      inquiryMessage = 'Outsourced Bid Management Package';
    }

    onOpenInquiry(inquiryMessage);
  };

  const handleTagClick = (tag) => {
    setSearchKeyword(tag);
    onOpenInquiry(tag);
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-36 overflow-hidden bg-gradient-to-r from-[#009688] via-[#0284C7] to-[#1D4ED8] text-white">
      {/* Background Mesh, Lighting, and Subtle Pattern Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse"></span>
            <span className="tracking-wide">Systematic Approach to Government Operations</span>
            <span className="text-cyan-200">⚡</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-sm">
            Win Government Tenders & GeM Bids Easily Across India
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-50 max-w-3xl mx-auto font-normal leading-relaxed">
            End-to-end bid management, portal registrations, vendor assessment & live reverse auctions. We act as your <strong>dedicated Virtual Bid Manager</strong> with zero internal department overhead.
          </p>
        </div>

        {/* Central Interactive Search / Filter Capsule (Inspired by Reference Design) */}
        <div className="max-w-3xl mx-auto mb-8">
          <form 
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-2xl shadow-blue-950/30 border border-white/50 flex flex-col sm:flex-row items-center gap-2"
          >
            {/* Portal Selection Dropdown */}
            <div className="relative w-full sm:w-auto flex-shrink-0">
              <select
                value={selectedPortal}
                onChange={(e) => setSelectedPortal(e.target.value)}
                className="w-full sm:w-auto appearance-none bg-slate-100/80 hover:bg-slate-200/80 text-slate-800 text-xs sm:text-sm font-bold py-2.5 px-4 pr-9 rounded-xl sm:rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-colors"
                aria-label="Select Portal"
              >
                {portalOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Keyword Input Field */}
            <div className="relative flex-grow w-full">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Type keyword e.g. cpwd, gem assessment, boq costing, railways..."
                className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 px-3.5 py-2.5 bg-transparent border-0 focus:outline-none"
              />
              {searchKeyword && (
                <button
                  type="button"
                  onClick={() => setSearchKeyword('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Search / Inquire Action Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full bg-gradient-to-r from-teal-500 via-emerald-600 to-teal-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search Services</span>
            </button>
          </form>

          {/* Quick Trending Tags */}
          <div className="pt-3.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs">
            <span className="font-semibold text-cyan-100 mr-1 text-[11px] sm:text-xs">Trending:</span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white text-[11px] font-medium transition-all hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Stat Counters on the Gradient (Matching Reference Presentation) */}
        <div className="max-w-4xl mx-auto pt-6 pb-8 sm:pb-12 border-t border-white/20 mt-8 sm:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                10+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-100">
                Years Advisory Expertise
              </div>
              <div className="text-[11px] text-cyan-200/80 hidden sm:block">
                In Public Tendering
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                15+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-100">
                Scope of Services
              </div>
              <div className="text-[11px] text-cyan-200/80 hidden sm:block">
                Pre-Bid to EMD Refund
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-100">
                CVC & GFR Compliant
              </div>
              <div className="text-[11px] text-cyan-200/80 hidden sm:block">
                Statutory Regulatory Standard
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                Pan-India
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-100">
                GeM, CPPP & PSUs
              </div>
              <div className="text-[11px] text-cyan-200/80 hidden sm:block">
                Railways, State & Global
              </div>
            </div>

          </div>
        </div>

        {/* Floating Promotional & Consultation Ribbon (Matching Reference Bottom Ribbon) */}
        <div className="max-w-4xl mx-auto -mb-28 sm:-mb-32 lg:-mb-36 relative z-20 pt-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl shadow-slate-900/15 border border-slate-200/90 text-slate-800 flex flex-col md:flex-row items-center justify-between gap-5 transition-all">
            
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Complimentary Bid Feasibility Review</span>
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">
                FREE Tender Strategy & Feasibility Audit for Your Firm!
              </h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-slate-600 pt-0.5">
                <span className="flex items-center text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" />
                  GeM & Portal Eligibility Check
                </span>
                <span className="flex items-center text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" />
                  BOQ Rate Strategy Advice
                </span>
                <span className="flex items-center text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" />
                  Zero Fixed Overhead
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onOpenInquiry('Free Tender Strategy & Feasibility Audit')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all hover:scale-105 flex items-center justify-center space-x-1.5 whitespace-nowrap"
              >
                <span>Claim Free Audit</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
