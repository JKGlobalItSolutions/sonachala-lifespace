import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/lg1.png";

const Footer = () => (
  <footer className="bg-[#041a15] border-t border-[#0B3D31]/20 text-white">
    <div className="container mx-auto px-4 py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Brand Details */}
        <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="SONACHALA Logo" className="h-[55px] w-auto object-contain flex-shrink-0" />
              <div>
                <p className="font-heading text-lg font-bold text-white leading-tight">SONACHALA LIFESPACES</p>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-green-100/60 mt-0.5">Interior & Exterior</p>
              </div>
            </div>
            <p className="text-sm text-green-100/75 leading-relaxed">
              Bespoke interior and exterior architectural design services built for modern luxury homes and commercial spaces.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md shadow-soft">
          <h4 className="font-heading font-semibold text-lg text-white mb-5 border-b border-white/10 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm text-green-100/70">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="inline-block hover:text-white transition-colors duration-250 hover:translate-x-1"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 backdrop-blur-md shadow-soft">
          <h4 className="font-heading font-semibold text-lg text-white mb-5 border-b border-white/10 pb-2">Contact Details</h4>
          <div className="space-y-4 text-sm text-green-100/75">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-primary-soft shrink-0" size={18} />
              <span className="leading-relaxed">Annai Parvathi, Opp. Collector Office, Vengikkal, Tiruvannamalai - 606604</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-primary-soft shrink-0" size={18} />
              <span>+91 8608601049, <br />+91 8608600772</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 text-primary-soft shrink-0" size={18} />
              <a href="mailto:hrifyinteriorexterior@gmail.com" className="hover:underline">
                hrifyinteriorexterior@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center">
        <p className="text-xs text-green-100/50">© {new Date().getFullYear()} SONACHALA Interior & Exterior. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
