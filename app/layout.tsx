import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ToastManager from "@/components/ui/ToastManager";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import PageTransition from "@/components/layout/PageTransition";
import ProgressBar from "@/components/ui/ProgressBar";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.apexnovalogistics.com";
const PHONE = "+919560639966";
const EMAIL = "info@apexnovalogistics.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apexnova Logistics | Reliable Freight & Pan-India Transport Services",
    template: "%s | Apexnova Logistics",
  },
  description:
    "Apexnova Logistics India Pvt Ltd delivers reliable, secure, and cost-effective freight & supply chain solutions across India. FTL, PTL, NCR local, corporate logistics & on-demand transport — driven by reliability, powered by trust.",
  keywords: [
    "Apexnova Logistics",
    "logistics company India",
    "freight forwarding India",
    "pan india transport",
    "FTL services",
    "PTL services",
    "NCR logistics",
    "Greater Noida logistics",
    "supply chain India",
    "warehousing",
    "express cargo",
    "corporate logistics",
  ],
  authors: [{ name: "Apexnova Logistics India Pvt Ltd" }],
  creator: "Apexnova Logistics India Pvt Ltd",
  publisher: "Apexnova Logistics India Pvt Ltd",
  alternates: {
    canonical: SITE_URL,
  },
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
    siteName: "Apexnova Logistics",
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
    title: "Apexnova Logistics | Reliable Pan-India Freight",
    description:
      "FTL, PTL, NCR local & corporate logistics across India. Get a free quote within 2 hours.",
    images: ["/images/hero-truck.jpg"],
  },
  icons: {
    icon: "/images/apex-nova.png",
    shortcut: "/images/apex-nova.png",
    apple: "/images/apex-nova.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "Logistics & Transportation",
  verification: {
    // Add your Google Search Console verification token here once set up:
    // google: "your-google-verification-token",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1D4A" },
  ],
};

// Organization / LocalBusiness JSON-LD schema for rich Google results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Apexnova Logistics India Pvt Ltd",
  alternateName: "Apexnova Logistics",
  url: SITE_URL,
  logo: `${SITE_URL}/images/apex-nova.png`,
  image: `${SITE_URL}/images/hero-truck.jpg`,
  description:
    "Apexnova Logistics India Pvt Ltd is a dynamic and fast-growing logistics & supply chain company delivering reliable freight, FTL, PTL, NCR local, and corporate transport services across India.",
  telephone: PHONE,
  email: EMAIL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Greater Noida West, Sector-1",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201306",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.567087,
    longitude: 77.348626,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    // Add real social links once available:
    // "https://www.linkedin.com/company/apexnova-logistics",
    // "https://www.facebook.com/apexnovalogistics",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
