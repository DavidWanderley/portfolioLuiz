import "./App.css";
import { Card } from "./components/HomeComponents/Card";
import { FollowCloselySection } from "./containers/HomeContainers/FollowCloselySection/FollowCloselySection";
import { HeroSection } from "./containers/HomeContainers/HeroSection/HeroSection";
import { ProduceSection } from "./containers/HomeContainers/ProduceSection/ProduceSection";

function App() {
  return (
    <>
      <section className="home-container">
        <HeroSection />

        <div className="bg-blue-200">
          <h1>Fotos de artes</h1>
          <Card image="../../../../public/Image/art.png" />{" "}
          {/* ao clickar na arte abriria uma nova aba com mais fotos relacionada a arte e  com texto explicando sobre ela */}
        </div>

        <ProduceSection />

        <FollowCloselySection />
      </section>
    </>
  );
}

export default App;
