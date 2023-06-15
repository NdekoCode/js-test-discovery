const { sleep } = require("../libs/functions");
describe("Asyncronous test", () => {
  it("It should wait 3 second", async () => {
    const time = Date.now();
    await sleep(3);
    expect(Date.now() - time).toBeGreaterThanOrEqual(300);
  });
});
