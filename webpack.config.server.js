const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (env, argv) => {
  /** @type {'development'|'production'|'none'} */
  const mode = (env && env.development) || argv.mode === 'development' ? 'development' : 'production';

  const devMode = mode === 'development';

  /** @type {Object<string, *>} */
  const postcssOptions = {
    plugins: [autoprefixer],
  };

  if (!devMode)
    postcssOptions.plugins.push(
      cssnano({
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
          },
        ],
      })
    );

  /** @type {webpack.RuleSetRule} */
  const postcssLoader = {
    loader: 'postcss-loader',
    options: { postcssOptions },
  };

  return {
    entry: './server/index.tsx',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve('server-build'),
      filename: 'index.js',
    },
    mode,
    stats: {
      all: undefined,
      assets: true,
      assetsSort: 'name',
      children: false,
      entrypoints: false,
      modules: false,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          use: 'babel-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', postcssLoader, 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: assetPath => {
                  if (!/node_modules/.test(assetPath)) return 'static/media/[name].[ext]';

                  return (
                    'static/media/vendor/' +
                    assetPath.replace(/\\/g, '/').replace(/((.*(node_modules))|images|image|img|assets|dist)\//g, '')
                  );
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/[name].[contenthash].css',
      }),
    ],
  };
};
