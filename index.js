const app = require("./app");
require("dotenv").config();

const { RUNNING_PORT } = process.env;
app.listen(RUNNING_PORT, function () {
  console.log(`App is running @${RUNNING_PORT} Port`);
});
