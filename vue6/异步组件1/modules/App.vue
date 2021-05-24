<template>
  <div id="app">
    <h1>app i love {{ msg }}</h1>
    <hr />
    <xxoo></xxoo>
    <hr />
  </div>
</template>
<script>

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