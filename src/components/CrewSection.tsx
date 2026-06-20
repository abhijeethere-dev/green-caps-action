import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Sparkles, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Mentor = {
  name: string;
  title: string;
  intro: string;
  bio: string;
};

const featured: Mentor = {
  name: "Gaurav Anand",
  title: "Mentor",
  intro:
    "Founder of a fellow NGO and a grassroots social worker whose guidance has shaped how Greencaps operates on the ground.",
  bio: "Gaurav Anand has been an invaluable mentor to Greencaps Foundation, guiding us with his extensive experience in grassroots social work and community engagement. As the founder of a fellow NGO, he brings practical insights and a deep understanding of on-ground challenges. His mentorship has helped us strengthen our field operations, build meaningful community connections, and approach our work with greater purpose and impact. We are grateful for his continuous support, encouragement, and leadership.",
};

const Avatar = ({ size }: { size: "lg" | "md" }) => (
  <div
    className={`${
      size === "lg" ? "w-48 h-48" : "w-32 h-32"
    } rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent border-4 border-primary/30 flex items-center justify-center mb-6 transition-colors overflow-hidden shadow-inner`}
  >
    <User className={`${size === "lg" ? "w-24 h-24" : "w-16 h-16"} text-primary/60`} />
  </div>
);

const CrewSection = () => {
  const [active, setActive] = useState<Mentor | null>(null);

  return (
    <section id="crew" className="py-24 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            <Sparkles size={14} /> Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Guiding the Mission
          </h2>
          <p className="text-muted-foreground">
            The mentors whose wisdom, experience, and belief shape every step Greencaps takes.
          </p>
        </div>

        {/* Featured mentor */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl" />
          <div className="relative group flex flex-col items-center text-center p-10 md:p-12 rounded-3xl bg-card border-2 border-primary/30 shadow-2xl hover:shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.35)] hover:-translate-y-1 transition-all duration-500">
            <span className="absolute top-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles size={12} /> Featured Mentor
            </span>
            <Avatar size="lg" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold">{featured.name}</h3>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mt-2">
              {featured.title}
            </p>
            <p className="text-base text-muted-foreground mt-5 leading-relaxed max-w-xl">
              {featured.intro}
            </p>
            <button
              onClick={() => setActive(featured)}
              className="mt-7 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Know More
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/crew"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            View Full Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <div className="animate-scale-in">
              <div className="flex flex-col items-center text-center">
                <Avatar size="md" />
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">{active.name}</DialogTitle>
                  <DialogDescription asChild>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {active.title}
                    </span>
                  </DialogDescription>
                </DialogHeader>
              </div>
              <div className="mt-6 rounded-xl bg-accent/40 border border-primary/20 p-5 relative">
                <Quote className="absolute -top-3 left-4 w-6 h-6 text-primary bg-background rounded-full p-1" />
                <p className="text-sm text-foreground/80 leading-relaxed">{active.bio}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CrewSection;