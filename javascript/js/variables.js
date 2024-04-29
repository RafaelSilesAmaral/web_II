/*
Descripción:Ejemplos de variables y Constantes|conversiones implicitas y exolicitas
Desarrollador:Rafael Siles Amaral
Fecha:2024-04-16
Cambios:Ninguno
*/
/*const INTERVALO=10;
console.log("Intervalo sera de "+INTERVALO+" minutos con una constantes");
//INTERVALO=15; no se permite por ser constante
var intervalo=20;
console.log("Intervalo sera de "+intervalo+" minutos con una variable");
intervalo=intervalo+20;
console.log("Intervalo sera de "+intervalo+" minutos con una variable modificada");
*/
/*let varb=true; //booleano
let varn=3.141592; //Numerico
let vars="texto string"; //cadena
let var1; //indefinido
console.log("para la variable varb "+varb+" con el tipo de datos= "+typeof varb);
console.log("para la variable varn "+varn+" con el tipo de datos= "+typeof varn);
console.log("para la variable vars "+vars+" con el tipo de datos= "+typeof vars);
console.log("para la variable var1 "+var1+" con el tipo de datos= "+typeof var1);
var1=vars;
console.log("para la variable var1 modificada "+var1+" con el tipo de datos= "+typeof var1);
*/

//realizar conversiones implicitas

let var1=15.25;
let var2=0;
let var3=true;
let var4="100"
let varx;
/*
varx=var1;
varx=var2;
console.log("para la variable varx es "+varx+" con el tipo de datos= "+typeof varx);
varx=var3;
console.log("para la variable varx es "+varx+" con el tipo de datos= "+typeof varx);
varx=var4;
console.log("para la variable varx es "+varx+" con el tipo de datos= "+typeof varx);
*/
//realizar conversiones explicitas
varx=var1+var2;
console.log("para la variable varx es "+varx+" con el tipo de datos= "+typeof varx);

varx=var2+Number(var3);
console.log("para la variable varx es "+varx+" con el tipo de datos= "+typeof varx);

varx=var1+Number(var4);
console.log("para la variable varx es "+varx+" con el tipo de datos= "+typeof varx);
