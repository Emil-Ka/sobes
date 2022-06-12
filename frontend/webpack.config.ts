import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "static/frontend"),
    filename: "main.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "import-glob-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  }
};

export default config;