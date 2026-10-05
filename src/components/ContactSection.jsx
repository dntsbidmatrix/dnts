import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  Building
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    category: 'Government Tender Execution',
    tenderId: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message with user's form data
    const text = `*New Tender / Procurement Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Organization:* ${formData.organization}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Category:* ${formData.category}\n` +
      (formData.tenderId ? `*Tender ID / NIT:* ${formData.tenderId}\n` : '') +
      `*Message / Scope:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/918929851130?text=${encodedText}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#091124] border-t border-slate-800/80">
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Direct Liaison & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our <span className="text-gradient">Tender Directorate</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Ready to partner on government bids, submit a BOQ requirement, or request procurement feasibility.
          </p>
        </div>

        {/* 2-Column: Direct Contact Cards & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0C1733] border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center">
                <span>Official Contact Details</span>
              </h3>

              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">DIRECT MOBILE & VOICE</div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {COMPANY_INFO.phone}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Click to Call Directly</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">WHATSAPP DIRECT CONNECT</div>
                  <div className="text-base font-bold text-emerald-400">
                    +91 8929851130
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Instant Chat & Document Sharing</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">OFFICIAL INQUIRY INBOX</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors break-all">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Send NIT, RFPs & BOQ documents</div>
                </div>
              </a>

              {/* Office Location */}
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">REGISTERED HEADQUARTERS</div>
                  <div className="text-base font-bold text-white">
                    Begusarai, Bihar, India
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">State Code: 10 (Bihar)</div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center space-x-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Tender & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1733] border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Submit Tender or Procurement Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
                Fill out the details below. Our technical bid desk will evaluate your requirements and reach out promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">
                    Inquiry Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry details have been forwarded to our WhatsApp desk. We will review your scope and get in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Organization / Department *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dept. of Education / Private Firm"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="official@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Requirement Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option>GeM Tender Execution</option>
                        <option>CPPP Central Tender</option>
                        <option>Bihar eProcurement</option>
                        <option>IT Hardware & Enterprise Supply</option>
                        <option>CCTV Surveillance & Networking</option>
                        <option>Smart Classroom & Audio-Visual</option>
                        <option>Annual Maintenance Contract (AMC)</option>
                        <option>Tender Advisory & BOQ Optimization</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Tender ID / NIT Ref (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. GEM/2026/B/123456"
                        value={formData.tenderId}
                        onChange={(e) => setFormData({ ...formData, tenderId: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Scope of Work / BOQ Brief *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe the quantity, delivery location, technical requirements, or tender timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Connect Directly</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      * Directly opens WhatsApp with your pre-formatted query for instantaneous response.
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
