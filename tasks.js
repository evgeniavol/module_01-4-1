"use strict";
// Task # 2

const rain = Math.round(Math.random() * 1);
if (rain == 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!');
}

// Task #3

const mathematics = Number(prompt('Введите кол-во баллов по математике:'));
const russian = Number(prompt('Введите кол-во баллов по русскому языку:'));
const informatics = Number(prompt('Введите кол-во баллов по информатике:'));
const totalPoints = mathematics + russian + informatics;

if (totalPoints >= 265) {
    alert('Поздравляю, вы поступили на бюджет!');
} else {
    alert('Увы, придется поступать на платной основе');
}


// Task #4

const countMoney = Number(prompt('Сколько хочешь снять наличных?'));

if ((countMoney % 100) === 0 && countMoney > 0) {
    alert('Можешь снять');
}
else {
    alert('Не получится снять, ищите другой банкомат');
}