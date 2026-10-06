import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: '13 Core Services', href: '#services' },
    { name: 'Portals & PSUs', href: '#portals' },
    { name: 'Bidding Process', href: '#workflow' },
    { name: 'Compliance & FAQs', href: '#compliance' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#070D1E]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-[#070D1E]/70 backdrop-blur-sm border-b border-slate-800/30 py-4'
    }`}>
      {/* Top micro bar for statutory & quick contact */}
      <div className="hidden lg:block border-b border-slate-800/60 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center space-x-5">
            <span className="flex items-center text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-cyan-400" />
              <span>GSTIN: <strong className="text-white font-mono tracking-wider">{COMPANY_INFO.gstin}</strong></span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-medium">Systematic Approach to Government Operations</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-medium">● GeM, CPPP & PSU Empanelment Advisors</span>
          </div>
          <div className="flex items-center space-x-5">
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center hover:text-cyan-400 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-1 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-500">|</span>
            <div className="flex items-center space-x-2 text-slate-300 font-medium">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-cyan-400 transition-colors">
                {COMPANY_INFO.phone}
              </a>
              <span>/</span>
              <a href={`tel:${COMPANY_INFO.altPhoneRaw}`} className="hover:text-cyan-400 transition-colors">
                {COMPANY_INFO.altPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-cyan-500/30 p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 transition-colors">
                <img 
                  src="/logo.png" 
                  alt="D Nandani Tech Solutions Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-40 blur transition duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-tight">
                D NANDANI <span className="text-cyan-400">TECH</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase font-semibold">
                Government Tender & GeM Advisors
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
            >
              <span>Get Tender Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenInquiry}
              className="px-2.5 py-1.5 text-xs font-bold text-slate-900 bg-cyan-400 rounded-md"
            >
              Proposal
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C1733] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 mb-4 text-xs space-y-1">
            <div className="flex items-center text-cyan-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              GSTIN: <span className="font-mono text-white ml-1">{COMPANY_INFO.gstin}</span>
            </div>
            <div className="text-slate-400">Systematic Approach to Government Operations</div>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-400 text-sm font-medium py-1.5 border-b border-slate-800/40"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col space-y-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700 hover:bg-slate-700"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-cyan-400" />
              Call: {COMPANY_INFO.phone}
            </a>
            <a
              href={`tel:${COMPANY_INFO.altPhoneRaw}`}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700 hover:bg-slate-700"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-cyan-400" />
              Call: {COMPANY_INFO.altPhone}
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              Direct WhatsApp Proposal
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs"
            >
              Request Free Tender Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
