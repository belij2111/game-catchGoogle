export function createHtmlElement(params) {
	let container = "!set the parameters!"
	if (params.nameTag === undefined) {
		return container
	} else {
		container = document.createElement(params.nameTag)
	}
	if (params.attribute === undefined || params.attributeValue === undefined) {
		return container
	} else {
		container.setAttribute(params.attribute, params.attributeValue)
	}
	if (params.content === undefined) {
		return container
	} else {
		container.append(params.content)
	}
	return container
}
