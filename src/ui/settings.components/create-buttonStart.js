import { startGame } from "../../data/game-logic.js"
import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"
import { SCENE_ITEMS } from "../sceneItems.components/scene-Items.js"

export function createButtonStart() {
	const params = {
		nameTag: "button",
		attribute: "class",
		attributeValue: "btn",
		content: SCENE_ITEMS.buttonStart.header,
	}
	let buttonStart = createHtmlElement(params)
	buttonStart.addEventListener("click", () => {
		startGame()
	})
	return buttonStart
}
