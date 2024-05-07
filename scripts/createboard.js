import { starttimer } from 'timer.js'
import { createIconArray, createCard } from 'cards.js'

export function createBoard(count, columns) {
	const gameBoard = document.querySelector('.board')
	gameBoard.textContent = ''
	const template = document.querySelector('#gameTableTemplate')
	const gameTable = template.querySelector('.table')
	const restartButton = template.querySelector('.restart')
	const icons = createIconArray(count)
	icons.forEach(icon => {
		gameTable.append(createCard(icon))
	})
	gameTable.style = `
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${columns}, 1fr);
  `
	gameBoard.append(gameTable)
	restartButton.addEventListener('click', () => {
		location.reload()
	})
	gameBoard.append(restartButton)
	starttimer()
}
