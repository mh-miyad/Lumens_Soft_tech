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
import ServicesPage from "../Dashboard/Pages/ServicesPage";
import InvoicesPage from "../Dashboard/Pages/InvoicesPage";
import Login from "../Pages/Login";
import PrivateRoute from "../Private/PrivateRoute";
import TeamDetailsDash from "../Dashboard/Pages/TeamDetailsDash";
import DaynamicDropdown from "../Dashboard/Pages/DaynamicDropdown";
import ServiceDetails from "../Pages/ServiceDetails";
import BlogDetails from "../Pages/BlogDetails";
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
        path: "/serviceDetails/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
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
        path: "/admin/service_page",
        element: <ServicesPage />,
      },
      {
        path: "/admin/invoices_page",
        element: <InvoicesPage />,
      },
      {
        path: "/admin/team_list",
        element: <TeamCreate />,
      },
      {
        path: "/admin/team_details",
        element: <TeamDetailsDash />,
      },
      {
        path: "/admin/daynamic_Dropdown",
        element: <DaynamicDropdown />,
      },
    ],
  },
]);

export default router;
