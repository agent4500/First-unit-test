import {
  findMissingNumber,
  mergeDistinctArrays,
  fibonacci,
  sortNestedArray,
  longestString,
  reverseSentenceWords,
  capitalizeWords,
  calculateExpression,
  getSumOfRandom,
  calculateAge
} from "./index";

test("findMissingNumber", () => {
  const result = findMissingNumber([1, 2, 4, 5]);
  expect(result).toBe(3);
});

test("mergeDistinctArrays", () => {
  const result = mergeDistinctArrays([1, 4, 3], [4, 5, 6, 7, 3, 5]);
  expect(result).toEqual([1, 4, 3, 5, 6, 7]);
});

test("fibonacci", () => {
  const result = fibonacci(10);
  expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("capitalizeWords", () => {
  const result = capitalizeWords("capitalize words of this sentence");
  expect(result).toBe("Capitalize Words Of This Sentence");
});

test("sortNestedArray", () => {
  const result = sortNestedArray([[3, 4, 1], [1, 2, 3], [4, 5, 6]]);
  expect(result).toEqual([[1, 2, 3], [3, 4, 1], [4, 5, 6]]);
});

test("reverseSentenceWords", () => {
  const result = reverseSentenceWords("This sentence is reversed");
  expect(result).toBe("reversed is sentence This");
});

test("longestString", () => {
  const result = longestString("abbbcabcdefef");
  expect(result).toBe("bcdef");
});

test("calculateExpression", () => {
  const result = calculateExpression("10+10*5");
  expect(result).toBe(60);
});

test("getSumOfRandom", () => {
  const spy = jest.spyOn(Math, "random")
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(0)
  .mockReturnValueOnce(0)
  .mockReturnValueOnce(1);
  const result = getSumOfRandom(3);
  expect(result).toBe(6);
  spy.mockRestore();
});

test("calculateAge", () => {
  const mockDate = new Date("2024-05-05");
  const spy = jest.spyOn(global, "Date").mockImplementation(() => mockDate);
  const result = calculateAge(22, 6, 1997);
  expect(result).toBe("You have 26 years, 10 Months and 12 days");
  spy.mockRestore();
});