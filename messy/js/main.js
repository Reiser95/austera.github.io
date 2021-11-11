$(document).ready(function(){

	function close(){
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".menu").on('click', function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".cross").on('click', function(){
		close();
	});

	$(".go").on("click", function(e){
		e.preventDefault();
		let point = $(this).attr("data-point");
		close();
		$('body,html').animate({scrollTop: $("#"+point).offset().top}, 500);
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	if($(window).scrollTop > 20){
		$(".header").addClass("active");
	}

	$(document).on("scroll", function(){
		if($(window).scrollTop() > 20){
			$(".header").addClass("active");
		}
		else{
			$(".header").removeClass("active");
		}
	});

	$(".faq__item").on('click', function(){
		$(this).children('.faq__answer').slideToggle(200);
		$(this).children('.faq__question--inner').children('.faq__close').toggleClass('active');
	});

	let count = 1;
	const editImg = (count) => {
		$(".about__question--img").attr('src', `img/${count}.png`);
		if(count >= 4){
			count = 1;
		}
		else{
			count++;
		}
		setTimeout(() => editImg(count), 400);
	}
	setTimeout(() => editImg(count), 400);

	function rotate(){
		let scroll = $(".about__img--inner").scrollTop();
		let winScroll = $(window).scrollTop();
		scroll = winScroll - (scroll + 1400);
		$(".about__img--wrapper").css("transform", "translateX("+scroll/10+"px)");
	}
	rotate();
	$(document).scroll(function(){
		rotate();
	});

});