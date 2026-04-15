import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Instagram, Facebook, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:text-pink-500" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com", color: "hover:text-blue-600" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com", color: "hover:text-foreground" },
];

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
        <Popover>
          <PopoverTrigger asChild>
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Follow on Social Media
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2">
            <div className="space-y-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent ${s.color}`}
                >
                  <s.icon className="w-5 h-5" />
                  {s.label}
                </a>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </section>
);

export default CTASection;
