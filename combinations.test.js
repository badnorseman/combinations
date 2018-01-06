const combinations = require("./combinations");

test("calculates none combinations for empty set", () => {
  const set = [];
  expect(combinations.combinations(set)).toEqual([]);
});

test("calculates exact combinations of set [1, 2, 3]", () => {
  const set = [1, 2, 3];
  const results = [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
  expect(combinations.combinations(set)).toEqual(results);
});

describe("calculating k-combinations for set [1, 2, 3]", () => {
  test("has none combinations", () => {
    const set = [1, 2, 3];
    expect(combinations.k_combinations(set, 0)).toEqual([]);
  });

  test("has exact combinations with 3 elements", () => {
    const set = [1, 2, 3];
    expect(combinations.k_combinations(set, 3)).toEqual([[1, 2, 3]]);
  });
});

describe("calculating k-combinations for set [a, b, c, d, e, f, g, h, i, j, k, l, m, n]", () => {
  test("has 14 combinations with 1 element", () => {
    const set = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ];
    expect(combinations.k_combinations(set, 1).length).toEqual(14);
  });

  test("has 91 combinations with 2 elements", () => {
    const set = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ];
    expect(combinations.k_combinations(set, 2).length).toEqual(91);
  });

  test("has one combination with 14 elements", () => {
    const set = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ];
    expect(combinations.k_combinations(set, 14).length).toEqual(1);
  });
});
