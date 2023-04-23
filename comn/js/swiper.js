var swiper02 = new Swiper(".intro-board .swiper-container", {
	slidesPerView: 1,
    spaceBetween: 0,
	direction: "vertical",
	loop: true,
	loopAdditionalSlides: 1,
	speed: 1000,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".intro-board .swiper-button-next",
		prevEl: ".intro-board .swiper-button-prev",
	},
	breakpoints: {
		991: {
			centeredSlides: true,
			slidesPerView: 1.5,
			spaceBetween: 15,
		},
	},
});

var swiper04 = new Swiper(".sub-board .swiper-container", {
	slidesPerView: 4,
    spaceBetween: 0,
	loop: true,
	speed: 1000,
	observer: true,
	observeParents: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".sub-board .swiper-button-next",
		prevEl: ".sub-board .swiper-button-prev",
	},
	breakpoints: {
		991: {
			slidesPerView: 1,
		},
	},
});

$(function(){
	var swiper01 = new Swiper(".main-activity .swiper-container", {
		slidesPerView: 3,
		spaceBetween: 60,
		loop: true,
		loopAdditionalSlides: 1,
		speed: 1000,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".main-activity .swiper-button-next",
			prevEl: ".main-activity .swiper-button-prev",
		},
		breakpoints: {
			1200: {
				spaceBetween: 20,
			},
			991: {
				centeredSlides: true,
				slidesPerView: 1.5,
				spaceBetween: 10,
			},
		},
	});
	var swiper03 = new Swiper(".main-banner .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		loopAdditionalSlides: 1,
		speed: 1000,
		observer: true,
		observeParents: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".main-banner .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
		on: {
		  init: function () {
			$(".swiper-progress-bar").removeClass("animate");
			$(".swiper-progress-bar").removeClass("active");
			$(".swiper-progress-bar").eq(0).addClass("animate");
			$(".swiper-progress-bar").eq(0).addClass("active");
		  },
		  slideChangeTransitionStart: function () {
			$(".swiper-progress-bar").removeClass("animate");
			$(".swiper-progress-bar").removeClass("active");
			$(".swiper-progress-bar").eq(0).addClass("active");
		  },
		  slideChangeTransitionEnd: function () {
			$(".swiper-progress-bar").eq(0).addClass("animate");
		  }
		}
	});
	$(".swiper-button-pause").click(function(){
		$(this).toggleClass("active");
		if( $(this).hasClass("active") == true){
			swiper03.autoplay.stop();
			$(".swiper-progress-bar").removeClass("animate");
		}else{
			swiper03.autoplay.start();
			$(".swiper-progress-bar").addClass("animate");
		}
	});
});