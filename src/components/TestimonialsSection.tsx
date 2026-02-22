import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "I work long hours in Domlur and this is the only hour of my day that's just for me. The coaches remember exactly what I'm working on.",
    name: "Rohan, 32",
    role: "Product Manager",
  },
  {
    text: "I started with zero strength training. The team eased me in slowly and made sure I never felt out of place on the floor.",
    name: "Harini, 28",
    role: "Graphic Designer",
  },
  {
    text: "The mix of HIIT, yoga and strength fits my week perfectly. I don't have to think, I just show up and follow the plan.",
    name: "Siddharth, 35",
    role: "Consultant",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-28 md:py-40 bg-card">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-section font-heading text-foreground mb-4">
            Members who show up, week after week
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-xl md:text-[26px] text-foreground font-light leading-relaxed mb-10 text-balance">
                  "{testimonials[active].text}"
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {testimonials[active].name} · {testimonials[active].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2.5 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative w-2 h-2 rounded-full bg-muted-foreground/20 overflow-hidden"
                aria-label={`Show testimonial ${i + 1}`}
              >
                {i === active && (
                  <motion.span
                    layoutId="testimonial-dot"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
