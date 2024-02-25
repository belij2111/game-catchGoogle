import { getGoogleCoords, getPlayer1Coords, getPlayer2Coords, subscribe } from "../../../../data/game-logic.js"
import { createGoogle } from "./create-google.js"
import { createPlayer1, createPlayer2 } from "./create-players.js"

export function Cell(x, y) {
	let prevState = "empty"

	function getCurrentState() {
		if (x === getGoogleCoords().x && y === getGoogleCoords().y) {
			return "google"
		} else if (x === getPlayer1Coords().x && y === getPlayer1Coords().y) {
			return "Player1"
		} else if (x === getPlayer2Coords().x && y === getPlayer2Coords().y) {
			return "Player2"
		} else {
			return "empty"
		}
	}

	function update() {
		console.log(`update:${x},${y}`)
		cellElement.innerHTML = ""
		const currentState = getCurrentState()
		switch (currentState) {
			case "google":
				cellElement.append(createGoogle())
				break
			case "Player1":
				cellElement.append(createPlayer1())
				break
			case "Player2":
				cellElement.append(createPlayer2())
				break
		}
		prevState = currentState
	}

	subscribe(() => {
		const currentState = getCurrentState()
		if (currentState !== prevState) {
			update()
		}
	})
	const cellElement = document.createElement("td")

	update()

	return cellElement
}
