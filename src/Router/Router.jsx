import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import TeamMember from "../Pages/TeamMember";
import Contact from "../Pages/Contact";
import TeamDetails from "../Pages/TeamDetails";
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
]);

export default router;
