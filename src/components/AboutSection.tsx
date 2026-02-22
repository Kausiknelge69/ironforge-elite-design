import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="py-28 md:py-40 bg-card">
    <div className="container">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-section font-heading text-foreground mb-8">
              A neighbourhood gym built for busy weeks
            </h2>
            <p className="text-body-lg text-muted-foreground mb-5 leading-relaxed">
              IronForge Fitness opened in 2018 with a simple idea: give working professionals in
              Indiranagar a gym that respects their time and energy.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Morning lifters, late-night coders, weekend beginners — our floor is full of people who
              treat training as a part of their week, not a phase.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed mb-10">
              "No sales pressure, no noise. Just a well-run gym, good equipment and coaches who notice
              when you're ready for a little more weight on the bar."
            </p>
            <div className="flex gap-8 text-sm text-muted-foreground font-medium">
              <span>Since 2018</span>
              <span>Indiranagar · Bangalore</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
