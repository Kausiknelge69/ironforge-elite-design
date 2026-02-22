import AnimatedSection from "./AnimatedSection";

const schedule = [
  { time: "6:00 AM", mon: "Strength", tue: "Yoga", wed: "Strength", thu: "Yoga", fri: "Strength", sat: "Cardio Blast" },
  { time: "7:30 AM", mon: "HIIT", tue: "Zumba", wed: "HIIT", thu: "Zumba", fri: "HIIT", sat: "Yoga" },
  { time: "6:30 PM", mon: "Cardio Blast", tue: "Strength", wed: "Cardio Blast", thu: "Strength", fri: "Cardio Blast", sat: "Zumba" },
  { time: "8:00 PM", mon: "Yoga", tue: "HIIT", wed: "Yoga", thu: "HIIT", fri: "Yoga", sat: "Strength" },
];

const typeColors: Record<string, string> = {
  Strength: "bg-primary/10 text-primary",
  HIIT: "bg-red-500/10 text-red-500",
  Yoga: "bg-emerald-500/10 text-emerald-600",
  Zumba: "bg-pink-500/10 text-pink-500",
  "Cardio Blast": "bg-blue-500/10 text-blue-500",
};

const ScheduleSection = () => (
  <section id="classes" className="py-24 md:py-36">
    <div className="container">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-section font-heading text-foreground mb-4">
          Programs and weekly schedule
        </h2>
        <p className="text-body-lg text-muted-foreground">
          HIIT, Yoga, CrossFit-inspired strength work and conditioning sessions through the week.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.entries(typeColors).map(([name, cls]) => (
            <span key={name} className={`px-3 py-1 rounded-full text-xs font-medium ${cls}`}>
              {name}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground p-4">Time</th>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                  <th key={d} className="text-left text-xs font-medium text-muted-foreground p-4">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time} className="border-b border-border last:border-0">
                  <td className="p-4 text-sm font-medium text-foreground whitespace-nowrap">{row.time}</td>
                  {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cls, i) => (
                    <td key={i} className="p-4">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${typeColors[cls] || ""}`}>
                        {cls}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ScheduleSection;
