import React, { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    const scrollUp = document.querySelector(".scrollUp");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        scrollUp.classList.add("active");
      } else {
        scrollUp.classList.remove("active");
      }
    });
    const whatScrollUp = document.querySelector(".wtascrollUp");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        whatScrollUp.classList.add("active");
      } else {
        whatScrollUp.classList.remove("active");
      }
    });
    const skypeScrollUp = document.querySelector(".skypescrollUp");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        skypeScrollUp.classList.add("active");
      } else {
        skypeScrollUp.classList.remove("active");
      }
    });
  }, []);
  return (
    <div>
      <div class='scroll-to-top-btn'>
        <a href='#' class='scrollUp'>
          <i class='fa-solid fa-angles-up'></i>
        </a>
      </div>
      {/* <!-- scroll to top button -->

    <!-- whatsapp to top button --> */}
      <div class='whatsapp'>
        <a href='https://wa.me/8801829317005' class='wtascrollUp'>
          <i class='fa-brands fa-whatsapp'></i>
        </a>
      </div>
      {/* <!-- whatsapp to top button -->
    <!-- skype to top button --> */}
      <div class='skype'>
        <a
          href='https://join.skype.com/invite/sQYngKj9QOUz'
          class='skypescrollUp'>
          <i class='fa-brands fa-skype'></i>
        </a>
      </div>
    </div>
  );
};

export default Scroll;
