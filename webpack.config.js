"use strict";

const path = require("path"); // eslint-disable-line @typescript-eslint/no-require-imports

module.exports = {
  mode: "production",
  entry: "./client/ts/index.ts",
  output: {
    path: path.resolve(__dirname, "public/src"),
    filename: "build.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
