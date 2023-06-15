module.exports = {
  add(a, b) {
    return a + b;
  },
  multi(a, b) {
    if (
      b === 0 ||
      a === undefined ||
      b === undefined ||
      typeof a !== "number" ||
      typeof b !== "number"
    ) {
      throw new Error("Not divisible");
    }
    return a * b;
  },
};
