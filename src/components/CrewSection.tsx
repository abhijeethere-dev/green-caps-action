import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";

const mentors = [
  { 
    name: "Sita Gupta", 
    designation: "Mentor",
    bio: "She has been a constant source of warmth, guidance, and encouragement for Greencaps Foundation. A compassionate counsellor by profession and a nurturing soul by nature, she has always been there to support us whenever we needed advice, direction, or simply a listening ear. Her home has often been a place of comfort and learning, where she welcomed us with kindness and genuine care. Her belief in our work and her unwavering support continue to inspire us as we strive to create a positive impact in our community."
  },
  { 
    name: "Gaurav Anand", 
    designation: "Mentor",
    bio: "He has been an invaluable mentor to Greencaps Foundation, guiding us with his extensive experience in grassroots social work and community engagement. As the founder of a fellow NGO, he brings practical insights and a deep understanding of on-ground challenges. His mentorship has helped us strengthen our field operations, build meaningful community connections, and approach our work with greater purpose and impact. We are grateful for his continuous support, encouragement, and leadership."
  },
];

const CrewSection = () => (
  <section id="crew" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
        Meet the Crew
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        The hands, hearts, and minds behind every Greencaps drive.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {mentors.map((m, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-primary/30 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary transition-all duration-300"
          >
            <div className="w-40 h-40 rounded-full bg-primary/10 border-4 border-primary/20 group-hover:border-primary/50 flex items-center justify-center mb-6 transition-colors overflow-hidden">
              <User className="w-20 h-20 text-primary/60" />
            </div>
            <h3 className="font-bold text-xl">{m.name}</h3>
            <p className="text-sm font-medium text-primary uppercase tracking-wide mt-1">{m.designation}</p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/crew"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          View Full Team
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default CrewSection;