$(document).ready(function(){
	"use strict";

    
	// Sticky Header Active
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$(".sticky-header").addClass('sticky');
		} 
		else {
			$(".sticky-header").removeClass('sticky');
		}
	});
    // Meanmenu Active
	$('#mobile-menu-active').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: ".mobile-menu"


	});

	
	
	// Slider carousel active
    $('.header-slider').owlCarousel({
	    loop:true,
	    dots: true,
	    nav: true,
	    autoplay: true,
    	autoplayTimeout: 4000,
		smartSpeed: 800,
		animateOut: 'lightSpeedOut',
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
    	}
	});
	
	//===== Slick Slider
	$('.testimonial-slide').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
        ]
        
    });

	

    // Owl Carousel
    $(".owl").owlCarousel();
    
    // Wow Animation
    new WOW().init();

   	/***
        MixItUp
    ***/
    var mix = mixitup('.portfolio-content');

    

    

    

    
	

    
    

    
	// Scroll Up Btn 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$(".scroll-to-top").fadeIn();
		}
		else {
			$(".scroll-to-top").fadeOut();
		}
	});

	$(".scroll-to-top").click(function() {
		$("html, body").animate({scrollTop: 0}, 700);
		return false;
	});

})(jQuery);

