function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  inputNumber: document.querySelector('input'),
  buttonCreate: document.querySelector('data-create'),
  buttonDestroy: document.querySelector('data-destroy'),
  newBoxes: document.querySelector('#boxes')
};

