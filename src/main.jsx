import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'

import { Sobre } from "./pages/Sobre/Sobre";
import { Contato } from "./pages/Contato/Contato";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Orçamento } from "./pages/Orçamento/Orçamento";
import { NotFound } from "./pages/NotFound/NotFound";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/orçamento",
    element: <Orçamento />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
