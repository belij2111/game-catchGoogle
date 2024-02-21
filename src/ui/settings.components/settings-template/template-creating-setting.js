import { createHtmlElement } from "../../../utility/create-htmlElement.utility.js"

export function createSettingContainer(desiredSetting) {
	const params = {
		nameTag: "div",
		attribute: "class",
		attributeValue: "wrapper-settings",
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
		attributeValue: "title",
		content: desiredSetting.header,
	}
	let newTitle = createHtmlElement(params)
	return newTitle
}

function createOptionElement(desiredSetting) {
	const params = {
		nameTag: "select",
		attribute: "class",
		attributeValue: "installations",
	}
	let selectElement = createHtmlElement(params)
	for (let i = 0; i < desiredSetting.tunings.length; i++) {
		const params = {
			nameTag: "option",
			attribute: "value",
			attributeValue: i + 1,
			content: desiredSetting.tunings[i],
		}
		let newOption = createHtmlElement(params)
		selectElement.append(newOption)
	}
	return selectElement
}
