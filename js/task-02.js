const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector(`#ingredients`);

const makeIngredientsOptions = option => {
  return option.map(option => {
    const itemEl = document.createElement(`li`);
    itemEl.textContent = option;
    itemEl.classList.add(`.item`);

    return itemEl;
  });
};

const elements = makeIngredientsOptions(ingredients);
ingredientsEl.append(...elements);
