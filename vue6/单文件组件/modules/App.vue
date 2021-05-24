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
import Child from "./Child";
// 暴露默认接口
export default {
  // 数据
  data() {
    return {
      msg: "you",
    }
  },
  // 注册组件
  components:{Child}
};
</script>