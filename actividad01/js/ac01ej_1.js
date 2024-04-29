document.addEventListener('DOMContentLoaded', function() {
    // Función para detectar el navegador
    function detectarNavegador() {
        const userAgent = navigator.userAgent;

        // Orden específico para evitar la detección errónea
        if (userAgent.includes("OPR") || userAgent.includes("Opera")) return "Opera";
        if (userAgent.includes("Edg")) return "Microsoft Edge";
        if (userAgent.includes("Chrome")) return "Google Chrome";
        if (userAgent.includes("Firefox")) return "Mozilla Firefox";
        if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";

        return "desconocido";
    }

    // Mostrar mensaje de bienvenida y navegador
    document.getElementById('bienvenida').textContent = '¡Bienvenido a mi programa!';
    document.getElementById('navegador-info').textContent = 'Estás utilizando el navegador ' + detectarNavegador() + '.';
});
