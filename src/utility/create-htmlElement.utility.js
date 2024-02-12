export function createHtmlElement(params) {
	let container = "!set the parameters!"
	if (params.nameTag === undefined) {
		return container
	} else {
		container = document.createElement(params.nameTag)
	}
	if (params.attribute === undefined && params.nameAttribute === undefined) {
		return container
	} else {
		container.setAttribute(params.attribute, params.nameAttribute)
	}
	if (params.content === undefined) {
		return container
	} else {
		container.append(params.content)
	}
	return container
}

//////////////// alpha version /////////////////////
// export function createTageContentAttributName(nameTage, content, attribute, nameAttribute) {
// 	let container = "!set the parameters!"
// 	if (nameTage === undefined) {
// 		return container
// 	} else {
// 		container = document.createElement(nameTage)
// 	}
// 	if (content === undefined) {
// 		return container
// 	} else {
// 		container.append(content)
// 	}
// 	if (attribute === undefined && nameAttribute === undefined) {
// 		return container
// 	} else {
// 		container.setAttribute(attribute, nameAttribute)
// 	}
// 	return container
// }
