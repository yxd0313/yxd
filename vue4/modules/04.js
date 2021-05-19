// 引入vue
import Vue from 'vue';

// 声明一个组件
const xuliya = Vue.extend({
    props: ['yxd'],
    // 模板
    template: `
    <div>
    <h1>xuliya 666</h1>
    <h2>{{msg}}</h2>
    </div>
    `,
    // 模型
    data() {
        return {
            msg: 'xuliya 666'
        }
    },
    // 创建完毕
    created() {
        this.demo(this.msg);
    }
})
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: "xuliya"
    },
    // 注册子组件
    components: {
        xuliya
    },
    // 创建方法
    methods: {
        xxoo(msg) {
            console.log('xxoo', arguments);
            this.msg = msg;
        }
    }
})