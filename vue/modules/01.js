import * as Demo from './demo';
import './xxoo.less';
import Vue from 'vue';
console.log(Vue);
// 获得app
let app = new Vue({
    // 绑定视图
    el: '#app',
    // 绑定数据
    data: {
        title: 'es6-vue'
    }
})