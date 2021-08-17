const numberOfColors = 4;
let numberOfLines = 5;
let numberOfPixels = numberOfLines * numberOfLines;
const arrayOfColors = document.querySelectorAll('.color');
const arrayOfTextColors = ['black', 'red', 'blue', 'yellow'];
let pixel;
const pixelBoard = document.querySelector('#pixel-board');
let selectColor;
const clearBoard = document.querySelector('#clear-board');
const resizeButton = document.querySelector('#generate-board');
const title = document.querySelector('#title');

function fillColorPallete() {
  for (let index = 0; index < numberOfColors; index += 1) {
    for (let i = 0; i <= numberOfColors; i += 1) {
      if (index === i) {
        arrayOfColors[index].classList.add(arrayOfTextColors[i]);
      }
    }
  }
}

function blackFirstColor() {
  arrayOfColors[0].classList.add('selected');
}

function createPixels() {
  for (let index = 0; index < numberOfPixels; index += 1) {
    pixel = document.createElement('div');
    pixel.className = 'pixel white';
    pixel.id = index;
    pixelBoard.appendChild(pixel);
  }
}

function paintTitle() {
  selectColor = document.querySelector('.selected');
  title.style.color = selectColor.classList.item(1);
}

function selectedColor(event) {
  selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  event.target.classList.add('selected');
  paintTitle();
}

arrayOfColors[0].addEventListener('click', selectedColor);
arrayOfColors[1].addEventListener('click', selectedColor);
arrayOfColors[2].addEventListener('click', selectedColor);
arrayOfColors[3].addEventListener('click', selectedColor);

function paintPixel(event) {
  selectColor = document.querySelector('.selected');
  event.target.classList.remove(event.target.classList.item(2));
  event.target.classList.add(selectColor.classList.item(1));
}

pixelBoard.addEventListener('click', paintPixel);

function boardCleaner() {
  for (let index = 0; index < numberOfPixels; index += 1) {
    pixelBoard.childNodes[index].classList.remove(
      pixelBoard.childNodes[index].classList.item(2)
    );
  }
}

clearBoard.addEventListener('click', boardCleaner);

function deletePixels() {
  for (let index = 0; index < numberOfPixels; index += 1) {
    const removePixel = document.querySelector('.pixel');
    pixelBoard.removeChild(removePixel);
  }
}

function deleteCreatePixels() {
  resizeInput = document.getElementById('board-size').value;
  deletePixels();
  numberOfLines = resizeInput;
  numberOfPixels = numberOfLines * numberOfLines;
  pixelBoard.style.width = 40 * numberOfLines + 2 * numberOfLines + 'px';
  createPixels();
}

function resizeBoard() {
  let resizeInput = document.getElementById('board-size').value;
  if (resizeInput === '') {
    alert('Board inválido!');
  } else if (resizeInput < 5) {
    resizeInput = 5;
    deletePixels();
    numberOfLines = resizeInput;
    numberOfPixels = numberOfLines * numberOfLines;
    pixelBoard.style.width = 40 * numberOfLines + 2 * numberOfLines + 'px';
    createPixels();
  } else if (resizeInput > 50) {
    resizeInput = 50;
    deletePixels();
    numberOfLines = resizeInput;
    numberOfPixels = numberOfLines * numberOfLines;
    pixelBoard.style.width = 40 * numberOfLines + 2 * numberOfLines + 'px';
    createPixels();
  } else {
    deleteCreatePixels();
  }
}

resizeButton.addEventListener('click', resizeBoard);

fillColorPallete();
createPixels();
blackFirstColor();
