import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/lg1.png";
import logo2 from "@/assets/logo2.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
] as const;

const THEME_VARIANTS = {
  nav: {
    base: "fixed inset-x-0 top-0 z-50 transition-all duration-300",
    default: "bg-transparent py-4",
    scrolled: "bg-white/90 backdrop-blur-md border-b border-[#0B3D31]/10 py-3 shadow-soft",
  },
  brand: {
    label: {
      base: "font-body text-[10px] uppercase tracking-[0.35em] transition-colors duration-300",
      default: "text-white",
      scrolled: "text-[#0B3D31]",
    },
    title: {
      base: "font-heading text-sm font-semibold transition-colors duration-300",
      default: "text-white",
      scrolled: "text-[#0b3e32] font-bold",
    },
  },
  desktopLink: {
    base: "font-body text-sm font-medium transition-all duration-250 relative py-1",
    state: {
      active: {
        default: "text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white",
        scrolled: "text-[#0B3D31] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0B3D31]",
      },
      inactive: {
        default: "text-white/85 hover:text-white hover:opacity-100",
        scrolled: "text-gray-700 hover:text-[#0B3D31]",
      },
    },
  },
  mobile: {
    menu: {
      default: "lg:hidden border-t overflow-hidden backdrop-blur-xl transition-colors duration-300 bg-white/95 border-[#0B3D31]/10",
      scrolled: "lg:hidden border-t overflow-hidden backdrop-blur-xl transition-colors duration-300 bg-white/95 border-[#0B3D31]/10",
    },
    link: {
      state: {
        active: {
          default: "block rounded-2xl px-4 py-3 font-body text-sm transition-all duration-200 bg-[#0B3D31]/10 text-[#0B3D31] font-semibold",
          scrolled: "block rounded-2xl px-4 py-3 font-body text-sm transition-all duration-200 bg-[#0B3D31]/10 text-[#0B3D31] font-semibold",
        },
        inactive: {
          default: "block rounded-2xl px-4 py-3 font-body text-sm transition-all duration-200 text-gray-700 hover:bg-[#0B3D31]/5 hover:text-[#0B3D31]",
          scrolled: "block rounded-2xl px-4 py-3 font-body text-sm transition-all duration-200 text-gray-700 hover:bg-[#0B3D31]/5 hover:text-[#0B3D31]",
        },
      },
    },
    toggle: {
      default: "lg:hidden transition-colors duration-300 text-white hover:text-white/80 p-2",
      scrolled: "lg:hidden transition-colors duration-300 text-[#0B3D31] hover:text-[#0B3D31]/80 p-2",
    },
  },
} as const;

type ThemeMode = keyof typeof THEME_VARIANTS.nav;
type LinkState = keyof typeof THEME_VARIANTS.desktopLink.state;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll tracking ---------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change --------------------------------------
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const currentPath = location.pathname;
  const themeMode = (scrolled ? "scrolled" : "default") as ThemeMode;

  const navbarClasses = `${THEME_VARIANTS.nav.base} ${THEME_VARIANTS.nav[themeMode]}`;
  const logoLabelClasses = `${THEME_VARIANTS.brand.label.base} ${THEME_VARIANTS.brand.label[themeMode]}`;
  const logoTitleClasses = `${THEME_VARIANTS.brand.title.base} ${THEME_VARIANTS.brand.title[themeMode]}`;
  const mobileMenuClasses = THEME_VARIANTS.mobile.menu[themeMode];
  const mobileToggleClasses = THEME_VARIANTS.mobile.toggle[themeMode];

  return (
    <nav className={navbarClasses}>
      {/* Brand + navigation wrapper */}
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-0">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={scrolled ? logo2 : logo} alt="SONACHALA" className="flex-shrink-0 h-[72px] w-auto object-contain" />
          <div className="hidden lg:block">
            <p className={logoTitleClasses}><b>SONACHALA LIFESPACES</b></p>
            <span className={logoLabelClasses}>Interior & Exterior</span>
          </div>
        </Link>

        {/* Desktop navigation links ------------------------------------------ */}
        <ul className="hidden lg:flex flex-wrap items-center gap-6">
          {navLinks.map((link) => {
            const linkState = (link.path === currentPath ? "active" : "inactive") as LinkState;
            const linkClasses = `${THEME_VARIANTS.desktopLink.base} ${THEME_VARIANTS.desktopLink.state[linkState][themeMode]}`;

            return (
              <li key={link.path}>
                <Link to={link.path} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/contact" className="btn-primary whitespace-nowrap">
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile menu trigger ------------------------------------------------- */}
        <button className={mobileToggleClasses} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation drawer ------------------------------------------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={mobileMenuClasses}
          >
            <ul className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => {
                const linkState = (link.path === currentPath ? "active" : "inactive") as LinkState;
                const mobileLinkClasses = THEME_VARIANTS.mobile.link.state[linkState][themeMode];

                return (
                  <li key={link.path}>
                    <Link to={link.path} className={mobileLinkClasses}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Get Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
