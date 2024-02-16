import { getPoints } from "../../../data/game-logic.js"

export function gameScore() {
	const element = document.createElement("div")

	element.append(`Player1: ${getPoints().player1Points}; Player2: ${getPoints().player2Points} `)

	return element
}
