const { add, multi } = require("../libs/functions");
test("Test addition", () => {
  const valueAdd = add(2, 5);
  expect(valueAdd).toBe(7);
});
test("Test multiplication", () => {
  const valueMulti = multi(2, 1);
  expect(valueMulti).toBe(4);
});
