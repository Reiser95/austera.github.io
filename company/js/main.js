$(document).ready(function(){

	const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	$(".burger").on('click', function(){
		$("body").addClass("scroll");
		$(".modal__menu").addClass("active");
	});

	$(".modal__menu--close").on('click', function(){
		close();
	});

	$(window).resize(function(){
		if($(window).width() > 998){
			close();
		}
	});

	const giveActiveClass = (thisElement, element) => {
		if(!thisElement.hasClass('active')){
			thisElement.siblings("."+element).removeClass('active');
			thisElement.addClass('active');
		}
	}

	$(".rec__item--button").on('click', function(){
		giveActiveClass($(this), "rec__item--button");
		let price = $(this).attr('data-price');
		let img = $(this).attr('data-img');

		$(this).parent(".rec__item--button--inner").siblings(".rec__wrapper")
		.children(".rec__item--weight--inner").removeClass('active');
		$(this).parent(".rec__item--button--inner").siblings(".rec__wrapper")
		.children(".rec__item--weight--inner[data-price="+price+"]").addClass('active');

		$(this).parent(".rec__item--button--inner").parent(".book__wrapper").siblings(".rec__item--cart--inner")
		.children(".rec__item--price--inner").removeClass('active');
		$(this).parent(".rec__item--button--inner").parent(".book__wrapper").siblings(".rec__item--cart--inner")
		.children(".rec__item--price--inner[data-price="+price+"]").addClass('active');

		$(this).parent(".rec__item--button--inner").siblings(".rec__item--wrapper").children(".rec__item--img--inner")
		.children(".rec__item--img").attr("src", "img/" + img);
	});

	$(".city__wrapper--item").on('click', function(){
		giveActiveClass($(this), "city__wrapper--item");
	});

	$(".city__wrapper--title").on('click', function(){
		$(this).fadeOut(0);
		$(".city__input").fadeIn(0).focus();
	});

	$(".city__wrapper--item").on('click', function(){
		let data = $(this).attr('data-letter');
		$(".city__item").removeClass("active");
		$(".city__item[data-letter="+data+"]").addClass("active");
	});

	const check = () => {
		let s_top = $("html").scrollTop();
		let yes = $(".total__value").offset().top;

		if(s_top > yes - 500 && s_top < yes){
		    $(".total__value").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });

		    $(".total__value2").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });

		    $(".total__value3").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });

		    $(".total__value4").spincrement({
		    	to: 1953,
		    	duration: 2000,
		    	thousandSeparator: ""
		    });
		}
	}

	$(document).scroll(function(){
	    check();
	});

	check();

	// Карусели
	$(".store__content").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="store__arrow store__arrow--prev"><img src="img/prev.png" alt="Стрелка" class="store__arrow--icon"></div>',
		nextArrow: '<div class="store__arrow store__arrow--next"><img src="img/next.png" alt="Стрелка" class="store__arrow--icon"></div>',
		appendArrows: '.arrows__wrapper',
		responsive: [
		    {
		        breakpoint: 1870,
		        settings: {
			        slidesToShow: 3
		        }
		    },
		    {
		        breakpoint: 998,
		        settings: {
			        slidesToShow: 2
		        }
		    },
		    {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 1
		        }
		    }
		]
	});

	$(".main__inner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="main__arrow main__arrow--prev"><img src="img/prev.png" alt="Стрелка" class="main__arrow--icon"></div>',
		nextArrow: '<div class="main__arrow main__arrow--next"><img src="img/next.png" alt="Стрелка" class="main__arrow--icon"></div>'
	});

});