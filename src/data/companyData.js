export const COMPANY_INFO = {
  name: "BidMatrix",
  legalName: "BidMatrix",
  tagline: "Systematic Approach to Government Operations",
  subtitle: "End-to-End Government Tender Bidding, GeM Portal Management & Bid Processing Consultancy.",
  gstin: "10CDBPR1005E1ZH",
  stateCode: "10 (Bihar)",
  location: "Begusarai, Bihar, India",
  headOffice: "Begusarai, Bihar, 851130",
  salesOffice: "F-171A/2, Ground Floor, F Block, Gali No.17, Ayanagar Extn, PH-6, Delhi 110047",
  phone: "+91 8929851130",
  phoneRaw: "+918929851130",
  altPhone: "+91 7250064325",
  altPhoneRaw: "+917250064325",
  email: "dnandanitech@gmail.com",
  whatsappUrl: "https://wa.me/918929851130?text=Hello%20BidMatrix%2C%20I%20need%20assistance%20with%20GeM%20%2F%20Government%20Tender%20Bidding.",
  workingHours: "Monday - Saturday: 9:00 AM - 7:30 PM IST",
  established: "Begusarai, Bihar"
};

export const TRUST_METRICS = [
  { value: "End-to-End", label: "Bid Management", subtext: "From Tender Study to EMD Refund" },
  { value: "GeM & CPPP", label: "Pan-India Portals", subtext: "Central, State, Railways & PSUs" },
  { value: "PSUs Empanelment", label: "Vendor Registration", subtext: "BHEL, EIL, Railways, NTPC etc" },
  { value: "Dedicated", label: "Virtual Bid Manager", subtext: "For MSMEs, OEMs & Contractors" }
];

// Our services grouped logically into 6 comprehensive consultancy verticals
export const SERVICES = [
  {
    id: "gem-registration",
    category: "Portal Registration",
    title: "GeM Portal, CPPP, UNGM and Other e-procurement Portals Registration",
    badge: "Service #1 & #9",
    description: "Complete onboarding and account setup across Government e-Marketplace (GeM), Central Public Procurement Portal (CPPP), United Nations Global Marketplace (UNGM), and other e-procurement platforms using client credentials with Class-3 DSC integration.",
    features: [
      "GeM Primary & Secondary Seller account configuration",
      "CPPP (eprocure.gov.in), UNGM & State GePNIC registrations",
      "Class-3 Digital Signature Certificate (DSC) mapping",
      "Organization profiling, tax & statutory data verification"
    ],
    icon: "FileCheck2"
  },
  {
    id: "vendor-assessment",
    category: "GeM Compliance",
    title: "Vendor Assessment & Vendor Exemption",
    badge: "Service #2 & #4",
    description: "End-to-end guidance for vendor assessment on GeM. We prepare desktop audit documentation and assist eligible sellers in obtaining official vendor exemptions.",
    features: [
      "Vendor Assessment initiation & fee guidance",
      "Desktop audit file preparation & financial parameter proofing",
      "Vendor Assessment & Vendor Exemption filing assistance",
      "Vendor assessment query resolution & final rating approval"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "psu-empanelment",
    category: "Empanelment",
    title: "PSUs & Government Sector Empanelment",
    badge: "Service #3 & #8",
    description: "Getting manufacturers and suppliers registered and empaneled as approved vendors across major Public Sector Undertakings (PSUs) and core government departments.",
    features: [
      "Supplier registration in BHEL, EIL & Indian Railways etc (IREPS)",
      "Empanelment in NTPC, IOCL, GAIL etc, and Defence establishments",
      "Preparation of vendor registration dossiers, CA certificates & affidavits",
      "Follow-up with department procurement committees until approval"
    ],
    icon: "Building2"
  },
  {
    id: "oem-brand-management",
    category: "Catalogue Management",
    title: "OEM Panel and OEM Dashboard",
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
    title: "Bid Submission, Pre-Bid & Post-Bid Clarification/Representation",
    badge: "Service #10, #12 & #13",
    description: "Hands-on submission of online/offline bids, pre-bid representations, query clarifications, and complete post-bid handholding for Purchase Order issuance or EMD refund retrieval.",
    features: [
      "Online bid submission & technical envelope drafting before deadline",
      "Pre-bid query clarification & official departmental representation",
      "Live participation & tactical strategy in GeM Reverse Auctions (RA)",
      "Post-bid representations, L1 PO facilitation & prompt EMD refund follow-up",
      "Contract management and invoice management"
    ],
    icon: "BadgePercent"
  },
  {
    id: "brand-catalogue-reseller",
    category: "Catalogue Management",
    title: "Brand Approval, New Box Catalogue Management & Reseller Management",
    badge: "Brand & Catalogue",
    description: "End-to-end assistance in securing official brand approvals, creating compliant new box product catalogues, specification mapping, and managing authorized reseller distribution networks on GeM.",
    features: [
      "Official Brand Approval application & trademark validation on GeM",
      "New box catalogue creation, category tagging & parameter mapping",
      "Reseller authorization code generation & distributor network control",
      "Catalogue pairing, error rectification & category approval tracking"
    ],
    icon: "PackageCheck"
  },
  {
    id: "reverse-forward-auction",
    category: "Execution & Post-Bid",
    title: "Reverse Auction / Forward Auction & Post-Bid Follow-up",
    badge: "Auction & Settlement",
    description: "Real-time tactical bidding during live electronic Reverse Auctions (RA) and Forward Auctions, followed by vigorous administrative follow-up for Purchase Order clearance and prompt EMD refund retrieval.",
    features: [
      "Real-time tactical bidding strategy during GeM & CPPP Reverse Auctions (RA)",
      "Forward Auction execution for departmental scrap, salvage & asset disposal",
      "L1 bidder confirmation, formal Purchase Order (PO) facilitation & acceptance",
      "Post-bid departmental liaison, billing follow-up & prompt EMD refund retrieval"
    ],
    icon: "Gavel"
  }
];

export const DETAILED_13_SERVICES = [
  { no: 1, title: "GeM Portal, CPPP, UNGM and Other e-procurement Portals Registration", desc: "Setting up verified primary & secondary accounts on central, global (UNGM) & state portals." },
  { no: 2, title: "Vendor Assessment on GeM Portal", desc: "Facilitating vendor assessment process, documentation & site audit readiness." },
  { no: 3, title: "PSUs & Government Sector Empanelment", desc: "Approved supplier registration in BHEL, EIL & Indian Railways etc." },
  { no: 4, title: "Vendor Exemption", desc: "Securing official GeM vendor exemptions for eligible sellers and manufacturers." },
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
    description: "Complete account setup, vendor assessment, brand registry, product cataloguing, Custom Bids, and Reverse Auctions.",
    highlight: "OEM Panel & Reseller Control"
  },
  {
    name: "CPPP & State e-procurement portal",
    domain: "eprocure.gov.in & State Portals",
    type: "Central Govt & State GePNIC",
    description: "End-to-end bid processing, technical envelope preparation, DSC Class-3 submission for central ministries and state procurement portals across India.",
    highlight: "Domestic Pan-India Coverage"
  },
  {
    name: "PSUs & Engineering Enterprises",
    domain: "BHEL, EIL, NTPC, IOCL, GAIL etc",
    type: "Core PSUs Empanelment",
    description: "Specialized supplier registration dossiers, technical capability approvals, and empanelment across India's largest PSUs.",
    highlight: "BHEL, EIL & Railways etc Approved"
  },
  {
    name: "Indian Railways (IREPS), Zone wise empanelment registration & bidding",
    domain: "ireps.gov.in",
    type: "Railways Procurement & Empanelment",
    description: "Complete zonal railway vendor registration, stores & works tenders, IREPS digital token mapping, and zone-wise supplier bidding.",
    highlight: "Zonal Vendor Empanelment"
  },
  {
    name: "UNGM & UNDP",
    domain: "ungm.org / undp.org",
    type: "Global UN Procurement",
    description: "International vendor registration, technical compliance, Expression of Interest (EOI), and RFQ/tender submissions for United Nations agencies and UNDP.",
    highlight: "Global UN & UNDP Registry"
  },
  {
    name: "PSUs e-invoice management portals",
    domain: "GeM, Bill Watch & PSU Portals",
    type: "Post-Award Billing & Invoice",
    description: "Seamless generation and upload of digital invoices, CRAC clearance, bill milestone tracking, and payment follow-ups across PSU portals and GeM.",
    highlight: "e-Invoice & Payment Tracking"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Portal Onboarding & Vendor Assessment",
    description: "Registration on GeM, CPPP, UNGM & PSUs, vendor assessment, vendor exemptions, and OEM brand setup."
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
    q: "How does BidMatrix help companies with no dedicated Bid Manager?",
    a: "We act as your complete outsourced Virtual Bid Management team. From finding relevant tenders, studying NIT documents, and checking eligibility to uploading bids, participating in Reverse Auctions, and following up for POs and EMD refunds—we handle the entire lifecycle so you can focus on your core business."
  },
  {
    q: "Can you help our company get registered on GeM and complete Vendor Assessment?",
    a: "Yes. We handle complete GeM seller registration, secondary user setup, and Vendor Assessment file preparation. If you qualify, we also assist in getting official Vendor Exemption."
  },
  {
    q: "Do you assist with PSUs empanelment like BHEL, EIL & Indian Railways etc?",
    a: "Yes. We prepare specialized vendor registration dossiers for major PSUs including BHEL, Engineers India Limited (EIL), Indian Railways (IREPS) etc, as well as IOCL, NTPC etc, and state engineering corporations."
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
