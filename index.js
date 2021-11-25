"use strict";
// Task #1

const amountProduct = Number(prompt("Введите количество товара"));
const priceProduct = Number(prompt("Введите цену товара"));

if (Number.isFinite(amountProduct) && amountProduct > 0 && amountProduct !== "") {
    console.log('Количество товара:', amountProduct);
}
 else {
    console.log("Вы ввели некорректные данные");
}

if (Number.isFinite(priceProduct) && priceProduct > 0 && priceProduct !== "") {
    console.log('Цена товара:', priceProduct);
} else {
    console.log("Вы ввели некорректные данные");
}