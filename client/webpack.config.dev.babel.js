import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname,'/app/app.js'),
    vendor: ['angular','angular-ui-router', 'bootstrap-loader']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
});

