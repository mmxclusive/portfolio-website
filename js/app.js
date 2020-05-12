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
      


  });



