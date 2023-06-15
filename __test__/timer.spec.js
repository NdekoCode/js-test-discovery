const { sleep } = require("../libs/functions");
describe("Asyncronous test", () => {
  // Ce test sera sauter donc ignorer
  it.concurrent("It should wait 3 second", async () => {
    const time = Date.now();
    await sleep(3);
    expect(Date.now() - time).toBeGreaterThanOrEqual(300);
  });
  //   Seul ce test sera executer
  it.only("It should wait 2 second", async () => {
    const time = Date.now();
    await sleep(2);
    expect(Date.now() - time).toBeGreaterThanOrEqual(300);
  });
});
