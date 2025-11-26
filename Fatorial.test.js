const {fatorial} = require('./Fatorial');

describe('Função fatorial', () => {
  test('fatorial 3 por 4', () => {
    expect(fatorial(3)).toBe(6);
  });

  test('fatorial 5 por zero', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('fatorial 2 por 6', () => {
    expect(fatorial(6)).toBe(720);
  });

  test('fatorial 3 por 7', () => {
    expect(fatorial(4)).toBe(24);
  });
});
