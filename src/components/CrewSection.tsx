import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const mentors = [
  { 
    name: "Sita Gupta", 
    role: "She has been a constant source of warmth, guidance, and encouragement for Greencaps Foundation. A compassionate counsellor by profession and a nurturing soul by nature, she has always been there to support us whenever we needed advice, direction, or simply a listening ear. Her home has often been a place of comfort and learning, where she welcomed us with kindness and genuine care. Her belief in our work and her unwavering support continue to inspire us as we strive to create a positive impact in our community." 
  },
  { 
    name: "Gaurav Anand", 
    role: "He has been an invaluable mentor to Greencaps Foundation, guiding us with his extensive experience in grassroots social work and community engagement. As the founder of a fellow NGO, he brings practical insights and a deep understanding of on-ground challenges. His mentorship has helped us strengthen our field operations, build meaningful community connections, and approach our work with greater purpose and impact. We are grateful for his continuous support, encouragement, and leadership." 
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