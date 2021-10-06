// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Auxiliado por Rodolfo Braga
describe('1 - O retorno do telefonema', () => {
  test('atende', async () => expect(await answerPhone(true)).toEqual('Oi!'));
  test('ocupado', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});

// describe('1 - O retorno do telefonema', () => {
//   test('atende', () => expect(answerPhone(1)).resolves.toEqual('Oi!'));
//   test('ocupado', () => expect(answerPhone()).rejects
//     .toEqual(new Error('Infelizmente não podemos atender...')));
// });
