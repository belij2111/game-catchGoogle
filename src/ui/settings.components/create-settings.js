import { createHtmlElement } from "../../utility/create-htmlElement.utility.js"
import { SCENE_ITEMS } from "../sceneItems.components/scene-Items.js"
import { createSettingContainer } from "./settings-template/template-creating-setting.js"

export function createSettings() {
	const params = {
		nameTag: "div",
		attribute: "class",
		attributeValue: "wrapper",
	}
	let container = createHtmlElement(params)
	container.append(createSettingContainer(SCENE_ITEMS.gridSize))
	container.append(createSettingContainer(SCENE_ITEMS.pointsToWin))
	container.append(createSettingContainer(SCENE_ITEMS.timeSelectionInMinutes))
	container.append(createSettingContainer(SCENE_ITEMS.numberOfPlayers))
	container.append(createSettingContainer(SCENE_ITEMS.selectedPlayer))
	return container
}
