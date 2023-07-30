// const progressBar = document.querySelectorAll(".progress-bar");

// var progressBarContainer = document.querySelector(".show-on-scroll");

// let start;
// document.onscroll = function () {
//   if (isElementInViewport(progressBarContainer)) {
//     if (!start) {
//       window.requestAnimationFrame(loop);
//     }
//   } else {
//     start = null;
//   }
// };

// const animationTime = 1000;
// function loop(timestamp) {
//   if (!start) {
//     start = timestamp;
//   }
//   const elapsed = timestamp - start;
//   const progress = elapsed / animationTime;
//   progressBar.forEach((bar) => {
//     const progressComplete = bar.getAttribute("data-complete");

//     const width = progress < 1 ? Math.ceil(progress * 100) : progressComplete;

//     if (width <= progressComplete) {
//       bar.style.width = width + "%";
//       bar.innerHTML = width + "%";
//     }
//   });
//   if (progress <= 1) {
//     window.requestAnimationFrame(loop);
//   }
// }

// function isElementInViewport(element) {
//   var rectangle = element.getBoundingClientRect();
//   var height = window.innerHeight || document.documentElement.clientHeight;
//   var top = rectangle.top;
//   var bottom = rectangle.bottom;

//   return (
//     (top <= 0 && bottom >= 0) ||
//     (bottom >= height && top <= height) ||
//     (top >= 0 && bottom <= height)
//   );
// }
// // progres bar
// // progres bar
// // progres bar
// // progres bar
// // progres bar
// // progres bar






const skillsSection = document.getElementById('skill-sect');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
  progressBars.forEach(progressBars=> {
    const value =progressBars.dataset.progress;
    progressBars.style.opacity =1;
    progressBars.style.width =`${value}%`;
  });
};

function hideProgress(){
  progressBars.forEach(p=>{
    p.style.opacity=0;
    p.style.width=0;
  });
}

window.addEventListener('scroll',() =>{
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  }else{
    hideProgress();
  }
});
