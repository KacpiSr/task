import Swiper from "swiper/bundle";

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1: {
      slidesPerView: 1.15,
    },
    769: {
      slidesPerView: 1.5,
    },
    991: {
      slidesPerView: 2.4,
    },
    1361: {
      slidesPerView: 3.2,
    },
    1480: {
      slidesPerView: 3.13,
    },
  },
});

// AUTO HOVER MOBILE
function manageSlideStyle(action) {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const photo = activeSlide.querySelector(".hero__swiper-photo");
  const hoverCircle = activeSlide.querySelector(".hero__hover-circle");
  if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
    if (photo) {
      if (action === "activate") {
        photo.style.height = "260px";
        photo.style.transition = "0.6s ease";
        if (hoverCircle) {
          hoverCircle.style.opacity = "1";
          hoverCircle.style.transition = "opacity 0.3s";
        }
      } else if (action === "reset") {
        photo.style.height = "";
        photo.style.transition = "";
        if (hoverCircle) {
          hoverCircle.style.opacity = "";
          hoverCircle.style.transition = "opacity 0.3s";
        }
      }
    }
  }
}
if (window.innerWidth <= 1024) {
  document.addEventListener("DOMContentLoaded", function () {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const hoverCircle = activeSlide.querySelector(".hero__hover-circle");
    if (hoverCircle) {
      hoverCircle.style.opacity = "1";
      hoverCircle.style.transition = "opacity 0.3s";
    }
  });
}
manageSlideStyle("activate");
swiper.on("slideChange", () => manageSlideStyle("activate"));
swiper.on("sliderMove", () => manageSlideStyle("reset"));
