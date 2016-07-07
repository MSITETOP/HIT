$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true, 
		responsive:{
			0:{
				items:4
			},
		}
	});
	
	
	/* Карточка товара Галерея */
	$('.card_product .all_images a').click(function(){
		$('.card_product .all_images a').removeClass("active");
		$(this).addClass("active");
		$('.card_product .image_detail').html($('<a/>',{href:$(this).attr("href"),class:'bigImg',html:'<img src="'+$(this).attr("href")+'" />'}));
		$('.card_product .image_detail a').click(function(){
			return false;
		});
		return false;
	});
	$('.card_product .image_detail a').click(function(){
		return false;
	});
	
	/* Фильтры */
	$('.filtr_line_box .ftr_type_group>a').click(function(){
		$('.filtr_line_box .ftr_type_group .popup').slideUp();
		$(this).siblings('.popup').slideToggle();
		return false;
	});
	$('.filtr_line_box .ftr_type_group .popup li>a').click(function(){
		$('.filtr_line_box .ftr_type_group .popup').slideUp();
		return false;
	});
});
