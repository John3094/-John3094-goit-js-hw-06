const inputFont = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.classList.add('input-stylet');

inputFont.addEventListener('input', (element) => {
    const valueInput = element.currentTarget.value;
    spanText.style.fontSize = `${valueInput}px`;
});

