import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-primary-foreground/80 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-serif text-xl font-bold text-primary-foreground mb-4">🌿 GreenCaps Foundation</h3>
          <p className="text-sm leading-relaxed">
            A youth-driven initiative dedicated to environmental restoration through community action.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <a href="#about" className="block hover:text-primary-foreground transition-colors">About Us</a>
            <a href="#work" className="block hover:text-primary-foreground transition-colors">Our Work</a>
            <a href="#gallery" className="block hover:text-primary-foreground transition-colors">Gallery</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Jamshedpur, Jharkhand, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:contact@greencaps.org" className="hover:text-primary-foreground transition-colors">
                contact@greencaps.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} GreenCaps Foundation. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
