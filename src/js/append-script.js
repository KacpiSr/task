// HOVER-CIRCLE SCRIPT
const swiperSlides = document.querySelectorAll('.hero__swiper-slide');

swiperSlides.forEach(slide => {
  const hoverCircle = document.createElement('div');
  hoverCircle.classList.add('hero__hover-circle');
  hoverCircle.style.opacity = window.innerWidth <= 768 ? '1' : '0';
  const arrowCircle = document.createElement('div');
  arrowCircle.classList.add('hero__arrow-circle');
  const arrowSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13.008" viewBox="0 0 17 13.008">
      <path id="Kształt_787" data-name="Kształt 787" d="M3888.167,2672.91H3876v-.81h12.166a46.307,46.307,0,0,0-2.271-6.1l7.1,6.5-7.1,6.506A46.158,46.158,0,0,0,3888.167,2672.91Z" transform="translate(-3876 -2666.005)" fill="#242424"/>
    </svg>
  `;
  arrowCircle.innerHTML = arrowSvg;
  hoverCircle.appendChild(arrowCircle);
  slide.appendChild(hoverCircle);

  if (window.innerWidth <= 768) {
    hoverCircle.style.opacity = '1';
  }
  slide.addEventListener('mouseenter', () => {
    hoverCircle.style.transition = 'opacity 0.3s';
    hoverCircle.style.opacity = '1';
  });
  slide.addEventListener('mouseleave', () => {
    hoverCircle.style.transition = 'opacity 0.3s';
    hoverCircle.style.opacity = '0';
  });
});

