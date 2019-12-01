$(document).ready(function(){

	var plusValueBags = $(".value__arrow--up");
	var minusValueBags = $(".value__arrow--down");

	plusValueBags.on("click", function(){
		var bag = $(this).siblings(".bags__value--inner")
		.children(".value__bags");

		var bagValue = parseInt(bag.text().trim());

		if(bagValue == 50){
			return;
		}
		else{
			bagValue++;
			bag.text(bagValue);
		}
	});

	minusValueBags.on("click", function(){
		var bag = $(this).siblings(".bags__value--inner")
		.children(".value__bags");

		var bagValue = parseInt(bag.text().trim());

		if(bagValue == 0){
			return;
		}
		else{
			bagValue--;
			bag.text(bagValue);
		}
	});

	var numberDelete = $(".cart__item--inner").children(".cart__item--del").length;

	/* Удаление элемента с корзины */

	$(".cart__item--delete").on("click", function(){
		$(this).parent(".cart__item--del").fadeOut(0);
		numberDelete--;
		if(numberDelete == 0){
			$(".cart__item--inner").append('<div class="cart__empty">Корзина пуста</div>');
		}
	});

	/* Отключение модалки "спасибо" по нажатию на крест */

	$(".thanks__cross").on("click", function(){
		$("body").removeClass("body");
		$(".thanks__modal").fadeOut(100);
	});

	$(".header__button").on("click", function(){
		$("body").addClass("body");
		$(".thanks__modal").fadeIn(100);
	});


	/* Модальное окно корзины */

	$(".header__inner--cart").on("click", function(){
		$("body").addClass("body");
		$(".cart__modal").fadeIn(100);
	});

	$(".cart__cross").on("click", function(){
		$("body").removeClass("body");
		$(".cart__modal").fadeOut(100);
	});


	/* Модальное окно транспортной компании */

	$(".delivery__value--edit").on("click", function(){
		$(".modal").fadeOut(100);

		$("body").addClass("body");
		$(".transport__modal").fadeIn(100);
	});

	$(".transport__cross").on("click", function(){
		$("body").removeClass("body");
		$(".transport__modal").fadeOut(100);
	});


	$(".transport__item--choose").on("click", function(){
		if($(this).hasClass("transport__active")){
			$(".transport__item--choose").removeClass("transport__active");
			$(".transport__item--choose").text("Выбрать");
			$(".oplata__inner").slideUp(100);
		}
		else{
			$(".transport__item--choose").removeClass("transport__active");
			$(".transport__item--choose").text("Выбрать");
			$(this).addClass("transport__active");
			$(this).text("Выбрано");
			$(".oplata__inner").slideDown(100).css("display", "flex");
		}
	});


	/* Модальное окно карточки товара */

	$(".tovar__link").on("click", function(e){
		e.preventDefault();

		$(".modal").fadeOut(100);

		$("body").addClass("body");
		$(".cards__modal").fadeIn(100);
	});


	$(".cards__cross").on("click", function(){
		$("body").removeClass("body");
		$(".cards__modal").fadeOut(100);
	});

});