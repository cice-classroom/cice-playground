const { override, addDecoratorsLegacy, addBabelPlugin } = require('customize-cra')

module.exports = override(addDecoratorsLegacy(), addBabelPlugin('babel-plugin-parameter-decorator'))
