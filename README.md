# D Nandani Tech Solutions - Corporate & Tender Execution Website

Modern, high-performance corporate portfolio and tender execution platform for **D Nandani Tech Solutions** (Begusarai, Bihar).

Built with **React 18 + Vite + Tailwind CSS**, designed to output a pure static website (`dist/`) ready for instant automated deployment to **Cloudflare Pages** via **GitHub**.

---

## 🏢 Business Identity & Credentials

* **Company Name:** D NANDANI TECH SOLUTIONS
* **Registered Location:** Begusarai, Bihar, India (State Code: 10)
* **GSTIN:** `10CDBPR1005E1ZH`
* **Contact Phone:** +91 8929851130
* **Official Email:** dnandanitech@gmail.com
* **Core Domains:** GeM & CPPP Tender Execution, Enterprise IT Hardware Supply, CCTV & Campus Networking, Smart Classrooms, SLA-Backed Annual Maintenance Contracts (AMC).

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 How to Deploy on Cloudflare Pages via GitHub

### Step 1: Initialize Git and Push to GitHub

Open PowerShell or terminal in this project directory:

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: D Nandani Tech Solutions website"

# Create a new repository on your GitHub account (e.g., d-nandani-tech-solutions)
# Then link and push:
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/d-nandani-tech-solutions.git
git push -u origin main
```

---

### Step 2: Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages** -> **Create application** -> select the **Pages** tab.
3. Click **Connect to Git** and authorize your GitHub account.
4. Select the repository: `d-nandani-tech-solutions`.
5. In **Set up builds and deployments**:
   * **Framework preset:** `Vite` (or `Create React App`)
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
   * **Node.js version (Environment Variable, optional):** `NODE_VERSION` = `20`
6. Click **Save and Deploy**.
7. Cloudflare Pages will build the website in seconds and give you a live `*.pages.dev` URL!

---

### Step 3: Connect Your Custom Domain

1. In your Cloudflare Pages project dashboard, click on the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain name (e.g., `dnandanitech.com` or `www.dnandanitech.com`).
4. Since your domain DNS is managed on Cloudflare, Cloudflare will automatically configure the CNAME records and issue a free SSL certificate.
5. Within a few minutes, your website is live worldwide on your custom domain!

---

## 🛠️ Customization & Updating Content

All company data, contact numbers, email, GSTIN, services, and FAQ items are centralized in a single file:

📁 `src/data/companyData.js`

To update any phone number, email, address, or service description, simply edit that file and push your changes to GitHub—Cloudflare Pages will automatically rebuild and deploy your site in seconds!
