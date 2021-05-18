// 引入vue
import Vue from 'vue';

// 定义组件类
const xuliya = Vue.extend({
    // 模板
    template: `
    <div>
        <input type="text" v-model="msg">
        <h1>子组件</h1>
        <h2>{{msg}}</h2>
    </div>
    `,
    data() {
        return {
            msg: 'xuliya msg'
        }
    },
    // 创建完毕
    created() {
        // 触发父组件的自定义事件
        this.$parent.$emit('yxd', this.msg, '子组件内容', 'xxoo');
    },
    // 数据监测
    watch: {
        msg(value) {
            console.log(value);
            this.$parent.$emit('yxd', this.msg)
        }
    }
});

// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: ''
    },
    // 局部注册组件
    components: {
        xuliya,
    },
    created() {
        console.log(this);
        // 添加自定义事件
        this.$on('yxd', (msg, ...args) => {
            this.msg = msg;
        })
    },
    methods:{
        demo(){
            console.log(123456);
            console.log(arguments);
        }
    }
})