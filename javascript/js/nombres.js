const nombres = [
    "Juan",
    "María",
    "José",
    "Ana",
    "Pedro",
    "Luisa",
    "Carlos",
    "Laura",
    "Miguel",
    "Sofía",
    "Diego",
    "Elena",
    "Manuel",
    "Lucía",
    "Javier",
    "Isabel",
    "Pablo",
    "Carmen",
    "Ricardo",
    "Paula"
];

const apellidos = [
    "García",
    "Rodríguez",
    "Martínez",
    "López",
    "Sánchez",
    "Pérez",
    "González",
    "Hernández",
    "Díaz",
    "Moreno",
    "Álvarez",
    "Romero",
    "Muñoz",
    "Alonso",
    "Gutiérrez",
    "Ortega",
    "Ruiz",
    "Navarro",
    "Fernández",
    "Torres"
];
let nombresCompletos = [];
function NombreAleatorio(nombres) {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    return nombres[indiceAleatorio];
}
function ApellidosAleatorio(apellidos) {
    const Aleatorio = Math.floor(Math.random() * apellidos.length);
    return apellidos[Aleatorio];
}
function cargarnombrescompletos(nombres,apellidos)
{
    
    for (let i = 0; i < 5; i++) {
        const nombre = NombreAleatorio(nombres);
        const apellido = ApellidosAleatorio(apellidos);
        nombresCompletos.push(nombre + " " + apellido);
        //console.log(nombre + " " + apellido);
    }
    
}
function imprimir()
{
    for (var i = 0; i < nombresCompletos.length; i++) {
        console.log(nombresCompletos[i]);
    }
}

//cargarnombrescompletos(nombres,apellidos);

imprimir();