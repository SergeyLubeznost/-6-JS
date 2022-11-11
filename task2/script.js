const  consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click',()=>{
    alert('это метод, предназначенный для печати в консоль браузера.');
}
)

const  alerts = document.querySelector('#alert');
alerts.addEventListener('click',()=>{
    alert('Функция предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК».');
}
)

const  prompts = document.querySelector('#prompt');
prompts.addEventListener('click',()=>{
    prompt('Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена».');
}
)