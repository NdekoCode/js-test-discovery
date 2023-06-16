const { add, multi } = require("../libs/functions");
test("Test addition", () => {
  const valueAdd = add(2, 5);
  expect(valueAdd).toBe(7);
});

// Scenario TEST
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
  //   test IF a method throw a exception
  test("Multiplication Error", () => {
    expect(() => multi(4, 0)).toThrow("Not divisible");
  });
});
describe("Test multiplication scenario", () => {
  it("Should make a Multiplication not null", () => {
    const valueMulti = multi(2, 2);
    expect(valueMulti).toBe(4);
  });
  it("Should make a null multiplication", () => {
    const valueMulti = multi(0, 5);
    expect(valueMulti).toBe(0);
  });
  it("Should do a neutral Multiplication", () => {
    const valueMulti = multi(2, 1);
    expect(valueMulti).toBe(2);
  });
  //   test IF a method throw a exception
  it("Shout trow a error in Multiplication", () => {
    expect(() => multi(4, 0)).toThrow("Not divisible");
  });
});
