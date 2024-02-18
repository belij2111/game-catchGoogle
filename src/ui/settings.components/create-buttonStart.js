import { startGame } from "../../data/game-logic.js"
import { OPTIONS_GAME } from "../../data/options-game.js"
import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"

export function createButtonStart() {
	const params = {
		nameTag: "button",
		attribute: "class",
		nameAttribute: "btn",
		content: OPTIONS_GAME.buttonStart.header,
	}
	let buttonStart = createHtmlElement(params)
	buttonStart.addEventListener("click", () => {
		startGame()
	})
	return buttonStart
}
