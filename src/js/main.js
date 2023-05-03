// Custom scripts

// Инициализация плавного скрола по якорям
var scroll = new SmoothScroll('a[href*="#"]');

// Инициализация слайдеров
const swiperRepair = new Swiper('#repair-list', {
	slidesPerView: "auto",
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperPortfolio = new Swiper('#portfolio-gallery', {
	slidesPerView: "auto",
	spaceBetween: 30,
	parallax: true,
	autoplay: {
		delay: 5000,
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		bulletClass: 'dot',
		bulletActiveClass: 'dot-active',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

