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





	function LightenDarkenColor(col, amt) {
	  
	    var usePound = false;
	  
	    if (col[0] == "#") {
	        col = col.slice(1);
	        usePound = true;
	    }
	 
	    var num = parseInt(col,16);
	 
	    var r = (num >> 16) + amt;
	 
	    if (r > 255) r = 255;
	    else if  (r < 0) r = 0;
	 
	    var b = ((num >> 8) & 0x00FF) + amt;
	 
	    if (b > 255) b = 255;
	    else if  (b < 0) b = 0;
	 
	    var g = (num & 0x0000FF) + amt;
	 
	    if (g > 255) g = 255;
	    else if (g < 0) g = 0;
	 
	    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
	  
	}


	$(".sector").on("mouseenter", function(){
		var color = $(this).attr("data-color");
		$(this).css("background", LightenDarkenColor(color, 50));
	});

	$(".sector").on("mouseleave", function(){
		var color = $(this).attr("data-color");
		$(this).css("background", color);
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