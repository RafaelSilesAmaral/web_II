//notas random y mayor, menor y promedio de la nota
let array=[{nombre:'Ana',nota:0},{nombre:'Sofía',nota:0},{nombre:'Carlos',nota:0},{nombre:'Antonio',nota:0},{nombre:'Paula',nota:0},{nombre:'Marta',nota:0},{nombre:'Miguel',nota:0},{nombre:'Javier',nota:0},{nombre:'Antonio',nota:0},{nombre:'Andrea',nota:0}];
//funcion para generar un numero random
/*function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
*/
//generar un número aleatorio entre 1 y 100
//var numeroAleatorio = generarNumeroAleatorio(2, 10);

/*//bucle para rellenar la arrays (solo en notas) con numeros random
for (var i = 0; i < array.length; i++) {
    if (array[i].nota == 0) {
        array[i].nota = generarNumeroAleatorio(2, 10); // Puedes ajustar el rango de las notas según tus necesidades
    }
}
*/
/*//sacar mayor y menor de las notas
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
}*/
/*//para hallar el promedio
let sumarNotas = 0;
for (let i = 0; i < array.length; i++) {
    sumarNotas += array[i].nota;
}
let promedio = sumarNotas / array.length;
*/
/*//mostrar en cosola
console.log(array);
console.log("la nota mayor es: "+mayorNota);
console.log("la nota menor es: "+menorNota);
console.log("el promedio de la nota es: "+promedio);
*/
/*categorizar
for (let i = 0; i < array.length; i++) {
    let Nota=array[i].nota;
    let categoria;   
    switch (Nota)
    {
        case 2: case 3 : case 4:
            categoria="insuficiente";
        break;
        default:
            break;
    }
    console.log(array[i].nombre +" "+categoria);
}
*/

//notas con funicones
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cargarnotas()
{
    for (var i = 0; i < array.length; i++) 
    {
        if (array[i].nota == 0) {
            array[i].nota = generarNumeroAleatorio(2, 10); // Puedes ajustar el rango de las notas según tus necesidades
        }
    }
}
function imprimirnota()
{
    for (let i = 0; i < array.length; i++){
        console.log("nombre: "+array[i].nombre+"| notas: "+array[i].nota+" |"+categorizar());
    }        
}
function categorizar ()
{
    let categoria;   
    for (let i = 0; i < array.length; i++) {
        array[i].nota;
        switch (i)
        {
            case 2: case 3 : case 4:
                categoria="insuficiente";
            break;
            case 5: case 6 : case 6:
                categoria="suficiente";
            break;
            case 7: case 8 :
                categoria="bien";
            break;
            case 9:
                categoria="notable";
            break;
            case 10:
                categoria="sobresaliente";
            break;
            default:
                console.log("nota fuera del sistema")
                break;
            
        }
    
        
    }
    return categoria;
}
cargarnotas();
//console.log(array);
imprimirnota();
