$(document).ready(function(){

	/* Функция смены объектов местами */

	jQuery.fn.swap = function(b) {
	    b = jQuery(b)[0];
	    var a = this[0],
	        a2 = a.cloneNode(true),
	        b2 = b.cloneNode(true),
	        stack = this;

	    a.parentNode.replaceChild(b2, a);
	    b.parentNode.replaceChild(a2, b);

	    stack[0] = a2;
	    return this.pushStack( stack );
	};

	/*=== Слайдеры ===*/

	let gameSlider = $(".main__like--games--carousel");

	gameSlider.owlCarousel({
		margin: 35,
		responsiveClass:true,
	    /* responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
		    1200:{
		        items:3,
	        }
		} */
	});

	$('.main__arrow--next').click(function () {
	    gameSlider.trigger('next.owl.carousel');
	});
	$('.main__arrow--prev').click(function () {
	    gameSlider.trigger('prev.owl.carousel');
	});

	/* Проверяем наличие выбранной гаммы */ 

	var html = document.querySelector("html");

	let color = $(".choise__color--circle");

	let nameActiveGame = [];

	var add;

	/* Проверяем если гамма не пустая,
	   то менять цвет гаммы на выбранный */ 

	if(localStorage.getItem("gamma") != ""){
		html.style.setProperty("--blueC", localStorage.getItem("gamma"));
	}

	/* Проверяем если цвет гаммы не пустой,
	   то менять цвет выбора гаммы на соответствующий */ 

	if(localStorage.getItem("checkcolor")){
		color.removeClass("choose__color--active");
		$("#"+localStorage.getItem("checkcolor")+"").addClass("choose__color--active");
	}

	/* Проверяем есть ли активные игры, что бы дальше пройтись
	   массивом и дать классы активным играм */ 

	if((localStorage.getItem("activegames"))){
		var arr = (localStorage.getItem("activegames"));
		
		arr = arr.split(",");

		for(let i of arr){
			nameActiveGame.push(i);
		}

		for(let o of nameActiveGame){
			$(".add__like--item:contains("+o+")").addClass("active__like--game");

			/* Вывод в слайдер любимых игр */ 

			gameSlider
			.trigger('add.owl.carousel', ['<div class="main__like--games--item like__game"><a href="#" class="game__inner--mask">'+o+'</a><div class="edit__mask"><div class="edit__arrows"><i class="fas fa-chevron-circle-left edit__arrow edit__arrow--prev"></i><i class="fas fa-chevron-circle-right edit__arrow edit__arrow--next"></i></div></div></div>', -1])
			.trigger('refresh.owl.carousel');
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
	let edit = $(".main__button--edit");

	addGames.on("click", function(){
		addMask.fadeIn(300).css("display", "flex");

		/* Проверяется, если пользователь хочет добавить
		   игру в избранные при активном редактировании,
		   то редактирование выключается */ 
		if(edit.hasClass("edit")){
			edit.removeClass("edit");
			$(".main__like--games--item").unbind("touchstart mousedown");

			$(".main__like--games--item").removeClass("active__edit");
		}
	});

	addCross.on("click", function(){
		addMask.fadeOut(300);
	});

	/* Удаление и добавление игры в избранную в модальном окне */ 

	let game = $(".add__like--item");

	game.on("click", function(){
		/* Проверяем активная ли игра на которую мы нажали,
		   если да, то забираем активный класс */ 

		if($(this).hasClass("active__like--game")){
			$(this).removeClass("active__like--game");
			$(this).children(".add__like--plus").fadeIn(0);

			/* Удаляем циклом из локалки игру которую удалили
			   пользователи */ 

			add = $(this).children(".game__inner--mask").text().trim();

			for(let s = 0; s<nameActiveGame.length; s++){
				if(nameActiveGame[s] == add){
					/* Имя удаленного элемента */ 

					let deleteName = nameActiveGame[s];

					/* Удаление из активного элемента */

					let value = -1;
					
					$(".owl-item").each(function(i){
						value ++;
						if($(this).text() == deleteName){
							gameSlider
							.trigger('remove.owl.carousel', [value])
							.trigger('refresh.owl.carousel');
						}
					});

					nameActiveGame.splice(s, 1);
				}
			}

			/* Сохранение в локалку имя активных игр */

			localStorage.setItem("activegames", nameActiveGame);
			
		}

		/* Если игра не активная, даем ей активный класс */ 

		else{
			$(this).children(".add__like--plus").fadeOut(0);
			$(this).addClass("active__like--game");

			/* Создаем переменную add что бы проверять ей
			   на наличие выбранной любимой игры */ 

			add = $(this).children(".game__inner--mask").text().trim();
			nameActiveGame.push(add);
			
			/* Сохранение в локалку имя активных игр */

			localStorage.setItem("activegames", nameActiveGame);

			/* Добавление в слайдер активного элемента */

			gameSlider
			.trigger('add.owl.carousel', ['<div class="main__like--games--item like__game"><a href="#" class="game__inner--mask">'+add+'</a><div class="edit__mask"><div class="edit__arrows"><i class="fas fa-chevron-circle-left edit__arrow edit__arrow--prev"></i><i class="fas fa-chevron-circle-right edit__arrow edit__arrow--next"></i></div></div></div>', -1])
			.trigger('refresh.owl.carousel');
		}
	});

	/* Нажатие на кнопку редактирования */

	edit.on("click", function(){
		if($(this).hasClass("edit")){
			/* Даем класс что бы в последующем определить элемент */
			$(this).removeClass("edit");

			/* Забираем класс активного редактирования,
			   если класс drag есть */
			$(".main__like--games--item").removeClass("active__edit");
		}
		else{
			/* Даем класс что бы в последующем определить элемент */ 
			$(this).addClass("edit");

			/* Даем класс активного редактирования,
			   если класса drag нет */
			$(".main__like--games--item").addClass("active__edit");
		}
	});

	/* Нажатие на стрелочки перемещения в редактировании */

	console.log(nameActiveGame);

	$(document).on("click", ".edit__arrow--next" ,function(){
		var rightValue = $(this).parents(".edit__arrows").parents(".edit__mask").siblings(".game__inner--mask").text();
		
		for(let u = 0; u<nameActiveGame.length; u++){
			if(nameActiveGame[u] == rightValue){

				/* Временная переменная помогающая нам поменять
				   в будущем переменные массива местами */ 
				var tem = nameActiveGame[u + 1];

				/* Находим совпавший элемент и его соседа справа */ 
				let leftSwap = $(".game__inner--mask:contains("+nameActiveGame[u]+")").parent(".like__game");
				let rightSwap = $(".game__inner--mask:contains("+nameActiveGame[u + 1]+")").parent(".like__game");

				/* Меняем элементы местами */ 
				leftSwap.swap(rightSwap);

				/* Заменяем поменяные местами элементы массива */ 
				nameActiveGame[u + 1] = nameActiveGame[u];
				nameActiveGame[u] = tem;

				/* Удаляем старый массив и сохраняем новый(обновленный) */
				localStorage.removeItem("activegames");
				localStorage.setItem("activegames", nameActiveGame);

				/* Если находим совпадение в массиве, останавливаем его */ 
				break;
			}
		}
	});

	$(document).on("click", ".edit__arrow--prev" ,function(){
		var leftValue = $(this).parents(".edit__arrows").parents(".edit__mask").siblings(".game__inner--mask").text();
		
		for(let w = 0; w<nameActiveGame.length; w++){
			if(nameActiveGame[w] == leftValue){

				/* Временная переменная помогающая нам поменять
				   в будущем переменные массива местами */ 
				var ver = nameActiveGame[w - 1];

				/* Находим совпавший элемент и его соседа слева */ 
				let leftSwap2 = $(".game__inner--mask:contains("+nameActiveGame[w]+")").parent(".like__game");
				let rightSwap2 = $(".game__inner--mask:contains("+nameActiveGame[w - 1]+")").parent(".like__game");
				
				/* Меняем элементы местами */
				rightSwap2.swap(leftSwap2);

				/* Заменяем поменяные местами элементы массива */
				nameActiveGame[w - 1] = nameActiveGame[w];
				nameActiveGame[w] = ver;

				/* Удаляем старый массив и сохраняем новый(обновленный) */ 
				localStorage.removeItem("activegames");
				localStorage.setItem("activegames", nameActiveGame);

				/* Если находим совпадение в массиве, останавливаем его */
				break;
			}
		}
	});

});

/*=== Прелоадер ===*/ 

$(window).on("load",function (){
  $("#preloader").fadeOut(500);
});