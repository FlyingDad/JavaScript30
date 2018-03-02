 /*jshint esversion: 6 */ 

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const date = document.querySelector('.date');
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	console.log(seconds);
	if(seconds !== 0){
		secondHand.removeAttribute("style", "transition:none");
		const secondsDegrees = ((seconds / 60) * 360) + 90; //adjust for initialcss 90deg offset
		//console.log(secondsDegrees);
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	} else { // prevents second hand from spinning quickly when passing through 0 degrees
		secondHand.setAttribute("style", "transition:none");
	}
	
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90; 
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	const day = now.getDate();
	date.textContent = day;
	const monthTxt = now.getMonth();
	date.textContent = `${monthNames[monthTxt]} ${day}`;

}

setInterval(setDate, 1000);