import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  ArrowUp, 
  X, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Download, 
  MessageSquare, 
  Phone 
} from 'lucide-react';

// Custom Brand SVGs matching official social icon designs
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

const AppleIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.03-.49 2.65-1.24z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.597 1.597 0 0 1-.61-.716 1.63 1.63 0 0 1-.1-.77V3.3a1.644 1.644 0 0 1 .1-.77 1.6 1.6 0 0 1 .609-.716zm11.248 11.251l2.454 2.454-12.38 7.151 9.926-9.605zm2.454-2.454l-2.454 2.454-9.926-9.605 12.38 7.151zm1.065 1.065l3.228 1.865a1.18 1.18 0 0 1 0 2.046l-3.228 1.865-1.989-1.989 1.989-1.787z"/>
  </svg>
);

export default function Footer({ onOpenInquiry }) {
  const [activeModal, setActiveModal] = useState(null); // 'terms' | 'privacy' | 'app' | 'media'

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
        {/* Main 4-Column Grid exactly matching the design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Company Name & Offices (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Company Title */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md p-1.5 border border-white/20 flex items-center justify-center shadow-md">
                <img src="/logo.png" alt="D Nandani Tech Solutions" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
                D Nandani Tech Solutions
              </h3>
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

            {/* Social Media & Contact Circular Buttons */}
            <div className="pt-2 flex items-center space-x-3">
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

              {/* Direct WhatsApp Pill */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-all hover:scale-105 ml-2"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY & MOBILE APPS (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                COMPANY
              </h4>
              <ul className="space-y-2 text-sm text-cyan-50">
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleLinkClick(e, 'about')}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('news')}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    News & Updates
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('blogs')}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    Blogs & Articles
                  </button>
                </li>
                <li>
                  <a 
                    href="#compliance" 
                    onClick={(e) => handleLinkClick(e, 'compliance')}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Answers & FAQs
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleLinkClick(e, 'contact')}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('media')}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    Download Media Kit
                  </button>
                </li>
              </ul>
            </div>

            {/* MOBILE APPS Sub-section */}
            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                MOBILE APPS
              </h4>

              <div className="flex flex-col space-y-2.5 max-w-[170px]">
                {/* App Store Button with 4.6 Stars Badge */}
                <div className="space-y-1">
                  <button
                    onClick={() => setActiveModal('app')}
                    className="w-full bg-black hover:bg-neutral-900 text-white rounded-lg px-3 py-1.5 flex items-center space-x-2.5 border border-white/20 shadow-md transition-all transform hover:scale-[1.02]"
                  >
                    <AppleIcon />
                    <div className="text-left leading-tight">
                      <div className="text-[9px] uppercase tracking-wider text-neutral-300">Download on the</div>
                      <div className="text-xs font-bold text-white tracking-tight">App Store</div>
                    </div>
                  </button>
                  
                  {/* Rating Tag */}
                  <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-white/95 text-slate-800 text-[10px] font-bold shadow-sm">
                    <span>4.6</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                </div>

                {/* Google Play Button */}
                <button
                  onClick={() => setActiveModal('app')}
                  className="w-full bg-black hover:bg-neutral-900 text-white rounded-lg px-3 py-1.5 flex items-center space-x-2.5 border border-white/20 shadow-md transition-all transform hover:scale-[1.02]"
                >
                  <GooglePlayIcon />
                  <div className="text-left leading-tight">
                    <div className="text-[9px] uppercase tracking-wider text-neutral-300">GET IT ON</div>
                    <div className="text-xs font-bold text-white tracking-tight">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: POLICIES (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              POLICIES
            </h4>
            <ul className="space-y-2 text-sm text-cyan-50">
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('refund')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Refund & EMD Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('confidentiality')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Bid Confidentiality
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: SUPPORT (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              SUPPORT
            </h4>
            <ul className="space-y-2 text-sm text-cyan-50">
              <li>
                <a 
                  href="#compliance" 
                  onClick={(e) => handleLinkClick(e, 'compliance')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry('Tender Advisory Pricing & Plans')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  GEM & Bid Advisory
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry('Request Virtual Bid Manager Demo')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Request Demo
                </button>
              </li>
              <li>
                <a 
                  href="#workflow" 
                  onClick={(e) => handleLinkClick(e, 'workflow')}
                  className="hover:text-white hover:underline transition-colors block"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Statutory Disclaimer & Copyright */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cyan-50">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-white">
              © {new Date().getFullYear()} D NANDANI TECH SOLUTIONS. All Rights Reserved.
            </p>
            <p className="text-[11px] text-cyan-100/80">
              Statutory Taxpayer Identification: <span className="font-mono font-bold text-white">GSTIN {COMPANY_INFO.gstin}</span> • State Code: 10 (Bihar) & Delhi NCR Regional Office
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-[11px] text-cyan-100">
              Systematic Approach to Government Operations
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

      {/* Interactive Modals for Policies & Downloads */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                {activeModal === 'terms' && <span>Terms of Use — D Nandani Tech Solutions</span>}
                {activeModal === 'privacy' && <span>Privacy Policy & Data Security</span>}
                {activeModal === 'refund' && <span>Refund & EMD Assistance Policy</span>}
                {activeModal === 'confidentiality' && <span>Bid Confidentiality & NDA Framework</span>}
                {activeModal === 'app' && <span>D Nandani Bid Matrix — Mobile App</span>}
                {activeModal === 'media' && <span>Company Profile & Official Media Kit</span>}
                {activeModal === 'news' && <span>Government Procurement News & Circulars</span>}
                {activeModal === 'blogs' && <span>Government Tendering Articles & Insights</span>}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-4">
              {activeModal === 'terms' && (
                <>
                  <p>
                    <strong>1. Scope of Services:</strong> D Nandani Tech Solutions provides professional bid processing management, GeM onboarding, CPPP/UNGM registration, tender document study, BOQ analysis, and reverse auction consultancy as an outsourced advisory firm.
                  </p>
                  <p>
                    <strong>2. Client Responsibilities:</strong> The client is solely responsible for the authenticity, legality, and accuracy of company credentials, DSC tokens, financial balance sheets, and technical certifications provided for bid preparation.
                  </p>
                  <p>
                    <strong>3. Public Procurement Decisions:</strong> All tender evaluations and awards rest exclusively with the relevant government procuring authority. D Nandani Tech Solutions provides strategic preparation and execution support but does not guarantee tender award outcomes.
                  </p>
                </>
              )}

              {activeModal === 'privacy' && (
                <>
                  <p>
                    <strong>1. Confidentiality of Client Data:</strong> We maintain strict confidentiality regarding client financial statements, margin structures, proprietary pricing, and Digital Signature Certificates (DSC Class-3).
                  </p>
                  <p>
                    <strong>2. Zero Data Sharing:</strong> Your bidding documents, product catalogues, and commercial bids are never shared with competitor bidders or third-party organizations.
                  </p>
                  <p>
                    <strong>3. Data Retention:</strong> Client credentials and tender files are stored in secure encrypted storage and used solely for authorized bid submission activities on Government portals.
                  </p>
                </>
              )}

              {activeModal === 'refund' && (
                <>
                  <p>
                    <strong>1. EMD (Earnest Money Deposit) Retrieval:</strong> For non-L1 bids or cancelled tenders, our team provides proactive follow-up with the procuring officer/portal finance desk to ensure prompt release of your bank guarantee or FDR.
                  </p>
                  <p>
                    <strong>2. Professional Retainer Fees:</strong> Advisory and preparation fees cover dedicated time and expert bid analysis. Retainer arrangements are governed by individual service agreements executed prior to bid submission.
                  </p>
                </>
              )}

              {activeModal === 'confidentiality' && (
                <>
                  <p>
                    All strategic tender advisory engagements are covered under our Non-Disclosure framework. We ensure that pricing intelligence, OEM authorisation letters, and BOQ costing remain strictly confidential between our advisors and your management.
                  </p>
                </>
              )}

              {activeModal === 'app' && (
                <div className="text-center py-4 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600">
                    <AppleIcon />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Mobile Companion App Coming Soon!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    The <strong>D Nandani Bid Matrix</strong> mobile app for iOS and Android is currently in development. You will soon receive instant tender notifications, reverse auction alerts, and L1 updates directly on your phone.
                  </p>
                  <div className="pt-2">
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 mr-1.5" />
                      <span>Get Instant Updates on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {activeModal === 'media' && (
                <div className="space-y-3">
                  <p>
                    Download our official Corporate Profile and Bid Processing Scope of Work dossier:
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">D Nandani Tech Solutions — Scope of Work & Services</div>
                      <div className="text-xs text-slate-500">Official 13-Point Virtual Bid Manager Proposal</div>
                    </div>
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        if (onOpenInquiry) onOpenInquiry('Proposal / Media Kit Request');
                      }}
                      className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow"
                    >
                      <Download className="w-4 h-4" />
                      <span>Request Kit</span>
                    </button>
                  </div>
                </div>
              )}

              {(activeModal === 'news' || activeModal === 'blogs') && (
                <div className="space-y-3">
                  <p>
                    We actively track amendments across General Financial Rules (GFR), CVC guidelines, GeM Incident Management policies, and UNGM global tenders.
                  </p>
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900 space-y-1.5">
                    <div className="font-bold">Latest Tender Advisory Circulars:</div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>Mandatory QCI Vendor Assessment guidelines on GeM for OEM catalogue uploads.</li>
                      <li>BIS license exemption application procedures for MSME manufacturers.</li>
                      <li>IREPS (Indian Railways) e-Reverse Auction rule updates.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
}
