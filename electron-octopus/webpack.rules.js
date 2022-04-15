const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = [
  
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules\/.+\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.js?/,
    include: APP_DIR,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  // {
  //   test: /\.(m?js|node)$/,
  //   parser: { amd: false },
  //   use: {
  //     loader: '@vercel/webpack-asset-relocator-loader',
  //     options: {
  //       outputAssetBase: 'native_modules',
  //     },
  //   },
  // },
  {
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|\.webpack)/,
      loader: "ts-loader",
  },
  {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader"],
  },
  {
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      use: ["file-loader"],
  },

];
