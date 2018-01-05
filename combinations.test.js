const combinations = require("./combinations");

// combinations with any elements

test("checks for empty set", () => {
  const set = [];
  const expected = [];
  expect(combinations.combinations(set)).toEqual(expected);
});

test("calculates combinations of set [1, 2, 3]", () => {
  const set = [1, 2, 3];
  const expected = [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
  expect(combinations.combinations(set)).toEqual(expected);
});

// combinations with n elements

test("checks for zero elements", () => {
  const set = [1, 2, 3];
  const expected = [];
  expect(combinations.k_combinations(set, 0)).toEqual(expected);
});

test("calculates combinations with 3 elements of set [1, 2, 3]", () => {
  const set = [1, 2, 3];
  const expected = [[1, 2, 3]];
  expect(combinations.k_combinations(set, 3)).toEqual(expected);
});
