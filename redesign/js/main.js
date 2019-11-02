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

});

$(window).on("load",function (){

  $("#preloader").fadeOut(500);

});