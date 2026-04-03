import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QualityProcessSection from "@/components/QualityProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import EquipmentSection from "@/components/EquipmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <EquipmentSection />
        <QualityProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
