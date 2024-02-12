/*  not ready   */

function timeFormat(timeInSeconds) {
	const minutes = Math.floor(timeInSeconds / 60)
	const seconds = timeInSeconds % 60
	minutes = minutes.toString().padStart(2, "0")
	seconds = seconds.toString().padStart(2, "0")
	textContent = minutes + ":" + seconds
	return textContent
}

/*
function timerStart() {

    setInterval(timerInMinAndSec, 1000)
}
console.log(timerInMinAndSec());


let seconds = 0;
let timer;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = formatTime(seconds);
}

*/
