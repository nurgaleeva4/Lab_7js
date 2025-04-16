// Имитация загрузки
document.addEventListener('DOMContentLoaded', function() {
    const loaderBar = document.getElementById('loader-bar');
    const page = document.getElementById('page');
    let width = 0;
    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                document.getElementById('loader').style.display = 'none';
                page.classList.remove('invisible');
            }, 300);
        } else {
            width += 2;
            loaderBar.style.width = width + '%';
        }
    }, 20);
});
