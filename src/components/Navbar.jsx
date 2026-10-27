import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck, Mail, Home as HomeIcon } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onOpenInquiry, currentRoute = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !isScrolled && currentRoute === 'home';

  const homeNavLinks = [
    { name: 'Our Services', href: '#services', targetId: 'services' },
    { name: 'Portals', href: '#portals', targetId: 'portals' },
    { name: 'Process', href: '#workflow', targetId: 'workflow' },
    { name: 'Compliance', href: '#compliance', targetId: 'compliance' },
    { name: 'Contact', href: '#contact', targetId: 'contact' }
  ];

  const aboutNavLinks = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Our Services', href: '/#services', targetId: 'services' },
    { name: 'Portals', href: '/#portals', targetId: 'portals' },
    { name: 'Process', href: '/#workflow', targetId: 'workflow' },
    { name: 'Compliance', href: '/#compliance', targetId: 'compliance' },
    { name: 'Contact', href: '/#contact', targetId: 'contact' }
  ];

  const navLinks = currentRoute === 'about' ? aboutNavLinks : homeNavLinks;

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.isHome) {
      if (onNavigate) {
        onNavigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (currentRoute === 'about') {
      if (onNavigate) {
        onNavigate('/', link.targetId);
      }
    } else {
      const elem = document.getElementById(link.targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (currentRoute === 'about') {
      if (onNavigate) onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5 text-slate-800">
      {/* Top micro bar for statutory & quick contact */}
      <div className="hidden lg:block border-b border-slate-200/80 bg-slate-50 text-slate-600 pb-2 mb-2 -mt-1 pt-1.5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs whitespace-nowrap">
          <div className="flex items-center space-x-3 xl:space-x-4">
            <span className="flex items-center font-semibold text-blue-700">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-blue-600" />
              <span>GSTIN: <strong className="font-mono tracking-wider text-slate-900">{COMPANY_INFO.gstin}</strong></span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="font-medium hidden xl:inline text-slate-700">
              Systematic Approach to Government Operations
            </span>
            <span className="text-slate-300 hidden xl:inline">|</span>
            <span className="font-semibold flex items-center px-2 py-0.5 rounded-full border text-[11px] text-emerald-700 bg-emerald-50 border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              GeM, CPPP, UNGM & PSUs Advisors
            </span>
          </div>

          <div className="flex items-center space-x-3 xl:space-x-4">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center transition-colors hover:text-blue-600 text-slate-700"
            >
              <Mail className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-blue-600" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-300">|</span>
            <div className="flex items-center space-x-1.5 font-medium text-slate-700">
              <Phone className="w-3.5 h-3.5 flex-shrink-0 text-blue-600" />
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="transition-colors hover:text-blue-600"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <a 
            href="/" 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center overflow-hidden drop-shadow-md group-hover:scale-105 transition-transform ring-1 ring-slate-200">
                <img 
                  src="/logo.png" 
                  alt="BidMatrix Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base xl:text-lg tracking-tight transition-colors leading-tight whitespace-nowrap text-slate-900 group-hover:text-blue-600">
                Bid<span className="text-blue-600">Matrix</span>
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-xs tracking-wider uppercase font-semibold whitespace-nowrap text-slate-500">
                Tender Bidding & GeM Advisors
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-xs xl:text-sm font-semibold transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 whitespace-nowrap ${
                  link.isHome
                    ? 'text-blue-600 font-bold flex items-center after:bg-blue-600'
                    : 'text-slate-700 hover:text-blue-600 after:bg-blue-600'
                }`}
              >
                {link.isHome && <HomeIcon className="w-3.5 h-3.5 mr-1" />}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-2.5 xl:space-x-3 flex-shrink-0 pl-2 lg:pl-4 border-l border-slate-200">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-all shadow-sm whitespace-nowrap text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-emerald-600 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="relative inline-flex items-center justify-center px-3.5 xl:px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35"
            >
              <span>Get Tender Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5] flex-shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenInquiry}
              className="px-2.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap bg-blue-600 text-white"
            >
              Proposal
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isTransparent 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 shadow-xl text-slate-800">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 mb-4 text-xs space-y-1">
            <div className="flex items-center text-blue-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              GSTIN: <span className="font-mono text-slate-900 ml-1">{COMPANY_INFO.gstin}</span>
            </div>
            <div className="text-slate-500">Systematic Approach to Government Operations</div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium py-2 border-b border-slate-100 flex items-center ${
                  link.isHome 
                    ? 'text-blue-600 font-bold' 
                    : 'text-slate-800 hover:text-blue-600'
                }`}
              >
                {link.isHome && <HomeIcon className="w-4 h-4 mr-1.5" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col space-y-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 hover:bg-slate-200"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-blue-600" />
              Call: {COMPANY_INFO.phone}
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-300"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              Direct WhatsApp Proposal
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs shadow-md"
            >
              Request Free Tender Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
