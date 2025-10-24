document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const emailIcon = document.getElementById('email-icon');
    const copyNotification = document.getElementById('copy-notification');

    // Toggle menú en móvil
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Funcionalidad del email: abrir cliente y copiar
    if (emailIcon) {
        emailIcon.addEventListener('click', function(e) {
            e.preventDefault();
            const email = 'juuancvillar@gmail.com';
            
            // Abrir cliente de correo
            window.location.href = 'mailto:' + email;
            
            // Copiar al portapapeles
            navigator.clipboard.writeText(email).then(() => {
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            });
        });
    }
});
