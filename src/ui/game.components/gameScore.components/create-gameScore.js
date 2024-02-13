import { getPoints } from "../../../data/game-logic.js"

export function gameScore() {
	const element = document.createElement("div")

	element.append(`Catch: ${getPoints().catch}; Miss: ${getPoints().miss} `)

	return element
}
