// 引入vue
import Vue from 'vue';
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'hello'
    },
    // 创建完毕
    created() {
        // 订阅一个消息
        this.$on('yxd', (msg, ...args) => {
            console.log('$on', args);
            this.msg = msg;
        })

        // 做一个异步的任务
        setTimeout(() => {
            // 触发
            this.$emit('yxd', 1, 2, 3, 4);
        }, 2000)
    },
    // 方法
    methods: {
        // 设置xxoo方法
        xxoo() {
            console.log('xxoo', arguments);
        }
    }
})