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
import AboutUSPage from "../Dashboard/Pages/AboutUSPage";
import CreateClientList from "../Dashboard/Pages/CreateClientList";
import TeamCreate from "../Dashboard/Pages/TeamCreate";
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
        path: "/admin/client_list",
        element: <CreateClientList />,
      },
      {
        path: "/admin/project_list",
        element: <ProjectList />,
      },
      {
        path: "/admin/about_page",
        element: <AboutUSPage />,
      },
      {
        path: "/admin/blogSection",
        element: <BlogCreate />,
      },
      {
        path: "/admin/team_list",
        element: <TeamCreate />,
      },
    ],
  },
]);

export default router;
