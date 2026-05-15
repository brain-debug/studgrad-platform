import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111812] text-[#FDFBF7] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Leaf size={24} />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                YARP Foods
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              For Quality and Affordable Flour, Look to the Baker's Saviour. Premium agro-processing from Ghana.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-semibold">
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-semibold">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-semibold">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors font-semibold">
                YT
              </a>
              {/* TikTok Icon Using SVG since Lucide doesn't have a perfect TikTok icon by default */}
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Reach Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>UENR Sunyani, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@yarpfoodsltd.com" className="hover:text-primary transition-colors">
                  info@yarpfoodsltd.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+233595967300" className="hover:text-primary transition-colors">
                  +233 595 967 300
                </a>
              </li>
            </ul>
          </div>

          {/* Media */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Media</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* About Developer */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Developer</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-white font-medium mb-1">Macvans Devnest</span>
                <a href="mailto:info@macvansdevnest.com" className="hover:text-primary transition-colors block mb-1">
                  info@macvansdevnest.com
                </a>
                <a href="tel:+233553477497" className="hover:text-primary transition-colors">
                  +233 55 347 7497
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2023 YARP Foods Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
