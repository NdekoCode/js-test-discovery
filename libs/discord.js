module.exports = {
  /**
   * @author NdekoCode
   * @param {module:discord.js/message} message
   */
  async ping(message) {
    message.delete().catch(console.error);
    return message.author
      .createDM()
      .then((ch) => ch.send("pong"))
      .catch(() => {
        message.reply("Ping");
      });
  },
};
