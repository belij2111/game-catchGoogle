import {
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
import { Grid } from "./ui/game.components/gameGrid.components/create-gameGrid.js"
import { gameScore } from "./ui/game.components/gameScore.components/create-gameScore.js"

function renderApp() {
	document.body.innerHTML = ""
	//document.body.append(initializeSettings())
	document.body.append(gameScore())
	document.body.append(Grid())
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
