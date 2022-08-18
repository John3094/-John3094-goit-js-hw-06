const categoriesEl = document.querySelectorAll(`.item`);
const numberCategoriesEl = categoriesEl.length;
console.log(`Number of categories: ${numberCategoriesEl}`);

const nameCategoriesEl = categoriesEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
