import {
	GAME_STATUSES,
	getGameStatus,
	movePlayer1Down,
	movePlayer1Left,
	movePlayer1Right,
	movePlayer1Up,
	movePlayer2Down,
	movePlayer2Left,
	movePlayer2Right,
	movePlayer2Up,
	subscribe,
} from "./data/game-logic.js"
import { gamePlay } from "./ui/gamePlay.components/create-gamePlay.js"
import { gameResult } from "./ui/gameResults.components/create-gameResult.js"
import { initializeGame } from "./ui/initializing-game.js"

function renderApp() {
	let prevStatus

	subscribe(() => {
		if (prevStatus !== getGameStatus()) {
			render()
		}
	})

	function render() {
		console.log("render")
		const currentStatus = getGameStatus()
		let gameElement = null
		switch (currentStatus) {
			case GAME_STATUSES.SETTINGS:
				gameElement = initializeGame()
				break
			case GAME_STATUSES.IN_PROGRESS:
				gameElement = gamePlay()
				break
			case GAME_STATUSES.END_GAME:
				gameElement = gameResult()
				break
		}
		if (gameElement) {
			document.body.innerHTML = ""
			document.body.append(gameElement)
		}
		prevStatus = currentStatus
	}
	render()
}
renderApp()

window.addEventListener("keyup", (e) => {
	switch (e.code) {
		case "ArrowUp":
			movePlayer1Up()
			break
		case "ArrowDown":
			movePlayer1Down()
			break
		case "ArrowLeft":
			movePlayer1Left()
			break
		case "ArrowRight":
			movePlayer1Right()
			break
		case "KeyW":
			movePlayer2Up()
			break
		case "KeyS":
			movePlayer2Down()
			break
		case "KeyA":
			movePlayer2Left()
			break
		case "KeyD":
			movePlayer2Right()
			break
	}
})
