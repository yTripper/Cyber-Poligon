var _a, _b, _c, _d;
var dbName = "UserAuthDB";
var dbVersion = 1;
var db = null;
// Открытие или создание базы данных
var request = indexedDB.open(dbName, dbVersion);
request.onerror = function (event) {
    console.log("Ошибка при работе с базой данных", event);
};
request.onsuccess = function (event) {
    db = event.target.result;
    console.log("База данных успешно открыта");
};
request.onupgradeneeded = function (event) {
    db = event.target.result;
    if (db && !db.objectStoreNames.contains("users")) {
        var userStore = db.createObjectStore("users", { keyPath: "email" });
        userStore.createIndex("email", "email", { unique: true });
    }
};
(_a = document.querySelector("#registrationModal form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }
    if (db) {
        var transaction = db.transaction(["users"], "readwrite");
        var userStore = transaction.objectStore("users");
        var user = { username: username, email: email, password: password };
        var request_1 = userStore.add(user);
        request_1.onsuccess = function () {
            alert("Регистрация успешна!");
        };
        request_1.onerror = function () {
            alert("Пользователь с таким email уже зарегистрирован.");
        };
    }
});
(_b = document.querySelector("#loginModal form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (db) {
        var transaction = db.transaction(["users"], "readonly");
        var userStore = transaction.objectStore("users");
        var request_2 = userStore.get(email);
        request_2.onsuccess = function (event) {
            var user = event.target.result;
            if (user && user.password === password) {
                alert("Вход успешен!");
                // Переход на страницу личного кабинета
                setTimeout(function () {
                    closeModal('loginModal'); // Закрытие модального окна
                    window.location.href = 'personal_account.html';
                }, 1000);
            }
            else {
                alert("Неверный email или пароль.");
            }
        };
        request_2.onerror = function () {
            alert("Ошибка при входе.");
        };
    }
});
function closeModal(modalId) {
    var modalElement = document.getElementById(modalId);
    if (modalElement) {
        var modal = bootstrap.Modal.getInstance(modalElement);
        modal === null || modal === void 0 ? void 0 : modal.hide();
    }
}
(_c = document.querySelector("#resetPasswordModal form")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("resetEmail").value;
    if (db) {
        var transaction = db.transaction(["users"], "readonly");
        var userStore = transaction.objectStore("users");
        var request_3 = userStore.get(email);
        request_3.onsuccess = function (event) {
            var user = event.target.result;
            if (user) {
                // Здесь можно отправить email с инструкциями или показать пароль
                alert("\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C: ".concat(user.password));
            }
            else {
                alert("Пользователь с таким email не найден.");
            }
        };
        request_3.onerror = function () {
            alert("Ошибка при восстановлении пароля.");
        };
    }
});
(_d = document.getElementById("showPassword")) === null || _d === void 0 ? void 0 : _d.addEventListener("change", function (event) {
    var passwordInput = document.getElementById("password");
    var target = event.target;
    if (target.checked) {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
});
