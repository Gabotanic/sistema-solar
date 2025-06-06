document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Eliminar la clase 'active' de todos los elementos de navegación
            navItems.forEach(nav => nav.classList.remove('active'));
            // Añadir la clase 'active' al elemento de navegación clicado
            item.classList.add('active');

            // Obtener el ID de la pantalla a mostrar desde el atributo data-target
            const targetScreenId = item.dataset.target;

            // Ocultar todas las pantallas
            screens.forEach(screen => screen.classList.remove('active'));
            // Mostrar la pantalla correspondiente
            document.getElementById(targetScreenId).classList.add('active');
        });
    });

    // Opcional: Manejar el botón de "limpiar alerta"
    const clearAlertBtn = document.querySelector('.clear-alert-btn');
    if (clearAlertBtn) {
        clearAlertBtn.addEventListener('click', () => {
            const alertCard = clearAlertBtn.closest('.card-alert');
            if (alertCard) {
                alertCard.style.display = 'none'; // Ocultar la tarjeta de alerta
                // En una aplicación real, aquí también se enviaría una petición al backend
                // para marcar la alerta como vista o resuelta.
                console.log('Alerta marcada como resuelta/ocultada');
            }
        });
    }
});