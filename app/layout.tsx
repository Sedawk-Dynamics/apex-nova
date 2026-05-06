import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ToastManager from "@/components/ui/ToastManager";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import PageTransition from "@/components/layout/PageTransition";
import ProgressBar from "@/components/ui/ProgressBar";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apexnovalogistics.com"),
  title: "Apexnova Logistics | Reliable Freight & Logistics Services",
  description: "Apexnova Logistics is a dynamic and fast-growing logistics and supply chain company committed to delivering reliable, efficient, and cost-effective transportation solutions.",
  keywords: "logistics india, freight forwarding, pan india delivery, warehousing, express cargo, transport, apexnova logistics",
  openGraph: {
    title: "Apexnova Logistics",
    description: "Driven by Reliability, Powered by Trust",
    url: "https://www.apexnovalogistics.com",
    images: [{ url: "/og-image.jpg" }],
  },
  icons: {
    icon: "/images/apex-nova.png",
    shortcut: "/images/apex-nova.png",
    apple: "/images/apex-nova.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
