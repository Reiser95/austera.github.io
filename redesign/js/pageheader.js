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