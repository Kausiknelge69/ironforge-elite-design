import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym access on weekdays", "Cardio & strength floor", "Locker & shower access", "Form checks from floor trainers"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹1,799",
    features: ["All Basic benefits", "Unlimited group classes", "Personalised workout plan", "Monthly progress check-in"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹2,999",
    features: ["All Standard benefits", "1:1 personal training", "Nutrition guidance", "Priority support & booking"],
    highlighted: false,
  },
];

const MembershipSection = () => (
  <section id="membership" className="py-28 md:py-40">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-section font-heading text-foreground mb-5">
          Memberships that stay realistic
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Simple monthly plans for people who train regularly.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.name} delay={i * 0.1}>
            <div
              className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-500 ${
                plan.highlighted
                  ? "bg-foreground text-background ring-2 ring-primary shadow-elevated scale-[1.02]"
                  : "bg-card shadow-card hover:shadow-card-hover border border-border/50"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block self-start text-[11px] tracking-[0.2em] uppercase text-primary font-bold mb-5">
                  Recommended
                </span>
              )}
              <h3 className={`font-heading font-bold text-xl mb-2 ${plan.highlighted ? "" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className="mb-8">
                <span className={`text-4xl font-heading font-extrabold ${plan.highlighted ? "" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "opacity-50" : "text-muted-foreground"}`}>/month</span>
              </p>
              <ul className="space-y-3.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-start gap-2.5 ${plan.highlighted ? "opacity-75" : "text-muted-foreground"}`}>
                    <span className="text-primary mt-0.5 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center text-sm font-semibold rounded-full py-3.5 transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.highlighted ? "Get started" : "Enquire"}
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MembershipSection;
