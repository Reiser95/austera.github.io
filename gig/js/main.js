$(document).ready(function(){

	$(".portfolio__link").on("click", function(e){
		$('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 800);
		e.preventDefault();
	});

	$(".uslugi__link").on("click", function(e){
		$('html,body').stop().animate({ scrollTop: $('#uslugi').offset().top }, 800);
		e.preventDefault();
	});

});