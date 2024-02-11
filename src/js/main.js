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