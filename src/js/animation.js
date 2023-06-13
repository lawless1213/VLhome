// gsap.fromTo('.section_title', {
// 	x: -500,
// 	opacity: 0,
// }, {
// 	x: 0,
// 	opacity: 1,
// 	duration: 1,
// 	ease: "power2.inOut",
// })
let transition = 0.7;
let startAnimation = gsap.timeline();
startAnimation.from('body', {opacity: 0, duration: transition})
							.from('#header', {opacity: 0, duration: transition})
							.from('#main-title', {opacity: 0, y: 100, duration: transition}, `-=${transition}`)
							.from('#main-descr', {opacity: 0, y: 50, duration: transition}, `-=${transition}`)
							.from('#main-actions', {opacity: 0, duration: transition}, `-=${transition}`);