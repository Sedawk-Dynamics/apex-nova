import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1D4A] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 */}
        <div className="space-y-6">
          <Link href="/" className="inline-block bg-white p-2 rounded-xl mb-4">
            <img src="/images/apex-nova.png" alt="Apexnova Logistics" className="h-14 w-auto object-contain" />
          </Link>
          <p className="text-sm leading-relaxed">
            Fast, Secure & Reliable Logistics Across India. Delivering your business, on time – every time.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/tracking" className="hover:text-white transition-colors">Tracking</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-6">Our Services</h3>
          <ul className="space-y-3">
            <li><Link href="/services" className="hover:text-white transition-colors">Local Transport</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Pan India Delivery</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Warehousing</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Express Cargo</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="shrink-0 mt-1" size={18} />
              <span>123 Business Park, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="shrink-0" size={18} />
              <span>+91 9876543210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="shrink-0" size={18} />
              <span>info@apexnova.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 pt-8 text-center text-[13px]">
          © {new Date().getFullYear()} ApexNova Logistics India Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
