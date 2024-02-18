import { createHtmlElement } from "../utility/create-htmlElement.utility.js"
import { createButtonStart } from "./settings.components/create-buttonStart.js"
import { createSettings } from "./settings.components/create-settings.js"

export function initializeGame() {
	const params = {
		nameTag: "section",
		attribute: "class",
		nameAttribute: "container",
	}
	let container = createHtmlElement(params)
	container.append(createSettings())
	container.append(createButtonStart())
	return container
}
