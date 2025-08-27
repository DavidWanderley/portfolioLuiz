import { FollowCloselySection } from "../../containers/HomeContainers/FollowCloselySection/FollowCloselySection";
import { HeroSection } from "../../containers/HomeContainers/HeroSection/HeroSection";
import { ProduceSection } from "../../containers/HomeContainers/ProduceSection/ProduceSection";

export function Home() {
  return (
    <section className="home-container">
      <HeroSection />
      
      <ProduceSection />

      <FollowCloselySection />
    </section>
  );
}
