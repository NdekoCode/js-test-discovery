const axios = require("axios");
module.exports = {
  async getLastUserName() {
    const users = await axios.get("jsonplaceholder.typicode/users");
    return users.data[0].name;
  },
  async getLastUserNameFetch() {
    const users = await fetch("jsonplaceholder.typicode/users").then(
      (res) => res.json
    );
    return users.data[0].name;
  },
};
