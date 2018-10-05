"use strict";

let money = +prompt("Ваш бюджет на месяц?",'');
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD",'');
console.log(time);
let appData = {
    Bank: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let ff = prompt("Введите обязательную статью расходов в этом месяце",''),
    fs = +prompt("Во сколько обойдется?",''),
    sf = prompt("Введите обязательную статью расходов в этом месяце",''),
    ss = +prompt("Во сколько обойдется?",'');

appData.expenses.ff = fs;
appData.expenses.sf = ss;

alert(appData.Bank / 30);