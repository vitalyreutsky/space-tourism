// Подключение свайпера
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".swiper", {
  slidesPerView: "1",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  speed: 1000,
});
