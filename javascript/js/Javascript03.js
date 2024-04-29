/*Descripción:Solicitar un color y imprimirlo en consola y suma de dos numeros
Desarrollador:Rafael Siles Amaral
Fecha:2024-04-15
Cambios:Ninguno
*/
var color = prompt("Introduce un color:");
if (color !== null && color !== "") {
  console.log("El color es: " + color);
} else {
  console.log("No se ingresó ninguna variable.");
}


var num1 = prompt("Introduce el primer número:");
var num2 = prompt("Introduce el segundo número:");


num1 = parseFloat(num1);
num2 = parseFloat(num2);

var suma = num1 + num2;

console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
