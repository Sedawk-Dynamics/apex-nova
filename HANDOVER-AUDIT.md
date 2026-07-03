# APEXNOVA LOGISTICS INDIA PVT. LTD. — Vendor Audit (Website Developer Response)

**Scope of this response:** I built and deployed the **website**. Below I fill every one of the 84
checklist points honestly, based on the actual codebase and the live site
(`https://www.apexnovalogistics.com`) as of handover.

**Status legend**
- ✅ **Done** — website scope, delivered and verified (proof given)
- ⚠️ **Gap** — website scope, but NOT built yet (can be added on request)
- ⛔ **Separate deliverable** — NOT part of this website build (CRM/ERP, HRM, GST software, mobile app, VPS, trademark, PR articles, print design, social-media posting). Confirm with the party who quoted the full "Startup Digital Kit."
- 🔑 **Owner/client action** — ownership, admin access, or credentials that the account owner must confirm/provide (not controllable from website code).

> **Important context:** This quotation was a full *Startup Digital Kit* (website + server + CRM + HRM + GST + mobile app + trademark + PR + social + print). The **website** is the piece delivered here. Roughly items 1, 3, 5, 6, 8, 9, 43, 44, 45, 50, 53 are website deliverables and are done. Most other rows are separate products/services outside the website codebase.

---

## 1. WEBSITE

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 1 | Website URL | ✅ Done | Live: **https://www.apexnovalogistics.com** (HTTP 200). Also `apex-nova.vercel.app`. | Online company presence live. |
| 2 | Admin Panel | ⚠️ N/A | **No CMS admin panel.** Site is a coded React/Next.js app, not WordPress. | Content is edited in code + redeployed. If a login-based CMS/admin was expected, that's a separate build. |
| 3 | WordPress/React | ✅ Done | **Next.js 14 (React) + Tailwind CSS + TypeScript**, hosted on **Vercel**. | Not WordPress. Future maintenance = code changes via Git → auto-deploy. |
| 4 | 17 Pages | ⚠️ Gap | **5 pages built:** Home, About, Services, Contact, Quote. | Quotation says 17. Missing: 4 policy pages (see 39–42) + others. Can add on request. |
| 5 | Contact Form | ✅ Done | `/contact` form → emails **info@apexnovalogistics.com** via SMTP. **Verified end-to-end** (test mail delivered). | Also multi-step Quote form on `/quote` → same inbox. |
| 6 | WhatsApp Button | ✅ Done | Floating WhatsApp button → `wa.me/919560639966`. Live on every page. | Also floating Call button (`tel:+919560639966`). |
| 7 | Popup System | ➖ Not needed | **Client declined** — no popup/lead-capture requested. | Marked not required by client. |
| 8 | Mobile Version | ✅ Done | Fully responsive (xs→3xl breakpoints, mobile nav drawer, overflow guards). | Verified across phone/tablet/desktop. |
| 9 | Website Source Files | ✅ Done | Full source in Git: **github.com/Sedawk-Dynamics/apex-nova** (branch `main`). | Ownership transfer of the repo = 🔑 owner action. |

---

## 2. CLOUD SERVER (VPS)  — *quotation: "Fully Managed VPS, 10GB NVMe, 2GB RAM"*

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 10 | VPS Access | ⚠️ N/A | **Website is hosted on Vercel (serverless), not a VPS.** | No VPS is used by this site. Confirm with vendor whether a VPS was provisioned separately. |
| 11 | VPS Configuration (10GB/2GB) | ⚠️ N/A | Not applicable — Vercel managed hosting. | — |
| 12 | Server Backup | ✅ (via Git) | Code backed up in GitHub; Vercel keeps immutable deployment history + instant rollback. | Not a VPS backup. |
| 13 | Server Ownership | 🔑 Owner action | Hosting account = **Vercel** (project `apex-nova`, team Sedawk-Dynamics). | Transfer/confirm Vercel account ownership to client. |

---

## 3. LOGO & BRAND IDENTITY

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 14 | Logo Design (PNG/JPG) | ✅ Done | `public/images/apexnova-logo.png` + horizontal variant, used in header/footer/favicon. | — |
| 15 | Vector Files (AI/CDR/SVG) | ⚠️ Gap | Only PNG present in repo. | Editable vector = ask the logo designer. |
| 16 | Letterhead | ⛔ Separate | Not a website deliverable. | Print/brand vendor. |
| 17 | Visiting Card | ⛔ Separate | Not a website deliverable. | Print/brand vendor. |

---

## 4. COMPANY PROFILE

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 18 | Company Profile PDF | ⛔ Separate | Document design deliverable — not part of website build. |
| 19 | Editable Profile | ⛔ Separate | — |
| 20 | 8–12 Pages Profile | ⛔ Separate | — |

---

## 5. CRM & ERP SOFTWARE (items 21–30)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 21–30 | CRM login, Lead/Proposal/Quotation/Invoice/Expense/Client-Portal/Reports/Staff-Task/Contract modules | ⛔ Separate | **No CRM/ERP was built as part of this website.** This is a separate software product. Confirm with the vendor who quoted it. |

---

## 6. GST BILLING SOFTWARE

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 31–32 | GST Billing / GST Reports | ⛔ Separate | Not part of the website. Separate software deliverable. |

---

## 7. HRM SOFTWARE (items 33–38)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 33–38 | HRM login, Attendance, Leave, Payroll, Employee DB, Recruitment | ⛔ Separate | Not part of the website. Separate software deliverable. |

---

## 8. POLICY PAGES

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 39 | Terms & Conditions | ✅ Done | Live: **/terms** — linked in footer on every page + form consent. | — |
| 40 | Privacy Policy | ✅ Done | Live: **/privacy** — linked in footer + contact/quote consent text. | — |
| 41 | Refund Policy | ✅ Done | Live: **/refund** (Refund & Cancellation Policy). | — |
| 42 | Cookie Policy | ✅ Done | Live: **/cookies**. | — |

---

## 9. SEO

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 43 | SEO Setup | ✅ Done | Per-page titles/descriptions/canonicals; Organization + LocalBusiness + Website + Breadcrumb + Service + FAQ JSON-LD structured data. | — |
| 44 | Meta Tags | ✅ Done | Open Graph + Twitter cards (`@apexnova0`) on all pages; `lang=en-IN`. | View page source to verify. |
| 45 | Sitemap | ✅ Done | **https://www.apexnovalogistics.com/sitemap.xml** + `robots.txt`. | Auto-generated. |
| 46 | Search Console | ⚠️ Gap | Not yet verified/submitted. Verification placeholder exists in code. | 🔑 Need client's Google account to verify domain + submit sitemap. Give me the token and I'll wire it in. |

---

## 10. WHATSAPP API (items 47–49)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 47 | WhatsApp Dashboard | ⛔ Separate | Site uses a **click-to-chat** button (`wa.me`), not the WhatsApp Business **API/dashboard**. Official API + broadcast + green tick is a separate service. |
| 48 | Broadcast | ⛔ Separate | Requires WhatsApp Business API provider. |
| 49 | Green Tick Eligibility | ⛔ Separate | Requires Meta business verification. |

---

## 11. SECURITY

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 50 | SSL | ✅ Done | HTTPS active (auto SSL via Vercel/Let's Encrypt). | Padlock live on domain. |
| 51 | DDoS Protection | ✅ Platform | Vercel edge network provides built-in DDoS mitigation. | Platform-level, no custom config. |
| 52 | JWT Authentication | ⚠️ N/A | No user login/auth on a marketing site → nothing to protect with JWT. | Applicable only if a login/portal is added. |
| 53 | Load Balancing | ✅ Platform | Vercel serverless auto-scales across its edge/CDN. | Platform-level. |

---

## 12. BUSINESS EMAILS

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 54 | Email Accounts | 🔑 Owner | **info@apexnovalogistics.com** exists on `mail.apexnovalogistics.com`. | Mailbox count/creation is on the mail-hosting provider (client-owned). |
| 55 | Email Admin Access | 🔑 Owner | Webmail: `https://mail.apexnovalogistics.com/`. | Owned by client/mail provider. |
| 56 | Email Testing | ✅ Done | Website forms deliver to that inbox — **verified** (test mails sent & accepted). | — |

---

## 13. GOOGLE & SOCIAL MEDIA

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 57 | Google Business Profile | 🔑 Owner | GBP listing exists ("APEXNOVA LOGISTICS INDIA PRIVATE LIMITED") — embedded on site (map + directions). | Owner/primary access = client. |
| 58 | Search Console | ⚠️ Gap | Same as #46 — not yet verified. | 🔑 client Google account needed. |
| 59 | Knowledge Panel | ⛔/🔑 | Not controllable from website. | Depends on GBP + PR. |
| 60 | Facebook | ✅ linked / 🔑 access | Linked site-wide: facebook.com/apexnovalogistics | Admin rights = client. |
| 61 | Instagram | ✅ linked / 🔑 access | instagram.com/apexnovalogistics | Admin rights = client. |
| 62 | LinkedIn | ✅ linked / 🔑 access | linkedin.com/company/apexnova-logistics-pvt-ltd | Admin rights = client. |
| 63 | Twitter/X | ✅ linked / 🔑 access | x.com/apexnova0 | Admin rights = client. |

---

## 14. NEWS PUBLICATION (items 64–67)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 64–67 | Daily Hunt / Entrepreneur Hunt / INC91 / Hindustan Bytes | ⛔ Separate | PR deliverable — not part of website build. |

---

## 15. SOCIAL MEDIA POSTING (items 68–69)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 68 | Festive Posts (30) | ⛔ Separate | Design/marketing deliverable. |
| 69 | Content Calendar | ⛔ Separate | Marketing deliverable. |

---

## 16. MOBILE APP (items 70–71)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 70 | APK File | ⛔ Separate | **No mobile app built.** The site is a responsive web app (installable as a PWA via the manifest, but no native APK). |
| 71 | Mobile Login | ⛔ Separate | — |

---

## 17. TRADEMARK (items 72–73)

| # | Deliverable | Status | Notes |
|---|---|---|---|
| 72 | TM Application | ⛔ Separate | Legal/IP deliverable — not website scope. |
| 73 | Class Details | ⛔ Separate | — |

---

## 18. AMC & FINAL HANDOVER

| # | Deliverable | Status | Answer / Proof | Notes |
|---|---|---|---|---|
| 74 | AMC Agreement | 🔑 Owner | Business document. | Vendor/client to sign. |
| 75 | Domain Credentials | 🔑 Owner | Domain DNS on nameservers `ns1/ns2.webel.io`; A/`www` → Vercel. | Registrar login = owner. |
| 76 | Hosting Credentials | 🔑 Owner | Vercel project `apex-nova`. | Transfer/confirm account. |
| 77 | CRM Credentials | ⛔ N/A | No CRM delivered. | — |
| 78 | HRM Credentials | ⛔ N/A | No HRM delivered. | — |
| 79 | Email Credentials | 🔑 Owner | `info@apexnovalogistics.com` on mail.apexnovalogistics.com. | Client-owned. |
| 80 | Source Files | ✅ Done | GitHub: **Sedawk-Dynamics/apex-nova** (full Next.js source). | Ownership transfer = 🔑. |
| 81 | Website Backup | ✅ Done | Git history + Vercel deployment snapshots (instant rollback). | — |
| 82 | Renewal Schedule | 🔑 Owner | Domain renewal (registrar) + Vercel plan. | — |
| 83 | Final Handover Letter | 🔑 Owner | Business document. | — |
| 84 | Ownership Declaration | 🔑 Owner | Business document. | — |

---

## Summary — what's DONE vs. OPEN (website only)

**✅ Delivered & verified (website):** Live URL, React/Next.js platform, Contact + multi-step Quote forms emailing info@ (verified), WhatsApp + Call buttons, mobile responsive, source in GitHub, SEO (meta/JSON-LD/sitemap/robots), SSL/HTTPS, platform DDoS + load balancing, social profiles linked, business-email integration tested, logo (PNG) + favicon.

**✅ Recently completed:** Policy pages — Terms (`/terms`), Privacy (`/privacy`), Refund (`/refund`), Cookie (`/cookies`) — built, linked in the footer sitewide + form consent text, and added to the sitemap (items 39–42). Popup (item 7) marked **not needed** by client.

**⚠️ Website-scope gaps I can close on request:**
- Search Console verification + sitemap submission — items 46/58 (need client's Google account)
- Additional pages to reach the quoted 17 — item 4
- Vector logo files — item 15 (from designer)

**⛔ Not part of the website build (separate deliverables in the Digital Kit):** VPS server, CRM/ERP, GST software, HRM, WhatsApp Business API, News/PR articles, social-media posting, company profile & print design, mobile APK, trademark. These must be confirmed with whoever quoted the full kit.

**🔑 Owner/client actions for handover:** account/ownership transfers and credential sheets for domain, Vercel, email, Google Business, and social profiles; AMC + handover letter + ownership declaration documents.
