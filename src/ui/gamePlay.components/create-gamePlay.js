import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"
import { gameGrid } from "./gameGrid.components/create-gameGrid.js"
import { gameScore } from "./gameScore.components/create-gameScore.js"

export function gamePlay() {
	const params = {
		nameTag: "div",
		attribute: "class",
		nameAttribute: "wrapper-gamePlay",
	}
	let container = createHtmlElement(params)
	container.append(gameScore())
	container.append(gameGrid())
	return container
}
