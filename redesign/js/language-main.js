var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substr(0, 2);

let eng;

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

let wordMain = {"home":"главная", "games":"игры",
"history games":"история игр", "group vk":"группа vk",
"sign in":"вход","register":"регистрация",
"payment":"кошелек", "balance:":"баланс:",
"site with":"сайт с", "honest":"честными", "game":"играми", 
"color":"цветовая", "scheme":"гамма","color scheme":"цветовая гамма",
"online:":"онлайн:", "name game":"игра", "player":"игрок",
"chat online":"чат онлайн", "in site":"на сайте",
"cash - site with honest game":"cash - сайт с честными играми",
"go to playing":"начать играть", "agree":"соглашение",
"here you can choose your favorite games and not search, and see them immediately on the main page! It's simple, choose the game and they will be at you in a convenient place":
"здесь вы можете выбрать ваши любимые игры и не искать, а увидеть их сразу же на главной странице! Все просто, выбирайте игры и они окажутся у вас в удобном месте",
"favorite":"любимые", "if you are tired of appearance":"если вам надоел облик",
"you can always update the color palette of the site here. Choose the color to your taste":
"вы всегда можете обновить цветовую палитру сайта здесь. Выбирайте цвет на ваш вкус",
"earn on":"зарабатывайте на", "on the most honest games, do not miss your chance for luck!":
"на самых честных играх, не упусти свой шанс на удачу!",
"your":"ваши", "favorite":"любимые", "edit":"редактировать","complete":"готово",
"forecast":"ставка","time":"время","coefficient":"коэфф",
"win":"выигрыш","last":"последние","wins":"выигрыши"};

let flag = $(".header__top--language--flag");

if(userLang == "ru"){
	$(".rus__language").addClass("active__flag");
}
else{
	$(".eng__language").addClass("active__flag");
	$(".en").each(function(i){
		var value = $(this).text().trim();
		for(let r in wordMain){
			if(wordMain[r] == value){
				$(this).text(r + " ");
			}
		}
	});
}

if(localStorage.getItem("language")){
	var lang = localStorage.getItem("language");
	flag.removeClass("active__flag");
	$("#"+lang+"").addClass("active__flag");

	if(lang == "en"){
		$(".en").each(function(i){
			var value = $(this).text().trim();
			for(let r in wordMain){
				if(wordMain[r] == value){
					$(this).text(r + " ");
				}
			}
		});
	}
	else{
		$(".en").each(function(i){
			var value = $(this).text().trim();
			for(let r in wordMain){
				if(r == value){
					$(this).text(wordMain[r] + " ");
				}
			}
		});
	}
}


/*=== Переключение языков ===*/ 

flag.on("click", function(){
	if(!$(this).hasClass("active__flag")){
		flag.removeClass("active__flag");
		$(this).addClass("active__flag");
	}

	let langClass = $(this).attr("id");

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