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

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#00A896] via-[#0284C7] to-[#1D4ED8] text-white overflow-hidden shadow-2xl">
      {/* Subtle background glow for texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Company Profile & Dual Offices (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Company Branding */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md p-1.5 border border-white/20 flex items-center justify-center shadow-md">
                <img src="/logo.png" alt="D Nandani Tech Solutions" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  D Nandani Tech Solutions
                </h3>
                <p className="text-[11px] text-cyan-100 font-semibold uppercase tracking-wider">
                  Systematic Approach to Government Operations
                </p>
              </div>
            </div>

            {/* Head Office */}
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                <span>Head Office</span>
              </h4>
              <p className="text-sm text-cyan-50 font-medium leading-relaxed max-w-md">
                {COMPANY_INFO.headOffice || "Begusarai, Bihar, 851130"}
              </p>
            </div>

            {/* Sales Office */}
            <div className="space-y-1 pt-1">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                <span>Sales Office</span>
              </h4>
              <p className="text-sm text-cyan-50 font-medium leading-relaxed max-w-md">
                {COMPANY_INFO.salesOffice || "F-171A/2, Ground Floor, F Block, Gali No.17, Ayanagar Extn, PH-6, Delhi 110047"}
              </p>
            </div>

            {/* Circular Social Buttons & WhatsApp Connect */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#0284C7] flex items-center justify-center hover:bg-cyan-50 hover:scale-110 shadow-md transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#0284C7] flex items-center justify-center hover:bg-cyan-50 hover:scale-110 shadow-md transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#0284C7] flex items-center justify-center hover:bg-cyan-50 hover:scale-110 shadow-md transition-all duration-200"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white text-[#0284C7] flex items-center justify-center hover:bg-cyan-50 hover:scale-110 shadow-md transition-all duration-200"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-all hover:scale-105"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Official GSTIN Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-black/20 border border-white/20 text-xs text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>GSTIN: <strong className="font-mono text-cyan-200">{COMPANY_INFO.gstin}</strong></span>
                <span className="text-white/40">|</span>
                <span className="text-cyan-100">State: Bihar (10)</span>
              </div>
            </div>

          </div>

          {/* Column 2: COMPANY (Real sections on our website) (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm text-cyan-50">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-white hover:underline transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>About Our Advisors</span>
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>13 Core Bidding Services</span>
                </a>
              </li>
              <li>
                <a 
                  href="#portals" 
                  onClick={(e) => handleLinkClick(e, 'portals')}
                  className="hover:text-white hover:underline transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>Portals & PSUs Covered</span>
                </a>
              </li>
              <li>
                <a 
                  href="#workflow" 
                  onClick={(e) => handleLinkClick(e, 'workflow')}
                  className="hover:text-white hover:underline transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>5-Stage Bidding Lifecycle</span>
                </a>
              </li>
              <li>
                <a 
                  href="#compliance" 
                  onClick={(e) => handleLinkClick(e, 'compliance')}
                  className="hover:text-white hover:underline transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>Compliance & FAQs</span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-white hover:underline transition-colors flex items-center group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-cyan-200 group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact Proposal Desk</span>
                </a>
              </li>
            </ul>

            {/* Quick Virtual Bid Manager Callout */}
            <div className="pt-4">
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/20 text-xs space-y-1.5">
                <div className="font-bold text-white flex items-center">
                  <span>Outsourced Bid Management</span>
                </div>
                <p className="text-[11px] text-cyan-100 leading-relaxed">
                  Dedicated virtual department for MSMEs & OEMs without in-house bid managers.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: CORE CAPABILITIES (The actual 13 services offered) (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              CORE SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cyan-50">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  GeM & CPPP Registration
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  UNGM Global Registration
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Vendor Assessment (QCI)
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  BIS License Exemption
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  PSU Empanelment (BHEL, EIL etc)
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  OEM Panel & Brand Setup
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  BOQ Study & Rate Strategy
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Live Reverse Auction (RA)
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  PO & EMD Refund Follow-up
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: DIRECT CONNECT & PROPOSAL DESK (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              PROPOSAL DESK
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-cyan-50">
              {/* Phone 1 */}
              <div>
                <div className="text-[11px] text-cyan-200 uppercase font-semibold">Begusarai HQ:</div>
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="font-bold text-white hover:text-cyan-200 transition-colors flex items-center mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Phone 2 */}
              <div>
                <div className="text-[11px] text-cyan-200 uppercase font-semibold">Delhi Sales Desk:</div>
                <a 
                  href={`tel:${COMPANY_INFO.altPhoneRaw}`} 
                  className="font-bold text-white hover:text-cyan-200 transition-colors flex items-center mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.altPhone}</span>
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="text-[11px] text-cyan-200 uppercase font-semibold">Official Email:</div>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="font-medium text-white hover:text-cyan-200 transition-colors break-all flex items-center mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-1.5 text-[11px] text-cyan-100 pt-1">
                <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Request Proposal Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Full 13-Service Outsourced Bid Manager Package')}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white text-[#0284C7] hover:bg-cyan-50 font-bold text-xs shadow-lg transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5 mr-1.5" />
                <span>Request Proposal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Statutory Summary & Copyright */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cyan-50">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-white">
              © {new Date().getFullYear()} D NANDANI TECH SOLUTIONS. All Rights Reserved.
            </p>
            <p className="text-[11px] text-cyan-100/90">
              Begusarai (Bihar) • Delhi NCR • Pan-India Government Tender Advisory & Bid Processing Management.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-[11px] text-cyan-100">
              ⚡ Systematic Approach to Government Operations
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0284C7] border border-white/30 transition-all shadow-md group"
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
