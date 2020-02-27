$(document).ready(function(){


	// Нажатие на мобильное меню
	$(".mobile__menu--icon").on("click", function(){
		$("body").addClass("scroll");
		$(".mobile__menu").addClass("mobile__menu--fade")
	})

	// Нажатие на крестик закрытия мобильного меню
	$(".mobile__menu--cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".mobile__menu").removeClass("mobile__menu--fade")
	})

	// Нажатие вне мобильного меню
	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".mobile__menu").length === 0) {
	        $("body").removeClass("scroll");
			$(".mobile__menu").removeClass("mobile__menu--fade")
	    }
	});


	// Карусельки

	$(".tovar__carousel--min").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		adaptiveHeight: true,
		asNavFor: '.tovar__carousel--max',
		focusOnSelect: true,
		nextArrow: '<i class="fas fa-angle-down carousel__min--arrow carousel__min--arrow--next"></i>',
		prevArrow: '<i class="fas fa-angle-up carousel__min--arrow carousel__min--arrow--prev"></i>',
		responsive: [
		    {
		    	breakpoint: 998,
		    	settings: {
		    		slidesToShow: 3
		      	}
		    }
		  ]
	});

	$(".tovar__carousel--max").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		asNavFor: '.tovar__carousel--min',
		fade: true,
		cssEase: 'linear',
		focusOnSelect: true
	});


	$(".popular__carousel").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="popular__arrow popular__arrow--prev"><i class="fas fa-angle-left"></i></div>',
		nextArrow: '<div class="popular__arrow popular__arrow--next"><i class="fas fa-angle-right"></i></div>',
		responsive: [
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


});