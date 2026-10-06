import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function TenderInquiryModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    category: 'Full 13-Service Outsourced Bid Manager Package',
    tenderDetails: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, category: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Bid Consultation Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.organization}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service Required:* ${formData.category}\n` +
      (formData.tenderDetails ? `*Tender / Product Details:* ${formData.tenderDetails}\n` : '') +
      `*Scope / Notes:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/918929851130?text=${encodedText}`;

    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0C1733] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-5 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 p-1 flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Tender & GeM Proposal Consultation
            </h3>
            <p className="text-xs text-slate-400">
              D Nandani Tech Solutions • Call: {COMPANY_INFO.phone} / {COMPANY_INFO.altPhone}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Request Dispatched!</h4>
            <p className="text-xs text-slate-300">
              Your details have been pre-filled into WhatsApp. Our tender strategy advisor will consult with you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Company / Firm Name *
              </label>
              <input
                type="text"
                required
                placeholder="Business Name"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Mobile / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Service Scope
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              >
                <option>Full 13-Service Outsourced Bid Manager Package</option>
                <option>GeM Portal & CPPP Registration</option>
                <option>Vendor Assessment (QCI) on GeM</option>
                <option>Vendor Assessment Exemption (BIS License)</option>
                <option>PSU Empanelment (BHEL, EIL, Indian Railways)</option>
                <option>OEM Panel & Brand Approval Setup</option>
                <option>Product Upload & Catalogue Approval</option>
                <option>Tender Document Study & Eligibility Summary</option>
                <option>Live Bidding & Reverse Auction (RA) Management</option>
                <option>L1 Purchase Order & EMD Refund Follow-up</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Products Manufactured or Specific Tender Details *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Mention product category, licenses held, or tender ID..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Dispatch to WhatsApp Strategy Desk</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
