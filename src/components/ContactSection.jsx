import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    category: 'Our Outsourced Bid Manager Package',
    portal: 'GeM Portal (gem.gov.in)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message with user's form data
    const text = `*New Tender Bidding / GeM Advisory Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company / Firm:* ${formData.organization}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service Required:* ${formData.category}\n` +
      `*Portal Focus:* ${formData.portal}\n` +
      `*Specific Details:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/918929851130?text=${encodedText}`;

    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      {/* Modern Fluid Shapes & Wave Accents Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Soft Ambient Depth Glows */}
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-cyan-500/[0.035] rounded-full blur-3xl" />

        {/* Top Left Organic Flowing Wave Ribbon (Ref: Image 1 & 3) */}
        <svg className="hidden lg:block absolute -left-10 top-0 w-[500px] h-[400px] pointer-events-none" viewBox="0 0 500 400" fill="none">
          <path 
            d="M0,0 L350,0 C280,140 400,220 320,340 C280,400 160,380 0,320 Z" 
            fill="url(#contact-wave-grad)" 
          />
          <path 
            d="M350,0 C280,140 400,220 320,340 C280,400 160,380 0,320" 
            stroke="#0284C7" 
            strokeWidth="2" 
            strokeDasharray="5 7" 
            opacity="0.8" 
          />
          <defs>
            <linearGradient id="contact-wave-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.20" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.18" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Side: Modern Tilted Rounded Capsule & Floating Sphere (Ref: Image 2) */}
        <div className="hidden lg:block absolute left-8 bottom-36">
          <div className="relative">
            <div className="w-16 h-36 rounded-3xl bg-gradient-to-br from-cyan-400/25 to-blue-600/20 rotate-[25deg] shadow-xl shadow-cyan-500/10 border border-white/70 backdrop-blur-sm" />
            <div className="absolute -top-6 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400/40 to-blue-600/30 shadow-md border border-cyan-300/40" />
            
            {/* Crescent Arc (Ref: Image 1) */}
            <svg className="absolute -bottom-8 -left-6 w-24 h-24 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M 22 50 A 30 30 0 1 1 50 78" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
        </div>

        {/* Polka Dot Matrix Cluster (Ref: Image 1) */}
        <div className="hidden sm:grid grid-cols-6 gap-2 absolute top-10 right-20 opacity-30">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          ))}
        </div>

        {/* Floating Plus (+) Accents (Ref: Image 1) */}
        <span className="hidden sm:block absolute top-20 left-1/3 text-cyan-500/40 text-2xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute top-1/2 right-12 text-blue-500/35 text-xl font-bold select-none">+</span>
        <span className="hidden sm:block absolute bottom-16 left-1/4 text-blue-500/30 text-lg font-bold select-none">+</span>

        {/* Right Side: Floating Layered Sphere & Crescent Ring (Ref: Image 1 & 2) */}
        <div className="hidden lg:block absolute right-8 top-1/3">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-cyan-400/30 shadow-xl shadow-blue-600/15 border border-white/60" />
            <svg className="absolute -top-6 -left-6 w-28 h-28 text-cyan-400 drop-shadow-md" viewBox="0 0 100 100" fill="none">
              <path d="M 50 20 A 30 30 0 1 1 20 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.75" />
            </svg>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400/40 to-blue-600/30 rotate-45 shadow-md border border-white/60" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Direct Liaison & Proposal Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Consult Our <span className="text-gradient">Tender Strategy Advisors</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Let our experienced team formulate effective bidding processes and manage your government business.
          </p>
        </div>

        {/* 2-Column: Direct Contact Cards & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center">
                <span>Direct Contact Directorate</span>
              </h3>

              {/* Phone Card with Both Numbers */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all space-y-2 shadow-sm">
                <div className="flex items-center space-x-3 text-blue-600">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs text-slate-700 font-bold uppercase tracking-wider">CALL DIRECTLY FOR PROPOSAL</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 pt-1">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a href={`tel:${COMPANY_INFO.altPhoneRaw}`} className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.altPhone}
                  </a>
                </div>
                <div className="text-[11px] text-slate-500">Strategy advisor available on call</div>
              </div>

              {/* WhatsApp Card */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all group shadow-sm"
              >
                <div className="p-3 rounded-xl bg-emerald-600 text-white group-hover:scale-110 transition-transform shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-bold uppercase tracking-wider">WHATSAPP INSTANT CHAT</div>
                  <div className="text-base font-bold text-emerald-900">
                    +91 8929851130
                  </div>
                  <div className="text-xs text-emerald-700 mt-0.5">Share tender documents & NIT links</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all group shadow-sm"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">OFFICIAL PROPOSAL DESK</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Send company profile & vendor details</div>
                </div>
              </a>

              {/* Head Office Location */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">HEAD OFFICE</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">
                    {COMPANY_INFO.headOffice}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">GSTIN: {COMPANY_INFO.gstin}</div>
                </div>
              </div>

              {/* Sales Office Location */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">SALES OFFICE</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                    {COMPANY_INFO.salesOffice}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Regional Liaison & Client Meetings</div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center space-x-3 text-xs text-slate-500 pt-2 border-t border-slate-200">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Bid Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                Request Tender Proposal & Feasibility Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
                Let us know what your firm manufactures or supplies. We will prepare an end-to-end bidding road-map for your business.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">
                    Proposal Request Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your details have been forwarded to our WhatsApp strategy desk. Our senior advisor will connect with you right away.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. RS Mattress & Fome"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="company@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Service Scope Desired *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                      >
                        <option>Our Outsourced Bid Manager Package</option>
                        <option>GeM Portal, CPPP, UNGM and Other e-procurement Portals Registration</option>
                        <option>Vendor Assessment on GeM</option>
                        <option>Vendor Exemption</option>
                        <option>PSUs Empanelment (BHEL, EIL & Indian Railways etc)</option>
                        <option>OEM Panel and OEM Dashboard</option>
                        <option>Product Upload & Catalogue Approval</option>
                        <option>Tender Document Study & Eligibility Summary</option>
                        <option>Bid Submission, Pre-Bid & Post-Bid Clarification/Representation</option>
                        <option>Live Bidding & Reverse Auction (RA) Management</option>
                        <option>EMD Refund & L1 PO Follow-up</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Target Portal *
                      </label>
                      <select
                        value={formData.portal}
                        onChange={(e) => setFormData({ ...formData, portal: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                      >
                        <option>GeM Portal (gem.gov.in)</option>
                        <option>CPPP (eprocure.gov.in)</option>
                        <option>UNGM (United Nations Global Marketplace)</option>
                        <option>PSUs Portals (BHEL, EIL, IOCL, NTPC etc)</option>
                        <option>Indian Railways (IREPS) etc</option>
                        <option>State e-Procurement Portals</option>
                        <option>International / Non-GeM Tenders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Products / Business Details *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Mention what products/services you supply, current licenses (BIS/ISO/MSME), or any specific tender you want to bid on..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center space-x-2 border border-blue-400/30"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Proposal & WhatsApp Strategy Desk</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      * Pre-formats your inquiry directly into WhatsApp for quick consultation with our strategy advisor.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
