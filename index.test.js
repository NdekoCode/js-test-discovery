import { multiplyBy2 } from ".";
test("should return 0 if input is 0", () => {
  const result = multiplyBy2(0);
  expect(result).toBe(0);
});
