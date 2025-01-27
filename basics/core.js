//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return n === (n ^ 0)
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let array = []
    for(let i = 2; i <= 20; i++){
        if(i % 2 == 0){
            array.push(i)
        }
    }
    return array
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for(let i = 1; i <= n; i ++){
        sum += i
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if(n == 0){
        return 0
    }
    return n + recSumTo(n-1)
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let factor = 1
    for (let i = 2; i <= n; i++){
        factor *= i;
    }
    return factor
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if(n == 0) return false;
    return (n & -n) == n
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
