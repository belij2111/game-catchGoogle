const GOOGLE_STATUSES = {
	default: "default",
	miss: "miss",
	caught: "caught",
}

const DATA = {
	cells: {
		columnsCount: 10,
		rowsCount: 5,
	},
	coords: {
		google: {
			x: 1,
			y: 0,
		},
		player1: {
			x: 2,
			y: 2,
		},
		player2: {
			x: 3,
			y: 2,
		},
	},
	googleStatus: GOOGLE_STATUSES.default,
	catchPoints: 0,
	missPoints: 0,
	winPoints: 5,
	win: false,
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

export function activatesGame() {
	console.log("STATES_OF_GAME.game")
	notify()
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

		coordinateComparison = newX === DATA.coords.google.x && newY === DATA.coords.google.y
	} while (coordinateComparison)

	DATA.coords.google.x = newX
	DATA.coords.google.y = newY
}

let googleJumpIntervalId = null

function runGoogleJumpInterval() {
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
	notify()
}
function IsNewCoordsInsideGrid(x, y) {
	if (x < 0 || y < 0 || x >= DATA.cells.columnsCount || y >= DATA.cells.rowsCount) return false
	return true
}
function IsCellOfGridIsFree(newX, newY) {
	if (newX === DATA.coords.player1.x && newY === DATA.coords.player1.y) return false
	if (newX === DATA.coords.player2.x && newY === DATA.coords.player2.y) return false
	return true
}

export function movePlayer1Up() {
	movePlayer({ x: 0, y: -1 }, DATA.coords.player1)
}
export function movePlayer1Down() {
	movePlayer({ x: 0, y: 1 }, DATA.coords.player1)
}
export function movePlayer1Left() {
	movePlayer({ x: -1, y: 0 }, DATA.coords.player1)
}
export function movePlayer1Right() {
	movePlayer({ x: 1, y: 0 }, DATA.coords.player1)
}

export function movePlayer2Up() {
	movePlayer({ x: 0, y: -1 }, DATA.coords.player2)
}
export function movePlayer2Down() {
	movePlayer({ x: 0, y: 1 }, DATA.coords.player2)
}
export function movePlayer2Left() {
	movePlayer({ x: -1, y: 0 }, DATA.coords.player2)
}
export function movePlayer2Right() {
	movePlayer({ x: 1, y: 0 }, DATA.coords.player2)
}

export function catchGoogle() {
	DATA.catchPoints++

	if (DATA.catchPoints === DATA.winPoints) {
		DATA.win = true
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

// selectors
// getter/setter
///////////////////////////////////////////////

export function getCells() {
	return {
		x: DATA.cells.columnsCount,
		y: DATA.cells.rowsCount,
	}
}

// export function selectGoogleStatuses() {
// 	return DATA.googleStatus
// }

export function getGoogleCoords() {
	return {
		x: DATA.coords.google.x,
		y: DATA.coords.google.y,
	}
}

export function getPlayer1Coords() {
	return {
		x: DATA.coords.player1.x,
		y: DATA.coords.player1.y,
	}
}
export function getPlayer2Coords() {
	return {
		x: DATA.coords.player2.x,
		y: DATA.coords.player2.y,
	}
}
export function getPoints() {
	return {
		catch: DATA.catchPoints,
		miss: DATA.missPoints,
	}
}
