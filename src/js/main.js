import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './append-script';




const swiper = new Swiper('.swiper', {
  // loopedSlidesLimit:false,
  
  loop: true,
  spaceBetween:30,
  // autoHeight: true,
  // loopedSlides: 6,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    1: {
      slidesPerView: 1,
      
    },
    769: {
      slidesPerView: 1.5,
      
    },
    991: {
      // slidesPerView: 2.42,
      slidesPerView: 2.4,
      // slidesPerView: 2.37,
      
    },
    1361:{
      slidesPerView: 3.2,
    },
    1480: {
      slidesPerView: 3.15,
    }

  }
});
