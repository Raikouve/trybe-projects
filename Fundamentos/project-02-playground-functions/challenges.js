// Desafio 1
function compareTrue(param1, param2) {
  return (param1 === true && param2 === true);
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // Referencia: https://www.w3schools.com/jsref/jsref_split.asp
}

// Desafio 4
function concatName(arrayOfStrings) {
  let reverseArray = [arrayOfStrings[arrayOfStrings.length - 1], arrayOfStrings[0]];
  let arrayToString = reverseArray.join(', '); // Rederência: https://stackoverflow.com/questions/13939573/how-to-add-spaces-between-array-items-javascript/13939632
  return arrayToString.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(array) {
  let highestNum = array[0];
  let sum = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNum) {
      highestNum = array[index];
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highestNum) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Referência: https://www.w3schools.com/jsref/jsref_abs.asp
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      fizzBuzz.push('fizzBuzz');
    } else if ((array[index] % 3 === 0)) {
      fizzBuzz.push('fizz');
    } else if ((array[index] % 5 === 0)) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9

// Referência: https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call

function encode(string) {
  let codeString = string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return codeString;
}

function decode(stringCode) {
  let decodeString = stringCode.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return decodeString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
