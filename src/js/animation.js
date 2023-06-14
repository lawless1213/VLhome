gsap.registerPlugin(ScrollTrigger);

let transition = 0.4;
let startAnimation = gsap.timeline();

startAnimation.from('body', {opacity: 0.5, duration: transition})
							.from('#header', {opacity: 0, y: '-100%', duration: transition})
							.from('#main-title', {opacity: 0, y: 100, duration: transition}, `-=${transition}`)
							.from('#main-descr', {opacity: 0, y: 50, duration: transition}, `-=${transition}`)
							.from('#main-actions', {opacity: 0, duration: transition}, `-=${transition}`);

gsap.to('#main-section-content', {
	scrollTrigger: {
		trigger: '#main',
		start: 'top top',
		scrub: true,
	},
	yPercent: -80,
	opacity: 0,
})

gsap.from('.advantages .item', {
	scrollTrigger: {
		trigger: '.advantages',
		start: '0 bottom',
		end: '+=400px',
		scrub: true,
	},
	opacity: 0,
	scale: 0,
	transformOrigin: 'left center',
	ease: 'none',
	stagger: 1,
	duration: 1,
})

let animateItems = [...document.querySelectorAll('.animate-on-scroll')];
animateItems.forEach(item => {
	gsap.from(item, {
		scrollTrigger: {
			trigger: item,
			start: '100% bottom',
			end: '+=300px',
			scrub: true,
		},
		opacity: 0,
		ease: 'none',
	})
})

// Laptop Animations
let laptopScreen = window.matchMedia('(min-width: 992px)');

if(laptopScreen.matches) {
	console.log('laptop');
}