import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";

const PREVIEW_COUNT = 8;
const crew = Array.from({ length: PREVIEW_COUNT }, (_, i) => ({
  name: `Crew Member ${i + 1}`,
  role: "Volunteer",
}));

const CrewSection = () => (
  <section id="crew" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
        Meet the Crew
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        The hands, hearts, and minds behind every Greencaps drive.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {crew.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <User className="w-9 h-9 text-muted-foreground" />
            </div>
            <h3 className="font-medium">{m.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/crew"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          View more
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default CrewSection;