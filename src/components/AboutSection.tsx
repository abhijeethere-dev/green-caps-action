import { Users, Leaf, Heart } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "WHO ARE WE?",
    desc: "We are Green Caps, a group of people working towards a mission to clean our city.\n\nEven though it's our duty to clean up after using a public space, many people have no regard for cleanliness.\n\nWe are here to make people aware of the importance of keeping our surroundings clean and healthy in order to protect our environment.",
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
            {item.desc.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-2 last:mb-0">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
