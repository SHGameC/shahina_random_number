const headerEl = document.getElementById("header");
const inputEl = document.getElementById("user-input");
const actionBtn = document.getElementById("action-btn");
const range = 20;
var randomNumber;
var counter = 0;

console.log("It is working!");
inputEl.style.cssText = `
    border: 0;
    border-radius: 20px;
    background-color: aliceblue;
    color: blueviolet;
    outline: none;
    text-align: center;
`;

actionBtn.addEventListener('click', () => {
    if (actionBtn.textContent == "Начать") {
        randomNumber = Math.floor(Math.random() * range);
        counter = 0;
        actionBtn.textContent = "Попытаться";
        headerEl.textContent = "Выберите число от 1 до 20";
    } else if (actionBtn.textContent == "Попытаться") {
        var guess = parseInt(inputEl.value, 10);
        counter++;
        if (guess == randomNumber) {
            headerEl.textContent = `Правильно! Ваш результат: ${counter} !!!`
            actionBtn.textContent = "Начать";
        } else if (guess > randomNumber) {
            headerEl.textContent = "Меньше"
        } else if (guess < randomNumber) {
            headerEl.textContent = "Больше"
        }
    }
});