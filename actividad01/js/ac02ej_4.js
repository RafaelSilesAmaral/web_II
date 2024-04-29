// Función principal que ejecuta las tareas requeridas
function analizarFrase() {
    let frase = prompt("Por favor, introduce una frase:");
    let conteoO = 0;
    let vocalesPresentes = new Set();
    let conteoVocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    // Recorre cada carácter de la frase
    for (let char of frase.toLowerCase()) {
        // Conteo de 'o'
        if (char == 'o') {
            conteoO++;
        }
        
        // Revisar si el carácter es una vocal
        if ("aeiou".includes(char)) {
            vocalesPresentes.add(char);
            conteoVocales[char]++;
        }
    }

    // Preparar salida para el usuario
    let vocalesUsadas = Array.from(vocalesPresentes).join(', ');
    let resultado = `La letra 'o' aparece ${conteoO} veces.\n`;
    resultado += `Vocales presentes: ${vocalesUsadas}\n`;
    
    for (let vocal of vocalesUsadas) {
        resultado += `La vocal '${vocal}' aparece ${conteoVocales[vocal]} veces.\n`;
    }

    // Mostrar resultado
    alert(resultado);
}

// Llamar a la función para ejecutar el programa
analizarFrase();
