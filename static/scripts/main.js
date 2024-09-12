
function onScroll() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 50) {
        element.classList.add('show');
    }
    });
}

window.addEventListener('scroll', onScroll);
window.onload = onScroll;
