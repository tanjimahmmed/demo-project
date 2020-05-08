(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        // video modal
        $(".video_play").modalVideo();

        $(".video_play").on('click', function(){
            return false;
        });
        
        $('.video_slide').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dot: true,
            autoplay: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            dotsData: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    dot: false,
                    dotsData: false,
                },
                600:{
                    items:1,
                    nav:false,
                    dot: false,
                    dotsData: false,
                },
                1000:{
                    items:1,
                    nav:false,
                    loop:false
                }
            }
        });

        // grid system
        $(".gallery_list").isotope({
            layoutMode: 'fitRows',
            transitionDuration: '0.8s'
        });

        // magnific popup
        $(".popup_image").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            }
        });
            
        // testimonial 
        $('.testimonial_carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dot: true,
            autoplay: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });

        // mobile menu

        $('#mobile_menu').meanmenu({
            meanMenuContainer: '.mobile_menu',
            meanScreenWidth: "992"
        });
        
        if ($("#firefly").length) {
            $.firefly({
                color: '#000',
                minPixel: 3,
                maxPixel: 5,
                total: 30,
                on: '#firefly'
            });
        }

        // sticky nav

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $("#header_sticky").removeClass("sticky_bar");
            } else {
                $("#header_sticky").addClass("sticky_bar");
            }
        });

        // One Page Nav
        if ($(".header_area").length) {
            var top_offset = $('.header_area').height() - 40;
            $('.main_menu nav ul').onePageNav({
                currentClass: 'active',
                scrollOffset: top_offset,
            });
        }

    });

   jQuery(window).load(function(){

   });

}(jQuery));	