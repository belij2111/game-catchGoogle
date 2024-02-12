import { selectGoogleCoords, selectPlayer1Coords, selectPlayer2Coords } from "../../../../data/game-logic.js"
import { createGoogle } from "./create-google.js"
import { createPlayer1, createPlayer2 } from "./create-players.js"

export function Cell(x, y) {
	const cellElement = document.createElement("td")

	if (x === selectGoogleCoords().x && y === selectGoogleCoords().y) {
		cellElement.append(createGoogle())
	}
	if (x === selectPlayer1Coords().x && y === selectPlayer1Coords().y) {
		cellElement.append(createPlayer1())
	}
	if (x === selectPlayer2Coords().x && y === selectPlayer2Coords().y) {
		cellElement.append(createPlayer2())
	}

	return cellElement
}

/*
function update(x, y, cellElement) {
    cellEl.innerHTML = "";

    if (x === COORDS.offer.x && y === COORDS.offer.y) {
        const offerEl = document.createElement("img");
        offerEl.src = "assets/images/offer.png";
        //offerEl.addEventListener('click', catchOffer);
        cellEl.append(offerEl);
    }

    if (data.offerStatus === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement("img");
        offerEl.src = "assets/images/caught-offer.png";
        cellEl.append(offerEl);
    }

    if (data.offerStatus === OFFER_STATUSES.miss && x === data.coords.previous.x && y === data.coords.previous.y) {
        const offerEl = document.createElement("img");
        offerEl.src = "assets/images/missed-offer.png";
        cellEl.append(offerEl);
    }
}*/
