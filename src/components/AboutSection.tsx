import { Users, Leaf, Heart } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "WHO ARE WE?",
    desc: "WE ARE GREEN CAPS, A GROUP OF PEOPLE WORKING TOW ARDS A MISSION TO CLEAN OUR CITY,\n\n EVEN THOUGH IT'S OUR DUTY TO CLEAN UP AFTER USING A PUBLIC SPACE MANY PEOPLE HAVE NO REGARD FOR CLEANLINESS.\n\n WE ARE HERE TO MAKE PEOPLE AW ARE OF THE IMPORTANCE OF KEEPING OUR SURROUNDINGS CLEAN AND HEALTHY . IN ORDER TO PROTECT OUR ENVIRONMENT.",
  },
  {
    icon: Leaf,
    title: "What We Do",
    desc: "River cleaning drives, lake cleanups, tree plantation campaigns, and environmental awareness initiatives.",
  },
  {
    icon: Heart,
    title: "Why It Matters",
    desc: "Pollution and environmental damage are growing rapidly — collective action today ensures a better tomorrow.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
        About GreenCaps Foundation
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Founded in Jamshedpur, we believe in the power of community to heal our environment.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
