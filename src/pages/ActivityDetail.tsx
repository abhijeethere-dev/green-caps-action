import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Waves, TreePine, Megaphone, Droplets, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const VOLUNTEER_FORM_URL = "https://docs.google.com/forms/d/1VqfPFzt5Zdl1Bw5ylF-XJXASoQvMVMxc4LCKzijFT3U/edit";

type TopicBlock = {
  heading: string;
  body: string;
  images: { src: string; alt: string }[];
};

type Activity = {
  title: string;
  tagline: string;
  icon: LucideIcon;
  intro: string;
  topics?: TopicBlock[];
  closing?: { heading: string; body: string };
  // legacy fallback
  sections?: { heading: string; body: string }[];
  images?: { src: string; alt: string }[];
};

const activities: Record<string, Activity> = {
  "river-cleaning": {
    title: "River Cleaning Drives",
    tagline: "Restoring rivers, one bag of waste at a time.",
    icon: Waves,
    intro:
      "Our rivers are lifelines — yet they are choked with plastic, sewage, and discarded waste. Through our river cleaning drives, volunteers wade in to remove tonnes of debris and bring our waterways back to life.",
    topics: [
      {
        heading: "Clearing Water Hyacinth",
        body: "One of the major challenges we tackle is the overgrowth of water hyacinth. This invasive plant spreads rapidly, choking rivers, blocking sunlight, and reducing oxygen levels in the water. Our team works tirelessly to remove these thick layers, allowing the river to breathe again and restoring its natural flow.",
        images: [
          { src: gallery1, alt: "Volunteers clearing water hyacinth" },
          { src: gallery5, alt: "River freed from invasive plants" },
        ],
      },
      {
        heading: "Removing Plastic Waste",
        body: "Plastic pollution is one of the most visible and harmful threats to our rivers. From bottles and wrappers to single-use plastics, we collect and segregate waste that would otherwise continue to pollute the water and harm aquatic life. Every cleanup drive prevents hundreds of kilograms of plastic from flowing further downstream.",
        images: [
          { src: gallery2, alt: "Collecting plastic bottles from river" },
          { src: gallery3, alt: "Sorting plastic waste for recycling" },
        ],
      },
      {
        heading: "Tackling Mixed Garbage",
        body: "Beyond plastic, rivers often become dumping grounds for all kinds of waste — clothes, religious offerings, household garbage, and more. Our volunteers step in to remove this debris, ensuring the riverbanks and water remain clean and safe for both people and wildlife.",
        images: [
          { src: gallery4, alt: "Mixed garbage being removed from riverbank" },
          { src: gallery6, alt: "Cleaned riverside after drive" },
        ],
      },
      {
        heading: "Community Awareness & Responsibility",
        body: "Cleaning is only one part of the solution. We actively engage with local communities to spread awareness about responsible waste disposal and the importance of protecting our rivers. Our goal is to build a culture where people think before they throw and choose sustainability over convenience.",
        images: [
          { src: gallery6, alt: "Community awareness session" },
          { src: gallery2, alt: "Volunteers engaging with locals" },
        ],
      },
      {
        heading: "Our Impact",
        body: "Each drive is a step towards cleaner water, healthier ecosystems, and a more responsible society. With every bag of waste removed and every patch of river restored, we move closer to our vision — a future where rivers flow freely, clean, and respected.",
        images: [
          { src: gallery5, alt: "Restored stretch of river" },
          { src: gallery1, alt: "Team celebrating a successful drive" },
        ],
      },
    ],
    closing: {
      heading: "Join us in this movement",
      body: "Because when we protect our rivers, we protect life itself.",
    },
  },
  "lake-cleaning": {
    title: "Lake Cleaning Drives",
    tagline: "Reviving lakes that sustain our cities.",
    icon: Droplets,
    intro:
      "Urban lakes are disappearing under layers of trash and weeds. We work to clear them, restore their banks, and protect the wildlife that calls them home.",
    sections: [
      {
        heading: "What we do",
        body: "Teams remove floating waste, clear invasive weeds from shorelines, and document pollution sources so authorities can act on them.",
      },
      {
        heading: "Why it matters",
        body: "Healthy lakes recharge groundwater, cool nearby neighbourhoods, and support birds and fish. A clean lake is a gift to the entire neighbourhood.",
      },
      {
        heading: "How you can help",
        body: "Show up for a weekend drive, sponsor cleanup equipment, or help us map polluted lakes near you.",
      },
    ],
    images: [
      { src: gallery3, alt: "Lake cleanup crew with collected trash" },
      { src: gallery4, alt: "Volunteers working by the lakeside" },
      { src: gallery6, alt: "Lake shore cleanup drive in action" },
    ],
  },
  "tree-plantation": {
    title: "Tree Plantation",
    tagline: "Planting today for a greener tomorrow.",
    icon: TreePine,
    intro:
      "Trees cool our cities, clean our air, and shelter countless species. We plant native saplings and ensure they survive long after the camera leaves.",
    sections: [
      {
        heading: "What we do",
        body: "We choose native species suited to local soil and climate, plant them at the right depth and spacing, and return for follow-up watering and care.",
      },
      {
        heading: "Why it matters",
        body: "Tree cover is shrinking everywhere, and replacing what we lose is one of the simplest, most effective climate actions available to us.",
      },
      {
        heading: "How you can help",
        body: "Sponsor a sapling, host a plantation drive in your neighbourhood, or volunteer to water and protect young trees.",
      },
    ],
    images: [
      { src: gallery2, alt: "Plantation drive in progress" },
      { src: gallery4, alt: "Volunteers preparing the ground" },
      { src: gallery1, alt: "Group photo after plantation" },
    ],
  },
  "awareness-campaigns": {
    title: "Awareness Campaigns",
    tagline: "Changing minds, one conversation at a time.",
    icon: Megaphone,
    intro:
      "Lasting change starts with awareness. Through schools, street campaigns, and digital outreach, we help people see the impact of everyday choices.",
    sections: [
      {
        heading: "What we do",
        body: "We run workshops in schools and colleges, organise street plays, and create social media content on waste segregation, plastic reduction, and water conservation.",
      },
      {
        heading: "Why it matters",
        body: "Cleanups treat the symptom; awareness treats the cause. When people stop littering and start segregating, the problem shrinks at the source.",
      },
      {
        heading: "How you can help",
        body: "Share our content, host us at your school or workplace, or volunteer as a campaign speaker in your community.",
      },
    ],
    images: [
      { src: gallery6, alt: "Awareness session with community" },
      { src: gallery3, alt: "Volunteers engaging the public" },
      { src: gallery5, alt: "Outreach activity in action" },
    ],
  },
};

const openVolunteerForm = () => {
  window.open(VOLUNTEER_FORM_URL, "_blank", "noopener,noreferrer");
};

const FanPhotos = ({ images }: { images: { src: string; alt: string }[] }) => {
  const second = images[1] ?? images[0];
  return (
    <div className="group relative w-full aspect-[4/3] py-6">
      {/* Bottom card — peeks out at rest, slides fully out on hover */}
      <div
        className="absolute top-4 left-4 right-12 bottom-12 rounded-2xl overflow-hidden bg-muted shadow-md transition-all duration-500 ease-out -rotate-[5deg] group-hover:-rotate-[8deg] group-hover:-translate-x-10 group-hover:translate-y-10 group-hover:shadow-xl"
      >
        <img
          src={second.src}
          alt={second.alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Top card — slides the opposite way on hover to fully reveal both */}
      <div
        className="absolute top-0 left-12 right-0 bottom-4 rounded-2xl overflow-hidden bg-muted shadow-lg transition-all duration-500 ease-out rotate-[4deg] group-hover:rotate-[8deg] group-hover:translate-x-10 group-hover:-translate-y-6 group-hover:shadow-2xl"
      >
        <img
          src={images[0].src}
          alt={images[0].alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const ActivityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const activity = slug ? activities[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!activity) return <Navigate to="/" replace />;

  const Icon = activity.icon;

  return (
    <>
      <Navbar onVolunteerClick={openVolunteerForm} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Work
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold">{activity.title}</h1>
              <p className="text-muted-foreground">{activity.tagline}</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-16">{activity.intro}</p>

          {activity.topics ? (
            <div className="space-y-20 mb-16">
              {activity.topics.map((t, i) => {
                const reverse = i % 2 === 1;
                return (
                  <section
                    key={t.heading}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center ${
                      reverse ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">{t.heading}</h2>
                      <p className="text-muted-foreground leading-relaxed">{t.body}</p>
                    </div>
                    <div className="px-4 sm:px-8 md:px-4">
                      <FanPhotos images={t.images} />
                    </div>
                  </section>
                );
              })}

              {activity.closing && (
                <section className="text-center max-w-2xl mx-auto pt-4">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
                    {activity.closing.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{activity.closing.body}</p>
                </section>
              )}
            </div>
          ) : (
            <>
              {activity.images && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                  {activity.images.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
              {activity.sections && (
                <div className="space-y-8 mb-12">
                  {activity.sections.map((s) => (
                    <section key={s.heading}>
                      <h2 className="font-serif text-2xl font-semibold mb-3">{s.heading}</h2>
                      <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                    </section>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="bg-accent/50 border border-border rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-3">Want to be part of it?</h3>
            <p className="text-muted-foreground mb-6">
              Join us on the ground and help turn intention into impact.
            </p>
            <Button size="lg" onClick={openVolunteerForm}>
              Join as Volunteer
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ActivityDetail;
