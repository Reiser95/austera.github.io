$(document).ready(function(){

	/* Проверяем наличие выбранной гаммы */ 

	var html = document.querySelector("html");

	let color = $(".choise__color--circle");

	let nameActiveGame = [];

	var add;

	if(localStorage.getItem("gamma") != ""){
		html.style.setProperty("--blueC", localStorage.getItem("gamma"));
	}

	if(localStorage.getItem("checkcolor")){
		color.removeClass("choose__color--active");
		$("#"+localStorage.getItem("checkcolor")+"").addClass("choose__color--active");
	}

	if((localStorage.getItem("activegames"))){
		var arr = (localStorage.getItem("activegames"));
		
		arr = arr.split(",");

		for(let i of arr){
			nameActiveGame.push(i);
		}

		for(let o of nameActiveGame){
			$(".add__like--item:contains("+o+")").addClass("active__like--game");
		}
	}

	

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


	/*=== Слайдеры ===*/

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

	/*=== Цветовая гамма ===*/ 

	let chooseColor = $(".header__top--choose--color");
	let colorMask = $(".choose__color--inner");
	let colorClose = $(".choose__color--cross");

	chooseColor.on("click", function(){
		color.removeClass("choose__color--active");
		$("#"+localStorage.getItem("checkcolor")+"").addClass("choose__color--active");
		colorMask.fadeIn(300).css("display", "flex");
	});

	colorClose.on("click", function(){
		colorMask.fadeOut(300);
	});


	/*=== Переключение цветовой гаммы ===*/ 

	let chooseBtn = $(".choose__color--button");

	/* При клике на цвет давать активный класс */ 

	color.on("click", function(){
		if(!$(this).hasClass("choose__color--active")){
			color.removeClass("choose__color--active");
			$(this).addClass("choose__color--active");
		}
	});

	/* При клике на "Выбрать", выбирать соответствующий цвет */ 

	chooseBtn.on("click", function(){
		var colorVar = $(".choose__color--active").css("color");
		html.style.setProperty("--blueC", colorVar);

		/* Сохраняем выбранный цвет гаммы в локалку */

		localStorage.setItem("gamma", colorVar);

		localStorage.setItem("checkcolor", $(".choose__color--active").attr("id"));

	});

	/*=== Добавление игры в избранную открытие/закрытие окна ===*/ 

	let addGames = $(".add__like--games");
	let addMask = $(".add__like--game");
	let addCross = $(".add__like--cross");

	addGames.on("click", function(){
		addMask.fadeIn(300).css("display", "flex");
	});

	addCross.on("click", function(){
		addMask.fadeOut(300);
	});

	/* Удаление и добавление игры в избранную в модальном окне */ 

	let game = $(".add__like--item");

	game.on("click", function(){
		if($(this).hasClass("active__like--game")){
			$(this).removeClass("active__like--game");
			$(this).children(".add__like--plus").fadeIn(0);

			add = $(this).children(".game__inner--mask").text().trim();

			for(let s = 0; s<nameActiveGame.length; s++){
				if(nameActiveGame[s] == add){
					nameActiveGame.splice(s, 1);
				}
			}

			/* Сохранение в локалку имя активной игры */

			localStorage.setItem("activegames", nameActiveGame);
		}
		else{
			$(this).children(".add__like--plus").fadeOut(0);
			$(this).addClass("active__like--game");
			add = $(this).children(".game__inner--mask").text().trim();
			nameActiveGame.push(add);
			
			/* Сохранение в локалку имя активной игры */

			localStorage.setItem("activegames", nameActiveGame);
		}
	});

});

/*=== Прелоадер ===*/ 

$(window).on("load",function (){
  $("#preloader").fadeOut(500);
});