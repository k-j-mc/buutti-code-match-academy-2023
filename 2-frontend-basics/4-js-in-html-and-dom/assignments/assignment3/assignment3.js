window.onload = () => {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let totalTimeInSec = 0;

	let interval = null;

	interval = setInterval(timer, 1000);

	function timer() {
		++totalTimeInSec;

		hours = Math.floor(totalTimeInSec / 3600);
		minutes = Math.floor((totalTimeInSec - hours * 3600) / 60);
		seconds = totalTimeInSec - (hours * 3600 + minutes * 60);

		document.getElementById("elapsedTime").innerHTML =
			hours + " hours: " + minutes + " minutes: " + seconds + " seconds";
	}
};
