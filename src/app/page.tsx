import { Hero } from "@/components/site/hero";
import { Values } from "@/components/site/values";
import { Tools } from "@/components/site/tools";
import { Missions } from "@/components/site/missions";
import { CustomPlan, Pricing } from "@/components/site/pricing";
import { Contact } from "@/components/site/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Tools />
      <Missions />
      <Pricing />
      <CustomPlan />
      <Contact />
    </>
  );
}
