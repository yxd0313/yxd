// 引入Vue
import Vue from 'vue';

// 声明一个组件
const xuliya = Vue.extend({
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
            msg: 'xuliya'
        }
    },
    // 创建完毕
    created() {
        this.$parent.$emit('yxd', this.msg);
    }
})
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模板
    data: {
        msg: 'hello'
    },
    // 注册子组件
    components: {
        xuliya
    },
    // 创建完毕
    created() {
        // 订阅一个消息
        this.$on('yxd', (msg, ...args) => {
            console.log('$on', args);
            this.msg = msg;
        })
    }
})