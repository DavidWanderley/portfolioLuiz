import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./containers/Footer/Footer";
import { Header } from "./containers/Header/Header";

import { Sobre } from "./pages/Sobre/Sobre";
import { Contato } from "./pages/Contato/Contato";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Orçamento } from "./pages/Orçamento/Orçamento";

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/orçamento" element={<Orçamento />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
