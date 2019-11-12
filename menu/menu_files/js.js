$(function(){
		   
		   
    $('.datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
	  minDate: 0,
	  dateFormat: 'dd.mm.yy'
    });
	
	

	
	
});


jQuery(document).ready(function ($) {

    $(window).resize(function(){
      if($(window).width() >= 751){
        $(".modal__mobile--slide").slideUp(0);
        $(".click__menu").slideUp(0);
      }
    });

    $(".popup_close1").on("click", function(){
      $(".popup_box1").fadeOut(300);
    });

    $(".open__popup").on("click", function(){
      $(".popup_box1").fadeIn(300).css("display", "flex");
    });

    $('.button__up').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#point').offset().top }, 500);
      e.preventDefault();
    });

    $('.up').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#point').offset().top }, 500);
      e.preventDefault();
    });

    $(".modal__mobile--item--continue").on("click", function(){
      $(".click__menu").slideToggle(100).css("display", "flex");
    });



    if($('input[type=radio][name=payment]:checked').val() == 'PayKeeper'){
        $('input[type=checkbox][name=payment_bn]').attr('hidden', false);
        $('#payment_bh').css('display','block');
    }
    else if($('input[type=radio][name=payment]:checked').val() == 'card'){
        $('input[type=checkbox][name=payment_bn]').attr('hidden', true);
        $('input[type=checkbox][name=payment_bn]').attr('checked', false);
        $('#payment_bh').css('display','none');
    }
    $('input[type=radio][name=payment]').change(function () {
       if(this.value == 'PayKeeper'){
           $('input[type=checkbox][name=payment_bn]').attr('hidden', false);
           $('#payment_bh').css('display','block');
       }
       else if(this.value == 'card'){
           $('input[type=checkbox][name=payment_bn]').attr('hidden', true);
           $('input[type=checkbox][name=payment_bn]').attr('checked', false);
           $('#payment_bh').css('display','none');
       }
    });

    $(".menu__mobile--top--iconmenu").on("click", function(){
      $(".modal__mobile--slide").slideToggle(100).css("display", "flex");
      $(".menu__mobile--top").toggleClass("fixed__modal");
    });
});


setTimeout(function() {
			$.ajax({  
                type: 'POST',  
                url: '/load/online.php',  
                cache: false,  
				timeout: 30000,
                success: function(html){                 
                   // $('#j_content').html(html);
                },
				error: function(){					
					//$('#j_content').html('');
					//alert('Сервер не отвечает, попробуйте снова. 4');  
				} 
            });
}, 55000);