//Swiper
const swiper = new Swiper(".home__banner", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints:{
      1024:{
        slidesPerView: 2,
      }
    }
  });
  //End Swiper