$(document).ready(function(){
    var estudiantes = []; 
    
    $("#miFormulario").submit(function(event){
        event.preventDefault();
    
        var ci = $("#ci").val();
        var nombre = $("#nombre").val();
        var fecha = $("#fecha").val();
        var direccion = $("#direccion").val();
    
        var nuevoRegistro = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };
        
        estudiantes.push(nuevoRegistro);
        
        console.log("Estudiantes registrados:", estudiantes);
    
        // Limpiar la tabla antes de agregar los nuevos datos
        $("#tablaEstudiantes").empty();
    
        // Agregar cada estudiante a la tabla
        estudiantes.forEach(function(estudiante) {
            $("#tablaEstudiantes").append(
                `<tr>
                    <td>${estudiante.ci}</td>
                    <td>${estudiante.nombre}</td>
                    <td>${estudiante.fecha}</td>
                    <td>${estudiante.direccion}</td>
                </tr>`
            );
        });
    
        // Limpiar el formulario
        $("#miFormulario")[0].reset();
    });
    
});
