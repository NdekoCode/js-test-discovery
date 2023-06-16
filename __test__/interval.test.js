const { intervalToObj, refactorIntervalObj } = require("../libs/interval");
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
    const o = refactorIntervalObj(3 * 60 * 1000 + 15 * 1025);
    expect(o).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 3,
      seconds: 15,
    });
  });
  it("Should return one handle minute", () => {
    const o = refactorIntervalObj(60000);
    expect(o).toStrictEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it("Should handle an hour", () => {
    const o = refactorIntervalObj(
      12 * 60 * 60 * 1000 + 7 * 60 * 1000 + 5 * 1075 + 500
    );
    expect(o).toStrictEqual({
      days: 0,
      hours: 12,
      minutes: 7,
      seconds: 6,
    });
  });
  it("Should handle an hour", () => {
    const o = refactorIntervalObj(
      5 * 24 * 60 * 60 * 1000 +
        12 * 60 * 60 * 1000 +
        32 * 60 * 1000 +
        8 * 1075 +
        500
    );
    expect(o).toStrictEqual({
      days: 5,
      hours: 12,
      minutes: 32,
      seconds: 9,
    });
  });
});
