const swiper2 = new Swiper('.swiper2', {
	// Optional parameters
	direction: 'horizontal',
	loop: false, // обычно при множественных слайдах лучше отключить loop
	slidesPerView: 2,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.next2',
		prevEl: '.prev2',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
