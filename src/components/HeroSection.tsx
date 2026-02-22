import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image with brightness adjustment */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="IronForge Fitness gym interior"
        className="w-full h-full object-cover brightness-[0.35]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
    </div>

    <div className="container relative z-10 text-center py-40">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/40 mb-8 font-body font-medium"
      >
        Indiranagar · Bangalore
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-hero font-heading text-white mb-8 text-balance"
      >
        IronForge Fitness
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.65 }}
        className="text-lg md:text-xl text-white/50 max-w-md mx-auto mb-12 font-body font-light leading-relaxed"
      >
        Train with discipline.<br />Build real strength.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.85 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#classes"
          className="bg-primary text-primary-foreground rounded-full px-9 py-3.5 text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
        >
          Explore Programs
        </a>
        <a
          href="#contact"
          className="border border-white/20 text-white/80 rounded-full px-9 py-3.5 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
        >
          Book Free Trial
        </a>
      </motion.div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
