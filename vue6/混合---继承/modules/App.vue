<template>
  <div id="app">
    <h1>app i love {{ msg }}</h1>
    <hr />
    <child></child>
    <hr />
    <demo></demo>
    <hr />
  </div>
</template>
<script>
// 引入组件
import Child from "./Child";
import Demo from "./Demo";
// 暴露默认接口
export default {
  // 数据
  data() {
    return {
      
    }
  },
  created(){
    console.log('this is created');
    console.log(this.xxoo);
  },
  // 注册组件
  components:{Child,Demo}
};
</script>