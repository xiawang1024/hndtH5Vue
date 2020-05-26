module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-preset-env"),
    require("postcss-pxtorem")({
      rootValue: 75,
      propList: ["*"],
      selectorBlackList: ["html"],
      minPixelValue: 1.5,
      mediaQuery: false,
      exclude: "common"
    }),
    require("cssnano")
  ]
};
