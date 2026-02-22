import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "1200+", label: "Active Members" },
  { number: "8", label: "Certified Trainers" },
  { number: "5", label: "Years in Indiranagar" },
  { number: "50+", label: "Strength & Cardio Machines" },
];

const StatsSection = () => (
  <section className="py-20 md:py-28 border-b border-border">
    <AnimatedSection className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">{stat.number}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

export default StatsSection;
