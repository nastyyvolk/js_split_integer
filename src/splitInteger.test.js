'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  const result = splitInteger(8, 4);

  expect(result).toEqual([ 2, 2, 2, 2 ]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  const result = splitInteger(333, 1);

  expect(result).toEqual([333]);
});

test('should sort parts ascending if they are not equal', () => {
  const result = splitInteger(66, 5);

  expect(result).toEqual([ 13, 13, 13, 13, 14 ]);
});

test('should add zeros if value < numberOfParts', () => {
  const result = splitInteger(2, 3);

  expect(result).toEqual([0, 1, 1]);
});
