import { useState } from "react";
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

  return (
    <section className="py-24 md:py-36 bg-card">
      <div className="container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-section font-heading text-foreground mb-4">
            Members who show up, week after week
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
                "{testimonials[active].text}"
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].name} • {testimonials[active].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
