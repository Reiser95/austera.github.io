$(document).ready(function(){

	$(".faq__item").on('click', function(){
		$(this).children('.faq__item--title').toggleClass('active');
		$(this).children('.faq__item--text').slideToggle(100);
	});

	$(".footer__up").on('click', function(){
		$('html, body').stop().animate({scrollTop: 0}, 500);
	});

	$(".menu").on('click', function(){
		$(this).toggleClass("active");
		if($(this).hasClass("active")){
			$(this).attr("src", "img/cross.svg");
		}
		else{
			$(this).attr("src", "img/menu.svg");
		}

		$("body").toggleClass("scroll");
		$(".modal__menu").toggleClass("active");
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			$(".menu").removeClass("active");
			$(".menu").attr("src", "img/menu.svg");
			$("body").removeClass("scroll");
			$(".modal__menu").removeClass("active");
		}
	});

	$(".total__value").spincrement({
		to: 1000000000000,
		duration: 2000
	});

});