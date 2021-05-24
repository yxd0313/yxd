// 模板
<template>
  <div>
    <h1>this is {{ name }}</h1>
  </div>
</template>

// 脚本
<script>
export default {
  data() {
    return {
      name: "&demo&",
    };
  },
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
