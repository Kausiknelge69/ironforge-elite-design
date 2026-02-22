import AnimatedSection from "./AnimatedSection";

const programs = [
  {
    title: "Strength Training",
    description: "Barbell, dumbbell and machine work focused on form, progression and safety.",
    icon: "🏋️",
  },
  {
    title: "Group Classes",
    description: "Small-group sessions that mix conditioning, mobility and strength work.",
    icon: "👥",
  },
  {
    title: "Personal Coaching",
    description: "1:1 guidance for specific goals, timelines or movement limitations.",
    icon: "🎯",
  },
];

const TrainingSection = () => (
  <section className="py-28 md:py-40">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-section font-heading text-foreground mb-5">
          Training built around real life
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Strength, group sessions and coaching that fit into a busy week.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program, i) => (
          <AnimatedSection key={program.title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 md:p-10 h-full shadow-card hover:shadow-card-hover transition-all duration-500 group border border-border/50">
              <span className="text-3xl mb-6 block">{program.icon}</span>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TrainingSection;
