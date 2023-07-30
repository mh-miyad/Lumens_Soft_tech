import React from "react";

import { Outlet } from "react-router-dom";
import TopBar from "./Components/topbar/TopBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Scroll from "./Components/Scroll/Scroll";

const App = () => {
  return (
    <div>
      <TopBar />
      <Header />

      <Outlet />
      <Scroll />

      <Footer />
    </div>
  );
};

export default App;
