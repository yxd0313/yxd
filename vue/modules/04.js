// 引入Vue
import Vue from 'vue';
import './04.scss';

// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        title: '<b>hello EveryBodys</b>'
    }
})

setTimeout(() => {
    app.title = 'don’t love me';
}, 2000)