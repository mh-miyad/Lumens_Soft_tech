import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./Css/animate.css";
import "./Css/responsive.css";
import "./Css/style.css";
import "./Css/progress-bar.css";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
