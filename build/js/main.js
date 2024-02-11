'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const switchesTheme = document.querySelectorAll('.theme-toggle')
	switchesTheme.forEach(btn => {
		btn.addEventListener('click', function () {
			this.classList.toggle('active');
			document.body.classList.toggle('dark-theme');
		})
	})

	function checkAnswer() {
		const items = document.querySelectorAll('.question__item')
		items.forEach(item => {
			item.addEventListener('click', function () {
				items.forEach(item => {
					item.classList.remove('active')
				})
				this.classList.add('active')
			})
		})
	}
	checkAnswer()

	const popup = document.querySelector('.overlay')
	const btnsShow = document.querySelectorAll('.showPopup')
	btnsShow.forEach(btn => {
		btn.onclick = showPopup
	})

	function showPopup() {
		popup.classList.add('show')
		document.querySelector('body').classList.add('hidden')
	}

	function closePopup() {
		const closePopup = document.querySelector('.popup__close')
		closePopup.addEventListener('click', function () {
			console.log(this)
			this.closest('.overlay').classList.remove('show')
			document.querySelector('body').classList.remove('hidden')
		})
	}
	closePopup()

	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.header .menu')
	burger.addEventListener('click', function () {
		this.classList.toggle('active')
		menu.classList.toggle('active')
	})
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRjb25zdCBzd2l0Y2hlc1RoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRoZW1lLXRvZ2dsZScpXG5cdHN3aXRjaGVzVGhlbWUuZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstdGhlbWUnKTtcblx0XHR9KVxuXHR9KVxuXG5cdGZ1bmN0aW9uIGNoZWNrQW5zd2VyKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1ZXN0aW9uX19pdGVtJylcblx0XHRpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRjaGVja0Fuc3dlcigpXG5cblx0Y29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXG5cdGNvbnN0IGJ0bnNTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3dQb3B1cCcpXG5cdGJ0bnNTaG93LmZvckVhY2goYnRuID0+IHtcblx0XHRidG4ub25jbGljayA9IHNob3dQb3B1cFxuXHR9KVxuXG5cdGZ1bmN0aW9uIHNob3dQb3B1cCgpIHtcblx0XHRwb3B1cC5jbGFzc0xpc3QuYWRkKCdzaG93Jylcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblx0fVxuXG5cdGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XG5cdFx0Y29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKVxuXHRcdGNsb3NlUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzKVxuXHRcdFx0dGhpcy5jbG9zZXN0KCcub3ZlcmxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cdFx0fSlcblx0fVxuXHRjbG9zZVBvcHVwKClcblxuXHRjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXIgLm1lbnUnKVxuXHRidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblx0fSlcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
