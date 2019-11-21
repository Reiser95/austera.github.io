$(document).ready(function(){

	var eng;

	/* Функция корректного отображения языков при клике на
	   Редактировать/Готово */ 

	function rename(rus, english, clas){
		if(eng == "false"){
			$(clas).text(""+rus+"");
		}
		else{
			$(clas).text(""+english+"");
		}
	}

	/* Функция, которая переводит слова на кнопке Редактировать/Готово */ 

	function translate(array){
		if(localStorage.getItem("language")){
			var lang = localStorage.getItem("language");
			flag.removeClass("active__flag");
			$(".header__top--language--flag[data-lang="+lang+"]").addClass("active__flag");

			if(lang == "en"){
				$(".en").each(function(i){
					var value = $(this).text().trim();
					for(var r in array){
						if(array[r] == value){
							$(this).text(r + " ");
						}
					}
				});
			}
			else{
				$(".en").each(function(i){
					var value = $(this).text().trim();
					for(var r in array){
						if(r == value){
							$(this).text(array[r] + " ");
						}
					}
				});
			}
		}
	}

	/* Функция, которая выдает активный класс флажкам языков */ 

	function ifTranslate(){
		if(userLang == "ru"){
			$(".rus__language").addClass("active__flag");
		}
		else{
			$(".eng__language").addClass("active__flag");
			$(".en").each(function(i){
				var value = $(this).text().trim();
				for(var r in array){
					if(array[r] == value){
						$(this).text(r + " ");
					}
				}
			});
		}
	}

	/* Функция, которая автоматически проверяет ссылку браузера,
	и вставляет название страницы динамически */ 

	function temp(){
		if(eng == "false"){
			pageTitle = url;
			for(var pageVar in page){
				if(pageTitle == pageVar){
					pageTitle = page[pageVar];
				}
			}
		}else{
			pageTitle = url;
		}
	}

	// Добавлять сюда перевод названия страницы, когда добавляете новую

	var page = {"home":"главная", "games":"игры",
	"payment":"кошелек", "setting":"настройки", "redesign":"редизайн"};

	/* Определение языка браузера пользователя */ 

	var userLang = navigator.language || navigator.userLanguage;
	userLang = userLang.substr(0, 2);

	/*=== Переключение языков ===*/ 

	var flag = $(".header__top--language--flag");

	flag.on("click", function(){
		$(this).addClass("active__flag");
		if(!$(this).hasClass("active__flag")){
			flag.removeClass("active__flag");
			$(this).addClass("active__flag");
		}

		var langClass = $(this).attr("data-lang");

		if(langClass == "ru"){
			eng = false;
		}
		else{
			eng = true;
		}

		localStorage.setItem("lang", eng);

		localStorage.setItem("language", langClass);
		location.reload();
	});

	if(localStorage.getItem("lang") == null){
		if(userLang == "ru"){
			eng = false;
		}
		else{
			eng = true;
		}
	}
	else{
		var langVar = localStorage.getItem("lang");
		eng = langVar;
	}

	/* Получаем url строки, а именно саму страницу */
	let url = window.location.href;

	/* Обрезаем url и оставляем только название страницы */
	url = url.split("/")[3];

	let pageTitle;

	if(url == ""){
		url = "home";
	}

	if(localStorage.getItem("pagetext")){
		var localPage = localStorage.getItem("pagetext");
		if(localPage == url){
			temp();
		}
		else{
			pageTitle = url;
		}
	}
	else{
		temp();
	}

	$(".header__bottom--page").text(pageTitle);

	localStorage.setItem("pagetext", url);

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

	/* Проверяем наличие выбранной гаммы */ 

	var html = document.querySelector("html");

	var color = $(".choise__color--circle");

	var nameActiveGame = [];

	var add;

	/* Вывод игр с менюшка в окно любимые игры */

	var gamesInner = [];

	$(".game__box").each(function(i){
		var name = $(this).text().trim();
		var nameLower = name.toLowerCase();
		$(this).attr("href", "/"+nameLower+"");

		gamesInner.push(name);
	});

	localStorage.setItem("gamesinner", gamesInner);

	/* Проходимся циклом и выводим игры в окно любимых игр */
	if(localStorage.getItem("gamesinner")){
		var arrInner = localStorage.getItem("gamesinner");
		arrInner = arrInner.split(",");
		for(var l of arrInner){
			var lower = l.toLowerCase();
			$(".add__like--inner").append('<div class="add__like--item--box"><div class="main__like--games--item add__like--item"><a href="#" class="game__inner--mask '+lower+'">'+l+'</a><div class="game__added--mask"><div class="game__added--text en">добавлено</div></div><div class="add__like--check"><i class="fas fa-check"></i></div><div class="add__like--plus"><div class="add__like--plus--inner"><i class="fas fa-plus icon__add"></i></div></div></div></div>');
		}
	}

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

		for(var i of arr){
			nameActiveGame.push(i);
		}

		for(var o of nameActiveGame){
			var lowerActive = o.toLowerCase();
			$(".add__like--item:contains("+o+")").addClass("active__like--game");

			/* Вывод в слайдер любимых игр */

			gameSlider
			.trigger('add.owl.carousel', ['<div class="main__like--games--item like__game"><a href="/'+lowerActive+'" class="game__inner--mask '+lowerActive+'">'+o+'</a><div class="edit__mask"><div class="edit__arrows"><i class="fas fa-chevron-circle-left edit__arrow edit__arrow--prev"></i><i class="fas fa-chevron-circle-right edit__arrow edit__arrow--next"></i></div></div></div>', -1])
			.trigger('refresh.owl.carousel');
		}
	}

	/* Проверка зарегистрирован пользователь или нет */
	/* Если поле отправки ссобщения имеет класс не зарегестрирован,
	то он отключается */ 
	if($(".chat__send--box").hasClass("noregister__chat")){
		if(eng == "true"){
			$(".chat__send--input").attr("placeholder", "only authorized players can write to the chat");
		}
		else{
			$(".chat__send--input").attr("placeholder", "в чат могут писать только авторизованные игроки");
		}
		$(".chat__send--input").attr("disabled", "");
	}

	/*=== Модальное окно соглашения ===*/

	var agree = $(".user__agree");

	agree.on("click", function(e){
		e.preventDefault(); //Удалить
	});

	/*=== Цветовая гамма ===*/ 

	var chooseColor = $(".header__top--choose--color");
	var colorMask = $(".choose__color--inner");
	var colorClose = $(".choose__color--cross");

	chooseColor.on("click", function(){
		color.removeClass("choose__color--active");
		$("#"+localStorage.getItem("checkcolor")+"").addClass("choose__color--active");
		colorMask.fadeIn(300).css("display", "flex");
	});

	colorClose.on("click", function(){
		colorMask.fadeOut(300);
	});


	/*=== Переключение цветовой гаммы ===*/ 

	var chooseBtn = $(".choise__color--circle");

	/* При клике на цвет давать активный класс */ 

	color.on("click", function(){
		if(!$(this).hasClass("choose__color--active")){
			color.removeClass("choose__color--active");
			$(this).addClass("choose__color--active");
		}
	});

	/* При клике на круг выбора цвета, выбирать соответствующий цвет */ 

	chooseBtn.on("click", function(){
		var colorVar = $(".choose__color--active").css("color");
		html.style.setProperty("--blueC", colorVar);

		/* Сохраняем выбранный цвет гаммы в локалку */

		localStorage.setItem("gamma", colorVar);

		localStorage.setItem("checkcolor", $(".choose__color--active").attr("id"));

	});

	/*=== Добавление игры в избранную открытие/закрытие окна ===*/ 

	var addGames = $(".add__like--games");
	var addMask = $(".add__like--game");
	var addCross = $(".add__like--cross");
	var edit = $(".main__button--edit");

	addGames.on("click", function(){
		addMask.fadeIn(300).css("display", "flex");

		/* Проверяется, если пользователь хочет добавить
		   игру в избранные при активном редактировании,
		   то редактирование выключается */ 
		if(edit.hasClass("edit")){
			edit.removeClass("edit");

			$(".main__like--games--item").removeClass("active__edit");
			rename("редактировать","edit", edit);
		}
	});

	addCross.on("click", function(){
		addMask.fadeOut(300);
	});

	/* Удаление и добавление игры в избранную в модальном окне */ 

	var game = $(".add__like--item");

	game.on("click", function(){
		/* Проверяем активная ли игра на которую мы нажали,
		   если да, то забираем активный класс */ 

		if($(this).hasClass("active__like--game")){
			$(this).removeClass("active__like--game");
			$(this).children(".add__like--plus").fadeIn(0);

			/* Удаляем циклом из локалки игру которую удалили
			   пользователи */ 

			add = $(this).children(".game__inner--mask").text().trim();

			for(var s = 0; s<nameActiveGame.length; s++){
				if(nameActiveGame[s] == add){
					/* Имя удаленного элемента */ 

					var devareName = nameActiveGame[s];

					/* Удаление из активного элемента */

					var value = -1;
					
					$(".owl-item").each(function(i){
						value ++;
						if($(this).text() == devareName){
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

			var addLower = add.toLowerCase();
			
			/* Сохранение в локалку имя активных игр */

			localStorage.setItem("activegames", nameActiveGame);

			/* Добавление в слайдер активного элемента */

			gameSlider
			.trigger('add.owl.carousel', ['<div class="main__like--games--item like__game"><a href="/'+addLower+'" class="game__inner--mask '+addLower+'">'+add+'</a><div class="edit__mask"><div class="edit__arrows"><i class="fas fa-chevron-circle-left edit__arrow edit__arrow--prev"></i><i class="fas fa-chevron-circle-right edit__arrow edit__arrow--next"></i></div></div></div>', -1])
			.trigger('refresh.owl.carousel');
		}
	});

	/* Нажатие на кнопку редактирования */

	edit.on("click", function(){
		if($(this).hasClass("edit")){
			/* Даем класс что бы в последующем определить элемент */
			$(this).removeClass("edit");
			rename("редактировать","edit", this);

			/* Забираем класс активного редактирования,
			   если класс drag есть */
			$(".main__like--games--item").removeClass("active__edit");
		}
		else{
			/* Даем класс что бы в последующем определить элемент */ 
			$(this).addClass("edit");
			rename("готово","compvare", this);

			/* Даем класс активного редактирования,
			   если класса drag нет */
			$(".main__like--games--item").addClass("active__edit");
		}
	});

	/* Нажатие на стрелочки перемещения в редактировании */

	$(document).on("click", ".edit__arrow--next" ,function(){
		var rightValue = $(this).parents(".edit__arrows").parents(".edit__mask").siblings(".game__inner--mask").text();
		
		for(var u = 0; u<nameActiveGame.length; u++){
			if(nameActiveGame[u] == rightValue){

				/* Временная переменная помогающая нам поменять
				   в будущем переменные массива местами */ 
				var tem = nameActiveGame[u + 1];

				/* Находим совпавший элемент и его соседа справа */ 
				var leftSwap = $(".game__inner--mask:contains("+nameActiveGame[u]+")").parent(".like__game");
				var rightSwap = $(".game__inner--mask:contains("+nameActiveGame[u + 1]+")").parent(".like__game");

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
		
		for(var w = 0; w<nameActiveGame.length; w++){
			if(nameActiveGame[w] == leftValue){

				/* Временная переменная помогающая нам поменять
				   в будущем переменные массива местами */ 
				var ver = nameActiveGame[w - 1];

				/* Находим совпавший элемент и его соседа слева */ 
				var leftSwap2 = $(".game__inner--mask:contains("+nameActiveGame[w]+")").parent(".like__game");
				var rightSwap2 = $(".game__inner--mask:contains("+nameActiveGame[w - 1]+")").parent(".like__game");
				
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

	/* При нажатии ESC закрывается модальное окно */ 

	$("body").on("keydown", function(e){
		if(e.which == 27){
			$(".modal").fadeOut(300);
		}
	});

	/* Перебор слов на анлийский в массиве */ 

	ifTranslate(eval(url + "Word"));

	translate(eval(url + "Word"));

	/*=== Скрытие чата ===*/ 

	var closeChat = $(".mobile__off");
	var chatIf;

	if($(window).width() <= 1400){
		chatIf = true;
	}
	else{
		chatIf = false;
	}

	closeChat.on("click", function(){
		if($(window).width() > 480){
			if(chatIf == false){
				$(".chat__content").addClass("chat__off");
	    		$(".chat__close--inner").addClass("chat__button--on");
	    		$(".chat__close--icon").addClass("chat__close--icon--rotate");
	    		if($(window).width() > 991){
	    			$(".games").addClass("games__fade");
	    			$(".main").addClass("full");
	    		}
	    		chatIf = true;
			}
			else{
				$(".chat__content").removeClass("chat__off");
				$(".chat__close--inner").removeClass("chat__button--on");
				$(".chat__close--icon").removeClass("chat__close--icon--rotate");
				if($(window).width() > 991){
	    			$(".games").removeClass("games__fade");
	    			$(".main").removeClass("full");
	    		}
				chatIf = false;
			}
		}
		else{
			if(chatIf == false){
				$(".chat__content").addClass("chat__off");
	    		chatIf = true;
			}
			else{
				$(".chat__content").removeClass("chat__off");
				chatIf = false;
			}
		}
	});

	if($(window).width() <= 1400){
		$(".main").addClass("full");
		$(".chat__content").addClass("chat__off");
		closeChat.addClass("chat__button--on");
		$(".chat__close--icon").addClass("chat__close--icon--rotate");
	}

	/* Закрыть меню если ширина больше 998px */

	$(window).resize(function(){
	   	if($(window).width() > 991){
	   		menuMobile.removeClass("mobile__on");
	   	}
	    if($(window).width() > 480){
	   		if(chatIf == true){
	   			closeChat.addClass("chat__button--on");
	   			$(".chat__close--icon").addClass("chat__close--icon--rotate");
	   		}
	   		if(chatIf == false){
	   			closeChat.removeClass("chat__button--on");
	   			$(".chat__close--icon").removeClass("chat__close--icon--rotate");
	   		}
	   		$("body").removeClass("scroll");
    	}
	});

	/* Фиксированность боди при открытие модальных окон */ 

	$(".fixadd").on("click", function(){
		$("body").addClass("scroll");
	});

	$(".fixrem").on("click", function(){
		$("body").removeClass("scroll");
	});

	$(".fixmobadd").on("click", function(){
		if($(window).width() <= 480){
			$("body").addClass("scroll");
		}
	});

	$(".fixmobrem").on("click", function(){
		if($(window).width() <= 480){
			$("body").removeClass("scroll");
		}
	});

});

/*=== Прелоадер ===*/ 

$(window).on("load",function (){
  $("#preloader").fadeOut(500);
});