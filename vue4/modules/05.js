// 引入vue
import Vue from 'vue';

// 声明一个组件
const xuliya = Vue.extend({
    props: ['yxd'],
    // 模板
    template: '#child',
    // 模板
    data() {
        return {
            msg: 'xuliya'
        }
    },
    // 创建完毕
    created() {
        this.yxd(this.msg);
    },
    // 检测数据变化
    watch: {
        msg() {
            // 调用父组件的方法
            this.yxd(this.msg);
        }
    }
})

// 声明一个组件
const yxd = Vue.extend({
    props: ['msg'],
    // 模板
    template: '#tpl',
});
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
        xuliya,
        yxd
    },
    // 创建方法
    methods: {
        xxoo(msg) {
            this.msg = msg;
        }
    }

})