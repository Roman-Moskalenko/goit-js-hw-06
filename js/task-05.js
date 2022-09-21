// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const refs = {
    nameImputEl : document.querySelector('#name-input'), 
    nameOutputEl : document.querySelector('#name-output')
}
refs.nameImputEl.addEventListener('input',  onOutputChange)

function onOutputChange (event){
//    console.log(event.currentTarget.value) 
   refs.nameOutputEl.textContent = event.currentTarget.value || `Anonymous`
}