import { createHtmlElement } from "../../../utility/create-htmlElement.utility.js"

export function createSettingContainer(desiredSetting) {
	const params = {
		nameTag: "div",
		attribute: "class",
		nameAttribute: "wrapper-settings",
	}
	let container = createHtmlElement(params)
	container.append(createSettingHeader(desiredSetting))
	container.append(createOptionElement(desiredSetting))
	return container
}

function createSettingHeader(desiredSetting) {
	const params = {
		nameTag: "h3",
		attribute: "class",
		nameAttribute: "title",
		content: desiredSetting.header,
	}
	let newTitle = createHtmlElement(params)
	return newTitle
}

function createOptionElement(desiredSetting) {
	const params = {
		nameTag: "select",
		attribute: "class",
		nameAttribute: "installations",
	}
	let selectElement = createHtmlElement(params)
	for (let i = 0; i < desiredSetting.tunings.length; i++) {
		const params = {
			nameTag: "option",
			attribute: "value",
			nameAttribute: i + 1,
			content: desiredSetting.tunings[i],
		}
		let newOption = createHtmlElement(params)
		selectElement.append(newOption)
	}
	return selectElement
}

////////////////// alpha version /////////////////////
// export function createSetting(desiredSetting) {
// 	let selectElement = createTageContentAttributName("select", "", "class", "installations")
// 	for (let i = 0; i < desiredSetting.length; i++) {
// 		let newOption = createTageContentAttributName("option", desiredSetting[i], "value", i + 1)
// 		selectElement.append(newOption)
// 	}
// 	return selectElement
// }

////////////////// alpha version /////////////////////
// export function createSettings() {
// 	let container = createTageContentAttributName("div", "", "class", "wrapper-settings")
// 	let grid = createSettingsContainer("Grid size", SETTINGS.gridSizes)
// 	let points = createSettingsContainer("Points to win", SETTINGS.optionsPointsToWin)
// 	let time = createSettingsContainer("Time", SETTINGS.timeSelectionInMinutes)
// 	let gameMode = createSettingsContainer("Game mode", SETTINGS.numberOfPlayers)
// 	let playerChoice = createSettingsContainer("Choose who you will play for?", SETTINGS.selectedPlayer)
// 	container.append(grid, points, time, gameMode, playerChoice)
// 	return container
// }

// function createSettingsContainer(title, desiredSetting) {
// 	let settingsContainer = createTageContentAttributName("div", "", "class", "settings")
// 	settingsContainer.append(createSettingsHeaders(title), createSetting(desiredSetting))
// 	return settingsContainer
// }
