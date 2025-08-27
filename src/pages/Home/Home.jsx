import { FollowCloselySection } from "../../containers/FollowCloselySection/FollowCloselySection";
import { HeroSection } from "../../containers/HeroSection/HeroSection";
import { ProduceSection } from "../../containers/ProduceSection/ProduceSection";

export function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      
      <ProduceSection />

      <FollowCloselySection />
    </div>
  );
}
