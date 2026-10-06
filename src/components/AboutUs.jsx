import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, MapPin, Award, CheckCircle2, FileText, Phone, Mail, Building, Users, Briefcase } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: "Virtual Bid Management For Your Firm",
      desc: "Designed specifically for businesses, MSMEs, and manufacturers who do not have a dedicated internal Bid Manager. We handle the complete bidding department function seamlessly."
    },
    {
      title: "Pan-India Portal & Department Network",
      desc: "Our experienced strategy advisors have successfully participated in bids across central ministries, state procurement boards, Indian Railways, and top PSUs across India."
    },
    {
      title: "CVC & GFR Policy Expertise",
      desc: "Well-versed in public procurement policies, guidelines, and rules issued by the Central Vigilance Commission (CVC), General Financial Rules (GFR), PPP frameworks, and RTI."
    },
    {
      title: "Complete Handholding Until Settlement",
      desc: "We stay with you beyond the bid—from pre-bid document summaries and live Reverse Auctions to L1 Purchase Order clearance or prompt EMD refund retrieval."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[#070D1E]">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>About Our Firm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Systematic Approach to <span className="text-gradient">Government Operations</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Empowering businesses, manufacturers, and contractors across India to successfully win and execute public sector tenders.
          </p>
        </div>

        {/* 2-Column Content: Narrative & Official Credential Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Proposal Text & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Here at <strong>D Nandani Tech Solutions</strong>, we offer dedicated assistance in expanding your business through <strong>Tendering and Bidding</strong>. Our team comprises young, energetic, and experienced professionals, technical experts, and strategy advisors with expertise in providing bid processing management services for Government tenders on <strong>GeM</strong>, <strong>CPPP</strong>, and other e-procurement portals for both domestic and international opportunities.
              </p>
              <p>
                Our aim is to provide <strong>low-cost, high-quality, innovative, and prompt tender bidding support</strong>, allowing you enough time to manage your business operations effectively. With an experienced strategy advisor who has successfully bid on tenders from most departments and portals in pan-India networks, our team is always prepared to offer unique online bidding support.
              </p>
              <p>
                We formulate effective bidding processes and implementation methodologies for members who do not have a dedicated Bid Manager. We offer end-to-end solutions for e-Tendering and e-Procurement, covering the entire procurement lifecycle—such as <strong>Tender evaluation, Bid Management, Vendor Registration, Licensing, and Reverse Auctions</strong>.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0C1733] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center space-x-2 mb-2 text-cyan-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Official Credential & Contact Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#0F1E42] to-[#0A132C] border-2 border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Official Advisory Record
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    D Nandani Tech Solutions
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 p-1.5 flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Data Rows */}
              <div className="space-y-4 text-xs">
                
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-0.5 font-medium">CORE SPECIALIZATION</div>
                  <div className="text-white font-bold text-sm">Govt. Tender & GeM Bid Processing Management</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-cyan-500/30">
                  <div className="flex justify-between items-center text-slate-400 text-[11px] mb-0.5 font-medium">
                    <span>GOODS & SERVICES TAX IDENTIFIER (GSTIN)</span>
                    <span className="text-emerald-400 font-bold">ACTIVE</span>
                  </div>
                  <div className="text-cyan-300 font-mono font-bold text-base tracking-widest">
                    {COMPANY_INFO.gstin}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-0.5">HEADQUARTERS</div>
                    <div className="text-slate-200 font-semibold flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-cyan-400 flex-shrink-0" />
                      Begusarai, Bihar
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-0.5">BIDDING REACH</div>
                    <div className="text-slate-200 font-semibold flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1 text-amber-400 flex-shrink-0" />
                      Domestic & Global
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="text-slate-400 text-[11px]">DIRECT PROPOSAL DESK</div>
                  <div className="flex items-center text-slate-200 font-medium">
                    <Phone className="w-3.5 h-3.5 mr-2 text-cyan-400" />
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-cyan-300 transition-colors mr-2">
                      {COMPANY_INFO.phone}
                    </a>
                    <span>/</span>
                    <a href={`tel:${COMPANY_INFO.altPhoneRaw}`} className="hover:text-cyan-300 transition-colors ml-2">
                      {COMPANY_INFO.altPhone}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-200 font-medium">
                    <Mail className="w-3.5 h-3.5 mr-2 text-cyan-400" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    Well-versed in public policies, guidelines, and rules of the Central Vigilance Commission (CVC), General Procurement, PPP projects, and Right to Information.
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
