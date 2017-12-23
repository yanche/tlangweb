
const path = require("path");

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "bundle.js"
  }
};
