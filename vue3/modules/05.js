// 引入vue
import Vue from 'vue';

// 定义组件类
const yxd = Vue.extend({
    template: `
    <div>
    <h1>child</h1>
    <h2>{{title}}----{{name}}</h2>
    </div>
    `,
    data() {
        return {
            title: "斑码教育",
            name: 'child'
        }
    }
})

// 全局注册组件
Vue.component('yxd', yxd);

// 实例化对象
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'i love you',
    }
})