// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refs = {
    inputEl: document.querySelector( '#font-size-control '),
    spanEl: document.querySelector( '#text ')
}
refs.inputEl.addEventListener('input',onNewFontSize )
refs.spanEl.style.fontSize = `${refs.inputEl.value}px`
function onNewFontSize (event){
    const size = event.currentTarget.value
    refs.spanEl.style.fontSize = `${size}px`

}