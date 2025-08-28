import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="w-full bg-stone-900 text-white shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>

        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
          <li><Link to="/orçamento" className="hover:text-blue-400">Orçamento</Link></li>
          <li><Link to="/contato" className="hover:text-blue-400">Contato</Link></li>
          <li><Link to="/sobre" className="hover:text-blue-400">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}
