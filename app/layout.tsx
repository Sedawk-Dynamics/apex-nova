import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/layout/Navbar";
import Footer from "@/components/sections/layout/Footer";

import ToastManager from "@/components/ui/ToastManager";
import FloatingActionButtons from "@/components/sections/layout/FloatingActionButtons";
import PageTransition from "@/components/sections/layout/PageTransition";
import ProgressBar from "@/components/ui/ProgressBar";
import dynamic from "next/dynamic";

import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  PHONE,
  EMAIL,
  CORPORATE_ADDRESS,
  GEO,
  FOUNDER,
  SAME_AS,
} from "@/lib/site";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apexnova Logistics | Reliable Freight & Pan-India Transport Services",
    template: "%s | Apexnova Logistics",
  },
  description:
    "Apexnova Logistics delivers reliable FTL, PTL, NCR local & corporate freight services across India. Get a free quote in 2 hours. Call +91 9560639966.",
  keywords: [
    "Apexnova Logistics",
    "logistics company NCR",
    "logistics company Greater Noida",
    "logistics company Noida",
    "FTL services India",
    "Full Truck Load India",
    "PTL services India",
    "Part Load transportation",
    "pan India transport company",
    "NCR local logistics",
    "NCR last mile delivery",
    "corporate logistics India",
    "on-demand transport India",
    "freight forwarding India",
    "vehicle placement Noida",
    "supply chain partner India",
  ],
  authors: [{ name: LEGAL_NAME }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Apexnova Logistics | Reliable Freight & Pan-India Transport Services",
    description:
      "Driven by Reliability, Powered by Trust. Pan-India freight, NCR local delivery, FTL/PTL, and corporate logistics solutions.",
    images: [
      {
        url: "/images/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Apexnova Logistics — Freight truck on Indian highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexnova0",
    creator: "@apexnova0",
    title: "Apexnova Logistics | Reliable Pan-India Freight",
    description:
      "FTL, PTL, NCR local & corporate logistics across India. Get a free quote within 2 hours.",
    images: ["/images/hero-truck.jpg"],
  },
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  // Favicon & touch icons are provided by app/icon.png and app/apple-icon.png
  // (Next.js file convention) — no manual `icons` block needed.
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "Logistics & Transportation",
  verification: {
    // google: "your-google-verification-token",
  },
};

// WCAG: removed maximumScale to allow user pinch-zoom
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1D4A" },
  ],
};

// Organization + LocalBusiness + MovingCompany JSON-LD schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "MovingCompany"],
  "@id": `${SITE_URL}#organization`,
  name: LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/apexnova-logo.png`,
  image: `${SITE_URL}/images/hero-truck.jpg`,
  description:
    "NCR-based, pan-India freight & logistics company offering FTL, PTL, corporate logistics, NCR local delivery and on-demand transport.",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "$$",
  address: { "@type": "PostalAddress", name: "Corporate Office", ...CORPORATE_ADDRESS },
  geo: { "@type": "GeoCoordinates", ...GEO },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "AdministrativeArea", name: "NCR" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Greater Noida" },
    { "@type": "City", name: "Gurgaon" },
  ],
  founder: { "@type": "Person", name: FOUNDER.name, jobTitle: FOUNDER.jobTitle },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: SAME_AS,
};

// WebSite schema for sitelinks search box potential
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "NCR-based pan-India freight & logistics — FTL, PTL, corporate logistics, NCR local delivery, on-demand transport.",
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <head>
        {/* Preconnects to speed up Google Maps iframe + Unsplash CDN handshake */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/*
          GA4 / GTM placeholder — uncomment and fill GA_MEASUREMENT_ID when the
          client provides one. Loaded with strategy="afterInteractive" so it
          never blocks LCP.

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', { anonymize_ip: true });
          `}</Script>
        */}
      </head>
      <body className={`${jakarta.className} antialiased`}>
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <CustomCursor />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <ToastManager />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
