// 引入vue
import Vue from 'vue';

// 定义组件类
const yxd = Vue.extend({
    // 模板
    template: '#tpl',
    data() {
        return {
            title: '斑码教育',
            name: 'child'
        }
    }
});

const yyy = Vue.extend({
    // 模板
    template: `
    <h1>yyy</h1>
    `
})
// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'i love you',
        com: 'yxd'
    },
    // 局部注册
    components: {
        yxd,
        yyy
    },
    // 方法
    methods: {
        // 组件的切换
        toggle() {
            this.com = this.com == 'yxd' ? 'yyy' : 'yxd';
        }
    }
})