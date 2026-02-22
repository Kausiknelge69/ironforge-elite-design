import AnimatedSection from "./AnimatedSection";

const programs = [
  {
    title: "Strength Training",
    description: "Barbell, dumbbell and machine work focused on form, progression and safety.",
  },
  {
    title: "Group Classes",
    description: "Small-group sessions that mix conditioning, mobility and strength work.",
  },
  {
    title: "Personal Coaching",
    description: "1:1 guidance for specific goals, timelines or movement limitations.",
  },
];

const TrainingSection = () => (
  <section className="py-24 md:py-36">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-section font-heading text-foreground mb-4">
          Training built around real life
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Strength, group sessions and coaching that fit into a busy week.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program, i) => (
          <AnimatedSection key={program.title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 md:p-10 h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
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
