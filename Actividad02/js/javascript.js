/*
Descripción:Registro de vuelo
Desarrollador:Rafael Siles Amaral
Fecha:2024-04-24
Cambios:se agrego funciones,se elimino anteriores funciones y se hizo validacion de datos
*/
//esta funcion la cree para para que los datos introducidos en el formulario se muestre en la tabla
$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Captura de los valores del formulario y lo coloca en variables
        var nombre = $('#customer-first_name').val();
        var ci = $('#customer-last_name').val();
        var email = $('#customer-email').val();
        var fechaNacimiento = $('#customer-dob').val();
        var aerolinea = $('#aerolineas').val();
        var departamentoSalida = $('#state_0').val();
        var departamentoLlegada = $('#state_1').val();
        var fechaSalida = $('#customer-startdate').val();
        var fechaRegreso = $('#customer-enddate').val();

        // para agregar los datos en una tabla
        $('#tabla-datos tbody').append(
            '<tr>' +
            '<td>' + nombre + '</td>' +
            '<td>' + ci + '</td>' +
            '<td>' + email + '</td>' +
            '<td>' + fechaNacimiento + '</td>' +
            '<td>' + aerolinea + '</td>' +
            '<td>' + departamentoSalida + '</td>' +
            '<td>' + departamentoLlegada + '</td>' +
            '<td>' + fechaSalida + '</td>' +
            '<td>' + fechaRegreso + '</td>' +
            '</tr>'
        );

        //resetear el formulario
        $('form')[0].reset();
    });
});
//funcion para eliminar el ultimo registro
function eliminarUltimoRegistro() {
    //se coloca los datos del formulario en una variable
    var tabla = document.getElementById('tabla-datos');
    //se hace referencia al ultimo elemento de la tabla    
    var ultimaFila = tabla.rows[tabla.rows.length - 1];
    //se elimina el ultimo registro
    ultimaFila.remove();
}
//validacion de los datos
function validarNombre(input) {
    //en el espacio de nombre solo se permitiran letras ya sea mayuscula o minuscula
    var regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(input.value)) {
        // Muestra un mensaje de error
        document.getElementById('nombre-error').textContent = 'el nombre solo puede tener letras';
                input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    } else {
        // Si el valor es válido, borra el mensaje de error
        document.getElementById('nombre-error').textContent = '';
    }
}
function validarCI(input) {
    // en la casilla de CI solo se permite numeros
    var regex = /^\d*$/;
    if (!regex.test(input.value)) {
        
        document.getElementById('ci-error').textContent = 'La C.I. debe contener solo números';
        
        input.value = input.value.replace(/\D/g, '');
    } else {
        
        document.getElementById('ci-error').textContent = '';
    }
}
function validarEmail(input) {
    // en la casilla de email es oblicatorio el @gmail.com
    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!regex.test(input.value)) {
        document.getElementById('email-error').textContent = 'El correo electrónico debe ser de Gmail (terminar en @gmail.com)';
    } else {
        document.getElementById('email-error').textContent = '';
    }
}
//para la introducion de fecha
$(document).ready(function() {
    $('.datepicker').datepicker({
        //formato de la fecha
        format: 'yyyy-mm-dd', 
        autoclose: true, 
        todayHighlight: true 
    });
});

$(document).ready(function () {
    $('.datepicker').datepicker();
});