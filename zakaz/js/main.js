$(document).ready(function(){

    $(".slider__left").slick({
    	dots: true,
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 6000,
  		nextArrow: "",
        prevArrow: "",
        dotsClass: "comment__choise",
    });

    $(".slider__right").slick({
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 6000,
  		nextArrow: '<div class="slider__arrow--right slider__arrow"><i class="fas fa-chevron-right arrow"></i></div>',
        prevArrow: '<div class="slider__arrow--left slider__arrow"><i class="fas fa-chevron-left arrow"></i></div>',
    });

    $(".footer__slider--inner").slick({
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 6000,
  		nextArrow: '<div class="footer__arrow--right footer__slider--arr"><i class="fas fa-chevron-right arrow"></i></div>',
        prevArrow: '<div class="footer__arrow--left footer__slider--arr"><i class="fas fa-chevron-left arrow"></i></div>',
        slidesToShow: 5,
  		slidesToScroll: 1,
  		responsive: [
  		    {
  		      breakpoint: 1800,
  		      settings: {
  		        slidesToShow: 4,
  		        slidesToScroll: 1,
  		        infinite: true,
  		      }
  		    },
  		    {
  		      breakpoint: 1540,
  		      settings: {
  		        slidesToShow: 2,
  		        slidesToScroll: 1
  		      }
  		    },
  		    {
  		      breakpoint: 1024,
  		      settings: {
  		        slidesToShow: 1,
  		        slidesToScroll: 1
  		      }
  		    }
  		  ]
    });

    $(".right__sidebar--inner").slick({
    	vertical: true,
    	verticalSwiping: true,
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 6000,
  		nextArrow: '<div class="right__slider--arrow--up right__arrow"><i class="fas fa-chevron-up right__arrows"></i></div> ',
        prevArrow: '<div class="right__slider--arrow--down right__arrow"><i class="fas fa-chevron-down right__arrows"></i></div>',
        slidesToShow: 4,
  		slidesToScroll: 1
    });

    $('.footer__button').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#home').offset().top }, 500);
      e.preventDefault();
    });

    $(".column__item").on("click", function(){
    	var stic = $(this);
    	var attr = stic.attr("data-target");
    	if(attr == 7){
    		stic.toggleClass("active");
    		$(".column__item--vlo").slideToggle(300).css("display", "flex");
    	}
    });

    $(".column__item--vlo").on("click", function(){
    	var stics = $(this);
    	stics.toggleClass("active__vlo");
    	$(".column__item--vlo--vlo").slideToggle(300).css("display", "flex");
    });

    var menu = $(".menu__button");
    menu.on("click", function(){
    	$(".modal__menu--header").fadeIn(200);
    });

    var cross = $(".modal__exit");
    cross.on("click", function(){
    	$(".modal__menu--header").fadeOut(200);
    });

    var arr = $(".ar__right");
    arr.on("click", function(){
    	$(".left__sidebar").fadeIn(200);
    });

    var krest = $(".krestik");
    krest.on("click", function(){
    	$(".left__sidebar").fadeOut(200);
    });

});