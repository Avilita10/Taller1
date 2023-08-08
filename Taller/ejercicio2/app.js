'use strict';

let number1 = parseFloat(prompt('Ingrese el digito: '))

if(number1 === 0){
    alert('El digito es 0');
}else if(number1>0){
    alert('El digito es positivo');
}else{
    alert('El digito es negativo');
}