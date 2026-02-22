import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrainingSection from "@/components/TrainingSection";
import TransformationSection from "@/components/TransformationSection";
import FacilitySection from "@/components/FacilitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrainersSection from "@/components/TrainersSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <StatsSection />
      <TrainingSection />
      <TransformationSection />
      <FacilitySection />
      <TestimonialsSection />
      <TrainersSection />
      <AboutSection />
      <ScheduleSection />
      <MembershipSection />
      <ContactSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
