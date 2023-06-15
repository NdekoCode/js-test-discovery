const { add, multi } = require("../libs/functions");
test("Test addition", () => {
  const valueAdd = add(2, 5);
  expect(valueAdd).toBe(7);
});
describe("Test multiplication scenario", () => {
  test("Multiplication not null", () => {
    const valueMulti = multi(2, 2);
    expect(valueMulti).toBe(4);
  });
  test("Multiplication is Null", () => {
    const valueMulti = multi(0, 5);
    expect(valueMulti).toBe(0);
  });
  test("Multiplication is neutral", () => {
    const valueMulti = multi(2, 1);
    expect(valueMulti).toBe(2);
  });
  test("Multiplication Error", () => {
    expect(() => multi(4, 0)).toThrow("Not divisible");
  });
});
