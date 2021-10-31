$(document).ready(function(){

	function copytext(el) {
	    var $tmp = $("<textarea>");
	    $("body").append($tmp);
	    $tmp.val($(el).text()).select();
	    document.execCommand("copy");
	    $tmp.remove();
	}

	const close = () => {
		$("body").removeClass("scroll");
		$(".modal__menu").removeClass("active");
	}

	// Мобильное меню
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

	// Смена веса товара
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

		$(this).parent(".rec__item--button--inner").siblings(".rec__item--wrapper")
		.children(".rec__item--content").children(".rec__item--sale").removeClass('active');
		$(this).parent(".rec__item--button--inner").siblings(".rec__item--wrapper")
		.children(".rec__item--content").children(".rec__item--sale[data-price="+price+"]").addClass('active');

		$(this).parent(".rec__item--button--inner").siblings(".rec__item--wrapper").children(".rec__item--img--inner")
		.children(".rec__item--img").attr("src", "img/" + img);
	});

	$(".city__wrapper--item").on('click', function(){
		giveActiveClass($(this), "city__wrapper--item");
	});

	$(".word__link").on('click', function(e){
		e.preventDefault();
		giveActiveClass($(this), "word__link");
		let word = $(this).attr("data-word");
		$(".word__item--word").removeClass("active");
		$(".word__item--word[data-word="+word+"]").addClass("active");
	});

	$(".contact__feedback--role").on('click', function(){
		giveActiveClass($(this), "contact__feedback--role");
		let role = $(this).text().trim();
		$(".feedback__role").text(role);
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

	// Складывание фильтров при мобилке
	$(".filter__item--title").on("click", function(){
		if($(window).width() < 768){
			$(this).siblings(".filter__item--content").slideToggle(150);
		}
	});

	// Копирование текста
	$(".copy__promo").on('click', function(){
		copytext($(".modal__promo--value"));
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

	if($(".total__value").length){
		$(document).scroll(function(){
		    check();
		});

		check();
	}

	$(".modal__promo--item--tab").on('click', function(){
		let tab = $(this).attr('data-tab');

		if($(".tab[data-tab="+tab+"]").hasClass("active")){
			$(this).removeClass("active");
			$(".tab[data-tab="+tab+"]").removeClass("active").slideUp(200);
		}
		else{
			$(".modal__promo--item--tab").removeClass("active");
			$(this).addClass("active");
			$(".tab").removeClass("active").slideUp(200);
			$(".tab[data-tab="+tab+"]").addClass("active").slideDown(200);
		}
	});

	$(".modal__close").on('click', function(){
		$("body").removeClass("scroll2");
		$(".modal__promo").removeClass("active");
		$(".modal__promo--item--tab").removeClass("active");
		$(".tab").removeClass("active").slideUp(200);
	});

	$(".modal__open").on('click', function(){
		$("body").addClass("scroll2");
		$(".modal__promo").addClass("active");
	});



	$(".promo__tab").on('click', function(e){
		e.preventDefault();
		let tab = $(this).attr('data-tab');

		if($(".promotab[data-tab="+tab+"]").hasClass("active")){
			$(this).removeClass("active");
			$(".promotab[data-tab="+tab+"]").removeClass("active").slideUp(200);
		}
		else{
			$(".modal__promo--item--tab").removeClass("active");
			$(this).addClass("active");
			$(".promotab").removeClass("active").slideUp(200);
			$(".promotab[data-tab="+tab+"]").addClass("active").slideDown(200);
		}
	});

	var alph = ["A", "Б", "В", "Г", "Д", "Е", "Я"];
	let min = 0;
	let max = 6;
	$(".filter__slider--word").slider({
		range: true,
	    min,
	    max,
	    values: [min, max],
	    slide: function(event, ui){
	        $('.first__value').text(alph[ui.values[0]]);
	        $('.second__value').text(alph[ui.values[1]]);
	    }
	});

	$(".filter__slider--date").slider({
		range: true,
	    min: 2010,
	    max: 2021,
	    values: [2010, 2021],
	    slide: function(event, ui){
	        $('.first__value').text(ui.values[0]);
	        $('.second__value').text(ui.values[1]);
	    }
	});

	$(".review__quality--slider").slider({
	    min: 2,
	    max: 5
	});

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