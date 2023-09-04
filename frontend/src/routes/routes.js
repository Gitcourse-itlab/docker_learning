import { lazy } from "react";

const HomePage = lazy(() => import("../page/home/HomePage"));
const LoginPage = lazy(() => import("../page/login/LoginPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
];

export default routes;