// Custom scripts

// Инициализация плавного скрола по якорям
var scroll = new SmoothScroll('a[href*="#"]', {durationMax: 2000, header: '#header'});

// Инициализация слайдеров
const swiperMenuHeader = new Swiper('#header-menu', {
	slidesPerView: "auto",
	spaceBetween: 0,
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
		delay: 10000,
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
	// const items = [...document.querySelectorAll('[accordion-toggle]')];

	// items.forEach(item => {
	// 	let tl = gsap.timeline();
	// 	item.addEventListener('click', () => {
	// 		const content = item.closest('[accordion-item]').querySelector('.accordion_content');
			

	// 		if (!content.classList.contains('active')) {
	// 			item.classList.add('active');
	// 			content.classList.add('active');
	// 			tl.to(content, {
	// 				duration: 0.3,
	// 				height: content.scrollHeight,
	// 				ease: "power1.inOut",
	// 			});

	// 			console.log(tl);
	// 			tl.play();
	// 		} else {
	// 			// items.forEach(child => child.closest('[accordion-item]').classList.remove('active'));   
	// 			content.classList.remove('active');
	// 			item.classList.remove('active');
	// 			tl.reverse();
	// 		}
	// 	})
	// })

	let groups = gsap.utils.toArray(".accordion-group");
	let menus = gsap.utils.toArray(".accordion-menu");
	let menuToggles = groups.map(createAnimation);

	menus.forEach((menu) => {
		menu.addEventListener("click", () => toggleMenu(menu));
	});

	function toggleMenu(clickedMenu) {
		menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
	}

	function createAnimation(element) {
		let menu = element.querySelector(".accordion-menu");
		let box = element.querySelector(".accordion-content");
		const icon = element.querySelector(".toggle_icon");

		gsap.set(box, { height: "auto" });

		let animation = gsap
			.timeline()
			.from(box, {
				height: 0,
				duration: 0.4,
				ease: "power1.inOut"
			})
			.from(icon, { rotationX: 0, ease: "power1.inOut" }, 0)
			.to(icon, { rotationX: 180, ease: "none" }, 0)
			.reverse();

		return function (clickedMenu) {
			if (clickedMenu === menu) {
				animation.reversed(!animation.reversed());
			} else {
				animation.reverse();
			}
		};
	}
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

// Modals
function bindModal(triggerSelector) {
	let triggers = document.querySelectorAll(triggerSelector);
	let closes = document.querySelectorAll('.modal_close');
  const body = document.body;

	triggers.forEach(trigger => {
		let modal = document.querySelector(trigger.dataset.targetModal);

		trigger.addEventListener('click', e => {
			e.preventDefault()
			modal.style.display = 'flex'
			body.classList.add('locked')
		});

		modal.addEventListener('click', e => {
			if (e.target === modal) {
				modal.style.display = 'none'
				body.classList.remove('locked')
			}
		})
	})

	closes.forEach(close => {
		close.addEventListener('click', () => {
			let modal = close.closest('.modal_overlay');
			modal.style.display = 'none'
			body.classList.remove('locked')
		});
	})
}

bindModal('[data-target-modal]')
