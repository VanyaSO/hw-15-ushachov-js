'use strict'

const number = +prompt('Введите число');

for (let i = 2; i < number; i++){
    if(number % i === 0){
        console.log(false)
        break;
    }else{
        console.log(true)
    }
}