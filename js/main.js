$(document).ready(function() {

  // own-carousel
   $('.owl-carousel').owlCarousel({
      items: 6,
      margin: 10,
      loop: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      // responsiveClass:true,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:4,
        },
        1000:{
            items:6,
        }
    }
   });
	
});