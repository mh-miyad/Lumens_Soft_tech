import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./Components/topbar/TopBar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Scroll from "./Components/Scroll/Scroll";

const App = () => {
  useEffect(() => {
    const preloader = document.getElementById("loader");
    const loadPage = () => {
      preloader.style.display = "none";
    };
    loadPage(); // Optionally, you can call the loadPage function here to hide the loader immediately.
  }, []);

  return (
    <div>
      <div id='loader'>
        <div className='shapes'></div>
      </div>
      <TopBar />
      <Header />

      <Outlet />
      <Scroll />

      <Footer />
    </div>
  );
};

export default App;
