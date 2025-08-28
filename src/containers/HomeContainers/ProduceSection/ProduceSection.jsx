import { Card } from "../../../components/HomeComponents/Card";
import "./ProduceSection.css";

export function ProduceSection() {
  return (
    <>
      <section className="ProduceSection">
        <h1 className="text-3xl font-bold mb-4">Minha especialidade</h1>

        <div className="cards-container bg-stone-200 flex flex-wrap justify-center mx-30 p-4">
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="../../../../public/Image/art.png"
          />
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.q"
            image="../../../../public/Image/art.png"
          />
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="../../../../public/Image/art.png"
          />
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="../../../../public/Image/art.png"
          />
        </div>
      </section>
    </>
  );
}
