function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyColor: document.querySelector('body'),
  changeButtonColor: document.querySelector('.change-color'),
  changeOutputColor: document.querySelector('.color'),
}

refs.changeButtonColor.addEventListener('click', onChangeColor);

function onChangeColor(event) {

  const color = getRandomHexColor();

  refs.bodyColor.style.backgroundColor = color;
  refs.changeOutputColor.textContent = color;
}