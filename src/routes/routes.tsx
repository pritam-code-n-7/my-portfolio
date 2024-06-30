import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import NotFound from "../reusables/NotFound";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import Skills from "../pages/Skills";
import PersonalProjects from "../pages/PersonalProjects";
import ContactMe from "../pages/ContactMe";
import CareerSummary from "../pages/CareerSummary";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,

        children: [
          {
            path: "aboutme",
            element: <AboutMe />,
          },
          {
            path: "career",
            element: <CareerSummary />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "projects",
            element: <PersonalProjects />,
          },
          {
            path: "contact",
            element: <ContactMe />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
