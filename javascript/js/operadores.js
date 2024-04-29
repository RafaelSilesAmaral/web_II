/*prueba de operadores
let a =10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b: "+a);
a=11
a+=b;
console.log("a+=b: "+a);
a++;
console.log("a++: "+a);
a--;
console.log("a--: "+a);
if (a%2==0)
{
    console.log("a es Par");
}
else
{
    console.log("a es impar");
}
console.log(a+b+Number("5"));
*/
//notas random y mayor, menor y promedio de la nota
let array=[{nombre:'Ana',nota:0},{nombre:'Sofía',nota:0},{nombre:'Carlos',nota:0},{nombre:'Antonio',nota:0},{nombre:'Paula',nota:0},{nombre:'Marta',nota:0},{nombre:'Miguel',nota:0},{nombre:'Javier',nota:0},{nombre:'Antonio',nota:0},{nombre:'Andrea',nota:0}];
//funcion para generar un numero random
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
//generar un número aleatorio entre 1 y 100
var numeroAleatorio = generarNumeroAleatorio(1, 100);

//bucle para rellenar la arrays (solo en notas) con numeros random
for (var i = 0; i < array.length; i++) {
    if (array[i].nota == 0) {
        array[i].nota = generarNumeroAleatorio(1, 100); // Puedes ajustar el rango de las notas según tus necesidades
    }
}

//sacar mayor y menor de las notas
//se declara variables para asignar la nota mayor y menor nota
let mayorNota = array[0].nota;
let menorNota = array[0].nota;
//bucle para hacer recorrido en el array
for (let i = 1; i < array.length; i++) 
{
    //hacer conparacion de las notas y asignarla a la variable que se creo anteriormente
    if (array[i].nota > mayorNota)
    {
        mayorNota = array[i].nota;        
    }
    if (array[i].nota < menorNota) 
    {
        menorNota = array[i].nota;
    }
}
//para hallar el promedio
let sumaNotas = 0;
for (let i = 0; i < array.length; i++) {
    sumaNotas += array[i].nota;
}
let promedio = sumaNotas / array.length;

//mostrar en cosola
console.log(array);
console.log(mayorNota);
console.log(menorNota);
console.log(promedio);