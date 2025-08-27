import "./App.css";
import { Footer } from "./containers/Footer/Footer";
import { FormRegister } from "./containers/Contact/FormRegister";
import { Header } from "./containers/Header/Header";
import { Home } from "./pages/Home/Home";

function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
