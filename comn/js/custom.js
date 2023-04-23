$(document).on("hover" , ".header-gnb .gnb ul li" , function(){
	var index = $(this).index();
	var snb_li = $(".header-snb ul li");

	snb_li.eq(index).toggleClass("active");
	snb_li.not(snb_li.eq(index)).removeClass("active");	
});

$(document).on("hover" , ".header-snb ul li" , function(){
	var index = $(this).index();
	var gnb_li = $(".header-gnb ul li");	

	$(this).toggleClass("active");
	$(this).siblings().removeClass("active");	

	gnb_li.eq(index).toggleClass("active");
	gnb_li.not(gnb_li.eq(index)).removeClass("active");	
});

$(document).on("click" , ".board-body-top ul li a" , function(){
	var parents = $(this).parent("li");
	var idx = parents.index();

	parents.addClass("active");
	parents.siblings().removeClass("active");
	$(".board-body-bottom .tab-box").eq(idx).addClass("active");
	$(".board-body-bottom .tab-box").eq(idx).siblings().removeClass("active");
});

function menuOpen(){
	$(".header-snb").toggleClass("fixed");
}

function menuClose(){
	$("html , body , .header-snb").removeClass("fixed");
}

function popupOpen(){
	$("html , body , .popup").addClass("fixed");
}

function popupClose(){
	$("html , body , .popup").removeClass("fixed");
}

function togglePerson(obj){
	$(obj).toggleClass("active");
	$(obj).siblings().stop().slideToggle();
}

$(document).ready(function(){
	$(".sub-sidebar .btn-toggle").click(function(){
		$(".sub-sidebar").toggleClass("active");
	})
});