import { activatesGame } from "../../data/game-logic.js"
import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"

//subscribe(renderGame)

export function createButtonStart(desiredSetting) {
	const params = {
		nameTag: "button",
		attribute: "class",
		nameAttribute: "btn",
		content: desiredSetting.header,
	}
	let buttonStart = createHtmlElement(params)
	buttonStart.addEventListener("click", activatesGame)
	return buttonStart
}
