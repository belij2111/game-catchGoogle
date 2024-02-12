import { movePlayer1Down, movePlayer1Left, movePlayer1Right, movePlayer1Up, subscribe } from "./data/game-logic.js"
import { Grid } from "./ui/game.components/gameGrid.components/create-gameGrid.js"

function renderApp() {
	document.body.innerHTML = ""
	//document.body.append(initializeSettings())
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
	}
})
