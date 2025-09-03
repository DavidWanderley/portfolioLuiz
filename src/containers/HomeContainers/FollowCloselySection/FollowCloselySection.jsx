import { Card } from "../../../components/HomeComponents/Card";
import "./FollowCloselySection.css";

export function FollowCloselySection() {
  //colocar video ou imagens no lugar dos cards

  return (
    <>
      <section className="FollowCloselySection">
        <h1 className="text-3xl font-bold mb-4">Acompanhe meu trabalho</h1>

        <p className="text-gray-700 text-base">Minhas redes sociais</p>

        <div className="cards-container flex flex-wrap justify-center mx-30 p-4">
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
