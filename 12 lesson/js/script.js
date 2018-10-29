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
    
	let deadline = '2018-10-26';
	
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
						hours = Math.floor(t/(1000*60*60));
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
	
	more.addEventListener('click', function() {
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

	//Form

	let imgLoader = document.createElement('img');
	imgLoader.src = "img/ajax-loader.gif";
	let imgSuccess = document.createElement('img');
	imgSuccess.src = "img/checked.png";
	let imgFail = document.createElement('img');
	imgFail.src = "img/close-button.png";

	let message = new Object();
	message.loading = document.createElement('div');
	message.loading.appendChild(imgLoader);
	message.failure = document.createElement('div');
	message.failure.appendChild(imgFail);
	message.success = document.createElement('div');
	message.success.appendChild(imgSuccess);

	console.log(message);

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		inp = form.querySelector('.popup-form__input');

	inp.addEventListener('focus', _ => {
	if(!/^\+\d*$/.test(inp.value))
	inp.value = '+';
	});
		
	inp.addEventListener('keypress', e => {
	if(!/\d/.test(e.key))
	e.preventDefault();
	});
	

   	console.log(message.success);

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		
		let formData = new FormData(form);

		function postData(data) { // start postData

			return new Promise(function(resolve, reject) {
				let request =  new XMLHttpRequest();

				request.open("POST", 'server.php');

				request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

				request.onreadystatechange = function() {
					if ( request.readyState < 4 ) {
						resolve()
					} else if ( request.readyState === 4 ) {
						if ( request.status === 200 && request.status < 300 ) {
							resolve()
						} else {
							reject()
						}
					}
				};

				request.send(formData);
			});
		} // End postData

		function clearInput() {
			for ( let i = 0; i < input.length; i++ ) {
				input[i].value = '';
			}
		}

		postData(formData)
			.then(()=> form.appendChild(message.loading))
			.then(()=> {
				message.loading.style.display = "none";
				form.appendChild(message.success);
			})
			.catch(()=> form.appendChild(message.failure))
			.then(clearInput)	
	});

let formTel = document.getElementById('form'),
	inputTel = formTel.getElementsByTagName('input'),
	inpTel = formTel.getElementsByTagName('input')[1];

	inpTel.addEventListener('focus', _ => {
		if(!/^\+\d*$/.test(inpTel.value))
		inpTel.value = '+';
	});
			
	inpTel.addEventListener('keypress', e => {
		if(!/\d/.test(e.key))
		e.preventDefault();
	});
	

	formTel.addEventListener('submit', function(event) {
		event.preventDefault();
		formTel.appendChild(statusMessage);

		


		let formDataTel = new FormData(formTel);

		function secondData(data) { // START secondData
			return new Promise(function(resolve, reject) {

				let request =  new XMLHttpRequest();

				request.open("POST", 'server.php');

				request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

				request.onreadystatechange = function() {
					if ( request.readyState < 4 ) {
						resolve()
					}else if ( request.readyState === 4 ) {
						if ( request.status === 200 && request.status < 300 ) {
							resolve()
						} else {
							reject()
						}
					}
				};

				request.send(formDataTel);
			});

		} // END secondData

		function clearInput() {
			for ( let i = 0; i < inputTel.length; i++ ) {
				inputTel[i].value = '';
			}
		}

		secondData(formDataTel)
			.then(()=> formTel.appendChild(message.loading))
			.then(()=> {
				message.loading.style.display = "none";
				formTel.appendChild(message.success);
			})
			.catch(()=> formTel.appendChild(message.failure))
			.then(clearInput)
	});
});