const { ping } = require("../libs/discord");
describe("Discord", () => {
  it("Should verify called mock", () => {
    const mock = jest
      .fn()
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(7); // On lui demande de retourner une valeur differente à chaque fois que mock() sera appeler, et on lui fournit les valeurs qui seront retourner.
    mock();
    expect(mock).toHaveBeenCalled();
  });
  it("Should send a DM to a user", async () => {
    const channelMock = { send: jest.fn() };
    const createDMMock = jest.fn().mockResolvedValue(channelMock);
    const replyMock = jest.fn();
    const message = {
      delete: jest.fn().mockResolvedValue({}),
      author: {
        createDM: createDMMock,
      },
      reply: replyMock,
    };
    await ping(message);
    expect(message.delete).toHaveBeenCalled();
    // On s'attend à ce que la methode channelMock.send soit appeler avec comme paramètre  "pong"
    expect(channelMock.send).toHaveBeenCalledWith("pong");
  });
  it("Should reply to a user desactivated", async () => {
    const replyMock = jest.fn();
    const deleteMock = jest.fn().mockResolvedValue();
    const createDMMock = jest.fn().mockRejectedValue(replyMock);
    const message = {
      delete: deleteMock,
      reply: replyMock,
      author: { createDM: createDMMock },
    };
    await ping(message);
    expect(message.delete).toHaveBeenCalled();
    expect(message.reply).toHaveBeenCalledWith("Ping");
  });
});
