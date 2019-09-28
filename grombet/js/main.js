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

	var moneyInner = $(".inner__money");
	var freeInner = $(".inner__free");

	var select = $(".select__select");
	var selectInner = $(".select__inner");

	select.on("click", function(){
		selectInner.fadeToggle(100);	
	});

	$(".select__item").on("click", function(){
		selectInner.fadeOut(100);
	});



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

		moneyInner.toggleClass("money__inner");
		freeInner.toggleClass("free__inner");
	});

	modalIconOff.on("click", function(){
		modalMenu.removeClass("menu__none");
	});

	modalIconOn.on("click", function(){
		modalMenu.addClass("menu__none");
	});


	$('.count1').spincrement({
		from: 100000,
		to: 1000000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000, // ms; TOTAL length animation
		leeway: 50, // percent of duraion
		easing: 'spincrementEasing',
		fade: true
	});

	$('.count2').spincrement({
		from: 13000000,
		to: 13514000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000, // ms; TOTAL length animation
		leeway: 50, // percent of duraion
		easing: 'spincrementEasing',
		fade: true
	});

	$('.count3').spincrement({
		from: 12000000,
		to: 12514000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000, // ms; TOTAL length animation
		leeway: 50, // percent of duraion
		easing: 'spincrementEasing',
		fade: true
	});
});