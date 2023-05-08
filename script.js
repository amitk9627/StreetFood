//  if(window.screen.width<=760px)
function openNav() {
  
  document.getElementById("main-navigation").style.display="block";
  document.getElementsByClassName("closebtn").style.display="block";

}

function closeNav() {
  
  document.getElementById("main-navigation").style.display="none";
  document.getElementsByClassName("closebtn").style.display="none";

}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 7,
    // loop:false,
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320:{
        slidesPerView: 2,
        spaceBetween: 7,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 9,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 15,
      },
    },
  });