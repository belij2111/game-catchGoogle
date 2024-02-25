import { getPoints, subscribe } from "../../../data/game-logic.js"

export function gameScore() {
	const element = document.createElement("div")
	let prevState = {}

	subscribe(() => {
		if (
			prevState.player1Points !== getPoints().player1Points ||
			prevState.player2Points !== getPoints().player2Points
		) {
			update()
		}
	})

	function update() {
		console.log("update Score")
		element.innerHTML = ""
		element.append(`Player1: ${getPoints().player1Points}; Player2: ${getPoints().player2Points} `)
		prevState = {
			player1Points: getPoints().player1Points,
			player2Points: getPoints().player2Points,
		}
	}
	update()
	return element
}
