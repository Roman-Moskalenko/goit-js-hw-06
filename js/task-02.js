// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]
// const elements = [];
// for (let i = 0; i < ingredients.length; i+=1) {
//   const navItemEl = document.createElement('li')
//   navItemEl.classList.add('item')
//   navItemEl.textContent = ingredients[i]
  
//   elements.push(navItemEl)
// }

// const ingredientsContainerEl = document.querySelector('#ingredients')
// ingredientsContainerEl.append(...elements);
const elements = ingredients.map(element =>{
  const navItemEl = document.createElement('li')
    navItemEl.classList.add('item')
    navItemEl.textContent = element
    return navItemEl
   
})
console.log(elements)
const ingredientsContainerEl = document.querySelector('#ingredients')
ingredientsContainerEl.append(...elements);