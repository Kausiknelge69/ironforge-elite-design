const Footer = () => (
  <footer className="border-t border-border py-20">
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div>
          <p className="font-heading font-bold text-foreground mb-3">
            IronForge<span className="text-muted-foreground font-normal ml-0.5">Fitness</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A steady training space for Bangalore professionals who want long-term results.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Visit</h4>
          <p className="text-sm text-muted-foreground">
            Indiranagar, Bangalore<br />Open all 7 days
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Contact</h4>
          <p className="text-sm text-muted-foreground">
            +91 90000 00000<br />hello@ironforgefitness.in
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Follow</h4>
          <p className="text-sm text-muted-foreground">@ironforgefitness</p>
        </div>
      </div>
      <div className="border-t border-border pt-8">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} IronForge Fitness. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
