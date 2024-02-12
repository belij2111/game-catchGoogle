import { OPTIONS_GAME } from "../../data/options-game.js"
import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"
import { createSettingContainer } from "./settings-template/template-creating-setting.js"

export function createSettings() {
	const params = {
		nameTag: "div",
		attribute: "class",
		nameAttribute: "wrapper",
	}
	let container = createHtmlElement(params)
	container.append(createSettingContainer(OPTIONS_GAME.gridSize))
	container.append(createSettingContainer(OPTIONS_GAME.pointsToWin))
	container.append(createSettingContainer(OPTIONS_GAME.timeSelectionInMinutes))
	container.append(createSettingContainer(OPTIONS_GAME.numberOfPlayers))
	container.append(createSettingContainer(OPTIONS_GAME.selectedPlayer))
	return container
}
