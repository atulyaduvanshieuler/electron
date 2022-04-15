const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
        inject: true,
			hash: true,
			title: 'Euler | Octopus',
			// favicon: APP_DIR + '/assets/images/favicon.svg',
			template: APP_DIR + '/index.html',
			minify: {
				html5: true,
				// minifyJS: !isDev,
				// collapseWhitespace: !isDev,
				// minifyCSS: !isDev,
				removeEmptyAttributes: true,
				// removeComments: !isDev
			},
			cache: true
    }),
    new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom'
    }),
];
