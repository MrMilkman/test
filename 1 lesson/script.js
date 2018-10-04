"use strict";

let money = +prompt("Ваш бюджет на месяц?",'');
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD",'');
console.log(time);
let appData = {
    Bank: money,
    timeData: time,
    expenses: {
        "ответ на первый вопрос" : "ответ на второй вопрос"
    },
    optionalExpenses: {},
    income: {},
    savings: false
};
appData.expenses.ff = prompt("Введите обязательную статью расходов в этом месяце",'');
console.log(appData.expenses.ff);
appData.expenses.fs = +prompt("Во сколько обойдется?",'');
console.log(appData.expenses.fs);
appData.expenses.sf = prompt("Введите обязательную статью расходов в этом месяце",'');
console.log(appData.expenses.sf);
appData.expenses.ss = +prompt("Во сколько обойдется?",'');
console.log(appData.expenses.ss);
let Budjet;
Budjet = (money-(appData.expenses.fs+appData.expenses.ss))/30;
alert(Budjet);