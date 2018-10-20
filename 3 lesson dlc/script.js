"use strict";

let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.substr(1);

console.log(str);

str = str.replace(/-/g, ' ');

console.log(str);

str = str.replace(/Урок 3 был слишком /, '');

str = str.replace(/им/, 'оо');

alert(str);


let arr = [20,33,1,"Человек",2,3];

arr.splice(3,1);

console.log(arr);

let a = Math.pow(20,3),
    b = Math.pow(33,3),
    c = Math.pow(1,3),
    d = Math.pow(2,3),
    e = Math.pow(3,3);

let calc = arr.toString(10);
calc = Math.sqrt( a * b * c * d * e );

console.log(calc);

function Meme() {
    let Peppa = prompt("Введите аргумент");
    if ( (typeof(Peppa)) !== 'string' ) {
        alert("Это не строка");
    }
    Peppa = Peppa.replace(/ /, '');
    if ( Peppa.length > 50 ) {
    alert(Peppa.slice(0,49) + '...');
    } else {
        alert(Peppa);
    }
}

Meme();

