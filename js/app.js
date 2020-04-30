$(document).ready(function(){

    var typed = new Typed(".typing-effect",{
        strings: ["Muhammed Adelodun","a Web Developer","a Professional Photographer", "a Visual Story Teller","a Business Man"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    if($(window).width() <= 415){
        $('#contact-details').remove()
      };

  });



