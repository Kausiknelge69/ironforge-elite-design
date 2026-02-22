import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <h2 className="text-section font-heading text-foreground mb-8">
              Come see the floor in person
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10">
              Drop in for a quick tour and a chat with our coaches.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1.5">Location</h3>
                <p className="text-muted-foreground">IronForge Fitness, Indiranagar, Bangalore</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1.5">Contact</h3>
                <p className="text-muted-foreground">
                  +91 90000 00000<br />
                  hello@ironforgefitness.in
                </p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1.5">Hours</h3>
                <p className="text-muted-foreground">Open 5 AM – 11 PM, all 7 days</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="bg-background rounded-2xl p-10 flex items-center justify-center min-h-[360px] shadow-card border border-border/50">
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-foreground mb-3">Thank you!</p>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 md:p-10 space-y-5 shadow-card border border-border/50">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">Send us a quick message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-muted border-0 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full bg-muted border-0 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Interest</label>
                  <select className="w-full bg-muted border-0 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow">
                    <option>General membership</option>
                    <option>Personal training</option>
                    <option>Group classes</option>
                    <option>Corporate plan</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1.5 block uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals"
                    className="w-full bg-muted border-0 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-full py-3.5 text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  Submit enquiry
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
