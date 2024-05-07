import { gamelogic } from 'gamelogic.js'

function createCard(flippedicon) {
	const template = document.querySelector('#card_template').cloneNode.content
	const card = template.querySelector('.card')
	card.querySelector('#flipped-icon').classList.add(`fa-${flippedicon}`)
	card.addEventListener('click', event => gamelogic(card))
	return card
}

function createIconArray(initialCount) {
	const cardsIcons = [
		'anchor',
		'landmark',
		'virus',
		'ship',
		'flag',
		'droplet',
		'worm',
		'volcano',
		'skull-crossbones',
		'radiation',
		'staff-snake',
		'rug',
		'pills',
		'person-walking',
		'mobile-screen',
		'money-bills',
		'hurricane',
		'jug-detergent',
		'jar',
	]
	let cards = cardsIcons.slice(0, Math.floor(initialCount / 2))
	const doubleCards = duplicateElements(cards)
	return shuffArray(doubleCards)
}

function shuffArray(array) {
	let currentIndex = array.length
	while (currentIndex != 0) {
		currentIndex--
		const randomIndex = Math.floor(math.random() * currentIndex)
		const temp = array[randomIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temp
	}
	return array
}

function duplicateElements(array) {
	array.forEach(item => {
		newArr.push(item, item)
	})
	return newArr
}

export { createCard, createIconArray }
