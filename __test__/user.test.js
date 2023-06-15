const User = require("../libs/user");
const axios = require("axios");
jest.mock("axios");

describe("USER", () => {
  beforeEach(() => {
    axios.mockClear();
  });
  it("Should return the last user", async () => {
    axios.get.mockReturnValue({ data: [{ name: "ndekocode" }] });
    expect(await User.getLastUserName()).toBe("ndekocode");
  });

  it("Should return the last user with fetch", async () => {
    axios.get.mockReturnValue({ data: [{ name: "ndekocode" }] });
    expect(await User.getLastUserName()).toBe("ndekocode");
  });
});
