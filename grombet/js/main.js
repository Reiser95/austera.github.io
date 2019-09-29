$(document).ready(function(){


	var modalIconOff = $(".modal__menu--iconin");
	var modalIconOn = $(".menu__icon");
	var modalMenu = $(".modal__menu");

	var moneyInner = $(".inner__money");
	var freeInner = $(".inner__free");


	var match = $(".inner__mobile--menu");


	match.on("click", function(){
		$(this).find(".fade__inner").fadeToggle(100);
	});

	var select = $(".select");

	select.on("click", function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find(".select__inner").fadeOut(100);
		}
		else if(!$(this).hasClass("active")){
			$(".select__inner").fadeOut(100);
			$(this).addClass("active");
			$(this).find(".select__inner").fadeIn(100);
		}
	});

	$(".select__item").on("click", function(){
		$(".select__inner").fadeOut(100);
	});


	var dataset = [
	  {
	    value: 15,
	    color: '#00cf7f',
	    profit: 10
	  }, {
	    value: 5,
	    color: '#4895fa',
	    profit: 100
	  }, {
	    value: 15,
	    color: '#8379c7',
	    profit: 1000
	  }, {
	    value: 20,
	    color: '#ff8396',
	    profit: 1100
	  }, {
	    value: 5,
	    color: '#21cdcb',
	    profit: 1200
	  }, {
	    value: 10,
	    color: '#663cd3',
	    profit: 1500
	  }, {
	    value: 5,
	    color: '#cd7221',
	    profit: 2000
	  }, {
	    value: 5,
	    color: '#ff3d5a',
	    profit: 10000000
	  },{
	    value: 25,
	    color: '#ffa16b',
	    profit: 121200
	  }
	];

	var maxValue = 25;
	var container = $('.circle__item');
	 
	var addSector = function(data, startAngle, collapse) {
	  var sectorDeg = 3.6 * data.value;
	  var skewDeg = 90 + sectorDeg;
	  var rotateDeg = startAngle;
	  if (collapse) {
	    skewDeg++;
	  }
	 
	  var sector = $('<div>', {
	    'class': 'sector',
	    "data-color": data.color,
	    "data-value": data.profit
	  }).css({
	    'background': data.color,
	    'transform': 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)'
	  });
	  container.append(sector);
	 
	  return startAngle + sectorDeg;
	};
	 
	dataset.reduce(function (prev, curr) {
	  return (function addPart(data, angle) {
	    if (data.value <= maxValue) {
	      return addSector(data, angle, false);
	    }
	 
	    return addPart({
	      value: data.value - maxValue,
	      color: data.color
	    }, addSector({
	      value: maxValue,
	      color: data.color,
	    }, angle, true));
	  })(curr, prev);
	}, 0);

	$(".sector").on("click", function(){
	  $(".text__inner").css("display", "flex");
	  var color = $(this).attr("data-color");
	  var value = $(this).attr("data-value");
	  $(".text__inner").css("color", color);
	  $(".fill__svg").css("fill", color);
	  $(".profit__value").text(value);
	});






	$(".date__inner").on("click", function(){
		if($(this).parents().hasClass("disabled")){
			$(this).siblings(".active__block").fadeIn(100);
			$(this).siblings(".forecast__category").fadeIn(100);
			$(this).parents(".forecast__inner").removeClass("disabled");
		}
		else if(!$(this).parents().hasClass("disabled")){
			$(this).siblings(".active__block").fadeOut(100);
			$(this).siblings(".forecast__category").fadeOut(100);
			$(this).parents(".forecast__inner").addClass("disabled");
		}
	});



	$(".checkbox").on("click", function(){
		if($(this).hasClass("free__check")){
			$(this).removeClass("free__check");
			$(this).addClass("money__check");
			$(this).addClass("money__checkbox");

			// Money
			$(this).siblings(".checkbox__text--money").addClass("checkbox__red");
			$(this).siblings(".checkbox__text--money").removeClass("checkbox__grey");

			$(this).siblings(".checkbox__text--money").children(".icon--grey").addClass("icon--black");
			$(this).siblings(".checkbox__text--money").children(".icon--grey").removeClass("icon--grey");

			//Free
			$(this).siblings(".checkbox__text--free").addClass("checkbox__grey");
			$(this).siblings(".checkbox__text--free").removeClass("checkbox__red");

			$(this).siblings(".checkbox__text--free").children(".icon--black").addClass("icon--grey");
			$(this).siblings(".checkbox__text--free").children(".icon--black").removeClass("icon--black");



			//Показ блоков
			var free = $(this).closest(".free__money--inner").siblings(".free__inner");

			$(".forecast__category").fadeIn(100);

			free.fadeOut(100).removeClass("active__block");


			var money = $(this).closest(".free__money--inner").siblings(".money__inner");

			$(".forecast__category").fadeIn(100);

			money.fadeIn(100).addClass("active__block");


		}
		else if($(this).hasClass("money__check")){
			$(this).removeClass("money__check");
			$(this).addClass("free__check");
			$(this).removeClass("money__checkbox");


			// Money
			$(this).siblings(".checkbox__text--money").addClass("checkbox__grey");
			$(this).siblings(".checkbox__text--money").removeClass("checkbox__red");

			$(this).siblings(".checkbox__text--money").children(".icon--black").addClass("icon--grey");
			$(this).siblings(".checkbox__text--money").children(".icon--black").removeClass("icon--black");

			//Free
			$(this).siblings(".checkbox__text--free").addClass("checkbox__red");
			$(this).siblings(".checkbox__text--free").removeClass("checkbox__grey");

			$(this).siblings(".checkbox__text--free").children(".icon--grey").addClass("icon--black");
			$(this).siblings(".checkbox__text--free").children(".icon--grey").removeClass("icon--grey");

			//Показ блоков
			var free = $(this).closest(".free__money--inner").siblings(".free__inner");

			$(".forecast__category").fadeIn(100);

			free.fadeIn(100).addClass("active__block");


			var money = $(this).closest(".free__money--inner").siblings(".money__inner");

			$(".forecast__category").fadeIn(100);

			money.fadeOut(100).removeClass("active__block");

			
		}
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
		duration: 1000,
		leeway: 50,
		easing: 'spincrementEasing',
		fade: true
	});

	$('.count2').spincrement({
		from: 13000000,
		to: 13514000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000,
		leeway: 50,
		easing: 'spincrementEasing',
		fade: true
	});

	$('.count3').spincrement({
		from: 12000000,
		to: 12514000,
		decimalPlaces: 0,
		decimalPoint: '1000',
		thousandSeparator: ',',
		duration: 1000,
		leeway: 50,
		easing: 'spincrementEasing',
		fade: true
	});
});