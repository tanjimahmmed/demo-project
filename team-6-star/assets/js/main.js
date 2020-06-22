(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

    
    //    pertical js

        if (typeof particlesJS !== "undefined") {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 25,
                        "density": {
                            "enable": true,
                            "value_area": 500
                        }
                    },
                    "color": {
                        "value": '#fff',
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#fff"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 0,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 250,
                        "color": "#fff",
                        "opacity": 0.5,
                        "width": 0.5
                    },
                    "move": {
                        "enable": true,
                        "speed": 1.3,
                        "direction": "bottom",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            });
        }

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });

        // header sticky

        $(window).on('scroll', function(){
            var scroll = $(window).scrollTop();
            if(scroll < 150) {
                $("#header_sticky").removeClass("sticky_bar");
            }else{
                $("#header_sticky").addClass("sticky_bar");
            }
        });

        // One Page Nav
        if ($(".header_area").length) {
            var top_offset = $('header_area').height() + 75;
            $('.main_menu nav ul').onePageNav({
                currentClass: 'active',
                scrollOffset: top_offset,
            });
        }

        // sticky nav
        if($("#firefly").length) {
            $.firefly({
                color: '#000',
                minPixel: 3,
                maxPixel: 5,
                total: 30,
                on: '#firefly'
            });
        }

    });

    jQuery(window).load(function () {
        // preloader
        $(".spinner").fadeOut();
        $(".team_six_preloader").delay(450).fadeOut('slow');
    });

}(jQuery));	