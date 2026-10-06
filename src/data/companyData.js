export const COMPANY_INFO = {
  name: "D NANDANI TECH SOLUTIONS",
  legalName: "D Nandani Tech Solutions",
  tagline: "Systematic Approach to Government Operations",
  subtitle: "End-to-End Government Tender Bidding, GeM Portal Management & Bid Processing Consultancy.",
  gstin: "10CDBPR1005E1ZH",
  stateCode: "10 (Bihar)",
  location: "Begusarai, Bihar, India",
  phone: "+91 8929851130",
  phoneRaw: "+918929851130",
  altPhone: "+91 7250064325",
  altPhoneRaw: "+917250064325",
  email: "dnandanitech@gmail.com",
  whatsappUrl: "https://wa.me/918929851130?text=Hello%20D%20Nandani%20Tech%20Solutions%2C%20I%20need%20assistance%20with%20GeM%20%2F%20Government%20Tender%20Bidding.",
  workingHours: "Monday - Saturday: 9:00 AM - 7:30 PM IST",
  established: "Begusarai, Bihar"
};

export const TRUST_METRICS = [
  { value: "End-to-End", label: "Bid Management", subtext: "From Tender Study to EMD Refund" },
  { value: "GeM & CPPP", label: "Pan-India Portals", subtext: "Central, State, Railways & PSUs" },
  { value: "PSU Empanelment", label: "Vendor Registration", subtext: "BHEL, EIL, Railways, NTPC" },
  { value: "Dedicated", label: "Virtual Bid Manager", subtext: "For MSMEs, OEMs & Contractors" }
];

// Exact 13 services grouped logically into 6 comprehensive consultancy verticals
export const SERVICES = [
  {
    id: "gem-registration",
    category: "Portal Registration",
    title: "GeM & e-Procurement Portal Registration",
    badge: "Service #1 & #9",
    description: "Complete onboarding and account setup across Government e-Marketplace (GeM), Central Public Procurement Portal (CPPP), and state e-procurement platforms using client credentials with Class-3 DSC integration.",
    features: [
      "GeM Primary & Secondary Seller account configuration",
      "CPPP (eprocure.gov.in) & State GePNIC registrations",
      "Class-3 Digital Signature Certificate (DSC) mapping",
      "Organization profiling, tax & statutory data verification"
    ],
    icon: "FileCheck2"
  },
  {
    id: "vendor-assessment",
    category: "GeM Compliance",
    title: "Vendor Assessment & BIS Exemption",
    badge: "Service #2 & #4",
    description: "End-to-end guidance for Quality Council of India (QCI) vendor assessment on GeM. We prepare desktop audit documentation and assist sellers with BIS licenses in obtaining official assessment exemptions.",
    features: [
      "Vendor Assessment initiation & fee guidance",
      "Desktop audit file preparation & financial parameter proofing",
      "Vendor Assessment Exemption filing for BIS license holders",
      "QCI query resolution & final rating approval"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "psu-empanelment",
    category: "Empanelment",
    title: "PSU & Government Sector Empanelment",
    badge: "Service #3 & #8",
    description: "Getting manufacturers and suppliers registered and empaneled as approved vendors across major Public Sector Undertakings (PSUs) and core government departments.",
    features: [
      "Supplier registration in BHEL, EIL, and Indian Railways (IREPS)",
      "Empanelment in NTPC, IOCL, GAIL, and Defence establishments",
      "Preparation of vendor registration dossiers, CA certificates & affidavits",
      "Follow-up with department procurement committees until approval"
    ],
    icon: "Building2"
  },
  {
    id: "oem-brand-management",
    category: "Catalogue Management",
    title: "OEM Panel, Brand Approval & Reseller Management",
    badge: "Service #5 & #6",
    description: "Assisting manufacturers in creating OEM dashboards on GeM, securing official brand approvals, managing authorized reseller networks, and uploading compliant product catalogues.",
    features: [
      "OEM Panel creation & Brand Registration on GeM",
      "Reseller authorization codes & pairing management",
      "Product SKU upload & technical parameter specification pairing",
      "Catalogue approval workflow for OEM resellers and distributors"
    ],
    icon: "Layers"
  },
  {
    id: "tender-bidding-study",
    category: "Bid Strategy",
    title: "Tender Scrutiny, BOQ Study & Rate Strategy",
    badge: "Service #7 & #11",
    description: "In-depth study of complete tender documents (NIT / RFP). We extract eligibility criteria, payment terms, and critical conditions, and formulate strategic BOQ rate recommendations.",
    features: [
      "Comprehensive tender study summary: eligibility, terms & timeline",
      "Pre-bid query formulation & representation to the department",
      "Technical compliance matrix & documentation compilation",
      "Competitive BOQ rate analysis & pricing strategy advice"
    ],
    icon: "Briefcase"
  },
  {
    id: "submission-reverse-auction",
    category: "Execution & Post-Bid",
    title: "Bid Submission, Reverse Auction & Post-Bid Follow-up",
    badge: "Service #10, #12 & #13",
    description: "Hands-on submission of online/offline bids, live participation in Reverse Auctions (RA), and complete post-bid handholding for Purchase Order issuance or EMD refund retrieval.",
    features: [
      "Online bid submission & offline envelope drafting before deadline",
      "Live participation & tactical strategy in GeM Reverse Auctions (RA)",
      "L1 position support: Purchase Order (PO) facilitation & payment follow-ups",
      "EMD refund follow-up with departments in case of non-award"
    ],
    icon: "BadgePercent"
  }
];

export const DETAILED_13_SERVICES = [
  { no: 1, title: "GeM, CPPP & Other e-Procurement Portals Registration", desc: "Setting up verified primary & secondary accounts on central & state portals." },
  { no: 2, title: "Vendor Assessment on GeM Portal", desc: "Facilitating QCI vendor assessment process, documentation & site audit readiness." },
  { no: 3, title: "PSU & Government Sector Empanelment", desc: "Approved supplier registration in BHEL, EIL, Indian Railways, NTPC, IOCL." },
  { no: 4, title: "Vendor Assessment Exemption (BIS)", desc: "Securing official GeM assessment exemptions for sellers with active BIS licenses." },
  { no: 5, title: "OEM Panel Creation & Brand Approval", desc: "Setting up OEM dashboards, brand registry, reseller authorization & catalogue control." },
  { no: 6, title: "Products Upload & Catalogue Approval", desc: "Uploading product SKUs, mapping specifications, and granting reseller catalogue approvals." },
  { no: 7, title: "Tender Bidding & Document Study", desc: "Comprehensive summary reports covering eligibility, payment milestones & technical criteria." },
  { no: 8, title: "Document Preparation for Vendor Registration", desc: "Drafting balance sheet summaries, turnover certificates, affidavits & credentials." },
  { no: 9, title: "Portal Registration with Customer Credentials", desc: "Secure portal registration handled transparently using client login credentials." },
  { no: 10, title: "Department Follow-up & Liaison", desc: "Acting as an active communication bridge between your business and government officers." },
  { no: 11, title: "Tender Document Upload & Rate Suggestion", desc: "Systematic document uploads, compliance matrices, and competitive rate recommendations." },
  { no: 12, title: "Bid Submission & Live Reverse Auction (RA)", desc: "Timely bid submission and real-time live bidding management during Reverse Auctions." },
  { no: 13, title: "L1 Purchase Order & EMD Refund Follow-up", desc: "Securing PO & payment follow-up if L1; prompt EMD refund retrieval if tender not won." }
];

export const PORTALS_COVERED = [
  {
    name: "Government e-Marketplace (GeM)",
    domain: "gem.gov.in",
    type: "National Public Procurement",
    description: "Complete account setup, QCI vendor assessment, brand registry, product cataloguing, Custom Bids, and Reverse Auctions.",
    highlight: "OEM Panel & Reseller Control"
  },
  {
    name: "Central Public Procurement Portal (CPPP)",
    domain: "eprocure.gov.in",
    type: "Central Govt Ministries & PSUs",
    description: "End-to-end bid processing, technical envelope preparation, DSC Class-3 submission for central ministries and autonomous bodies.",
    highlight: "Comprehensive NIT Study"
  },
  {
    name: "PSUs & Engineering Enterprises",
    domain: "BHEL, EIL, NTPC, IOCL, GAIL",
    type: "Core PSU Empanelment",
    description: "Specialized supplier registration dossiers, technical capability approvals, and empanelment across India's largest PSUs.",
    highlight: "BHEL & EIL Approved Supplier"
  },
  {
    name: "Indian Railways (IREPS)",
    domain: "ireps.gov.in",
    type: "Railways Procurement",
    description: "Zonal railway vendor registration, stores & works tenders, IREPS digital token mapping, and bid execution.",
    highlight: "Zonal Vendor Empanelment"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Portal Onboarding & Vendor Assessment",
    description: "Registration on GeM, CPPP & PSUs, QCI vendor assessment, BIS exemptions, and OEM brand setup."
  },
  {
    step: "02",
    title: "Tender Study & Feasibility Report",
    description: "Analyzing NIT terms, eligibility criteria, turnover limits, payment conditions, and preparing summary."
  },
  {
    step: "03",
    title: "Document Compilation & Rate Strategy",
    description: "Preparing technical envelopes, affidavits, authorizations, and recommending competitive BOQ bidding rates."
  },
  {
    step: "04",
    title: "Online Submission & Reverse Auction (RA)",
    description: "Submitting tenders before deadline and actively strategizing during live Reverse Auctions to secure L1."
  },
  {
    step: "05",
    title: "L1 Purchase Order & EMD Refund Follow-up",
    description: "Follow-up for Purchase Order and payments if won; tracking prompt EMD refund return if not won."
  }
];

export const FAQS = [
  {
    q: "How does D Nandani Tech Solutions help companies with no dedicated Bid Manager?",
    a: "We act as your complete outsourced Virtual Bid Management team. From finding relevant tenders, studying NIT documents, and checking eligibility to uploading bids, participating in Reverse Auctions, and following up for POs and EMD refunds—we handle the entire lifecycle so you can focus on your core business."
  },
  {
    q: "Can you help our company get registered on GeM and complete Vendor Assessment?",
    a: "Yes. We handle complete GeM seller registration, secondary user setup, and QCI Vendor Assessment file preparation. If you possess a BIS license, we also assist in getting official exemption from Vendor Assessment."
  },
  {
    q: "Do you assist with PSU empanelment like BHEL, EIL, and Indian Railways?",
    a: "Yes. We prepare specialized vendor registration dossiers for major PSUs including BHEL, Engineers India Limited (EIL), Indian Railways (IREPS), IOCL, NTPC, and state engineering corporations."
  },
  {
    q: "What happens after the tender is submitted? Do you participate in Reverse Auctions?",
    a: "Yes! If the tender enters a live Reverse Auction (RA), we strategize and bid on your behalf. If you finish L1, we follow up with the department to secure the Purchase Order. If you do not win, we actively follow up with the department until your Earned Money Deposit (EMD) is safely refunded."
  },
  {
    q: "What are your contact numbers and where are you based?",
    a: "We are headquartered in Begusarai, Bihar with pan-India bidding operations. You can reach us directly on +91 8929851130 or +91 7250064325, or email dnandanitech@gmail.com."
  }
];
