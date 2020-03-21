$(document).ready(function(){

	$(document).scroll(function(){
		if($(window).scrollTop() > 20){
			$(".header").addClass("header__active");
		}
		else{
			$(".header").removeClass("header__active");
		}
	});

	if($(window).scrollTop() > 20){
		$(".header").addClass("header__active");
	}
	else{
		$(".header").removeClass("header__active");
	}

	// Мобильное меню

	$(".mobile__menu--icon").on("click", function(){
		$("body").addClass("scroll");
		$(".content").addClass("blur");
		$(".modal__menu").addClass("modal__menu--active");
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			$("body").removeClass("scroll");
			$(".content").removeClass("blur");
			$(".modal__menu").removeClass("modal__menu--active");
		}
	});

	$(".modal__cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".content").removeClass("blur");
		$(".modal__menu").removeClass("modal__menu--active");
	});

	// Модальное окно участия

	$(".button__sign").on("click", function(){
		$("body").addClass("scroll__app");
		$(".content").addClass("blur__app");
		$(".modal__menu").removeClass("modal__menu--active");
		$(".modal__application").addClass("modal__application--active");
	});

	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".modal__application").length === 0) {
	    	$("body").removeClass("scroll__app");
			$(".content").removeClass("blur__app");
	        $(".modal__application").removeClass("modal__application--active");
	    }
	});

	// Faq

	$(".faq__item").on("click", function(){
		$(this).children(".faq__cross").toggleClass("faq__cross--active");
		$(this).children(".faq__item--answer").slideToggle(300);
	});

	// Слайдеры

	$(".result__img--carousel--inner").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		adaptiveHeight: true,
		asNavFor: '.result__text--carousel--inner',
		nextArrow: '<img src="img/slider-next.png" class="slider__arrow slider__arrow--next">',
		prevArrow: '<img src="img/slider-prev.png" class="slider__arrow slider__arrow--prev">'
	});


	$(".result__text--carousel--inner").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		asNavFor: '.result__img--carousel--inner'
	});

	$(".document__carousel").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		nextArrow: '<img src="img/slider-next.png" class="slider__arrow slider__arrow--next">',
		prevArrow: '<img src="img/slider-prev.png" class="slider__arrow slider__arrow--prev">'
	});

});