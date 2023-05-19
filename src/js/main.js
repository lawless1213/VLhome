// Custom scripts

// Инициализация плавного скрола по якорям
var scroll = new SmoothScroll('a[href*="#"]');

// Инициализация слайдеров
const swiperMenuHeader = new Swiper('#header-menu', {
	slidesPerView: "auto",
	spaceBetween: 10,
});

const swiperRepair = new Swiper('#repair-list', {
	slidesPerView: "auto",
	spaceBetween: 30,
	// navigation: {
	// 	nextEl: '.shadow-next',
	// 	prevEl: '.shadow-prev',
	// 	disabledClass: 'disabled',
	// },
});

const swiperPortfolio = new Swiper('#portfolio-gallery', {
	slidesPerView: 1,
	spaceBetween: 30,
	parallax: true,
	autoplay: {
		delay: 5000,
	},
	loop: true,
	pagination: {
		el: '.gallery-pagination',
		clickable: true,
		bulletClass: 'dot',
		bulletActiveClass: 'dot-active',
	},

	navigation: {
		nextEl: '.gallery-next',
		prevEl: '.gallery-prev',
	},
});

const swiperReviews = new Swiper('#reviews-list', {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 10000,
	},
	loop: true,
	pagination: {
		el: '.review-pagination',
		clickable: true,
		bulletClass: 'dot',
		bulletActiveClass: 'dot-active',
	},

	navigation: {
		nextEl: '.review-next',
		prevEl: '.review-prev',
	},
});

// Аккордеон
function accordion() {
	const items = [...document.querySelectorAll('[accordion-toggle]')];

	items.forEach(item => {
		item.addEventListener('click', () => {
			const parent = item.closest('[accordion-item]');
			if (parent.classList.contains('active')) {
				parent.classList.remove('active');
			} else {
				items.forEach(child => child.closest('[accordion-item]').classList.remove('active'));   
				parent.classList.add('active');
			}
		})
	})
}

accordion() 

// Masks
function  masks() {
	const elements = document.querySelectorAll('[data-mask="phone"]');
  if (!elements) return;
	
  const phoneOptions = { 
    mask: '+{38(0}00)000-00-00' 
  }

  elements.forEach(el => { 
    IMask(el, phoneOptions) 
  })
}

masks();

//Slider(range) in input
function range() {
	const elements = document.querySelectorAll('[type="range"]');
	if (!elements) return;

	elements.forEach(el => { 
    let target = document.querySelector(el.dataset.targetInput);

		if(target) {
			el.addEventListener('input', (event) => {
				target.value = event.target.value;
			})
		}
  })
}

range();
