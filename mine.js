$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
    }else{
      $(".navbar").removeClass("sticky");
    }
    if(this.scrollY > 200){
      $(".scroll-up-btn").addClass("show");
    }else{
      $(".scroll-up-btn").removeClass("show");
    }
  });
  //slide up script
      $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
      });

  //menu - navbar script 
  $(".menu-btn").click(function(){
    $(".navbar .menu").toggleClass("active");
    $(".fa-bars").toggleClass("fa-times");
  });
  //media box 
  $(".mes").click(function(){
    $(".media-item").addClass("show-box");
    $(".mes").addClass("heddin");
  });
  $(".media-item").click(function(){
    $(".media-item").removeClass("show-box");
    $(".mes").removeClass("heddin");
  });
  //typing animation
  var typed = new Typed('.typeing', {
    strings: [
      'YouTuber',
      'Developer',
      'Blogger',
      'Desginer',
      'Freelancer',
      'Marketer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed('.typeing-2',{
    strings: [
      'YouTuber',
      'Developer',
      'Blogger',
      'Desginer',
      'Freelancer',
      'Marketer'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  //owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTime: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
  });
});