<template>
  <div class="home">
    <!-- 此处为固定宽高比示例 -->
    <div class="hd">
      <div class="hd-content">16 X 9</div>
    </div>

    <!-- 1px 边框 -->
    <div class="single-line">1px line</div>
    <div class="mult-line">1px line</div>
    <!-- 文字溢出单行隐藏 -->
    <div class="text-overflow-single">
      单行省略 Pixels are the easiest unit to use (opinion). The only issue with
      them is that they don't let browsers change the default font size of 16.
      This script converts every px value to a rem from the properties you
      choose to allow the browser to set the font size.
    </div>
    <div class="text-overflow-mult">
      多行省略 Pixels are the easiest unit to use (opinion). The only issue with
      them is that they don't let browsers change the default font size of 16.
      This script converts every px value to a rem from the properties you
      choose to allow the browser to set the font size.
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 750px;
  .hd {
    @include aspect-ratio($aspectX: 16, $aspectY: 9);
    .hd-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .single-line {
    width: 100%;
    text-align: center;
    @include border-single($color: #333);
  }

  .mult-line {
    margin: 60px auto;
    width: 640px;
    height: 90px;
    text-align: center;
    @include border($color: #333);
  }

  .text-overflow-single {
    font-size: 32px;
    @include text-overflow();
    @include border($direction: "bottom", $color: #333);
  }
  .text-overflow-mult {
    margin-top: 60px;
    text-align: left;
    font-size: 32px;
    line-height: 1.25;
    @include text-overflow($line: 3);
  }
}
</style>
