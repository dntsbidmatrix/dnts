import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Services from './components/Services';
import PortalsCovered from './components/PortalsCovered';
import TenderWorkflow from './components/TenderWorkflow';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import TenderInquiryModal from './components/TenderInquiryModal';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Our Outsourced Bid Manager Package');

  // Helper to determine route from current browser URL & hash
  const getRouteFromLocation = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (
      path === '/about' || 
      path === '/about-us' || 
      path.startsWith('/about/') || 
      hash === '#about' || 
      hash === '#/about' || 
      hash === '#about-us'
    ) {
      return 'about';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromLocation);

  // Sync state on browser back/forward or hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const nextRoute = getRouteFromLocation();
      setCurrentRoute(nextRoute);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenInquiry = (serviceName) => {
    if (typeof serviceName === 'string') {
      setSelectedService(serviceName);
    }
    setIsInquiryOpen(true);
  };

  const handleNavigate = (path, targetId) => {
    if (path === '/about' || path === 'about') {
      if (window.location.pathname !== '/about') {
        window.history.pushState(null, '', '/about');
      }
      setCurrentRoute('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigating to Home
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', targetId ? `/#${targetId}` : '/');
      } else if (targetId) {
        window.history.replaceState(null, '', `/#${targetId}`);
      } else {
        window.history.replaceState(null, '', '/');
      }
      setCurrentRoute('home');

      if (targetId) {
        setTimeout(() => {
          const elem = document.getElementById(targetId);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Header */}
      <Navbar 
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry('General Tender Inquiry')} 
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentRoute === 'about' ? (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        ) : (
          <>
            <Hero onOpenInquiry={() => handleOpenInquiry('Our Outsourced Bid Manager Package')} />
            <TrustStats />
            <Services onSelectService={handleOpenInquiry} />
            <PortalsCovered />
            <TenderWorkflow />
            <ComplianceSection />
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Interactive Modal */}
      <TenderInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialService={selectedService}
      />

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Call Pill */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center space-x-2 bg-white text-slate-800 border border-slate-200 hover:border-blue-500 hover:text-blue-600 px-3.5 py-2 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-105 text-xs font-bold"
          title="Call Now"
        >
          <Phone className="w-3.5 h-3.5 text-blue-600" />
          <span className="hidden sm:inline">+91 8929851130</span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 hover:scale-110 transition-all duration-300 group"
          title="Direct WhatsApp Inquiry"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current text-white" />
        </a>
      </div>
    </div>
  );
}
