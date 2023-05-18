//  if(window.screen.width<=760px)

function openclose() {
 let navbar=document.querySelector(".navbar");
 let humburger=document.querySelector(".humburger");
  if (navbar.style.display !== "block") {
    navbar.style.display = "block";
    
    humburger.style.rotate=90+"deg";
   

  }else{
    navbar.style.display = "none";
   
    humburger.style.rotate=0+"deg";
   
   
  }
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
    320: {
      slidesPerView: 3,
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