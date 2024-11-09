import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: './bin/server/server',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  // Добавьте это, чтобы Webpack знал, как запускать TS-конфиг:
  resolveLoader: {
    modules: ['node_modules'],
  },
  optimization: {
    minimize: false, // Обычно для серверных приложений минификацию отключают
  },
  stats: {
    errorDetails: true,
  }
};