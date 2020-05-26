module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/common/scss/_var.scss";@import "@/common/scss/_mixin.scss";@import "@/common/scss/_border.scss";`
      }
    }
  }
};
