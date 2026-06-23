import { Recycle } from "lucide-react";
import planterAsset from "@/assets/upcycle-planter.jpeg.asset.json";
import functionalAsset from "@/assets/upcycle-functional.jpeg.asset.json";
import awarenessAsset from "@/assets/upcycle-awareness.jpeg.asset.json";

const items = [
  {
    title: "Planters & Vases",
    desc: "Plastic bottles turned into hanging gardens and home decor.",
    image: planterAsset.url,
    alt: "Upcycled bottle vase with sculpted vines and roses",
  },
  {
    title: "Functional Crafts",
    desc: "Pen holders, lamps, and storage made from discarded waste.",
    image: functionalAsset.url,
    alt: "Hand-crafted cardboard temple made from discarded materials",
  },
  {
    title: "Awareness Pieces",
    desc: "Pieces found on our river cleaning drives and restored as art that tells their story.",
    image: awarenessAsset.url,
    alt: "Restored Hanuman idol recovered during a river cleaning drive",
  },
];

const UpcycleSection = () => (
  <section id="upcycle" className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
          <Recycle className="w-7 h-7 text-accent-foreground" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          From Waste to Wonder
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The garbage we pull out of rivers and lakes doesn't always end in a landfill. We upcycle
          plastic bottles, glass, and discarded materials into planters, decor, and useful everyday
          items — turning pollution into purpose.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-md aspect-[4/5] bg-muted group">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow flex-1">
              <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcycleSection;