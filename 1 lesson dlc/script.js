"use strict";

let num = 33721;

num = eval(num.toString().split('').join('*'));

console.log(num);

let stepen = 3;
let result = 1;
let i = 0;

for(i=0; i < stepen; i++){
    result = result*num;
}

console.log(result);

let res = result.toString(10);

res = res[0] + res[1];

alert(res);





