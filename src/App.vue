<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
    name: 'App'
  };
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import "./styles/normalize.css";

  .vux-toast,
  .vux-alert,
  .vux-confirm,
  .vux-loading
  {
    font-size: 16px;
  }
</style>
