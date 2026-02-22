import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "-8 kg", label: "Body weight" },
  { number: "+40 kg", label: "Added to deadlift" },
  { number: "3x", label: "Sessions every week" },
];

const TransformationSection = () => (
  <section className="py-24 md:py-36 bg-card">
    <div className="container">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-block text-xs tracking-widest uppercase text-primary font-medium mb-6">
              Member transformation
            </span>
            <h2 className="text-section font-heading text-foreground mb-6">
              "I stopped restarting every three months."
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 leading-relaxed">
              Raj moved from skipping workouts to training three times a week. In 9 months he
              dropped 8 kg, added strength on all his main lifts and now plans his week around
              training instead of fitting it in at the end.
            </p>
            <p className="text-sm text-muted-foreground">
              Raj, 34 • Marketing professional in Indiranagar
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background rounded-2xl p-6 text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TransformationSection;
