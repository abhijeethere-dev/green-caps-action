import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import EmotionalSection from "@/components/EmotionalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import VolunteerDialog from "@/components/VolunteerDialog";

const Index = () => {
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  return (
    <>
      <Navbar onVolunteerClick={() => setVolunteerOpen(true)} />
      <HeroSection onVolunteerClick={() => setVolunteerOpen(true)} />
      <AboutSection />
      <ImpactSection />
      <GallerySection />
      <EmotionalSection onVolunteerClick={() => setVolunteerOpen(true)} />
      <CTASection onVolunteerClick={() => setVolunteerOpen(true)} />
      <Footer />
      <VolunteerDialog open={volunteerOpen} onOpenChange={setVolunteerOpen} />
    </>
  );
};

export default Index;
