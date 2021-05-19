// 引入Vue
import Vue from 'vue';

// 全局过滤器
Vue.filter('toUpper', (str) => {
    str = String(str);
    // 必须有一个返回值
    return str.toUpperCase();
})
// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        title: 'hello world',
        msg: '哈哈哈'
    },
})
console.log(app);