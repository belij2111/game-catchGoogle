import { selectPoints } from "../../../data/game-logic.js"

export function gameScore() {
	const element = document.createElement("div")

	element.append(`Catch: ${selectPoints().catch}; Miss: ${selectPoints().miss} `)

	return element
}
