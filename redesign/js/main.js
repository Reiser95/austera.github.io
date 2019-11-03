$(document).ready(function(){

	/*=== Переключение языков ===*/ 

	let flag = $(".header__top--language--flag");

	flag.on("click", function(){
		if($(this).hasClass("active__flag")){
			return;
		}
		else{
			flag.removeClass("active__flag");
			$(this).addClass("active__flag");
		}
	});

	/*=== Модальное окно соглашения ===*/

	let agree = $(".user__agree");

	agree.on("click", function(e){
		e.preventDefault();
	});

	/*=== Скрытие чата ===*/ 

	let closeChat = $(".chat__close--inner");

	closeChat.on("click", function(){
		$(".chat__content").toggleClass("chat__off");
		$(this).toggleClass("chat__button--on");
		$(".chat__close--icon").toggleClass("chat__close--icon--rotate");
	});


	/* Слайдеры */

	let gameSlider = $(".main__like--games--carousel");

	gameSlider.owlCarousel({
		items: 3,
		autoWidth: true,
		margin: 35
	});

	$('.main__arrow--next').click(function () {
	    gameSlider.trigger('next.owl.carousel');
	});
	$('.main__arrow--prev').click(function () {
	    gameSlider.trigger('prev.owl.carousel');
	});


});

/*=== Прелоадер ===*/ 

$(window).on("load",function (){

  $("#preloader").fadeOut(500);

});