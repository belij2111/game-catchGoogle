export const GAME_STATUSES = {
	SETTINGS: "settings",
	IN_PROGRESS: "in-progress",
	PAUSE: "pause",
	END_GAME: "end-game",
}

const DATA = {
	cells: {
		columnsCount: 2,
		rowsCount: 2,
	},
	google: {
		x: 1,
		y: 0,
	},
	player1: {
		x: 0,
		y: 1,
		points: 0,
	},
	player2: {
		x: 1,
		y: 1,
		points: 0,
	},
	catchPoints: 0,
	missPoints: 0,
	winPoints: 3,
	status: GAME_STATUSES.SETTINGS,
}

// logic
///////////////////////////////////////////////

let subscribers = []

function notify() {
	subscribers.forEach((subscriber) => subscriber())
}

export function subscribe(newSubscriber) {
	subscribers.push(newSubscriber)
}
function getRandomPosition(N) {
	return Math.floor(Math.random() * N)
}

function changeGoogleCoordinates() {
	let newX = 0
	let newY = 0
	let coordinateComparison
	do {
		newX = getRandomPosition(DATA.cells.columnsCount)
		newY = getRandomPosition(DATA.cells.rowsCount)

		coordinateComparison = newX === DATA.google.x && newY === DATA.google.y
	} while (coordinateComparison || !IsCellOfGridIsFree(newX, newY))

	DATA.google.x = newX
	DATA.google.y = newY
}

let googleJumpIntervalId = null

function runGoogleJumpInterval() {
	console.log("runGoogleJumpInterval")

	clearInterval(googleJumpIntervalId)
	googleJumpIntervalId = setInterval(missGoogle, 1000)
}

runGoogleJumpInterval()

function movePlayer(delta, player) {
	const newX = player.x + delta.x
	const newY = player.y + delta.y
	if (!IsNewCoordsInsideGrid(newX, newY)) return
	if (!IsCellOfGridIsFree(newX, newY)) return
	player.x = newX
	player.y = newY
	if (player.x === DATA.google.x && player.y === DATA.google.y) {
		catchGoogle(player)
	}
	notify()
}
function IsNewCoordsInsideGrid(x, y) {
	if (x < 0 || y < 0 || x >= DATA.cells.columnsCount || y >= DATA.cells.rowsCount) return false
	return true
}
function IsCellOfGridIsFree(newX, newY) {
	if (newX === DATA.player1.x && newY === DATA.player1.y) return false
	if (newX === DATA.player2.x && newY === DATA.player2.y) return false
	return true
}

export function movePlayer1Up() {
	movePlayer({ x: 0, y: -1 }, DATA.player1)
}
export function movePlayer1Down() {
	movePlayer({ x: 0, y: 1 }, DATA.player1)
}
export function movePlayer1Left() {
	movePlayer({ x: -1, y: 0 }, DATA.player1)
}
export function movePlayer1Right() {
	movePlayer({ x: 1, y: 0 }, DATA.player1)
}

export function movePlayer2Up() {
	movePlayer({ x: 0, y: -1 }, DATA.player2)
}
export function movePlayer2Down() {
	movePlayer({ x: 0, y: 1 }, DATA.player2)
}
export function movePlayer2Left() {
	movePlayer({ x: -1, y: 0 }, DATA.player2)
}
export function movePlayer2Right() {
	movePlayer({ x: 1, y: 0 }, DATA.player2)
}

export function catchGoogle(player) {
	player.points++

	if (player.points === DATA.winPoints) {
		DATA.status = GAME_STATUSES.END_GAME
		clearInterval(googleJumpIntervalId)
	} else {
		changeGoogleCoordinates()
		runGoogleJumpInterval()
	}
	notify()
}

function missGoogle() {
	DATA.missPoints++
	changeGoogleCoordinates()
	notify()
}
export function startGame() {
	console.log("start")

	DATA.google.x = 0
	DATA.google.y = 0
	DATA.player1.points = 0
	DATA.player2.points = 0
	DATA.catchPoints = 0
	DATA.missPoints = 0
	DATA.status = GAME_STATUSES.IN_PROGRESS
	runGoogleJumpInterval()
	notify()
}

export function restartGame() {
	console.log("restart")
	DATA.status = GAME_STATUSES.SETTINGS
	notify()
}

// selectors
// getter
///////////////////////////////////////////////

export function getCells() {
	return {
		x: DATA.cells.columnsCount,
		y: DATA.cells.rowsCount,
	}
}

export function getGoogleCoords() {
	return {
		x: DATA.google.x,
		y: DATA.google.y,
	}
}

export function getPlayer1Coords() {
	return {
		x: DATA.player1.x,
		y: DATA.player1.y,
	}
}
export function getPlayer2Coords() {
	return {
		x: DATA.player2.x,
		y: DATA.player2.y,
	}
}
export function getPoints() {
	return {
		player1Points: DATA.player1.points,
		player2Points: DATA.player2.points,
	}
}
export function getGameStatus() {
	switch (DATA.status) {
		case GAME_STATUSES.SETTINGS:
			return GAME_STATUSES.SETTINGS
		case GAME_STATUSES.IN_PROGRESS:
			return GAME_STATUSES.IN_PROGRESS
		case GAME_STATUSES.END_GAME:
			return GAME_STATUSES.END_GAME
	}
}
