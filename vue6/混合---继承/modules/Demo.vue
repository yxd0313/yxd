// 模板
<template>
  <div>
    <h1>i love {{ name }}---{{ ddd }}</h1>
  </div>
</template>

// 脚本
<script>
import Dxz from "./Dxz";
export default {
  // 局部的混合
  mixins: [Dxz,
    {
      data() {
        return {
          ddd: "123",
        };
      },
    },
  ],
  data() {
    return {
      ddd: "456",
    };
  },
  created(){
    console.log('this is demo')
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
