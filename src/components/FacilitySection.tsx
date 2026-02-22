import AnimatedSection from "./AnimatedSection";
import facilityStrength from "@/assets/facility-strength.jpg";
import facilityFunctional from "@/assets/facility-functional.jpg";
import facilityYoga from "@/assets/facility-yoga.jpg";

const facilities = [
  { img: facilityStrength, caption: "Strength floor — racks, platforms, free weights" },
  { img: facilityFunctional, caption: "Functional training — ropes, kettlebells, turf" },
  { img: facilityYoga, caption: "Recovery studio — yoga, mobility, mindfulness" },
];

const FacilitySection = () => (
  <section className="py-24 md:py-36">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-section font-heading text-foreground mb-4">
          Train in a world-class facility.
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Strength racks, platforms, turf and recovery spaces in one focused floor.
        </p>
      </AnimatedSection>

      <div className="space-y-8">
        {facilities.map((f, i) => (
          <AnimatedSection key={f.caption} delay={i * 0.1}>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={f.img}
                alt={f.caption}
                className="w-full h-[300px] md:h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-sm text-white/80">{f.caption}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitySection;
