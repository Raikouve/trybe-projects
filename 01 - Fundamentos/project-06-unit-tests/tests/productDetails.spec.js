const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const productDetailsCopy = productDetails('Alcool gel', 'Máscara');

    /* Consultado em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray */
    assert.strictEqual(Array.isArray(productDetailsCopy), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    /* Consultado em: https://stackoverflow.com/questions/16976904/javascript-counting-number-of-objects-in-object/16976927 */
    assert.deepStrictEqual(Object.keys(productDetailsCopy).length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (Object.keys(productDetailsCopy)), 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(productDetailsCopy[0] !== productDetailsCopy[1], true);

    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetailsCopy[0].details.productId.endsWith('123'), true);
    assert.deepStrictEqual(productDetailsCopy[1].details.productId.endsWith('123'), true);
  });
});
