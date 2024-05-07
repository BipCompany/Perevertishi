import { totalflips } from 'gamelogic.js'

let totaltime = 60
let intervalid

function starttimer() {
	const time = document.querySelector('.timestats')
	const steps = document.querySelector('.steps')
	intervalid = setInterval(() => {
		totaltime--
		steps.textContent = `шаги: ${totalflips} шагов`
		time.textContent = `время: ${totaltime} сек`
		if (totalTime === 0) {
			clearInterval(intervalid)
		}
	}, 1000)
}

function stopTimer() {
	clearInterval(intervalid)
}

export { totaltime, starttimer, stopTimer }
