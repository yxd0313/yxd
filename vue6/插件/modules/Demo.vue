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
  mixins: [
    Dxz,
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
};
</script>

