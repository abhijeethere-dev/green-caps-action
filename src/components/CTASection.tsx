import { Button } from "@/components/ui/button";

const CTASection = ({ onVolunteerClick }: { onVolunteerClick: () => void }) => (
  <section className="py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
        Be the change. Be a <span className="text-primary">GreenCap</span>.
      </h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
        Together, we can build a future where nature and people thrive side by side.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" onClick={onVolunteerClick} className="text-base px-8 py-6">
          Join Us
        </Button>
        <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Follow on Social Media
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
