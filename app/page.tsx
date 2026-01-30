import Footer from "@/components/common/Footer";
import CTAsection from "@/components/Home/CTAsection";
import DemoSection from "@/components/Home/DemoSection";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks";
import PricingSection from "@/components/Home/PricingSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <HeroSection />
      <DemoSection />
      <HowItWorks />
      <PricingSection />
      <CTAsection />
    </div>
  );
}
