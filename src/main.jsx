import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error.jsx";
import LandingPage from "./pages/landing.jsx";
import JujutsuS3 from "./pages/JujutsuS3.jsx";
import Postingan from "./pages/Posts.jsx";
import Rezero from "./pages/rezero.jsx";
import Frieren from "./pages/frieren.jsx";
import Fmba from "./pages/fmba.jsx";
const router = createBrowserRouter([
  {
    path: "/kinoha",
    element: <LandingPage />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/kinoha/post/Jujutsu-kaisen",
    element: <JujutsuS3 />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/kinoha/post/Re:zero",
    element: <Rezero />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/kinoha/post/Frieren",
    element: <Frieren />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/kinoha/post/Full-Metal",
    element: <Fmba />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/kinoha/Posts",
    element: <Postingan />,
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
