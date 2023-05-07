import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
// import { Home } from '../pages';
import { BoundaryError } from "../utils";
import { fetchDictionary } from "../utils/api";
import NotFound from "../utils/hoc/NotFound";
import DashLayout from "../components/layout/dashLayout/DashLayout";
import Settings from "../pages/Settings";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <BoundaryError />,
        hasErrorBoundary: true,
        loader: fetchDictionary,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <BoundaryError />,
        hasErrorBoundary: true,
      },
      {
        path: "#",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dash",
    element: <DashLayout />,
    children: [
      {
        index: true,
        element: <Settings />,
      },
    ],
  },
]);
