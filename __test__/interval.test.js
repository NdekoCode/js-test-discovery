const { intervalToObj } = require("../libs/interval");
describe("Timer", () => {
  it("Should return an object for 0 second", () => {
    const o = intervalToObj(0);
    expect(o).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
  it("Should return an object of 3 second", () => {
    const o = intervalToObj(3 * 1025);
    expect(o).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 3,
    });
  });

  it("Should handle minutes", () => {
    const o = intervalToObj(3 * 60 * 1000 + 15 * 1025);
    expect(o).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 3,
      seconds: 15,
    });
  });
  it("Should return one handle minute", () => {
    const o = intervalToObj(60000);
    expect(o).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });
});
