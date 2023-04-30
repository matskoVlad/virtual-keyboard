//создать массив на английском языке
const keyboardLayoutEN = [
    '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']',
    'CapsLk', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'',
    '\\', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/',
    'Space', 'Backspace', 'Alt'
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

createKeyboard()