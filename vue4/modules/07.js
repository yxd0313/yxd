// 引入vue
import Vue from 'vue';

// 声明一个组件
const xuliya = Vue.extend({
    // 模板
    template: '#child',
    // 模型
    data() {
        return {
            msg: 'love',
            title: 'miss'
        }
    },
})
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'xuliya'
    },
    // 注册子组件
    components: {
        xuliya
    }
})