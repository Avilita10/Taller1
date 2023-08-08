'use strict';

let number1 = parseFloat(prompt('Ingrese el primer digito: '));

let number2 = parseFloat(prompt('Ingrese el segundo digito: '));

let number3 = parseFloat(prompt('Ingrese el tercer digito: '));

if(number1 === number2 === number3){
    alert('Todos los numeros son iguales');
}else if(number1 > number2 > number3){
    alert('El numero mayor es: '+number1);
}else if(number1 < number2 > number3){
    alert('El numero mayor es: '+number2);
}else if(number1 === number2 === number3){
    alert('Todos los numeros son iguales');
}else if(number1 < number2 < number3){
    alert('El numero mayor es: '+number3);
}

