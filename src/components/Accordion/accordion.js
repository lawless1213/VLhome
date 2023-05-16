// Аккордеон
function accordion() {
	const items = [...document.querySelectorAll('[accordion-toggle]')];

	items.forEach(item => {
		item.addEventListener('click', () => {
			const parent = item.closest('[accordion-item]');
			if (parent.classList.contains('active')) {
				parent.classList.remove('active');
			} else {
				items.forEach(child => child.classList.remove('active'));   
				parent.classList.add('active');
			}
		})
	})
}

accordion() 