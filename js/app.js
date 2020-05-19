$(document).ready(function(){
  


    // Typing effect 
    var typed = new Typed(".typing-effect",{
        strings: ["Muhammed Adelodun","a Web Developer","a Professional Photographer", "a Visual Story Teller","a Business Man"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });



    // Collapse Nav-bar after selection clicked

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });



    // Hide navbar on scroll down and show on scroll up

    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }

  });



