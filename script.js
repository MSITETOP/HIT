$(document).ready(function(){
	$(".phone_num").mask("+7 (999) 99-99-999");
	
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true, 
		navigationText: ["", ""],
		responsive:{
			0:{
				items:4
			},
		}
	});
    
    // загрузка файла
    $(".popup_modal .file_input input").change(function() {
        if ($(this).val().lastIndexOf('\\')) {
            var i = $(this).val().lastIndexOf('\\') + 1;
        } else {
            var i = $(this).val().lastIndexOf('/') + 1;
        }
        fileName = $(this).val().slice(i);
        $(this).siblings("span").text(fileName);
    });
    
	/* Карточка товара Галерея */
	var slidebox = [];
	var index_gal = 0;
	$(".fancybox[rel='gallery']").each(function(i,elem) {
		slidebox[i]={href:$(elem).attr("href")};
	});
	$(document).on('click', '.card_product .all_images a', function(e){
		$('.card_product .all_images a').removeClass("active");
		$(this).addClass("active");
		$('.card_product .image_detail').html($('<a/>',{href:$(this).attr("href"),class:'bigImg',html:'<img src="'+$(this).attr("href")+'" />'}));
		index_gal = $('.card_product .all_images a').index(this);
		console.log(index_gal);
		e.preventDefault();
	});	
	$(document).on('click', '.card_product .image_detail a', function(e){
		$.fancybox(slidebox, {
			index		: index_gal,
			padding		: 40,
			type		: 'image',
		});
		e.preventDefault();
	});
	
	/* Фильтры */
	$(document).on('click', '.filtr_line_box .ftr_type_group>a', function(e){
		e.preventDefault();
		if($(this).parent().hasClass('ftr_type_checkbox'))
			clearInputs($(this).siblings(".popup").find("label.allclear"));
		else 
			clearRange($(this).siblings(".popup").find('.rangebox'));
		if(typeof smartFilter == 'object') {
			smartFilter.reload($(this).closest('.ftr_type_group').find('input:eq(0)')[0]);
		}
	});
	$(document).on('click', '.filtr_line_box .ftr_type_checkbox .popup label.allclear', function(){
		clearInputs($(this));
		if(typeof smartFilter == 'object') {
			smartFilter.reload($(this).closest('.ftr_type_group').find('input[type=checkbox]:eq(0)')[0]);
		}
	});	
	$(document).on('click', '.filtr_line_box .ftr_type_checkbox .popup label', function(){
		checkInputs($(this));
	});
	$(".ftr_type_checkbox").each(function(d,obj) {
		checkInputs(obj);
	});	
});
function checkInputs(obj) {
	obj = $(obj);
	var parent = obj.parents('ul');
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
}
function clearInputs(obj) {
	$obj = $(obj);
	var parent = $obj.parents('ul');
	var allclear = true;
	$(parent.find("input")).each(function(i,elem) {
		$(elem).parents('label').removeClass("active");
		$(elem).removeAttr("checked");
	});
	parent.find(".allclear").addClass("active");
	parent.parents(".popup").siblings("a").removeClass("active");
}
function clearRange(obj) {
	$obj = $(obj);
	$obj.slider( "values", [$obj.data('min'), $obj.data('max')]);
	$obj.closest('.popup').siblings('a').removeClass("active");
}
function skyCart(obj) {
    var thisposition = $(obj).offset();
	var cartposition = $(".header .basket a").offset();
    var cart = $(obj).clone().appendTo("body").addClass("add_to_cart_btn_sky").css({
        'margin': '0',
        'position': 'absolute', 
        'top':thisposition.top, 
        'left':thisposition.left
    }).animate({
        left: cartposition.left,
        top: cartposition.top,
        opacity: 0
    }, 500, "linear", function(){cart.remove()});
    console.log(thisposition, cartposition);
}