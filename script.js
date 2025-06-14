// Función para manejar la navegación entre páginas
function handleNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            // Remover clase active de todos los botones
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            item.classList.add('active');
            
            // Redirigir a la página correspondiente
            window.location.href = `${target}.html`;
        });
    });
}

// Función para verificar la página actual y marcar el botón correspondiente
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const target = item.getAttribute('data-target');
        if (target === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Frases para el Dato del día
const datosDelDia = [
    "Limpiar los paneles solares regularmente puede aumentar la eficiencia hasta un 20%.",
    "La lluvia ayuda a limpiar los paneles, pero no reemplaza una limpieza profunda.",
    "El polvo y la suciedad pueden reducir la producción de energía significativamente.",
    "Revisar las conexiones eléctricas previene pérdidas de energía y posibles fallas.",
    "La energía solar es una de las fuentes más limpias y renovables del planeta.",
    "Un sistema bien mantenido puede durar más de 25 años.",
    "Incluso en días nublados, los paneles solares siguen generando energía.",
    "El monitoreo regular permite detectar problemas antes de que afecten la producción.",
    "La orientación y el ángulo de los paneles influyen en la cantidad de energía generada.",
    "La energía solar ayuda a reducir la huella de carbono y proteger el medio ambiente."
];

function mostrarDatoDelDia() {
    const datoEl = document.getElementById('dato-dia-text');
    if (!datoEl) return;
    // Elegir un dato aleatorio
    const randomIndex = Math.floor(Math.random() * datosDelDia.length);
    datoEl.textContent = datosDelDia[randomIndex];
}

// Cambiar el dato cada 5 minutos
function iniciarDatoDelDiaRotacion() {
    mostrarDatoDelDia();
    setInterval(mostrarDatoDelDia, 300000); // 5 minutos
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    setActiveNavItem();
    iniciarDatoDelDiaRotacion();

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