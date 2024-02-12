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

export function movePlayer1Up() {
	if (selectPlayer1Coords().y > 0) {
		DATA.coords.player1.y--
		notify()
	}
}
export function movePlayer1Down() {
	if (selectPlayer1Coords().y < selectCells().y - 1) {
		DATA.coords.player1.y++
		notify()
	}
}
export function movePlayer1Left() {
	if (selectPlayer1Coords().x > 0) {
		DATA.coords.player1.x--
		notify()
	}
}
export function movePlayer1Right() {
	if (selectPlayer1Coords().x < selectCells().x - 1) {
		DATA.coords.player1.x++
		notify()
	}
}

// export function catchGoogle() {
// 	DATA.catchPoints++

// 	if (DATA.catchPoints === DATA.winPoints) {
// 		DATA.win = true
// 		clearInterval(googleJumpIntervalId)
// 	} else {
// 		changeGoogleCoordinates()
// 		runGoogleJumpInterval()
// 	}
// 	notify()
// }

function missGoogle() {
	DATA.missPoints++
	changeGoogleCoordinates()
	notify()
}

// selectors
///////////////////////////////////////////////

export function selectCells() {
	return {
		x: DATA.cells.columnsCount,
		y: DATA.cells.rowsCount,
	}
}

// export function selectGoogleStatuses() {
// 	return DATA.googleStatus
// }

export function selectGoogleCoords() {
	return {
		x: DATA.coords.google.x,
		y: DATA.coords.google.y,
	}
}

export function selectPlayer1Coords() {
	return {
		x: DATA.coords.player1.x,
		y: DATA.coords.player1.y,
	}
}
export function selectPlayer2Coords() {
	return {
		x: DATA.coords.player2.x,
		y: DATA.coords.player2.y,
	}
}
