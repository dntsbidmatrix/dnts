import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, MapPin, Award, CheckCircle2, FileText, Phone, Mail, Building } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      title: "100% Statutory Compliance",
      desc: "Registered with active GSTIN (10CDBPR1005E1ZH) in Bihar. We ensure strict adherence to GFR 2017 procurement guidelines, tax compliance, and transparent audit trails."
    },
    {
      title: "OEM Alliances & MAF Backing",
      desc: "Direct partnerships with certified manufacturers to obtain genuine Manufacturer Authorization Forms (MAFs), authentic test certificates, and on-site warranties."
    },
    {
      title: "Regional Bihar Ground Presence",
      desc: "Headquartered in Begusarai, Bihar, allowing rapid dispatch, immediate physical site inspections, local liaisoning, and dependable post-installation servicing."
    },
    {
      title: "Turnkey Project Delivery",
      desc: "We own the complete project lifecycle—from tender document scrutiny, BOQ preparation, and bidding to logistics, installation, testing, and CRAC sign-off."
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
            <span>Corporate Profile & Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">D Nandani Tech Solutions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A trusted contracting partner bridging governmental procurement rigor with modern technology delivery across Bihar and pan-India.
          </p>
        </div>

        {/* 2-Column Content: Story & Official Statutory Certificate Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                <strong>D Nandani Tech Solutions</strong> was established in <strong>Begusarai, Bihar</strong> with a singular mission: to provide government departments, public sector undertakings (PSUs), and private institutions with an agile, dependable, and highly compliant tender execution partner.
              </p>
              <p>
                Public procurement requires precision. Minor discrepancies in Bill of Quantities (BOQ), tender documentation, or technical specifications can lead to disqualification or project delays. We operate with a deep understanding of India's procurement landscape—spanning the <strong>Government e-Marketplace (GeM)</strong>, <strong>Central Public Procurement Portal (CPPP)</strong>, and <strong>e-Procurement Bihar (GePNIC)</strong>.
              </p>
              <p>
                Whether it involves deploying enterprise IT hardware, commissioning campus-wide CCTV surveillance networks, outfitting interactive smart classrooms, or executing multi-year Annual Maintenance Contracts (AMC), we guarantee authentic components, on-time delivery, and uncompromising quality.
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

          {/* Right Column: Official Statutory Credential & Tax Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#0F1E42] to-[#0A132C] border-2 border-cyan-500/30 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Statutory Master Record
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Legal Business Profile
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 p-1.5 flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Data Rows */}
              <div className="space-y-4 text-xs">
                
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-0.5 font-medium">LEGAL ENTITY NAME</div>
                  <div className="text-white font-bold text-sm">{COMPANY_INFO.name}</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-cyan-500/30">
                  <div className="flex justify-between items-center text-slate-400 text-[11px] mb-0.5 font-medium">
                    <span>GOODS & SERVICES TAX IDENTIFIER (GSTIN)</span>
                    <span className="text-emerald-400 font-bold">STATE: 10</span>
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
                    <div className="text-slate-400 text-[11px] mb-0.5">CONTRACTING REACH</div>
                    <div className="text-slate-200 font-semibold flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1 text-amber-400 flex-shrink-0" />
                      Bihar & Pan-India
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="text-slate-400 text-[11px]">OFFICIAL CHANNELS</div>
                  <div className="flex items-center text-slate-200 font-medium">
                    <Phone className="w-3.5 h-3.5 mr-2 text-cyan-400" />
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-cyan-300 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-200 font-medium">
                    <Mail className="w-3.5 h-3.5 mr-2 text-cyan-400" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    Compliant with General Financial Rules (GFR 2017), Public Procurement (Preference to Make in India) Order, and GeM Seller Policies.
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
