let input = document.querySelector ('input');
let duplicateField = document.querySelector ('#duplicateField');

input.addEventListener('keydown', (event) =>{
    duplicateField.textContent = input.value;
});

let but = document.querySelector('button');

but.addEventListener('mousedown', event =>{
    if (event.which === 1){
        console.log(input.value);
        input.value="";
        duplicateField.textContent = input.value;
    }
    event.preventDefault();
})

 