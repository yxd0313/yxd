<template>
  <div>
    <h1>this is {{ name }}</h1>
    <demo></demo>
  </div>
</template>

<script>
import Vue from "vue";
import Demo from "./Demo";
export default {
  data() {
    return {
      name: "child",
    };
  },
  // 注册组件
  components: { Demo },
};
</script>
