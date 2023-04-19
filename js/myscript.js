
// Header

hamburger = document.querySelector(".hamburger i");
hamburger.onclick = function(){
navBar = document.querySelector(".nav-bar");
navBar.classList.toggle("active");
this.classList.toggle("bx-x");
}



// Testimonial

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });