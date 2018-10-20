'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);
li.classList.add('menu-item');
menu.appendChild(li);
li.textContent = 'Пятый пункт';

document.body.style.backgroundImage = "url(../1les/img/apple_true.jpg)";

let podl9nka = document.querySelector('.title');
podl9nka.textContent = 'Мы продаем только подлинную технику Apple';

let AdBlock = document.querySelector('.adv');
AdBlock.remove('.adv');

let AndroidSILA = document.querySelector('.prompt');
AndroidSILA.textContent = prompt("Каково Ваше отношение к технике Apple");
