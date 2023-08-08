'use strict';
/*Determinar si un numero es par o impar e imprimir el mensaje*/

let number1 = parseFloat(prompt('Ingrese el digito: ')); 

if (number1=== 0) {

    alert('El numero es cero')
}else if(number1%2==0) {
alert('El numero es par');
}else{
    alert('El numero es impar');
}

