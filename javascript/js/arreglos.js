/*
Descripción:Arreglos
Desarrollador:Rafael Siles Amaral
Fecha:2024-04-16
Cambios:Ninguno
*/
/*//arreglo
//compras a un supermercardo
let carrito=["leche",1,"carne",2,"papa",3,"fideos",4];
console.log("Item:"+carrito[0]+" y Cantidad:"+carrito[1]);

console.log("Item:"+carrito[2]);
console.log("Item:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Item:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Item:"+carrito[7]);

console.log("Impresión Completa");
console.log(carrito);

carrito.push("chocolate",3);

console.log(carrito);
*/
/*//areglo ordenado
//compras de la semana
let item=[{nombre:'leche',cantidad:1},{nombre:'carne',cantidad:2},{nombre:'fideo',cantidad:1},{nombre:'papa',cantidad:3}];
console.log("Item: "+item[0].nombre);
console.log("Cantidad: "+item[0].cantidad);
console.log("Item: "+item[1].nombre);
console.log("Cantidad: "+item[1].cantidad);
console.log("Item: "+item[2].nombre);
console.log("Cantidad: "+item[2].cantidad);
console.log("Item: "+item[3].nombre);
console.log("Cantidad: "+item[3].cantidad);
console.log(item);
item.push({nombre:'chocolate',cantidad:2})
console.log("Item: "+item[4].nombre);
console.log("Cantidad: "+item[4].cantidad);
console.log(item);
*/
let item=[{nombre:'leche',cantidad:1,precio:7.5},{nombre:'carne',cantidad:2,precio:20},{nombre:'fideo',cantidad:1,precio:8},{nombre:'papa',cantidad:3,precio:12}];
console.log("Item: "+item[0].nombre+", Cantidad: "+item[0].cantidad+", Precio por unidad: "+item[0].precio);
console.log("Total: "+item[0].cantidad*item[0].precio)

console.log("Item: "+item[1].nombre+", Cantidad: "+item[1].cantidad+", Precio por kilo: "+item[1].precio);
console.log("Total: "+item[1].cantidad*item[1].precio)

console.log("Item: "+item[2].nombre+", Cantidad: "+item[2].cantidad+", Precio por unidad: "+item[2].precio);
console.log("Total: "+item[2].cantidad*item[2].precio)

console.log("Item: "+item[3].nombre+", Cantidad: "+item[3].cantidad+", Precio por kilo: "+item[3].precio);
console.log("Total: "+item[3].cantidad*item[3].precio)
console.log(item);

item.push({nombre:'chocolate',cantidad:2,precio:15})
item.push({nombre:'pepsi',cantidad:1,precio:10})
console.log(item);