const {environment} = require("@rails/webpacker");

module.exports = environment;
// code-info
// importやrequireなしで$、BootstrapのJavaScriptを使う設定
const webpack = require("webpack");
environment.plugins.append(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    Popper: ["popper.js", "default"]
  })
);
