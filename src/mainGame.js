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
	// subscribe(() => {
	// 	if (prevStatus !== getGameStatus()) {
	// 		render()
	// 	}
	// })

	let prevStatus

	function render() {
		console.log("render")
		document.body.innerHTML = ""
		const currentStatus = getGameStatus()

		switch (currentStatus) {
			case GAME_STATUSES.SETTINGS:
				const initialize = initializeGame()
				document.body.append(initialize)
				break
			case GAME_STATUSES.IN_PROGRESS:
				const game = gamePlay()
				document.body.append(game)
				break
			case GAME_STATUSES.END_GAME:
				const result = gameResult()
				document.body.append(result)
				break
		}
		prevStatus = currentStatus
	}
	render()
}
renderApp()
subscribe(renderApp)

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
