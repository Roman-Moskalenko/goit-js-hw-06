// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение 
// на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
 
 const refs = {
    decrementBtn: document.querySelector('[data-action = "decrement"] '),
    valueEl: document.querySelector('#value'),
    incrementBtn: document.querySelector(`[data-action ='increment']`)
 }
 let counterValue = Number.parseInt(refs.valueEl.textContent) || 0;
 function changeValue(newValueEl ){
    refs.valueEl.textContent = newValueEl;
 }
refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    changeValue(counterValue)
} )
refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    changeValue(counterValue)
} )