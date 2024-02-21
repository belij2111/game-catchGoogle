import { restartGame } from "../../data/game-logic.js"
import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"
import { SCENE_ITEMS } from "../sceneItems.components/scene-Items.js"

export function gameResult() {
	const params = {
		nameTag: "div",
		attribute: "class",
		attributeValue: "wrapper-gameResult",
	}
	let container = createHtmlElement(params)
	container.append(createRestartButton())
	return container
}

function createRestartButton() {
	const params = {
		nameTag: "button",
		attribute: "class",
		attributeValue: "btn",
		content: SCENE_ITEMS.buttonRestart.header,
	}
	let restartButton = createHtmlElement(params)
	restartButton.addEventListener("click", () => {
		restartGame()
	})
	return restartButton
}
