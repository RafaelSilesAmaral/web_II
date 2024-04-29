document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir que el formulario se envíe de manera predeterminada

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validPassword = "D153n0W3b2";
    const validUsernames = ["juan", "pedro", "maria", "raul"];

    if (validUsernames.includes(username.toLowerCase()) && password === validPassword) {
        alert('Bienvenido/a, ' + username + '!');
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
