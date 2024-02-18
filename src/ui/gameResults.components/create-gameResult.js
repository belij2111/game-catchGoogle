import { restartGame } from "../../data/game-logic.js"
import { OPTIONS_GAME } from "../../data/options-game.js"
import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"

export function gameResult() {
	const params = {
		nameTag: "div",
		attribute: "class",
		nameAttribute: "wrapper-gameResult",
	}
	let container = createHtmlElement(params)
	container.append(createRestartButton())
	return container
}

function createRestartButton() {
	const params = {
		nameTag: "button",
		attribute: "class",
		nameAttribute: "btn",
		content: OPTIONS_GAME.buttonRestart.header,
	}
	let restartButton = createHtmlElement(params)
	restartButton.addEventListener("click", () => {
		restartGame()
	})
	return restartButton
}
