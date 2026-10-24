import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronRight, 
  Home, 
  Building2, 
  FileCheck, 
  ArrowRight, 
  TrendingUp, 
  Briefcase,
  Layers,
  Scale
} from 'lucide-react';

export default function AboutPage({ onNavigate, onOpenInquiry }) {
  const pillars = [
    {
      icon: Briefcase,
      title: "Virtual Bid Management For Your Firm",
      desc: "Designed specifically for businesses, MSMEs, and manufacturers who do not have a dedicated internal Bid Manager. We handle the complete bidding department function seamlessly with dedicated personnel."
    },
    {
      icon: Layers,
      title: "Pan-India Portal & Department Network",
      desc: "Our experienced strategy advisors have successfully participated in bids across central ministries, state procurement boards, Indian Railways (IREPS), and top PSUs (BHEL, NTPC, IOCL, GAIL, etc.) across India."
    },
    {
      icon: Scale,
      title: "CVC & GFR Policy Expertise",
      desc: "Well-versed in public procurement policies, guidelines, and statutory rules issued by the Central Vigilance Commission (CVC), General Financial Rules (GFR), PPP frameworks, and RTI regulations."
    },
    {
      icon: TrendingUp,
      title: "Complete Handholding Until Settlement",
      desc: "We stay with you beyond the bid—from pre-bid document summaries and live Reverse Auctions to L1 Purchase Order clearance, contract execution, and prompt EMD refund retrieval."
    }
  ];

  const highlights = [
    { label: "Operating Experience", value: "10+ Years", detail: "In government procurement" },
    { label: "Portals Mastered", value: "GeM & CPPP", detail: "IREPS, PSUs & Global UNGM" },
    { label: "Compliance Standard", value: "100% CVC / GFR", detail: "Strict statutory adherence" },
    { label: "Outsourced Function", value: "Virtual Desk", detail: "Zero fixed department overhead" }
  ];

  return (
    <div className="pt-28 lg:pt-36 pb-20 bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1 text-slate-400 hover:text-blue-600" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-blue-600 font-semibold">About Us</span>
        </nav>
      </div>

      {/* Main Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Subtle decorative lighting */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 mr-1" />
              <span>Corporate Profile & Advisory Record</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Systematic Approach to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                Government Operations
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
              <strong className="text-white">BidMatrix</strong> is a specialized public procurement advisory & tender bid management initiative, operated and managed by <strong className="text-white">D Nandani Tech Solutions</strong>. We empower MSMEs, OEMs, and contractors across India with professional virtual bid desk solutions.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Outsourced Bid Management Advisory')}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span>Request Free Tender Proposal</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('/', 'services')}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
              >
                <span>Explore Core Services</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight mb-1">
                {h.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {h.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {h.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main 2-Column Content: Detailed Narrative & Official Credential Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Pillars (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse"></span>
                <span>Operational Backbone: D Nandani Tech Solutions</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Empowering India's Enterprises to Win Public Tenders
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900">BidMatrix</strong> is an end-to-end bid management and public procurement advisory firm managed and operated by <strong className="text-slate-900">D Nandani Tech Solutions</strong>. We provide dedicated, systematic assistance to help enterprises, MSMEs, OEMs, and EPC contractors navigate the complexities of public sector procurement through strategic <strong className="text-slate-900">Tendering and Bidding</strong>.
                </p>
                <p>
                  Backed by the technical infrastructure, operational rigor, and deep regulatory domain knowledge of <strong className="text-slate-900">D Nandani Tech Solutions</strong>, our multidisciplinary team brings together experienced strategy advisors, technical analysts, rate strategists, and compliance officers. We manage complete bid processing operations across <strong className="text-slate-900">Government e-Marketplace (GeM)</strong>, <strong className="text-slate-900">Central Public Procurement Portal (CPPP)</strong>, <strong className="text-slate-900">United Nations Global Marketplace (UNGM / UNDP)</strong>, <strong className="text-slate-900">Indian Railways (IREPS)</strong>, state procurement authorities, and major Public Sector Undertakings (PSUs).
                </p>
                <p>
                  Under the stewardship of D Nandani Tech Solutions, our mission is to deliver low-cost, high-precision, and zero-defect bid submissions. We act as your outsourced in-house bidding department, covering the entire procurement lifecycle: from <strong className="text-slate-900">tender eligibility evaluation, vendor empanelment, and BOQ costing to live reverse auction execution, post-bid representations, contract management, and L1 purchase order clearance</strong>.
                </p>
              </div>
            </div>

            {/* Core Advisory Pillars */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center">
                <FileCheck className="w-5 h-5 text-blue-600 mr-2" />
                <span>Our Strategic Core Pillars</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Official Credential Card (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border-2 border-blue-200/90 p-6 sm:p-8 shadow-xl shadow-slate-200/50 sticky top-28">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Official Advisory Record
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Bid<span className="text-sky-600">Matrix</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Managed by D Nandani Tech Solutions
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden drop-shadow-md">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>

              {/* Data Rows */}
              <div className="space-y-3.5 text-xs">
                
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[11px] mb-0.5 font-medium uppercase tracking-wider">Managing Legal Entity</div>
                  <div className="text-slate-900 font-bold text-sm">D Nandani Tech Solutions</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[11px] mb-0.5 font-medium uppercase tracking-wider">Core Specialization</div>
                  <div className="text-slate-900 font-bold text-sm">Govt. Tender & GeM Bid Processing Management</div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200">
                  <div className="flex justify-between items-center text-slate-600 text-[11px] mb-0.5 font-medium uppercase tracking-wider">
                    <span>GSTIN Identifier</span>
                    <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full text-[10px]">ACTIVE</span>
                  </div>
                  <div className="text-blue-800 font-mono font-bold text-base tracking-widest">
                    {COMPANY_INFO.gstin}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-[10px] mb-0.5 font-medium uppercase tracking-wider">Headquarters</div>
                    <div className="text-slate-800 font-semibold text-xs flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600 flex-shrink-0" />
                      Begusarai, Bihar
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-slate-500 text-[10px] mb-0.5 font-medium uppercase tracking-wider">Bidding Reach</div>
                    <div className="text-slate-800 font-semibold text-xs flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1 text-amber-600 flex-shrink-0" />
                      Domestic & Global
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Direct Proposal Desk</div>
                  <div className="flex items-center text-slate-800 font-semibold text-xs">
                    <Phone className="w-3.5 h-3.5 mr-2 text-blue-600 flex-shrink-0" />
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-blue-600 transition-colors mr-2">
                      {COMPANY_INFO.phone}
                    </a>
                    <span>/</span>
                    <a href={`tel:${COMPANY_INFO.altPhoneRaw}`} className="hover:text-blue-600 transition-colors ml-2">
                      {COMPANY_INFO.altPhone}
                    </a>
                  </div>
                  <div className="flex items-center text-slate-800 font-semibold text-xs">
                    <Mail className="w-3.5 h-3.5 mr-2 text-blue-600 flex-shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-600 transition-colors break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-900 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sky-700 flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    Well-versed in public policies, guidelines, and rules of the Central Vigilance Commission (CVC), General Financial Rules (GFR), PPP projects, and Right to Information.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenInquiry('Official Proposal Request')}
                    className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
                  >
                    <span>Connect with Our Bidding Team</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#00A896] via-[#0284C7] to-[#1D4ED8] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Ready to Win Your Next Public Tender?
            </h3>
            <p className="text-cyan-50 text-sm max-w-xl">
              Get an end-to-end bid strategy audit or outsource your complete bidding desk to D Nandani Tech Solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenInquiry('Tender Proposal Inquiry')}
              className="px-6 py-3 rounded-xl bg-white text-[#0284C7] hover:bg-cyan-50 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              Request Free Consultation
            </button>
            <button
              onClick={() => onNavigate('/', 'services')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm transition-all"
            >
              Explore All Scope of Services
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
