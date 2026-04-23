import { Waves, TreePine, Megaphone, Droplets, Users, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const activities = [
  { icon: Waves, title: "River Cleaning Drives", desc: "Restoring rivers by removing waste and debris from waterways.", slug: "river-cleaning" },
  { icon: Droplets, title: "Lake Cleaning Drives", desc: "Cleaning and revitalizing lakes to support local ecosystems.", slug: "lake-cleaning" },
  { icon: TreePine, title: "Tree Plantation", desc: "Planting native trees to restore green cover and fight climate change.", slug: "tree-plantation" },
  { icon: Megaphone, title: "Awareness Campaigns", desc: "Educating communities about sustainability and environmental care.", slug: "awareness-campaigns" },
];

const stats = [
  { icon: Users, value: "200+", label: "Volunteers" },
  { icon: Calendar, value: "250+", label: "Drives Conducted" },
  { icon: TreePine, value: "700+", label: "Trees Planted" },
  { icon: MapPin, value: "12+", label: "Locations Covered" },
];

const useCountUp = (end: number, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, end, duration]);
  return count;
};

const StatItem = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => {
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const display = useCountUp(num, 2000, visible);
  return (
    <div ref={ref} className="text-center">
      <Icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-3" />
      <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{display}{suffix}</div>
      <div className="text-sm text-primary-foreground/70">{label}</div>
    </div>
  );
};

const ImpactSection = () => (
  <section id="work" className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Our Work & Impact</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Every drive, every tree, every cleanup — they all add up to create real, lasting change.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {activities.map((a) => (
          <div key={a.title} className="group flex flex-col rounded-xl border border-border p-6 hover:border-primary/30 hover:bg-accent/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <a.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
            <Link
              to={`/work/${a.slug}`}
              className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
            >
              View more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} icon={s.icon} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
