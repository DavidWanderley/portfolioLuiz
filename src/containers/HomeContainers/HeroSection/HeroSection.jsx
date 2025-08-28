import { CarouselHomeComponents } from "../../../components/HomeComponents/CarouselHomeComponents";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <>
      <section className="heroSection flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
        <CarouselHomeComponents />

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center ml-7">
          <h1 className="text-3xl font-bold mb-4">
            Bem-vindo à Nossa Plataforma
          </h1>
          <p className="text-gray-700 mb-6">
            Descubra soluções inovadoras e aproveite ao máximo nossos serviços
            para transformar sua experiência. Estamos aqui para ajudar você a
            alcançar seus objetivos com facilidade e eficiência.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Saiba Mais
          </button>
        </div>
      </section>
    </>
  );
}
