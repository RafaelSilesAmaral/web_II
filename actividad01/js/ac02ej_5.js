const nombres = ["ANA", "JUAN", "mario", "LUCIA"];
const apellidos = ["PEREZ", "gomez", "MARTINEZ", "lopez"];

function capitalizar(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function generarCombinaciones(nombres, apellidos) {
    let combinaciones = [];
    for (let i = 0; i < nombres.length; i++) {
        let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
        let apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
        combinaciones.push(capitalizar(nombreAleatorio) + " " + capitalizar(apellidoAleatorio));
    }
    return combinaciones;
}

const combinacionesAleatorias = generarCombinaciones(nombres, apellidos);
console.log(combinacionesAleatorias);
