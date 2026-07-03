import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { EMAIL, PHONE, PHONE_PLAIN, LEGAL_NAME } from "@/lib/site";

type LegalPageProps = {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
};

// Shared shell for policy/legal pages (Terms, Privacy, Refund, Cookie).
// Server component — no client JS needed for static legal content.
export default function LegalPage({ title, subtitle, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-deep pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-white/10 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-[14.5px] sm:text-base max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="inline-flex items-center gap-2 glass-dark text-white/85 text-[12.5px] font-medium px-4 py-1.5 rounded-full mt-5">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-orange">{title}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-[13px] text-gray-500 mb-8">Last updated: {lastUpdated}</p>

          <div className="legal-content">{children}</div>

          {/* Contact block */}
          <div className="mt-12 rounded-2xl border border-gray-100 bg-theme-light p-6 sm:p-7">
            <h2 className="text-navy-deep font-bold text-[17px] mb-2">Questions about this policy?</h2>
            <p className="text-gray-600 text-[14.5px] leading-relaxed mb-4">
              For any questions or requests regarding this policy, contact {LEGAL_NAME}:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy-deep hover:text-orange transition-colors"
              >
                <Mail size={15} className="text-orange" /> {EMAIL}
              </a>
              <a
                href={`tel:${PHONE_PLAIN}`}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy-deep hover:text-orange transition-colors"
              >
                <Phone size={15} className="text-orange" /> {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
