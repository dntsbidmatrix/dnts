import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A17] text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand & Statutory Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 p-1.5 flex items-center justify-center">
                <img src="/logo.png" alt="D Nandani Tech Solutions" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  D NANDANI <span className="text-cyan-400">TECH</span>
                </span>
                <div className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">
                  Solutions • Begusarai, Bihar
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              <strong>Systematic Approach to Government Operations.</strong> End-to-end bid processing management services for Government tenders on GeM, CPPP, UNGM, and PSUs (BHEL, EIL & Indian Railways etc).
            </p>

            {/* Official GSTIN Box */}
            <div className="p-3.5 rounded-xl bg-[#0C1733] border border-cyan-500/30 max-w-sm">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Taxpayer Identification (GSTIN)</span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="font-mono text-cyan-300 font-bold text-sm tracking-wider">
                {COMPANY_INFO.gstin}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex justify-between">
                <span>State: Bihar</span>
                <span>Code: 10</span>
              </div>
            </div>

          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Our Advisors</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">13 Core Services</a></li>
              <li><a href="#portals" className="hover:text-cyan-400 transition-colors">Portals & PSUs Covered</a></li>
              <li><a href="#workflow" className="hover:text-cyan-400 transition-colors">Bidding Lifecycle</a></li>
              <li><a href="#compliance" className="hover:text-cyan-400 transition-colors">Governance & FAQs</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Proposal Desk</a></li>
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-300">GeM, CPPP & UNGM Registration</span></li>
              <li><span className="text-slate-300">Vendor Assessment (QCI)</span></li>
              <li><span className="text-slate-300">BIS Assessment Exemption</span></li>
              <li><span className="text-slate-300">PSU Empanelment (BHEL, EIL & Indian Railways etc)</span></li>
              <li><span className="text-slate-300">OEM Panel & Brand Approval</span></li>
              <li><span className="text-slate-300">Live Reverse Auction (RA)</span></li>
              <li><span className="text-slate-300">L1 PO & EMD Refund Follow-up</span></li>
            </ul>
          </div>

          {/* Column 5: Direct Official Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Strategy Desk
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Begusarai, Bihar, India</span>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-200 hover:text-cyan-300 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 pl-6">
                  <a href={`tel:${COMPANY_INFO.altPhoneRaw}`} className="text-slate-200 hover:text-cyan-300 transition-colors">
                    {COMPANY_INFO.altPhone}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-cyan-300 transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} <strong>D NANDANI TECH SOLUTIONS</strong>. All Rights Reserved.
            <div className="text-[11px] text-slate-500 mt-0.5">
              Tender bidding & procurement strategy advisory. All portal trademarks (GeM, CPPP, UNGM, IREPS, BHEL, EIL etc) belong to respective authorities.
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              ⚡ Systematic Approach
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
