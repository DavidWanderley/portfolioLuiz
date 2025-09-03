import { Link } from "react-router-dom";

export function HeroSobreSection() {
  return (
    <section className="HeroSobreSection py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-lg max-w-5xl mx-auto">
        
        <div className="flex-1">
          <img
            src="/Image/forbellone-card-model-art-52.jpg"
            alt="Imagem de destaque"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex-1 text-center md:text-center">
          <h1 className="text-3xl font-bold mb-4">
            Bem-vindo à Nossa Plataforma
          </h1>
          <p className="text-gray-700 mb-6">
            Descubra soluções inovadoras e aproveite ao máximo nossos serviços
            para transformar sua experiência. Estamos aqui para ajudar você a
            alcançar seus objetivos com facilidade e eficiência.
          </p>

          <Link
            to="/portfolio"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  );
}
