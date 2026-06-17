import { Link } from "react-router-dom";
import { ArrowLeft, User, Star } from "lucide-react";

const CREW_COUNT = 20;

const crew = Array.from({ length: CREW_COUNT }, (_, i) => ({
  name: `Crew Member ${i + 1}`,
  role: "Volunteer",
}));

const mentors = [
  {
    name: "Sita Gupta",
    role: "She has been a constant source of warmth, guidance, and encouragement for Greencaps Foundation. A compassionate counsellor by profession and a nurturing soul by nature, she has always been there to support us whenever we needed advice, direction, or simply a listening ear. Her home has often been a place of comfort and learning, where she welcomed us with kindness and genuine care. Her belief in our work and her unwavering support continue to inspire us as we strive to create a positive impact in our community.",
  },
  {
    name: "Gaurav Anand",
    role: "He has been an invaluable mentor to Greencaps Foundation, guiding us with his extensive experience in grassroots social work and community engagement. As the founder of a fellow NGO, he brings practical insights and a deep understanding of on-ground challenges. His mentorship has helped us strengthen our field operations, build meaningful community connections, and approach our work with greater purpose and impact. We are grateful for his continuous support, encouragement, and leadership.",
  },
];

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
        Meet the Crew
      </h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        The full Greencaps team — volunteers and mentors driving every initiative.
      </p>

      <section className="mb-20">
        <h2 className="font-serif text-2xl font-semibold mb-8">Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {mentors.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-primary/30 shadow-sm"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-semibold mb-8">Crew Members</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
      </section>
    </div>
  </main>
);

export default CrewPage;