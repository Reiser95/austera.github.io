$(document).ready(function () {
    $('.slider_banner').owlCarousel({
        items: 1,
        nav: true,
        navText: [$('.prev'), $('.next')],
    });
    let brands = $('.brands_slider');
    let popular = $('.popular_slider');
    let newprod = $('.new_slider');
    let stockslider = $('.stock_slider');
    brands.owlCarousel({
        items: 4,
        nav: false,
        dots: false
    });
    popular.owlCarousel({
        items: 4,
        nav: false,
        dots: false
    });
    newprod.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
    });
    stockslider.owlCarousel({
        items: 4,
        nav: false,
        dots: false,
    });
    $('.brands_navs .next_arr').click(function () {
        brands.trigger('next.owl.carousel');
    });
    $('.brands_navs .prev_arr').click(function () {
        brands.trigger('prev.owl.carousel');
    });
    $('.popular .next_arr').click(function () {
        popular.trigger('next.owl.carousel');
    });
    $('.popular .prev_arr').click(function () {
        popular.trigger('prev.owl.carousel');
    });
    $('.new .next_arr').click(function () {
        newprod.trigger('next.owl.carousel');
    });
    $('.new .prev_arr').click(function () {
        newprod.trigger('prev.owl.carousel');
    });
    $('.stock .next_arr').click(function () {
        stockslider.trigger('next.owl.carousel');
    });
    $('.stock .prev_arr').click(function () {
        stockslider.trigger('prev.owl.carousel');
    });
    $('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div><div class="quantity-button quantity-up">+</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    $('#num').niceSelect();

    // $('.views').click(function (e) {
    //     e.preventDefault();
    //     if (!$(this).is('.active')) {
    //         $('.views').removeClass('active');
    //         $(this).addClass('active');
    //     }
    // });
    
    /*      RANGE      */
    
    $('.upper').on('input', setFill);
	$('.lower').on('input', setFill);

	var max = $('.upper').attr('max');
	var min = $('.lower').attr('min');

	function setFill(evt) {
		var valUpper = $('.upper').val();
		var valLower = $('.lower').val();
		if (parseFloat(valLower) > parseFloat(valUpper)) {
			var trade = valLower;
			valLower = valUpper;
			valUpper = trade;
		}
		
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		$('.fill').css('left', 'calc(' + left + '%)');
		$('.fill').css('width', width - left + '%');
	}
    
    setFill();
});