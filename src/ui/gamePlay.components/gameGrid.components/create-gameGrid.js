import { getCells } from "../../../data/game-logic.js"
import { Cell } from "./cell.components/create-cell.js"
export function gameGrid() {
	const gridElement = document.createElement("table")
	for (let y = 0; y < getCells().y; y++) {
		const rowElement = document.createElement("tr")
		for (let x = 0; x < getCells().x; x++) {
			const cellElement = Cell(x, y)
			rowElement.append(cellElement)
		}
		gridElement.append(rowElement)
	}
	return gridElement
}
