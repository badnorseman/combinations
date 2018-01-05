const combinations = require("./combinations");

test("calculates combinations of set [1, 2, 3]", () => {
  const set = [1, 2, 3];
  const expected = [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
  expect(combinations.combinations(set)).toEqual(expected);
});

test("calculates combinations with 3 elements of set [1, 2, 3]", () => {
  const set = [1, 2, 3];
  const expected = [[1, 2, 3]];
  expect(combinations.k_combinations(set, 3)).toEqual(expected);
});
