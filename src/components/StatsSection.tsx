import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { target: 1200, suffix: "+", label: "Active Members" },
  { target: 8, suffix: "", label: "Certified Trainers" },
  { target: 5, suffix: "", label: "Years in Indiranagar" },
  { target: 50, suffix: "+", label: "Strength & Cardio Machines" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

const StatItem = ({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(target, 2200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="text-4xl md:text-6xl font-heading font-extrabold text-foreground mb-2 tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} {...stat} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
