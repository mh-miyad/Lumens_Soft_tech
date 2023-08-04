import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import TeamMember from "../Pages/TeamMember";
import Contact from "../Pages/Contact";
import TeamDetails from "../Pages/TeamDetails";
import Layout from "../Layout/Layout";
import MainPages from "../Dashboard/Pages/MainPages";
import BlogCreate from "../Dashboard/Pages/BlogCreate";
import CreatePages from "../Dashboard/Pages/CreatePages";
import ProjectList from "../Dashboard/Pages/ProjectList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <TeamMember />,
      },
      {
        path: "/team/:id",
        element: <TeamDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <MainPages />,
      },
      {
        path: "/admin/create_page",
        element: <CreatePages />,
      },
      {
        path: "/admin/project_list",
        element: <ProjectList />,
      },
      {
        path: "/admin/blogSection",
        element: <BlogCreate />,
      },
    ],
  },
]);

export default router;
