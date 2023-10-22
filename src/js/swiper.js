import Swiper from 'swiper/bundle';

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
        slidesPerView: 1.15,
        
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
        slidesPerView: 3.13,
      }
  
    }
  });
  
  // AUTO HOVER MOBILE
  function manageSlideStyle(action) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const photo = activeSlide.querySelector('.hero__swiper-photo');
    if (window.matchMedia('(min-width: 769px) and (max-width: 1360px)').matches) {
      if (photo) {
        if (action === 'activate') {
          photo.style.height = '260px';
          photo.style.transition = '0.6s ease';
        } else if (action === 'reset') {
          photo.style.height = '';
          photo.style.transition = '';
        }
      }
    }
  }
  manageSlideStyle('activate');
  swiper.on('slideChange', () => manageSlideStyle('activate'));
  swiper.on('sliderMove', () => manageSlideStyle('reset'));