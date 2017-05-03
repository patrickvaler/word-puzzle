import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';


module.exports = new WebpackConfig().merge({
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    context: path.join(__dirname, '/app'),
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
            }
        ],
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css?sourceMap!sass?sourceMap&sourceComments!sass-resources-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
            loader: 'url-loader?limit=300'
        },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},

            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.html$/,
                loader: 'raw'
            }, {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /node_modules/
            }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ],

    sassResources: path.join(__dirname, './app/config/sass-loader-config.scss')
});
