var _a;
function onScroll() {
    var elements = document.querySelectorAll('.animate');
    elements.forEach(function (element) {
        var elementPosition = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 50) {
            element.classList.add('show');
        }
    });
}
window.addEventListener('scroll', onScroll);
window.onload = onScroll;
(_a = document.getElementById('avatarInput')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    var _a;
    var file = (_a = this.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var avatarPreview = document.getElementById('avatarPreview');
            if (avatarPreview && e.target) {
                avatarPreview.style.backgroundImage = "url(".concat(e.target.result, ")");
            }
        };
        reader.readAsDataURL(file);
    }
});
