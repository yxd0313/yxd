// 引入vue
import Vue from 'vue';

// 定义组件类
const child = Vue.extend({
    // 接收消息
    props: ['name', 'msg', 'parentMsg'],
    // 模板
    template: `
    <div>
    <h1>子组件</h1>
    <h2>{{$parent.msg}}</h2>
    <h3>{{title}}</h3>
    </div>
    `,
    data() {
        return {

        }
    },
    // 创建完毕
    created() {
        this.title = this.$parent.msg.toUpperCase();
    }
});

// 实例化对象
let app = new Vue({
    // 视图
    el:'#app',
    // 模型
    data:{
        msg:'i love you'
    },
    // 局部注册
    components:{
        child
    }
})