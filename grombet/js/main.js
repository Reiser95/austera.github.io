$(document).ready(function(){

	var checkbox = $(".checkbox");
	var money = $(".checkbox__text--money");
	var free = $(".checkbox__text--free");
	var iconMoney = $(".money");
	var iconFree = $(".free");

	var checkbox = $(".checkbox");

	var modalIconOff = $(".modal__menu--iconin");
	var modalIconOn = $(".menu__icon");
	var modalMenu = $(".modal__menu");

	checkbox.on("click", function(){
		money.toggleClass("checkbox__grey");
		money.toggleClass("checkbox__red");
		iconMoney.toggleClass("icon--grey");
		iconMoney.toggleClass("icon--black");

		free.toggleClass("checkbox__grey");
		free.toggleClass("checkbox__red");
		iconFree.toggleClass("icon--grey");
		iconFree.toggleClass("icon--black");

		checkbox.toggleClass("money__checkbox");
	});

	modalIconOff.on("click", function(){
		modalMenu.removeClass("menu__none");
	});

	modalIconOn.on("click", function(){
		modalMenu.addClass("menu__none");
	});

});