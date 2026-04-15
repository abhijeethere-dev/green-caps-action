import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = ({ onVolunteerClick }: { onVolunteerClick: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Volunteers cleaning a river bank surrounded by lush greenery"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Building a Clean & Green Future Together
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Join hands with GreenCaps Foundation to restore nature through action.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Button size="lg" onClick={onVolunteerClick} className="text-base px-8 py-6">
            Join as Volunteer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
            asChild
          >
            <a href="#work">Explore Our Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
