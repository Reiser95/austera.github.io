$(document).ready(function(){

	// Функция блокировки кнопки
	function block(){
		$(".main__carousel--arrow").attr("disabled", false);
	}

	var number = $(".main__carousel--item").length;

	// Клик по левой кнопке карусели
	$(document).on("click", ".main__carousel--arrow--left", function(){
		function anim1(car, car2, car3, car4, car5, car6){
			car.removeClass(car2)
			.removeClass(car3).addClass(car4)
			.addClass(car5).removeClass(car6);
		}

		$(".main__carousel--arrow").attr("disabled", "disabled");

		var m = number;
		var n = 0;

		// Нулевое значение карусели переносим в конец

		var car0 = $(".carousel__0");
		car0.removeClass("main__carousel--item-0")
		.addClass("main__carousel--item--null").removeClass("carousel__0")
		.addClass("carousel__"+m);

		while (n < m){
			
			var car = $(".carousel__"+(n+1));
			var car2 = "main__carousel--item-"+(n+1);
			if(n >= 5){
				car2 = "main__carousel--item--null";
			}

			var car3 = "carousel__"+(n+1);
			var car4 = "main__carousel--item-"+n;
			if(n >= 6){
				car4 = "main__carousel--item--null";
			}

			var car5 = "carousel__"+n;
			var car6 = "animate__"+(n+1);
			if(n >= 5){
				car6 = "";
			}

			if(n < 5){
				car.addClass("animate__"+(n+1));
			}

			setTimeout(anim1, 500, car, car2, car3, car4, car5, car6);
			setTimeout(block, 600);

			n++;
		}

	});

	// Клик по правой кнопке карусели
	$(document).on("click",".main__carousel--arrow--right", function(){

		function animateret1(car1, car2, car3, car4, car5, car6){
			car1.removeClass(car2)
			.removeClass(car3).addClass(car4)
			.addClass(car5).removeClass(car6);
		}

		$(".main__carousel--arrow").attr("disabled", "disabled");

		var m = number;
		var n = 0;

		var carlast = $(".carousel__"+m);
		carlast.removeClass("main__carousel--item--null")
		.addClass("main__carousel--item-"+n).removeClass("carousel__"+m)
		.addClass("carousel__"+n);

		while(n < m){

			carret = $(".carousel__"+n);
			carret2 = "main__carousel--item-"+n;
			if(n >= 6){
				carret2 = "";
			}
			carret3 = "carousel__"+n;
			carret4 = "main__carousel--item-"+(n+1);
			if(n >= 5){
				carret4 = "main__carousel--item--null";
			}
			carret5 = "carousel__"+(n+1);
			carret6 = "animatereturn"+n;

			carret.addClass("animatereturn"+n);

			setTimeout(animateret1, 500, carret, carret2, carret3, carret4, carret5, carret6);
			setTimeout(block, 600);

			n++;
		}

	});


	//Клик по букету в карусели
	$(".main__carousel--item").on("click", function(){

		function fadeIn(){
			$(".main__carousel--item--text--inner")
			.removeClass("main__fade");
			$(".carousel__main").removeClass("main__fade");
		}

		function fadeOut(){
			$(".carousel__main").addClass("main__fade").children(".main__carousel--item--img")
			.attr("src", img);

			$(".main__carousel--text--view").text(view);
			$(".main__carousel--text--name").text(name);
			$(".main__carousel--text--price").text(price + "Р");
		}

		var temp = $(this).children(".main__carousel--item--img");

		var view = temp.attr("data-view");

		var img = temp.attr("src");

		var price = temp.attr("data-price");

		var name = temp.attr("data-name");

		$(".main__carousel--item--text--inner").addClass("main__fade");
		$(".carousel__main").addClass("main__fade");

		setTimeout(fadeOut, 200);

		setTimeout(fadeIn, 200);


	});


	$(".main__bar--progress").on("click", function(){
		$(this).next().toggleClass("active");
	});


	$(".carousel__inner").owlCarousel({
		items: 1,
    	loop: true,
    	center: true
	});


	$('.main__carousel--arrow--right').click(function () {
	    $(".carousel__inner").trigger('next.owl.carousel');
	});
	$('.main__carousel--arrow--left').click(function () {
	    $(".carousel__inner").trigger('prev.owl.carousel');
	});


	$(".main__content--mobile--menu--icon").on("click", function(){
		$(".mobile__menu").addClass("mobile__menu--active");
		$(".grey").addClass("grey__active");

		$(".mobile__menu--items").each(function(i){
			$(this).addClass("visited");
		});
	});

	$(".mobile__menu--cross").on("click", function(){
		$(".mobile__menu").removeClass("mobile__menu--active");
		$(".grey").removeClass("grey__active");
	});

});