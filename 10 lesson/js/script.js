window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for ( let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
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
    
	let deadline = '2018-10-27';
	
	let getTimerRemaining = (endtime) => {
			let timezone = new Date();
				timezone = timezone.getTimezoneOffset()*60*1000;
			let	t = Date.parse(endtime) - Date.parse(new Date()) + timezone;
			console.log(t);
			console.log(timezone);
			console.log(Date.parse(endtime));
			console.log(Date.parse(new Date()));
				if ( t <= 0 ) {
					return {
						'total': 0,
						'hours': 0,
						'minutes': 0,
						'seconds': 0
					};
				} else {
					let seconds = Math.floor((t/1000) % 60),
						minutes = Math.floor((t/1000/60) % 60),
						hours = Math.floor((t/(1000*60*60)) % 24);
				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};

			}
		};

		let setClock = (id, endtime) => {
			let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				let timeInterval = setInterval(updateClock, 1000);
				updateClock();

			function updateClock() {
				let t = getTimerRemaining(endtime);
				    hours.textContent = ('0' + t.hours).slice(-2);
				    minutes.textContent = ('0' + t.minutes).slice(-2);
				    seconds.textContent = ('0' + t.seconds).slice(-2);

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}
			}
		};
		setClock('timer', deadline);

	//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	
	more.addEventListener('click', () => {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.add('remove-splash');
		document.body.style.overflow = '';
	});


	let inf = document.getElementsByClassName('info')[0];

	inf.addEventListener('click', (event) => {
			let target = event.target;
			if ( target.className == 'description-btn' ) {
				
				let overlay = document.querySelector('.overlay'),
					close = document.querySelector('.popup-close');

				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden';
			
				close.addEventListener('click', () => {
					overlay.style.display = "none";
					more.classList.remove('more-splash');
					document.body.style.overflow = '';
				});
			}

	});
});