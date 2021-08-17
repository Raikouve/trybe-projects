// Desafio 10
function techList(techs, name) {
  let objects = {};
  let arrayOfObjects = [];
  techs = techs.sort();

  if (techs.length != 0) {
  for (let index = 0; index < techs.length; index += 1) {
   objects[index] = {
      tech: techs[index],
      name: name
    };
    arrayOfObjects.push(objects[index]);
  };
} else {
  arrayOfObjects = 'Vazio!';
}
    return arrayOfObjects;
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = [];
  let count = 1;
  let repLetter = [];

  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (index === 0) {
        phoneNumber.push('(', array[index]);
      } else if ( index === 1) {
        phoneNumber.push(array[index], ')', ' ');
      } else if ( index === 6) {
        phoneNumber.push(array[index], '-');
      } else {
        phoneNumber.push(array[index]);
      }
    }
  }
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    if (count >= 3) {
      break;
    } else if (array[i] === array[i - 1]) {
      repLetter = array[i];
      count += 1;
    } else {
      repLetter = [];
      count = 1;
    }
  }
  if (count >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
  phoneNumber = phoneNumber.join('');
  return phoneNumber.toString();
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (((lineA + lineB > lineC) && lineC > Math.abs(lineA - lineB)) || ((lineB + lineC > lineA) && lineA > Math.abs(lineB - lineC)) || ((lineA + lineC > lineB) && lineB > Math.abs(lineA - lineC)));
}

// Desafio 13
function hydrate(string) {
  let count = 0;
  
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] - string[index] == 0) {
      count += 1;
    }
  }
  return count + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
