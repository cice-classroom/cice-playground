const { override, addDecoratorsLegacy, addBabelPlugins } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),
  addBabelPlugins('babel-plugin-parameter-decorator')
)
