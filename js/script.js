'use strict'

const number = +prompt('Введите число');

if(number < 1 || number == null){
    console.log(NaN);
}else{
    for (let i = 2; i <= number; i++){
        if( number % i === 0 ){
            console.log(i);
            break;
        }
    }
}

