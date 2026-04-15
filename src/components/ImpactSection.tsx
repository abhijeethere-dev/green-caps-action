import { Waves, TreePine, Megaphone, Droplets, Users, MapPin, Calendar } from "lucide-react";

const activities = [
  { icon: Waves, title: "River Cleaning Drives", desc: "Restoring rivers by removing waste and debris from waterways." },
  { icon: Droplets, title: "Lake Cleaning Drives", desc: "Cleaning and revitalizing lakes to support local ecosystems." },
  { icon: TreePine, title: "Tree Plantation", desc: "Planting native trees to restore green cover and fight climate change." },
  { icon: Megaphone, title: "Awareness Campaigns", desc: "Educating communities about sustainability and environmental care." },
];

const stats = [
  { icon: Users, value: "100+", label: "Volunteers" },
  { icon: Calendar, value: "50+", label: "Drives Conducted" },
  { icon: TreePine, value: "2000+", label: "Trees Planted" },
  { icon: MapPin, value: "15+", label: "Locations Covered" },
];

const ImpactSection = () => (
  <section id="work" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Our Work & Impact</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Every drive, every tree, every cleanup — they all add up to create real, lasting change.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {activities.map((a) => (
          <div key={a.title} className="group rounded-xl border border-border p-6 hover:border-primary/30 hover:bg-accent/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <a.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-3" />
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{s.value}</div>
              <div className="text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
