window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for ( let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    
	let deadline = 'October 25 2018 23:59:59 GMT+03:00',
        persently = Date.parse(new Date()),
		end = Date.parse(deadline);
		
	if ( end <= persently ) {
	let timer = document.getElementById('timer'),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		hours.textContent = "00";
		minutes.textContent = "00";
		seconds.textContent = "00";

	} else {
		getTimerRemaining();
	}

		function getTimerRemaining(endtime) {
			let t = Date.parse(endtime) - Date.parse(new Date()),
			    seconds = Math.floor((t/1000) % 60),
			    minutes = Math.floor((t/1000/60) % 60),
			    hours = Math.floor((t/(1000*60*60)) % 24),
				days = Math.floor(t/(1000*60*60*24));
			return {
				'total': t,
				'days' : days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}

		function setClock(id, endtime) {
			let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimerRemaining(endtime);
				    hours.textContent = ('0' + t.hours).slice(-2);
				    minutes.textContent = ('0' + t.minutes).slice(-2);
				    seconds.textContent = ('0' + t.seconds).slice(-2);

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			}


			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
		}
		setClock('timer', deadline);

});


