'use strict';

function Time() {
	let time = new Date(),
        hour = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();

hour = nolik(hour);
min = nolik(min);
sec = nolik(sec);

document.getElementById('timer').textContent = hour + ":" + min + ":" +sec;
time = setTimeout(Time, 1000);
}

function nolik(i) {
	if (i < 10) {	
		i = "0" + i;
	}
	return i;
}

Time();