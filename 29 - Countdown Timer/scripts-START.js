// jshint esversion: 6
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
let countDown;

function timer(seconds){
  // clear any exixting timers
  clearInterval(countDown);
	console.log(seconds);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayEndTime(then);
	displayTimeLeft(seconds);

	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if(secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
		//console.log(secondsLeft);
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
	document.title = display;
}

function displayEndTime(timeStamp){
	const end = new Date(timeStamp);
	const hours = end.getHours();
	const mins = end.getMinutes();
	endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
	const seconds = parseInt(this.dataset.time);
	console.log(seconds);
	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
	// stop form from reloading page
	e.preventDefault();
	const mins = this.minutes.value;
	console.log('mins: ');
	timer(mins * 60);
	this.reset();
});