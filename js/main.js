

const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');

burger.addEventListener('click',function(){
   burger.classList.toggle('active')
   burgerMenu.classList.toggle('active')
})
const swiper = new Swiper('.portfolio-swiper', {
   loop: true,
   spaceBetween: 10,
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 1.2,
   // Navigation arrows


   breakpoints: {
      490: {
         slidesPerView: 2,
      },
      890: {
         slidesPerView: 1,
      },
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
   },

});
// var acc = document.getElementsByClassName("send-item-click");
// var accAll = document.querySelectorAll(".send-item-click");
// var i;

// for (i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener("click", function () {
// 		this.classList.toggle("active");
//       accAll.classList.remove("active");   
// 	});
   
// }