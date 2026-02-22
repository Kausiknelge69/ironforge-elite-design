import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <AnimatedSection>
            <h2 className="text-section font-heading text-foreground mb-6">
              Come see the floor in person
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Drop in for a quick tour and a chat with our coaches.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">IronForge Fitness, Indiranagar, Bangalore</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Contact</h3>
                <p className="text-muted-foreground">
                  +91 90000 00000<br />
                  hello@ironforgefitness.in
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Open 5 AM – 11 PM, all 7 days</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="bg-background rounded-2xl p-8 md:p-10 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-2xl font-heading font-semibold text-foreground mb-2">Thank you!</p>
                  <p className="text-muted-foreground">We'll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 md:p-10 space-y-5">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Send us a quick message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">What are you looking for?</label>
                  <select className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>General membership</option>
                    <option>Personal training</option>
                    <option>Group classes</option>
                    <option>Corporate plan</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals"
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-full py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
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
