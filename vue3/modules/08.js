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
    },

    // 创建
    beforeCreate() {
        console.log(1, 'beforeCreate');
    },
    created() {
        console.log(2, 'created');
    },
    beforeMount() {
        console.log(3, 'beforeMount');
    },
    mounted() {
        console.log(4, 'mounted');
    },
    // 存在
    beforeUpdate() {
        console.log(5, 'beforeUpdate');
    },
    updated() {
        console.log(6, 'updated');
    },
    // 销毁
    beforeDestroy() {
        console.log(7, 'beforeDestroy');
    },
    destroyed() {
        console.log(8, 'destroyed');
    }
});

const yyy = Vue.extend({
    // 模板
    template: `
    <h1>yyyy</h1>
    `
})
// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'i love you',
        com: 'dddd'
    },
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