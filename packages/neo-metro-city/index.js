const plugin = require("tailwindcss/plugin");
const fs = require("fs");
const path = require("path");
const cssToJson = require(path.join(__dirname, "functions/cssToJson"));
const keyframes = require(path.join(__dirname, "src/utilities/keyframes"));
const components = require(path.join(__dirname, "src/components/components"));

module.exports = plugin(({ addUtilities, addBase, addComponents }) => {
  addBase({
    ...cssToJson(
      fs.readFileSync(path.join(__dirname, "./src/base/reset.css"), "utf8")
    ),
  });

  addUtilities(
    {
      ...cssToJson(
        fs.readFileSync(
          path.join(__dirname, "./src/utilities/neon.css"),
          "utf8"
        )
      ),
      ...keyframes,
    },
    ["responsive", "hover"]
  );

  addComponents(components);
});

module.exports.applyEffectScript = fs.readFileSync(
  path.join(__dirname, "./functions/applyEffects.js"),
  "utf8"
);
