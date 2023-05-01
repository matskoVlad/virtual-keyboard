//создать массив на английском языке
const keyboardLayoutEN = [
    'Tab', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'CapsLock', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']',
    'Shift', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\\', 
    'Ctrl', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','Space', 'Backspace', 
    'Alt'
  ];
const keyboardLayoutRU = [
    'Tab', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'CapsLock', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', '[', ']',
    'Shift', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', ';', '\'', '\\', 
    'Ctrl', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', ',', '.', '/','Space', 'Backspace', 
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
// реализуем 'Backspace'
const backspace = document.getElementById('Backspace')
backspace.addEventListener('click', (event)=> {
    console.log(event.id)
    let text = inputText.value
    inputText.value = text.slice(0, -1)
})
//добавление функционала "space"
const space = document.getElementById('Space')
space.addEventListener('click', ()=> {
    let text = inputText.value
    inputText.value = text + ' '
})
//добавление функционала "tab"
const tab = document.getElementById('Tab')
tab.addEventListener('click', ()=> {
    let text = inputText.value
    inputText.value = text + '    '
})

// Отслеживаем событие нажатия на кнопку
document.addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key.length === 1){
        inputText.value += event.key.toUpperCase()
        let pressedKey = document.getElementById(event.key.toUpperCase())
        pressedKey.classList.add('keyPress')
    } else if (event.key == 'Backspace') {
        let text = inputText.value
        inputText.value = text.slice(0, -1)
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.add('keyPress')
    } else if (event.code == 'Space') {
        console.log(event.code)
        let text = inputText.value
        inputText.value = text + ' '
        let pressedKey = document.getElementById('Space')
        pressedKey.classList.add('keyPress')
    } else if (event.key == 'Tab'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.add('keyPress')
    } else if (event.key == 'Shift'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.add('keyPress')
    } else if (event.key == 'Control'){
        let pressedKey = document.getElementById('Ctrl')
        pressedKey.classList.add('keyPress')
    } else if (event.key == 'Alt'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.add('keyPress')
    } else if (event.key == 'CapsLock'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.toggle('keyPress')
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key.length === 1){
        let pressedKey = document.getElementById(event.key.toUpperCase())
        pressedKey.classList.remove('keyPress')
    } else if (event.key == 'Backspace') {
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.remove('keyPress')
    } else if (event.code == 'Space') {
        console.log(event.code)
        let pressedKey = document.getElementById('Space')
        pressedKey.classList.remove('keyPress')
    } else if (event.key == 'Tab'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.remove('keyPress')
    } else if (event.key == 'Shift'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.remove('keyPress')
    } else if (event.key == 'Control'){
        let pressedKey = document.getElementById('Ctrl')
        pressedKey.classList.remove('keyPress')
    } else if (event.key == 'Alt'){
        let pressedKey = document.getElementById(event.key)
        pressedKey.classList.remove('keyPress')
    }

})