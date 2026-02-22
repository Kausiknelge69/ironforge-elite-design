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
  <section className="py-28 md:py-40">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-section font-heading text-foreground mb-5">
          Train in a world-class facility.
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Strength racks, platforms, turf and recovery spaces in one focused floor.
        </p>
      </AnimatedSection>

      <div className="space-y-10">
        {facilities.map((f, i) => (
          <AnimatedSection key={f.caption} delay={i * 0.12}>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src={f.img}
                alt={f.caption}
                className="w-full h-[320px] md:h-[520px] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-sm md:text-base text-white/90 font-medium">{f.caption}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitySection;
