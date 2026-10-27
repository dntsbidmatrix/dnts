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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1C2C23]/95 backdrop-blur-md border-b border-[#3A5A40]/50 shadow-md py-2.5 text-white">
      {/* Top micro bar for statutory & quick contact */}
      <div className="hidden lg:block border-b border-[#3A5A40]/40 bg-[#16231C] text-[#C2D6C4] pb-2 mb-2 -mt-1 pt-1.5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs whitespace-nowrap">
          <div className="flex items-center space-x-3 xl:space-x-4">
            <span className="flex items-center font-semibold text-[#BBD58E]">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-[#BBD58E]" />
              <span>GSTIN: <strong className="font-mono tracking-wider text-white">{COMPANY_INFO.gstin}</strong></span>
            </span>
            <span className="text-[#3A5A40]">|</span>
            <span className="font-medium hidden xl:inline text-[#D4E4D6]">
              Systematic Approach to Government Operations
            </span>
            <span className="text-[#3A5A40] hidden xl:inline">|</span>
            <span className="font-semibold flex items-center px-2 py-0.5 rounded-full border text-[11px] text-[#BBD58E] bg-[#344E41]/70 border-[#588157]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BBD58E] mr-1.5 animate-pulse"></span>
              GeM, CPPP, UNGM & PSUs Advisors
            </span>
          </div>

          <div className="flex items-center space-x-3 xl:space-x-4">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center transition-colors hover:text-[#BBD58E] text-[#D4E4D6]"
            >
              <Mail className="w-3.5 h-3.5 mr-1 flex-shrink-0 text-[#BBD58E]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-[#3A5A40]">|</span>
            <div className="flex items-center space-x-1.5 font-medium text-[#D4E4D6]">
              <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#BBD58E]" />
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="transition-colors hover:text-[#BBD58E]"
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
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center overflow-hidden drop-shadow-md group-hover:scale-105 transition-transform ring-1 ring-[#588157]/40">
                <img 
                  src="/logo.png" 
                  alt="BidMatrix Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base xl:text-lg tracking-tight transition-colors leading-tight whitespace-nowrap text-white group-hover:text-[#BBD58E]">
                Bid<span className="text-[#BBD58E]">Matrix</span>
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-xs tracking-wider uppercase font-semibold whitespace-nowrap text-[#A2BAA5]">
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
                    ? 'text-[#BBD58E] font-bold flex items-center after:bg-[#BBD58E]'
                    : 'text-[#D4E4D6] hover:text-[#BBD58E] after:bg-[#BBD58E]'
                }`}
              >
                {link.isHome && <HomeIcon className="w-3.5 h-3.5 mr-1" />}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-2.5 xl:space-x-3 flex-shrink-0 pl-2 lg:pl-4 border-l border-[#3A5A40]/50">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-semibold transition-all shadow-sm whitespace-nowrap text-[#BBD58E] bg-[#344E41] border border-[#588157]/50 hover:bg-[#3A5A40]"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-[#BBD58E] fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="relative inline-flex items-center justify-center px-3.5 xl:px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap text-[#1C2C23] bg-gradient-to-r from-[#BBD58E] via-[#D8ECB6] to-[#A8C974] hover:from-[#C7E09E] hover:to-[#B4D381] shadow-md shadow-[#1C2C23]/40"
            >
              <span>Get Tender Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5] flex-shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenInquiry}
              className="px-2.5 py-1.5 text-xs font-bold rounded-md whitespace-nowrap bg-[#BBD58E] text-[#1C2C23]"
            >
              Proposal
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none text-white hover:bg-white/10"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C2C23] border-b border-[#3A5A40]/60 px-4 pt-4 pb-6 mt-3 shadow-2xl text-white">
          <div className="p-3 bg-[#24362C] rounded-lg border border-[#3A5A40] mb-4 text-xs space-y-1">
            <div className="flex items-center text-[#BBD58E] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              GSTIN: <span className="font-mono text-white ml-1">{COMPANY_INFO.gstin}</span>
            </div>
            <div className="text-[#A2BAA5]">Systematic Approach to Government Operations</div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium py-2 border-b border-[#3A5A40]/40 flex items-center ${
                  link.isHome 
                    ? 'text-[#BBD58E] font-bold' 
                    : 'text-[#D4E4D6] hover:text-[#BBD58E]'
                }`}
              >
                {link.isHome && <HomeIcon className="w-4 h-4 mr-1.5 text-[#BBD58E]" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#3A5A40]/60 flex flex-col space-y-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#24362C] text-white text-xs font-semibold border border-[#3A5A40] hover:bg-[#344E41]"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#BBD58E]" />
              Call: {COMPANY_INFO.phone}
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#344E41] text-[#BBD58E] text-xs font-semibold border border-[#588157]/40"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-2" />
              Direct WhatsApp Proposal
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#BBD58E] via-[#D8ECB6] to-[#A8C974] text-[#1C2C23] font-bold text-xs shadow-md"
            >
              Request Free Tender Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
