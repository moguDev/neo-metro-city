const postcss = require('postcss');

const cssToJson = (cssText) => {
  const root = postcss.parse(cssText);
  const rules = {};

  root.walkRules(rule => {
    const selector = rule.selector.trim();
    const properties = {};

    rule.walkDecls(decl => {
      properties[decl.prop] = decl.value.replace(/\s+/g, ' ').trim();
    });

    rules[selector] = properties;
  });

  return rules;
};

module.exports = cssToJson;