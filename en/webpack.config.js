const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: {
        main: './js/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
            ],
            include: /\.module\.css$/,
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /\.module\.css$/,
          },
        ]
      },
    plugins: [
        new MiniCssExtractPlugin(),
      ],
    watch: true
};