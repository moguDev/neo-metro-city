const fs = require("fs");
const path = require("path");
const cssToJson = require("../../functions/cssToJson");

const componentsDir = __dirname;
const components = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith(".css"))
  .reduce((styles, file) => {
    return {
      ...styles,
      ...cssToJson(fs.readFileSync(path.join(componentsDir, file), "utf8")),
    };
  }, {});

module.exports = components;
