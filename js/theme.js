// js Document

// Created on   : 15/20/2024.
// Theme Name   : Piku - Creative Saas & Software HTML5 Template
// Version      : 1.0.
// Developed by : (me@heloshape.com) / (www.me.heloshape.com)


(function($) {
    "use strict";

    // ------------------------ Switcher
    // if($("body").length) {
    //   $("body").append(
    //     '<a href="https://html.creativegigstf.com/piku/piku-dark/index-7.html" id="switcher" target="_self" class="d-flex align-items-center justify-content-center" title="Dark Version"><i class="bi bi-moon-stars-fill"></i></a>'
    //   );
    // }

      //-------------- Click event to scroll to top
      $(window).on('scroll', function (){
        if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
      });
      $('.scroll-top').on('click', function() {
        $('html, body').animate({scrollTop : 0});
        return false;
      });

      // --------------------- Add .active class to current navigation based on URL
      var pgurl = window.location.href.substr(window.location.href.lastIndexOf("https://html.creativegigstf.com/")+1);
      $(".navbar-nav > li  a").each(function(){
      if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
      $(this).addClass("active");
      // $(this).parent("li").addClass("active");
      })


        // ----------------------------- Counter Function
        var timer = $('.counter');
        if(timer.length) {
          $('.counter').counterUp({
            delay: 10,
            time: 1200,
          });
        }

        // ------------------------ Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.sticky-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 180) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });


      // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });





        // ------------------------ Feedback Slider One
        if($(".feedback-slider-one").length) {
          $('.feedback-slider-one').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


        // ------------------------ Feedback Slider Two
        if($(".feedback-slider-two").length) {
          $('.feedback-slider-two').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

        // ------------------------ Feedback Slider Three
        if($(".feedback-slider-three").length) {
          $('.feedback-slider-three').slick({
              dots: true,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
            });
        }


        // ------------------------ Feedback Slider Four
        if($(".feedback-slider-four").length) {
          $('.feedback-slider-four').slick({
              dots: true,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
            });
        }


        // ------------------------ Feedback Slider Five
        if($(".feedback-slider-five").length) {
          $('.feedback-slider-five').slick({
              dots: true,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 300000,
            });
        }

       // ------------------------ Feedback Slider Six
       if($(".feedback-slider-six").length) {
        $('.feedback-slider-six').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.prev_b'),
            nextArrow: $('.next_b'),
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
      }


      // ------------------------ Feedback Slider Seven
      if($(".feedback-slider-seven").length) {
        $('.feedback-slider-seven').slick({
            dots: false,
            arrows: false,
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
      }


      // ------------------------ Feedback Slider Eight
      if($(".feedback-slider-eight").length) {
        $('.feedback-slider-eight').slick({
            dots: false,
            arrows: false,
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
      }
      


      // ------------------------ Service Slider One
      if($(".service-slider-one").length) {
        $('.service-slider-one').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.prev_a'),
            nextArrow: $('.next_a'),
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
      }


      // ------------------------ Project Slider One
      if($(".project-slider-one").length) {
        $('.project-slider-one').slick({
            dots: false,
            arrows: true,
            prevArrow: $('.prev_a'),
            nextArrow: $('.next_a'),
            lazyLoad: 'ondemand',
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: false,
            autoplaySpeed: 3000,
          });
      }
        


        // ------------------------ Counter Slider One
        if($(".counter-slider-one").length) {
          $('.counter-slider-one').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


        // ------------------------ Portfolio Slider One
        if($(".pr-slider-one").length) {
          $('.pr-slider-one').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
            });
        }
        
        



        // ------------------------ Partner Slider One
        if($(".partner-logo-one").length) {
          $('.partner-logo-one').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3500,
              responsive: [
                {
                  breakpoint: 1399,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
            });
        }

        // ------------------------ Partner Slider Two
        if($(".partner-logo-two").length) {
          $('.partner-logo-two').slick({
              dots: false,
              arrows: false,
              lazyLoad: 'ondemand',
              centerPadding: '0px',
              slidesToShow: 8,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 6
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 3
                  }
                }
              ]
            });
        }






        // --------------------------------- Contact Form
          // init the validator
          // validator files are included in the download package
          // otherwise download from http://1000hz.github.io/bootstrap-validator

          if($("#contact-form").length) {
            $('#contact-form').validator();
            // when the form is submitted
            $('#contact-form').on('submit', function (e) {

                // if the validator does not prevent form submit
                if (!e.isDefaultPrevented()) {
                    var url = "inc/contact.html";

                    // POST values in the background the the script URL
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data)
                        {
                            // data = JSON object that contact.php returns

                            // we recieve the type of the message: success x danger and apply it to the
                            var messageAlert = 'alert-' + data.type;
                            var messageText = data.message;

                            // let's compose Bootstrap alert box HTML
                            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                            // If we have messageAlert and messageText
                            if (messageAlert && messageText) {
                                // inject the alert to .messages div in our form
                                $('#contact-form').find('.messages').html(alertBox);
                                // empty the form
                                $('#contact-form')[0].reset();
                            }
                        }
                    });
                    return false;
                }
            });
          }

          // ------------------------ Password Toggler
          if($(".user-data-form").length) {
            $(".passVicon").on('click', function() {
              $(".passVicon").toggleClass("eye-slash");
              var input = $(".pass_log_id");
              if (input.attr("type") === "password") {
                input.attr("type", "text");
              } else {
                input.attr("type", "password");
              }

            });
          }


$(window).on ('load', function (){ // makes sure the whole site is loaded

// -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});



// ------------------------------- Scroll Animation
          var wow = new WOW(
            {
              boxClass:     'wow',      // animated element css class (default is wow)
              animateClass: 'animated', // animation css class (default is animated)
              offset:       0,          // distance to the element when triggering the animation (default is 0)
              mobile:       true,       // trigger animations on mobile devices (default is true)
              live:         true,       // act on asynchronously loaded content (default is true)
            }
          );
          wow.init();
        
// ------------------------------------- Fancybox
        var fancy = $ ("[data-fancybox]");
        if(fancy.length) {
          Fancybox.bind("[data-fancybox]", {
            // Your custom options
          });
        }




// ----------------------------- isotop gallery
        if ($("#isotop-gallery-wrapper").length) {
            var $grid = $('#isotop-gallery-wrapper').isotope({
              // options
              itemSelector: '.isotop-item',
              percentPosition: true,
              masonry: {
                // use element for option
                columnWidth: '.grid-sizer'
              }

            });

            // filter items on button click
            $('.isotop-menu-wrapper').on( 'click', 'li', function() {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });

            // change is-checked class on buttons
            $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  $( this ).addClass('is-checked');
                });
            });
        }


    });  //End On Load Function


})(jQuery);