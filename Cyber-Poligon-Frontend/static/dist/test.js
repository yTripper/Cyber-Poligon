var correctAnswers = 0; // Переменная для подсчета правильных ответов
var totalQuestions = 6;
function checkAnswer(button, isCorrect, explanation) {
    var _a, _b;
    var explanationText = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.explanation');
    if (explanationText) {
        explanationText.innerText = explanation;
        explanationText.style.display = 'block';
        if (isCorrect) {
            button.classList.remove('btn-primary');
            button.classList.add('btn-success');
            explanationText.style.color = 'green'; // Зелёный для правильного ответа
            correctAnswers++; // Увеличиваем счётчик правильных ответов
        }
        else {
            button.classList.remove('btn-primary');
            button.classList.add('btn-danger');
            explanationText.style.color = 'red'; // Красный для неправильного ответа
        }
        // Блокируем все кнопки после выбора
        var buttons = (_b = button.parentElement) === null || _b === void 0 ? void 0 : _b.querySelectorAll('button');
        buttons.forEach(function (btn) { return btn.disabled = true; });
        // Обновляем результат на экране
        updateResult();
    }
}
function updateResult() {
    var resultText = document.getElementById('result');
    if (resultText) {
        resultText.innerText = "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B: ".concat(correctAnswers, " \u0438\u0437 ").concat(totalQuestions);
    }
}
