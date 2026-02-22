import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "-8 kg", label: "Body weight" },
  { number: "+40 kg", label: "Added to deadlift" },
  { number: "3×", label: "Sessions every week" },
];

const TransformationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 md:py-40 bg-card" ref={ref}>
      <div className="container">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-8">
                Member transformation
              </span>
              <h2 className="text-section font-heading text-foreground mb-8">
                "I stopped restarting every three months."
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                Raj moved from skipping workouts to training three times a week. In 9 months he
                dropped 8 kg, added strength on all his main lifts and now plans his week around
                training instead of fitting it in at the end.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Raj, 34 · Marketing professional in Indiranagar
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="bg-background rounded-2xl p-6 text-center shadow-card border border-border/50"
                >
                  <p className="text-2xl md:text-3xl font-heading font-extrabold text-primary mb-2">{stat.number}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransformationSection;
