import AnimatedSection from "./AnimatedSection";

const trainers = [
  { name: "Arjun Mehta", role: "Strength Coach", bio: "Focuses on compound lifts, safe progression and keeping your numbers moving up." },
  { name: "Sneha Rao", role: "Yoga Trainer", bio: "Leads calm, steady classes that improve mobility, breathing and stress levels." },
  { name: "Rahul Shetty", role: "CrossFit Coach", bio: "Builds tough but achievable WODs that balance strength, conditioning and skill." },
  { name: "Kavya Nair", role: "Nutrition Coach", bio: "Helps you set up simple, sustainable eating habits that support your training." },
];

const TrainersSection = () => (
  <section id="trainers" className="py-24 md:py-36 bg-card">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-section font-heading text-foreground mb-4">
          Coaches who pay attention
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Small team, hand-picked for their ability to coach, not just lift.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((trainer, i) => (
          <AnimatedSection key={trainer.name} delay={i * 0.08}>
            <div className="bg-background rounded-2xl p-6 md:p-8 h-full">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-5">
                <span className="text-lg font-heading font-bold text-muted-foreground">
                  {trainer.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{trainer.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{trainer.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{trainer.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TrainersSection;
