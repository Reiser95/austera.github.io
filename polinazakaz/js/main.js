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

	var numberDelete = $(".cart__item--inner").children(".cart__item").length;

	/* Удаление элемента с корзины */

	$(".cart__item--delete").on("click", function(){
		$(this).parent(".cart__item").fadeOut(0);
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

});