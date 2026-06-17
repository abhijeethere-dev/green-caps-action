import { Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";

type Member = { name: string; designation: string };

const mentors: Member[] = [
  { name: "Sita Gupta", designation: "Mentor" },
  { name: "Gaurav Anand", designation: "Mentor" },
];

const directors: Member[] = [
  { name: "Alok Sharma", designation: "Director" },
  { name: "Prem Kumar", designation: "Director" },
  { name: "Abhijeet Kumar", designation: "Director" },
];

const coordinators: Member[] = Array.from({ length: 4 }, (_, i) => ({
  name: `Coordinator ${i + 1}`,
  designation: "Coordinator",
}));

const mediaTeam: Member[] = Array.from({ length: 4 }, (_, i) => ({
  name: `Media Member ${i + 1}`,
  designation: "Media Team",
}));

const medicalTeam: Member[] = Array.from({ length: 4 }, (_, i) => ({
  name: `Medical Member ${i + 1}`,
  designation: "Medical Team",
}));

const logisticsTeam: Member[] = Array.from({ length: 4 }, (_, i) => ({
  name: `Logistics Member ${i + 1}`,
  designation: "Logistics Team",
}));

const groups: { title: string; members: Member[] }[] = [
  { title: "Mentors", members: mentors },
  { title: "Directors", members: directors },
  { title: "Coordinators", members: coordinators },
  { title: "Media Team", members: mediaTeam },
  { title: "Medical Team", members: medicalTeam },
  { title: "Logistics Team", members: logisticsTeam },
];

const MemberCard = ({ m }: { m: Member }) => (
  <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-28 h-28 rounded-full bg-primary/10 border-4 border-primary/20 group-hover:border-primary/60 flex items-center justify-center mb-4 overflow-hidden transition-colors">
      <User className="w-14 h-14 text-primary/60" />
    </div>
    <h3 className="font-semibold text-base">{m.name}</h3>
    <p className="text-xs font-medium text-primary uppercase tracking-wide mt-1">
      {m.designation}
    </p>
  </div>
);

const CrewPage = () => (
  <main className="min-h-screen bg-background py-16">
    <div className="container mx-auto px-4">
      <Link
        to="/#crew"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
        Meet the Full Team
      </h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-20">
        The mentors, directors, coordinators, and specialised teams powering every Greencaps initiative.
      </p>

      <div className="space-y-20">
        {groups.map((g) => (
          <section key={g.title}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">{g.title}</h2>
              <span className="flex-1 h-px bg-primary/20" />
              <span className="text-sm text-muted-foreground">{g.members.length}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {g.members.map((m, i) => (
                <MemberCard key={i} m={m} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </main>
);

export default CrewPage;