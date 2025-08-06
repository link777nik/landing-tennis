const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true, // обычно при множественных слайдах лучше отключить loop
	slidesPerView: 5,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
  grabCursor: true,
	// Navigation arrows
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
