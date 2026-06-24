import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Search, Mail, Instagram, Linkedin, Quote } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import gauravHeadshot from "@/assets/gaurav-anand-headshot.jpg.asset.json";

type Department =
  | "Mentor"
  | "Director"
  | "Coordinator"
  | "Media Team"
  | "Medical Team"
  | "Logistics Team";

type Member = {
  name: string;
  designation: Department;
  message: string;
  responsibilities: string[];
  bio?: string;
  image?: string;
};

const members: Member[] = [
  {
    name: "Sita Gupta",
    designation: "Mentor",
    message:
      "Compassion and consistent guidance can nurture a community into something extraordinary.",
    responsibilities: ["Mentorship", "Counselling Support", "Guidance & Advisory"],
    bio: "A compassionate counsellor and a nurturing soul who has been a constant source of warmth and encouragement for Greencaps Foundation.",
  },
  {
    name: "Gaurav Anand",
    designation: "Mentor",
    message:
      "Real change happens on the ground, built through patience, presence, and partnership.",
    responsibilities: ["Field Mentorship", "Community Strategy", "NGO Collaboration"],
    bio: "Founder of a fellow NGO whose grassroots experience shapes our field operations and community engagement.",
    image: gauravHeadshot.url,
  },
  {
    name: "Sumanto Banerjee",
    designation: "Mentor",
    message:
      "Thoughtful counsel and steady encouragement help refine our approach and keep our work grounded in purpose.",
    responsibilities: ["Strategic Advisory", "Counsel & Guidance", "Mentorship"],
    bio: "Sumanto Banerjee continues to guide Greencaps Foundation with thoughtful counsel and steady encouragement. His perspective helps us refine our approach, strengthen our intent, and keep our work grounded in purpose.",
  },
  {
    name: "Alok Sharma",
    designation: "Director",
    message:
      "Strong leadership and collective effort can transform ideas into lasting impact.",
    responsibilities: [
      "Organizational Strategy",
      "Project Oversight",
      "Stakeholder Engagement",
      "Team Leadership",
    ],
  },
  {
    name: "Prem Kumar",
    designation: "Director",
    message: "Every successful initiative starts with dedication, planning, and teamwork.",
    responsibilities: [
      "Program Management",
      "Resource Planning",
      "Operations Supervision",
      "Community Relations",
    ],
  },
  {
    name: "Abhijeet Kumar",
    designation: "Director",
    message:
      "Creating opportunities for people to contribute towards environmental and social change through meaningful action.",
    responsibilities: [
      "Strategic Planning",
      "Partnership Development",
      "Volunteer Engagement",
      "Project Execution",
    ],
  },
  {
    name: "Ujjwal Das",
    designation: "Coordinator",
    message: "Bringing people together is the first step toward meaningful change.",
    responsibilities: ["Team Leadership", "Volunteer Coordination", "Event Planning"],
  },
  {
    name: "Nivedita Samad",
    designation: "Coordinator",
    message: "Small actions, when taken together, create extraordinary change.",
    responsibilities: ["Volunteer Coordination", "Event Planning", "Community Outreach"],
  },
  {
    name: "Sonam Kumari",
    designation: "Coordinator",
    message: "Dedicated effort and teamwork create lasting community impact.",
    responsibilities: ["Volunteer Support", "Community Engagement", "Program Coordination"],
  },
  {
    name: "Bhumika Kumari",
    designation: "Coordinator",
    message: "Every small step toward progress builds a stronger tomorrow.",
    responsibilities: ["Community Outreach", "Event Coordination", "Awareness Campaigns"],
  },
  {
    name: "Shashwat Tripathi",
    designation: "Coordinator",
    message: "True coordination turns vision into collective action.",
    responsibilities: ["Activity Management", "Team Coordination", "Field Operations"],
  },
  {
    name: "Saurabh Sinha",
    designation: "Coordinator",
    message: "Collaboration and commitment are key to building stronger communities.",
    responsibilities: ["Team Coordination", "Program Support", "Activity Management"],
  },
  {
    name: "Divyanshi Mishra",
    designation: "Coordinator",
    message: "Positive impact grows when people work together with purpose.",
    responsibilities: ["Volunteer Support", "Awareness Campaigns", "Community Engagement"],
  },
  {
    name: "Gourav Aggarwal",
    designation: "Coordinator",
    message: "Effective coordination ensures every initiative reaches its full potential.",
    responsibilities: ["Event Coordination", "Team Communication", "Project Monitoring"],
  },
  {
    name: "Sujata Das",
    designation: "Coordinator",
    message: "Community service is about creating meaningful connections and lasting change.",
    responsibilities: ["Volunteer Management", "Outreach Activities", "Program Coordination"],
  },
  {
    name: "Oishik Banerjee",
    designation: "Coordinator",
    message: "Progress happens when passion is supported by action.",
    responsibilities: ["Campaign Support", "Volunteer Engagement", "Community Programs"],
  },
  {
    name: "Ronit Singh",
    designation: "Coordinator",
    message: "Every contribution matters when working towards a common goal.",
    responsibilities: ["Event Operations", "Team Coordination", "Field Activities"],
  },
  {
    name: "Anku Kumari",
    designation: "Coordinator",
    message: "Impact grows through teamwork, dedication, and consistent effort.",
    responsibilities: ["Volunteer Coordination", "Activity Planning", "Community Support"],
  },
  {
    name: "Shankar Mahato",
    designation: "Media Team",
    message: "Stories inspire action and help communities connect with meaningful causes.",
    responsibilities: ["Content Creation", "Photography", "Awareness Campaigns"],
  },
  {
    name: "Dilkush Singh",
    designation: "Media Team",
    message:
      "Visual storytelling is a powerful tool for creating awareness and inspiring participation.",
    responsibilities: ["Media Documentation", "Content Production", "Social Media Support"],
  },
  {
    name: "Pronove Mahato",
    designation: "Media Team",
    message: "Every initiative deserves to have its impact shared with the world.",
    responsibilities: ["Digital Media", "Event Coverage", "Content Management"],
  },
  {
    name: "Sushma Swaraj",
    designation: "Medical Team",
    message: "Health and well-being are essential for building stronger communities.",
    responsibilities: ["Health Awareness", "Medical Support", "Community Wellness Initiatives"],
  },
  {
    name: "Tanu Kumari",
    designation: "Medical Team",
    message: "Serving people through care and compassion creates meaningful impact.",
    responsibilities: ["Health Support", "Medical Assistance", "Community Outreach"],
  },
  {
    name: "Prabhu Mahato",
    designation: "Logistics Team",
    message: "Behind every successful event is efficient planning and seamless execution.",
    responsibilities: ["Logistics Management", "Resource Coordination", "Event Support"],
  },
  {
    name: "Naveen Hembram",
    designation: "Logistics Team",
    message: "Smooth operations are the backbone of every successful mission.",
    responsibilities: ["Logistics Coordination", "Resource Management", "Event Support"],
  },
];

const departments: ("All" | Department)[] = [
  "All",
  "Mentor",
  "Director",
  "Coordinator",
  "Media Team",
  "Medical Team",
  "Logistics Team",
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const MemberCard = ({ m, onOpen, featured }: { m: Member; onOpen: () => void; featured?: boolean }) => (
  <button
    onClick={onOpen}
    className="group text-left flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
  >
    <div
      className={`${
        featured ? "w-36 h-36" : "w-28 h-28"
      } rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent border-4 border-primary/20 group-hover:border-primary/60 flex items-center justify-center mb-4 overflow-hidden transition-colors`}
    >
      {m.image ? (
        <img
          src={m.image}
          alt={m.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-serif text-2xl font-semibold text-primary">
          {initials(m.name)}
        </span>
      )}
    </div>
    <h3 className={`font-semibold ${featured ? "text-lg" : "text-base"}`}>{m.name}</h3>
    <p className="text-xs font-medium text-primary uppercase tracking-wide mt-1">
      {m.designation}
    </p>
    {featured && m.bio && (
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{m.bio}</p>
    )}
  </button>
);

const CrewPage = () => {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState<"All" | Department>("All");
  const [active, setActive] = useState<Member | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      const matchesDept = dept === "All" || m.designation === dept;
      const matchesQ = !q || m.name.toLowerCase().includes(q);
      return matchesDept && matchesQ;
    });
  }, [query, dept]);

  const mentors = filtered.filter((m) => m.designation === "Mentor");
  const rest = filtered.filter((m) => m.designation !== "Mentor");

  const groupOrder: Department[] = [
    "Director",
    "Coordinator",
    "Media Team",
    "Medical Team",
    "Logistics Team",
  ];

  const stats = [
    { label: "Mentors", value: 3 },
    { label: "Directors", value: 3 },
    { label: "Coordinators", value: 12 },
    { label: "Media", value: 3 },
    { label: "Medical", value: 2 },
    { label: "Logistics", value: 2 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background py-16">
      <div className="container mx-auto px-4">
        <Link
          to="/#crew"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            The People of Greencaps
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Meet the Full Team
          </h1>
          <p className="text-muted-foreground">
            A community of mentors, directors, coordinators, and specialists united by a shared
            mission — to create meaningful environmental and social change, together.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-card border border-primary/20 p-4 text-center hover:border-primary/60 transition-colors"
            >
              <div className="font-serif text-2xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured mentors */}
        {dept === "All" && !query && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold">Featured Mentors</h2>
              <span className="flex-1 h-px bg-primary/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {members
                .filter((m) => m.designation === "Mentor")
                .map((m) => (
                  <MemberCard key={m.name} m={m} onOpen={() => setActive(m)} featured />
                ))}
            </div>
          </section>
        )}

        {/* Search + filters */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 max-w-5xl mx-auto">
          <div className="relative md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search members by name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  dept === d
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Grouped or flat results */}
        {dept === "All" && !query ? (
          <div className="space-y-16">
            {groupOrder.map((g) => {
              const list = rest.filter((m) => m.designation === g);
              if (!list.length) return null;
              return (
                <section key={g}>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold">
                      {g === "Director" ? "Directors" : g === "Coordinator" ? "Coordinators" : g}
                    </h2>
                    <span className="flex-1 h-px bg-primary/20" />
                    <span className="text-sm text-muted-foreground">{list.length}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {list.map((m) => (
                      <MemberCard key={m.name} m={m} onOpen={() => setActive(m)} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <>
            {mentors.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                {mentors.map((m) => (
                  <MemberCard key={m.name} m={m} onOpen={() => setActive(m)} featured />
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {rest.map((m) => (
                <MemberCard key={m.name} m={m} onOpen={() => setActive(m)} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16">
                No members found. Try a different name or department.
              </p>
            )}
          </>
        )}
      </div>

      {/* Member detail dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg">
          {active && (
            <div className="animate-scale-in">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-accent border-4 border-primary/30 flex items-center justify-center mb-4 overflow-hidden">
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-3xl font-semibold text-primary">
                      {initials(active.name)}
                    </span>
                  )}
                </div>
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">{active.name}</DialogTitle>
                  <DialogDescription asChild>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {active.designation}
                    </span>
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="mt-6 rounded-xl bg-accent/40 border border-primary/20 p-4 relative">
                <Quote className="absolute -top-3 left-4 w-6 h-6 text-primary bg-background rounded-full p-1" />
                <p className="text-sm italic text-foreground/80 leading-relaxed">
                  "{active.message}"
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Responsibilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="text-sm flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3 pt-4 border-t border-border">
                <a
                  href="mailto:hello@greencaps.org"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default CrewPage;