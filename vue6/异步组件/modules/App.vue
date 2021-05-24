<template>
  <div id="app">
    <h1>app i love {{ msg }}</h1>
    <hr />
    <child></child>
    <hr />
  </div>
</template>
<script>
// 引入组件
import Vue from "vue";
// 实现异步加载
Vue.component(
  "child",
  () =>
    new Promise((resolve, reject) => {
      // 使用settimeout实现
      setTimeout(() => {
        console.log("settimeout");
        resolve({
          template: "<h1>i miss you</h1>",
        });
      }, 2000);
    })
);
// 暴露默认接口
export default {
  // 数据
  data() {
    return {
      msg: "you",
    };
  },
};
</script>