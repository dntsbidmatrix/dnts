import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  ArrowUp, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Send,
  ChevronRight
} from 'lucide-react';

// Custom Brand SVGs for the circular social buttons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer({ onOpenInquiry, currentRoute = 'home', onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (currentRoute === 'about') {
      if (onNavigate) {
        onNavigate('/', targetId);
      }
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/about');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FEF9C3] via-[#FEF08A] to-[#FDE047] text-slate-900 overflow-hidden shadow-2xl border-t-2 border-yellow-400">
      {/* Subtle background glow for texture */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FACC15]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Company Profile & Dual Offices (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Company Branding */}
            <div 
              onClick={() => {
                if (currentRoute === 'about' && onNavigate) {
                  onNavigate('/');
                } else {
                  scrollToTop();
                }
              }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center drop-shadow-md group-hover:scale-105 transition-transform overflow-hidden ring-1 ring-yellow-400 shadow-sm">
                <img src="/logo.png" alt="D Nandani Tech Solutions" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 drop-shadow-sm group-hover:text-[#78350F] transition-colors">
                  D Nandani Tech Solutions
                </h3>
                <p className="text-[11px] text-[#854D0E] font-bold uppercase tracking-wider">
                  Systematic Approach to Government Operations
                </p>
              </div>
            </div>

            {/* Head Office */}
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#78350F] uppercase tracking-wider flex items-center">
                <span>Head Office</span>
              </h4>
              <p className="text-sm text-slate-800 font-medium leading-relaxed max-w-md">
                {COMPANY_INFO.headOffice || "Begusarai, Bihar, 851130"}
              </p>
            </div>

            {/* Sales Office */}
            <div className="space-y-1 pt-1">
              <h4 className="text-sm font-bold text-[#78350F] uppercase tracking-wider flex items-center">
                <span>Sales Office</span>
              </h4>
              <p className="text-sm text-slate-800 font-medium leading-relaxed max-w-md">
                {COMPANY_INFO.salesOffice || "F-171A/2, Ground Floor, F Block, Gali No.17, Ayanagar Extn, PH-6, Delhi 110047"}
              </p>
            </div>

            {/* Circular Social Buttons & WhatsApp Connect */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/80 text-slate-800 flex items-center justify-center hover:bg-slate-950 hover:text-yellow-300 hover:scale-110 shadow-sm border border-yellow-300 transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/80 text-slate-800 flex items-center justify-center hover:bg-slate-950 hover:text-yellow-300 hover:scale-110 shadow-sm border border-yellow-300 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/80 text-slate-800 flex items-center justify-center hover:bg-slate-950 hover:text-yellow-300 hover:scale-110 shadow-sm border border-yellow-300 transition-all duration-200"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/80 text-slate-800 flex items-center justify-center hover:bg-slate-950 hover:text-yellow-300 hover:scale-110 shadow-sm border border-yellow-300 transition-all duration-200"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-slate-950 text-[#713F12] hover:text-yellow-300 border border-yellow-400 text-xs font-bold shadow-sm transition-all hover:scale-105"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Official GSTIN Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/80 border border-yellow-300 text-xs text-slate-800 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#CA8A04]" />
                <span>GSTIN: <strong className="font-mono text-[#78350F] font-bold">{COMPANY_INFO.gstin}</strong></span>
                <span className="text-yellow-400">|</span>
                <span className="text-slate-600">State: Bihar (10)</span>
              </div>
            </div>

          </div>

          {/* Column 2: COMPANY (Real sections on our website) (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#78350F]">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-800">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors flex items-center group font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#A16207] group-hover:translate-x-0.5 transition-transform" />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a 
                  href="#portals" 
                  onClick={(e) => handleLinkClick(e, 'portals')}
                  className="hover:text-[#78350F] hover:underline transition-colors flex items-center group font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#A16207] group-hover:translate-x-0.5 transition-transform" />
                  <span>Portals & PSUs Covered</span>
                </a>
              </li>
              <li>
                <a 
                  href="#workflow" 
                  onClick={(e) => handleLinkClick(e, 'workflow')}
                  className="hover:text-[#78350F] hover:underline transition-colors flex items-center group font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#A16207] group-hover:translate-x-0.5 transition-transform" />
                  <span>5-Stage Bidding Lifecycle</span>
                </a>
              </li>
              <li>
                <a 
                  href="#compliance" 
                  onClick={(e) => handleLinkClick(e, 'compliance')}
                  className="hover:text-[#78350F] hover:underline transition-colors flex items-center group font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#A16207] group-hover:translate-x-0.5 transition-transform" />
                  <span>Compliance & FAQs</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-[#78350F] hover:underline transition-colors flex items-center group font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#A16207] group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact Proposal Desk</span>
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={handleAboutClick}
                  className={`hover:text-[#78350F] hover:underline transition-colors flex items-center group font-medium ${
                    currentRoute === 'about' ? 'text-[#78350F] font-bold' : ''
                  }`}
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#A16207] group-hover:translate-x-0.5 transition-transform" />
                  <span>About Us</span>
                </a>
              </li>
            </ul>

            {/* Quick Virtual Bid Manager Callout */}
            <div className="pt-4">
              <div className="p-3.5 rounded-xl bg-white/80 border border-yellow-300 text-xs space-y-1.5 shadow-sm">
                <div className="font-bold text-slate-900 flex items-center">
                  <span>Outsourced Bid Management</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed font-normal">
                  Dedicated virtual department for MSMEs & OEMs without in-house bid managers.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: CORE CAPABILITIES (Our services offered) (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#78350F]">
              CORE SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  GEM & NON-GEM Registration/Bid Management
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  UNGM Registration/RFQ Management
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  Vendor Assessment
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  Vendor Exemption
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  PSUs Empanelment (BHEL, EIL etc)
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  OEM Panel and OEM Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  BOQ Study & Rate Strategy
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  Live Reverse & Forward Auction
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-[#78350F] hover:underline transition-colors block font-medium"
                >
                  Contract Management
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: DIRECT CONNECT & PROPOSAL DESK (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#78350F]">
              PROPOSAL DESK
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-800">
              {/* Phone 1 */}
              <div>
                <div className="text-[11px] text-[#854D0E] uppercase font-bold">Begusarai HQ:</div>
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="font-bold text-slate-900 hover:text-[#78350F] transition-colors flex items-center mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-[#A16207]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Phone 2 */}
              <div>
                <div className="text-[11px] text-[#854D0E] uppercase font-bold">Delhi Sales Desk:</div>
                <a 
                  href={`tel:${COMPANY_INFO.altPhoneRaw}`} 
                  className="font-bold text-slate-900 hover:text-[#78350F] transition-colors flex items-center mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-[#A16207]" />
                  <span>{COMPANY_INFO.altPhone}</span>
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="text-[11px] text-[#854D0E] uppercase font-bold">Official Email:</div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="font-bold text-slate-900 hover:text-[#78350F] transition-colors break-all flex items-center mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-[#A16207]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-1.5 text-[11px] text-slate-700 pt-1 font-medium">
                <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#A16207]" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Request Proposal Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Our Outsourced Bid Manager Package')}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-yellow-300 hover:text-white font-black text-xs shadow-xl shadow-slate-950/20 border border-yellow-400/40 transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5 mr-1.5 text-yellow-400" />
                <span>Request Proposal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Statutory Summary & Copyright */}
        <div className="mt-14 pt-6 pb-2 border-t border-yellow-400/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700 bg-yellow-400/20 px-4 sm:px-6 rounded-2xl">
          <div className="text-center md:text-left space-y-1">
            <p className="font-bold text-slate-900">
              © {new Date().getFullYear()} D NANDANI TECH SOLUTIONS. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-700">
              Begusarai (Bihar) • Delhi NCR • Pan-India Government Tender Advisory & Bid Processing Management.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-[11px] text-slate-800 font-semibold">
              ⚡ Systematic Approach to Government Operations
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/80 hover:bg-slate-950 hover:text-yellow-300 text-slate-800 border border-yellow-300 transition-all shadow-sm group"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
