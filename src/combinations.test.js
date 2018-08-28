const combinations = require("./combinations");

test("returns no combination when set is not provided", () => {
  expect(combinations([], 0)).toEqual([]);
});

describe("calculating combinations for set [1, 2, 3]", () => {
  test("returns 3 combinations with 1 elements", () => {
    const set = [1, 2, 3];
    expect(combinations(set, 1)).toEqual([[1], [2], [3]]);
  });

  test("returns 3 combinations with 2 elements", () => {
    const set = [1, 2, 3];
    expect(combinations(set, 2)).toEqual([[1, 2], [1, 3], [2, 3]]);
  });

  test("returns one combination with 3 elements", () => {
    const set = [1, 2, 3];
    expect(combinations(set, 3)).toEqual([[1, 2, 3]]);
  });

  test("returns no combination with 4 elements", () => {
    const set = [1, 2, 3];
    expect(combinations(set, 4)).toEqual([]);
  });

  test("returns no combination with 0 elements", () => {
    const set = [1, 2, 3];
    expect(combinations(set, 0)).toEqual([]);
  });

  test("returns no combination with -1 elements", () => {
    const set = [1, 2, 3];
    expect(combinations(set, -1)).toEqual([]);
  });
});

describe("calculating combinations for set [a, b, c, d, e, f, g, h, i, j, k, l, m, n]", () => {
  test("returns 14 combinations with 1 element", () => {
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
    expect(combinations(set, 1).length).toEqual(14);
  });

  test("returns 91 combinations with 2 elements", () => {
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
    expect(combinations(set, 2).length).toEqual(91);
  });

  test("returns one combination with 14 elements", () => {
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
    expect(combinations(set, 14).length).toEqual(1);
  });
});
