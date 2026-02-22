import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section className="py-28 md:py-40">
    <AnimatedSection className="container text-center">
      <h2 className="text-section font-heading text-foreground mb-5">
        Start your 3-day free trial.
      </h2>
      <p className="text-body-lg text-muted-foreground mb-12 max-w-md mx-auto">
        Visit the floor, meet the coaches and see if the space feels right.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contact"
          className="bg-primary text-primary-foreground rounded-full px-9 py-3.5 text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
        >
          Book Free Trial
        </a>
        <a
          href="#classes"
          className="border border-border text-foreground rounded-full px-9 py-3.5 text-sm font-medium hover:bg-muted transition-colors"
        >
          View class schedule
        </a>
      </div>
    </AnimatedSection>
  </section>
);

export default CTASection;
