let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {
	//свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	//вертикальный слайдер
	direction: 'vertical',

	//кол-во слайдов для показа
	slidesPerView: 'auto',

	//параллакс
	parallax: true,

	//управление клавиатурой
	keyboard: {
		//включить/выключить
		enabled: true,
		//включить/выключить только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		//включить/выключить управление клавишами pageUp pageDown
		pageUpDown: true,
	},

	mousewheel: {
		//чувствительность колеса мыши
		sensitivity: 5,
		//класс объекта на котором будет срабатывать прокрутка мышью
		//eventsTarget: ".image-slider"
	},

	//отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,
	//скорость
	speed: 800,

	//обновить свайпер при изменении элементов слайдера
	observer: true,

	//обновить свайпер при изменении родительских эл слайдера
	observeParents: true,

	//обновить свайпер при изменении дочерних эл слайдера
	observeSlideChildren: true,


	//nav

	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},

	//скролл
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		//возможность перетаскивать скролл
		draggable: true
	},

	//отключаем автоинициализацию
	init: false,

	//события
	on: {
		//	//событие инициализации
		init: function () {
			setScrollType();
			wrapper.classList.add('_loaded');
		},
		//	//при изменении окна браузера
		resize: function () {
			setScrollType();
		}
	}
});

function setScrollType() {
	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}

	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('_free');
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}

pageSlider.init();