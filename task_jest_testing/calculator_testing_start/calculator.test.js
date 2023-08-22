const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 200;
    actual = sum(100, 100);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -15;
    actual = sum(-10, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10, 0);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 150;
    actual = subtract(250, 100);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 20;
    actual = multiply(5, 4);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 10000;
    actual = multiply(100, 100);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(10, 5);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 4;
    actual = divide(200, 50);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {

  test('returns the correct modulus of two small positive numbers', () => {
    expected = 2;
    actual = modulus(10, 4);
    expect(actual).toBe(expected);
  });

  test('returns the correct modulus of two large positive numbers', () => { 
    expected = 50;
    actual = modulus(200, 150);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('returns the correct response of a small even number', () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);
  });

  test('returns the correct response of a large even number', () => { 
    expected = true;
    actual = even(200);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {

  test('returns the correct response of a small odd number', () => {
    expected = true;
    actual = odd(11);
    expect(actual).toBe(expected);
  });

  test('returns the correct response of a large odd number', () => { 
    expected = true;
    actual = odd(201);
    expect(actual).toBe(expected);
  });
});
