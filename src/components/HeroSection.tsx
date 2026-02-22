import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="IronForge Fitness gym interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    </div>
    <div className="container relative z-10 text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/60 mb-6 font-body">
          Indiranagar • Bangalore
        </p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-hero font-heading text-white mb-6"
      >
        IronForge Fitness
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-white/70 max-w-lg mx-auto mb-10 font-body font-light"
      >
        Train with discipline. Build real strength.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#classes"
          className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Explore Programs
        </a>
        <a
          href="#contact"
          className="border border-white/30 text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Book Free Trial
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
