//создать массив на английском языке
const keyboardLayoutEN = [
    'Tab', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'CapsLk', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']',
    'Shift', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\\', 
    'Ctrl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','Space', 'Backspace', 
    'Alt'
  ];

document.body.innerHTML = '<form><input type="text" class="inputText"></form>'
document.body.insertAdjacentHTML('beforeend', '<div class="keys"></div>')

// создаем клавиши в html
let createKeyboard = () => {
    let spaceForKeyboard = document.querySelector('.keys');
    let res = '';
    keyboardLayoutEN.forEach((el) => {
        res += `<div class="oneKey" id="${el}">${el}</div>`;
        spaceForKeyboard.innerHTML = res;
    })
}
// запускам функцию
createKeyboard()
// отслеживаем инпут и прописываем функцию передающую при клике по кнопке значение id  в поле ввода текста
const inputText = document.querySelector('input')
let keysArray = document.querySelectorAll('.oneKey')
keysArray.forEach((el) => {
    
    el.addEventListener('click', (ev) => {
        console.log(el.id)
        if (ev.target.id.length === 1){
            inputText.value += el.id
        }
    })
})
// реализуем Backspace
const backspace = document.getElementById('Backspace')
backspace.addEventListener('click', ()=> {
    let text = inputText.value
    inputText.value = text.slice(0, -1)
})
//добавление функционала "space"
const space = document.getElementById('Space')
space.addEventListener('click', ()=> {
    let text = inputText.value
    inputText.value = text + ' '
})