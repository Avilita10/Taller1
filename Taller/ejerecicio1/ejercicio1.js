'use strict';
/**Realizar un programa que pida al usuario 2  numeros y se realicen las 4 oepraciones basicas(suma, resta, multiplicacion, division. imprimir los resultados. */

let number1 = parseFloat(prompt('Introduzaca el primer digito: '));
let number2 = parseFloat(prompt('Intoduzca el segundo digito'));

let resultadoSuma = number1 + number2;
alert('El resultado de la suma de los dos numeros es: '+resultadoSuma);

let resultadoResta = number1 - number2;
alert ('El resultado de la resta de los dos digitos es: '+ resultadoResta);

let resultadoMultiplicacion = number1 * number2; 
alert('El resultado de la multiplicacion de los dos numeros es: '+resultadoMultiplicacion);

let resultadoDivision = number1 / number2;
alert('El resultado de la division de los dos numeros es: '+ resultadoDivision);

