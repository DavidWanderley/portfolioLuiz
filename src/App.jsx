import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./containers/Footer/Footer";
import { Header } from "./containers/Header/Header";

import { Sobre } from "./pages/Sobre/Sobre";
import { Contato } from "./pages/Contato/Contato";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Orçamento } from "./pages/Orçamento/Orçamento";
import { NotFound } from "./pages/NotFound/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
