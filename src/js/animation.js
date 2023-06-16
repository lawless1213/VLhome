gsap.registerPlugin(ScrollTrigger, CustomEase);

startAnimate();
schemeAnimate();
scrollAnimate();

function startAnimate() {
	let transition = 0.4;
	let startAnimation = gsap.timeline();
	
	startAnimation.from('body', {opacity: 0.5, duration: transition})
								.from('#header', {opacity: 0, y: '-100%', duration: transition})
								.from('#main-title', {opacity: 0, y: 100, duration: transition}, `-=${transition}`)
								.from('#main-descr', {opacity: 0, y: 50, duration: transition}, `-=${transition}`)
								.from('#main-actions', {opacity: 0, duration: transition}, `-=${transition}`);
}


function schemeAnimate() {
	let schemeAnimation = gsap.timeline({ repeat: -1, repeatDelay: 3 });
	let items = [...document.querySelector('.scheme_list').querySelectorAll('.item')];

	items.forEach(item => {
		let num = item.querySelector('span');
		let arrow = item.querySelectorAll('.arrow');
		schemeAnimation.to(num, {color: '#FF4C00' , duration: 1, ease: 'slow(0.7, 0.7, false)'} )
										.to(arrow, {'--arrow-color': '#FF4C00' , duration: 1, ease: 'slow(0.7, 0.7, false)'}, `-=1` )
										.to(num, {color: '#8597AB' , duration: 1, ease: 'slow(0.7, 0.7, false)'} )
										.to(arrow, {'--arrow-color': '#8597AB' , duration: 1, ease: 'slow(0.7, 0.7, false)'}, `-=1` );
	})
}

function scrollAnimate() {
	// Main
	gsap.to('#main-section-content', {
		scrollTrigger: {
			trigger: '#main',
			start: 'top top',
			scrub: true,
		},
		yPercent: -200,
		opacity: 0,
	})
	// -----------------		

	// About
	gsap.from('.advantages .item', {
		scrollTrigger: {
			trigger: '.advantages',
			start: '-10% bottom',
			end: '+=300px',
			scrub: true,
		},
		opacity: 0,
		scale: 0,
		transformOrigin: 'bottom center',
		ease: 'none',
		stagger: 1,
		duration: 1,
	})

	gsap.from('.about_grid .item', {
		scrollTrigger: {
			trigger: '.about_grid',
			start: '30% bottom',
			end: '+=400px',
			scrub: true,
		},
		opacity: 0,
		scale: 0,
		transformOrigin: 'bottom center',
		ease: 'none',
		stagger: 1,
		duration: 1,
	})
	// -----------------		

	// Scheme
	gsap.from(".scheme_list .step .arrow.gorizontal", {
		scrollTrigger: {
			trigger: ".scheme_list",
			start: '20% bottom',
			end: '+=400px',
			scrub: true,
		},
		width: 0,
		opacity: 0,
		ease: 'slow(0.7, 0.7, false)',
		stagger: 1,
	});

	gsap.from(".scheme_list .step .arrow.vertical", {
		scrollTrigger: {
			trigger: ".scheme_list",
			start: '30% bottom',
			end: '+=400px',
			scrub: true,
		},
		height: 0,
		opacity: 0,
		ease: 'slow(0.7, 0.7, false)',
		stagger: 1,
	});

	gsap.from(".scheme_list .step span", {
		scrollTrigger: {
			trigger: ".scheme_list",
			start: '20% bottom',
			end: '+=400px',
			scrub: true,
		},
		opacity: 0,
		ease: 'none',
		stagger: 1,
	});

	gsap.from(".scheme_list .text", {
		scrollTrigger: {
			trigger: ".scheme_list",
			start: '20% bottom',
			end: '+=400px',
			scrub: true,
		},
		opacity: 0,
		ease: 'none',
		stagger: 1,
		duration: 1,
	});
	// -----------------

	// FAQ
	gsap.from('.faq_list .accordion_item ', {
		scrollTrigger: {
			trigger: '.faq_list',
			start: '50% bottom',
			end: '+=300px',
			scrub: true,
		},
		opacity: 0,
		ease: 'Power1.easeOut',
		stagger: 1,
		duration: 1,
		x: -200,
	})
	// -----------------		

	// Footer
	gsap.from('footer', {
		scrollTrigger: {
			trigger: 'footer',
			start: '0 bottom',
			end: '+=300px',
			scrub: true,
		},
		y: 200,
		ease: 'Power1.easeOut',
	})
	// -----------------		

	// Elements '[animate-on-scroll]'
	let animateItems = [...document.querySelectorAll('.animate-on-scroll')];
	animateItems.forEach(item => {
		gsap.from(item, {
			scrollTrigger: {
				trigger: item,
				markers: item.hasAttribute('markers'),
				start: '20% bottom',
				end: '+=150',
				scrub: true,
			},
			opacity: 0,
			ease: 'none',
		})
	})
	// -----------------	
}

// Laptop Animations
// let laptopScreen = window.matchMedia('(min-width: 992px)');

// if(laptopScreen.matches) {
// 	console.log('laptop');
// }