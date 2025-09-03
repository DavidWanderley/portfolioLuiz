import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Sobre } from "./pages/Sobre/Sobre";
import { Contato } from "./pages/Contato/Contato";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { NotFound } from "./pages/NotFound/NotFound";
import { MainLayout } from "./Layout/MainLayout";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "sobre", element: <Sobre /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contato", element: <Contato /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
