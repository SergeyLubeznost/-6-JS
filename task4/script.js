const  testTextField5 = document.querySelector('a');
testTextField5 = addEventListener('click', 
  ()=>{
    let userText = prompt('Введите текст');
    testTextField5.textContent= userText;
    event.preventDefault();
})