import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-card"
          : "bg-black/10 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-sm text-primary-foreground shadow-md group-hover:scale-105 transition-transform">
            IF
          </span>
          <span className={`font-heading font-bold text-[17px] tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}>
            IronForge
            <span className={`font-normal ml-0.5 ${scrolled ? "text-muted-foreground" : "text-white/60"}`}>Fitness</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              scrolled
                ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                : "text-white/50 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#membership"
            className={`text-[13px] font-medium rounded-full px-5 py-2 border transition-colors ${
              scrolled
                ? "border-border text-foreground hover:bg-muted"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
          >
            Plans
          </a>
          <a
            href="#contact"
            className="text-[13px] font-medium bg-primary text-primary-foreground rounded-full px-5 py-2 hover:brightness-110 transition-all shadow-md"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-full flex items-center justify-center ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation"
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border"
        >
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center bg-primary text-primary-foreground rounded-full px-5 py-3 font-medium"
            >
              Book Free Trial
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
