import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import EmotionalSection from "@/components/EmotionalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const VOLUNTEER_FORM_URL = "https://docs.google.com/forms/d/1VqfPFzt5Zdl1Bw5ylF-XJXASoQvMVMxc4LCKzijFT3U/edit";

const openVolunteerForm = () => {
  window.open(VOLUNTEER_FORM_URL, "_blank", "noopener,noreferrer");
};

const Index = () => {
  return (
    <>
      <Navbar onVolunteerClick={openVolunteerForm} />
      <HeroSection onVolunteerClick={openVolunteerForm} />
      <AboutSection />
      <ImpactSection />
      <GallerySection />
      <EmotionalSection onVolunteerClick={openVolunteerForm} />
      <CTASection onVolunteerClick={openVolunteerForm} />
      <Footer />
    </>
  );
};

export default Index;
