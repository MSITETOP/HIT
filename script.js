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
	$('.filtr_line_box .ftr_type_checkbox .popup label').click(function(){
		checkInputs($(this));
	});
	$('.filtr_line_box .ftr_type_checkbox .popup label.allclear').click(function(){
		clearInputs($(this));
	});
	$(".ftr_type_checkbox").each(function(d,elemnt) {
		var parent = $(elemnt).find('ul');
		var allclear = true;
		$(parent.find("input")).each(function(i,elem) {
			if($(elem).is(':checked')) {
				$(elem).parents('label').addClass("active");
				allclear = false;
			} else {
				$(elem).parents('label').removeClass("active");
			}			
		});
		if(allclear) {
			parent.find(".allclear").addClass("active");
			parent.parents(".popup").siblings("a").removeClass("active");
		} else {
			parent.find(".allclear").removeClass("active");
			parent.parents(".popup").siblings("a").addClass("active");
		}
	});	
});
function checkInputs(this_obj) {
	var parent = this_obj.parents('ul');
	var allclear = true;
	$(parent.find("input")).each(function(i,elem) {
		if($(elem).is(':checked')) {
			$(elem).parents('label').addClass("active");
			allclear = false;
		} else {
			$(elem).parents('label').removeClass("active");
		}			
	});
	if(allclear) {
		parent.find(".allclear").addClass("active");
		parent.parents(".popup").siblings("a").removeClass("active");
	} else {
		parent.find(".allclear").removeClass("active");
		parent.parents(".popup").siblings("a").addClass("active");
	}
	parent.parents('.popup').slideUp();
}
function clearInputs(this_obj) {
	var parent = this_obj.parents('ul');
	var allclear = true;
	$(parent.find("input")).each(function(i,elem) {
		$(elem).parents('label').removeClass("active");
		$(elem).removeAttr("checked");
	});
	parent.find(".allclear").addClass("active");
	parent.parents(".popup").siblings("a").removeClass("active");
	parent.parents('.popup').slideUp();
}