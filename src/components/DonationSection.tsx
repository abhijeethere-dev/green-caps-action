import { Shirt, Utensils } from "lucide-react";
import donationImg from "@/assets/donation-drive.jpeg.asset.json";

const items = [
  {
    icon: Shirt,
    title: "Clothes Donation Drives",
    desc: "We collect gently used clothes from generous donors and distribute them to families, children, and the elderly who need them most — especially during harsh winters and monsoons.",
  },
  {
    icon: Utensils,
    title: "Food & Groceries Distribution",
    desc: "From hot meals to monthly grocery kits, our volunteers reach out to underprivileged communities, ensuring no one in our neighbourhood sleeps hungry.",
  },
];

const DonationSection = () => (
  <section id="donation" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Giving Back to the Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Beyond cleaning our environment, we extend a helping hand to those in need through clothes,
          food, and grocery donation drives across the city.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src={donationImg.url}
            alt="Volunteers distributing clothes and food to the community"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DonationSection;