const {environment} = require('@rails')
const webpack = require("webpack")
environment.plugin.addend("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: "jquery",
  Popper:['popper.js', 'default']
}))
module.exports = environment