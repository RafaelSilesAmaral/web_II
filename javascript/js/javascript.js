/*const array = [3, 1, 5, 2, 4];
array.sort(); // Orden descendente
// array ahora es [5, 4, 3, 2, 1]
console.log(array);
array.short((a,b)=>a-b);
*/
let item=[{nombre:'leche',cantidad:1,precio:7.5},{nombre:'carne',cantidad:2,precio:20},{nombre:'fideo',cantidad:1,precio:8},{nombre:'papa',cantidad:3,precio:12}];
item.sort((a,b)=>a.precio-b.precio);
//console.log(item);

/*item.sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(item);
*/
let itemordenadoporprecio=item.slice().sort((a,b)=>a.precio-b.precio);
console.log(itemordenadoporprecio);

let itemordenadopornombre=item.slice().sort((a,b)=>a.nombre.localeCompare(b.nombre));
console.log(itemordenadopornombre);

