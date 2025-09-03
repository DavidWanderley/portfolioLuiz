import { Outlet } from "react-router-dom";
import { Header } from "../containers/Header/Header";
import { Footer } from "../containers/Footer/Footer";

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}