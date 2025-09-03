import { Card } from "../../components/All/Card";
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <>
      <section className="home-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-lg max-w-5xl mx-auto">
          <div className="flex-1">
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
          </div>

          <div className="flex-1 text-center md:text-center">
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
          </div>

          <div className="flex-1 text-center md:text-center">
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
          </div>

          <div className="flex-1 text-center md:text-center">
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
            <Card image="../../../../public/Image/art.png" />
          </div>
        </div>
      </section>
    </>
  );
}
