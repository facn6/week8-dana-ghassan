const app = require("./app.js");
require("env2")("./config.env");

app.listen(app.get("port"), () => {
  console.log(`Our app is running on`, app.get("port"));
});
