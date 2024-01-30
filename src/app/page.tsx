import CounterSection from "@/components/home/CounterSection";
import Hero from "@/components/home/Hero";
import HomeCard from "@/components/home/HomeCard";
import TemplateCreator from "@/components/home/TemplateCreator";
import { BsVectorPen } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

export default function Home() {
  return (
    <main>
      <Hero />
      <CounterSection />
      <div className="layout pt-24">
        <h2 className="text-3xl text-accent text-center">
          What <strong>makes us better</strong>
        </h2>
        <div className="py-10 grid place-items-center gap-4 lg:grid-cols-3">
          <HomeCard
            title="Creativity"
            icon={<BsVectorPen />}
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus temporibus maxime."
            link=""
          />
          <HomeCard
            title="Team Collaboration"
            icon={<MdPeople />}
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus temporibus maxime."
            link=""
          />
          <HomeCard
            title="Professionalism"
            icon={<RxAvatar />}
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus temporibus maxime."
            link=""
          />
        </div>
      </div>
      <TemplateCreator />
    </main>
  );
}
