
    // Optional: prevents dropdowns from being sticky after hover
    document.querySelectorAll('.dropdown').forEach(function (el) {
        el.addEventListener('mouseleave', function () {
            const menu = el.querySelector('.dropdown-menu');
            if (menu) {
                setTimeout(() => {
                    menu.classList.remove('show');
                }, 200);
            }
        });
    });

