$(document).ready(function(){


	// Нажатие на мобильное меню
	$(".mobile__menu--icon").on("click", function(){
		$("body").addClass("scroll");
		$(".mobile__menu").addClass("mobile__menu--fade")
	})

	// Нажатие на крестик закрытия мобильного меню
	$(".mobile__menu--cross").on("click", function(){
		$("body").removeClass("scroll");
		$(".mobile__menu").removeClass("mobile__menu--fade")
	})

	// Нажатие вне мобильного меню
	$(document).mouseup(function(e) {
	    var $target = $(e.target);
	    if ($target.closest(".mobile__menu").length === 0) {
	        $("body").removeClass("scroll");
			$(".mobile__menu").removeClass("mobile__menu--fade")
	    }
	});


});