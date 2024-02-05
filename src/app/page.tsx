import CounterSection from "@/components/home/CounterSection";
import Cuttingedge from "@/components/home/Cuttingedge";
import Hero from "@/components/home/Hero";
import TemplateCreator from "@/components/home/TemplateCreator";
import Testimonial from "@/components/home/Testimonial";
import JoinCommunity from "@/components/home/JoinCommunity";
import MakeUsBetter from "@/components/home/MakeUsBetter";

export default function Home() {
  return (
    <main>
      <Hero />
      <CounterSection />
      <MakeUsBetter />
      <TemplateCreator />
      <Cuttingedge />
      <Testimonial />
      <JoinCommunity />
    </main>
  );
}
