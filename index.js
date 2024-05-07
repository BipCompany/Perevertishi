import { createboard } from 'scripts/createboard.js'

const startButton = document.querySelector('.first_button')

startButton.addEventListener('click', event => {
	event.preventDefault()
	const input = document.querySelector('.first_input')
	let columns = input.value
	let count
	if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
		count = columns * columns
	} else {
		alert('Нужно выбрать чётное число.')
		return
	}
	createboard(count, columns)
})
