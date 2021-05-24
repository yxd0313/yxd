// 模板
<template>
  <div>
    <h1>i love {{ name }}</h1>
  </div>
</template>
// 脚本
<script>
export default {
  // 数据
  data() {
    return {
      name: "you",
      ddd:'forever'
    };
  },
  created(){
      console.log('this is dxzcreated',this.$http);
  }
};
</script>
<style lang="scss" scoped>
$color: blue;
h1 {
  color: $color;
  &:hover {
    color: red;
  }
}
</style>
