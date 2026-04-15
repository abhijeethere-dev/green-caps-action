import { Button } from "@/components/ui/button";
import gallery6 from "@/assets/gallery-6.jpg";

const EmotionalSection = ({ onVolunteerClick }: { onVolunteerClick: () => void }) => (
  <section className="relative py-32 overflow-hidden">
    <img
      src={gallery6}
      alt="Planting hope"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/60" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
        Real change begins with people like you.
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
        Every volunteer hour, every tree planted, every piece of waste removed — it all matters.
        Our communities thrive when we act together. Your hands can make the difference.
      </p>
      <Button size="lg" onClick={onVolunteerClick} className="text-base px-8 py-6">
        Become a Volunteer
      </Button>
    </div>
  </section>
);

export default EmotionalSection;
