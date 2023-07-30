import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./Css/animate.css";
import "./Css/responsive.css";
import "./Css/style.css";
import "./Css/progress-bar.css";
import router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
